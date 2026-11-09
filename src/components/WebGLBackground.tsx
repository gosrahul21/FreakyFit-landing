"use client";
import { useEffect, useRef } from 'react';

export default function WebGLBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    function syncSize() {
      const w = canvas?.clientWidth || 1280;
      const h = canvas?.clientHeight || 720;
      if (canvas && (canvas.width !== w || canvas.height !== h)) {
        canvas.width = w;
        canvas.height = h;
      }
    }
    
    let observer: ResizeObserver;
    if (typeof ResizeObserver !== 'undefined') {
      observer = new ResizeObserver(syncSize);
      observer.observe(canvas);
    }
    syncSize();

    const gl = canvas.getContext('webgl') || canvas.getContext('experimental-webgl');
    if (!gl) return;
    
    const glCtx = gl as WebGLRenderingContext;

    const vs = `attribute vec2 a_position;
varying vec2 v_texCoord;
void main() {
  v_texCoord = a_position * 0.5 + 0.5;
  gl_Position = vec4(a_position, 0.0, 1.0);
}`;

    const fs = `precision highp float;

uniform float u_time;
uniform vec2 u_resolution;
uniform vec2 u_mouse;
uniform float u_theme;

vec3 mod289(vec3 x) { return x - floor(x * (1.0 / 289.0)) * 289.0; }
vec2 mod289(vec2 x) { return x - floor(x * (1.0 / 289.0)) * 289.0; }
vec3 permute(vec3 x) { return mod289(((x*34.0)+1.0)*x); }

float snoise(vec2 v) {
    const vec4 C = vec4(0.211324865405187,
                        0.366025403784439,
                        -0.577350269189626,
                        0.024390243902439);
    vec2 i  = floor(v + dot(v, C.yy) );
    vec2 x0 = v -   i + dot(i, C.xx);
    vec2 i1;
    i1 = (x0.x > x0.y) ? vec2(1.0, 0.0) : vec2(0.0, 1.0);
    vec4 x12 = x0.xyxy + C.xxzz;
    x12.xy -= i1;
    i = mod289(i);
    vec3 p = permute( permute( i.y + vec3(0.0, i1.y, 1.0 ))
        + i.x + vec3(0.0, i1.x, 1.0 ));
    vec3 m = max(0.5 - vec3(dot(x0,x0), dot(x12.xy,x12.xy), dot(x12.zw,x12.zw)), 0.0);
    m = m*m ;
    m = m*m ;
    vec3 x = 2.0 * fract(p * C.www) - 1.0;
    vec3 h = abs(x) - 0.5;
    vec3 ox = floor(x + 0.5);
    vec3 a0 = x - ox;
    m *= 1.79284291400159 - 0.85373472095314 * ( a0*a0 + h*h );
    vec3 g;
    g.x  = a0.x  * x0.x  + h.x  * x0.y;
    g.yz = a0.yz * x12.xz + h.yz * x12.yw;
    return 130.0 * dot(m, g);
}

void main() {
    vec2 uv = gl_FragCoord.xy / u_resolution.xy;
    vec2 mouse = u_mouse / u_resolution.xy;
    if (mouse.x <= 0.0 && mouse.y <= 0.0) {
        mouse = vec2(0.5, 0.5);
    }
    
    vec2 p = (gl_FragCoord.xy - 0.5 * u_resolution.xy) / min(u_resolution.y, u_resolution.x);
    float t = u_time * 0.35;
    
    float n1 = snoise(p * 2.2 + vec2(t * 0.2, -t * 0.15));
    float n2 = snoise(p * 4.0 - vec2(t * 0.1, t * 0.3) + n1 * 0.5);
    
    vec2 mouseP = (u_mouse - 0.5 * u_resolution.xy) / min(u_resolution.y, u_resolution.x);
    float distMouse = length(p - mouseP);
    float mouseWave = sin(distMouse * 14.0 - u_time * 2.5) * exp(-distMouse * 2.8) * 0.25;

    float field = sin(p.x * 3.5 + n1 * 1.5 + t) * cos(p.y * 3.0 + n2 * 1.2 - t * 0.8);
    field += mouseWave;

    // Dark Mode Palette
    vec3 cBgDark = vec3(0.043, 0.059, 0.055);
    vec3 cDarkEmeraldDark = vec3(0.063, 0.141, 0.102);
    vec3 cTealGlowDark = vec3(0.09, 0.26, 0.19);
    vec3 cAccentDark = vec3(0.768, 0.972, 0.165);

    // Light Mode Palette
    vec3 cBgLight = vec3(0.972, 0.98, 0.988);
    vec3 cDarkEmeraldLight = vec3(0.93, 0.95, 0.98);
    vec3 cTealGlowLight = vec3(1.0, 0.92, 0.86);
    vec3 cAccentLight = vec3(1.0, 0.42, 0.12);

    vec3 cBg = mix(cBgDark, cBgLight, u_theme);
    vec3 cDarkEmerald = mix(cDarkEmeraldDark, cDarkEmeraldLight, u_theme);
    vec3 cTealGlow = mix(cTealGlowDark, cTealGlowLight, u_theme);
    vec3 cAccent = mix(cAccentDark, cAccentLight, u_theme);

    float glowMask = smoothstep(-0.4, 0.9, field);
    vec3 col = mix(cBg, cDarkEmerald, glowMask * (u_theme > 0.5 ? 0.45 : 0.7));
    
    float ribbon = pow(max(0.0, sin(p.y * 5.0 + n2 * 3.0 + t * 0.7)), 8.0);
    col = mix(col, cTealGlow, ribbon * (u_theme > 0.5 ? 0.35 : 0.6));

    float lineGlow = smoothstep(0.85, 0.98, sin(n1 * 4.0 + p.x * 2.0 + t));
    col += cAccent * lineGlow * (u_theme > 0.5 ? 0.14 : 0.28) * (1.0 - length(p * 0.8));

    float vignette = 1.0 - smoothstep(0.4, 1.4, length(p));
    if (u_theme > 0.5) {
      col = mix(cBgLight, col, vignette * 0.7 + 0.3);
    } else {
      col *= (vignette * 0.85 + 0.15);
      float grain = fract(sin(dot(gl_FragCoord.xy, vec2(12.9898, 78.233))) * 43758.5453) * 0.02;
      col += vec3(grain);
    }

    gl_FragColor = vec4(col, 1.0);
}`;

    function cs(type: number, src: string) {
      const s = glCtx.createShader(type);
      if(!s) return null;
      glCtx.shaderSource(s, src);
      glCtx.compileShader(s);
      return s;
    }
    const prog = glCtx.createProgram();
    if(!prog) return;
    
    const vShader = cs(glCtx.VERTEX_SHADER, vs);
    const fShader = cs(glCtx.FRAGMENT_SHADER, fs);
    if(vShader) glCtx.attachShader(prog, vShader);
    if(fShader) glCtx.attachShader(prog, fShader);
    
    glCtx.linkProgram(prog);
    glCtx.useProgram(prog);
    const buf = glCtx.createBuffer();
    glCtx.bindBuffer(glCtx.ARRAY_BUFFER, buf);
    glCtx.bufferData(glCtx.ARRAY_BUFFER, new Float32Array([-1,-1, 1,-1, -1,1, 1,1]), glCtx.STATIC_DRAW);
    const pos = glCtx.getAttribLocation(prog, 'a_position');
    glCtx.enableVertexAttribArray(pos);
    glCtx.vertexAttribPointer(pos, 2, glCtx.FLOAT, false, 0, 0);
    
    const uTime = glCtx.getUniformLocation(prog, 'u_time');
    const uRes = glCtx.getUniformLocation(prog, 'u_resolution');
    const uMouse = glCtx.getUniformLocation(prog, 'u_mouse');
    const uTheme = glCtx.getUniformLocation(prog, 'u_theme');

    const mouse = { x: canvas.width / 2, y: canvas.height / 2 };
    
    const onMouseMove = (event: MouseEvent) => {
      if (!canvas) return;
      const rect = canvas.getBoundingClientRect();
      if (rect.width && rect.height) {
        const nx = (event.clientX - rect.left) / rect.width;
        const ny = 1.0 - (event.clientY - rect.top) / rect.height;
        mouse.x = nx * canvas.width;
        mouse.y = ny * canvas.height;
      }
    };
    window.addEventListener('mousemove', onMouseMove);

    let animationId: number;
    function render(t: number) {
      if (!canvas) return;
      if (typeof ResizeObserver === 'undefined') syncSize();
      glCtx.viewport(0, 0, canvas.width, canvas.height);
      if (uTime) glCtx.uniform1f(uTime, t * 0.001);
      if (uRes) glCtx.uniform2f(uRes, canvas.width, canvas.height);
      if (uMouse) glCtx.uniform2f(uMouse, mouse.x, mouse.y);
      if (uTheme) {
        const isLight = document.documentElement.classList.contains('light');
        glCtx.uniform1f(uTheme, isLight ? 1.0 : 0.0);
      }
      glCtx.drawArrays(glCtx.TRIANGLE_STRIP, 0, 4);
      animationId = requestAnimationFrame(render);
    }
    render(0);

    return () => {
      window.removeEventListener('mousemove', onMouseMove);
      cancelAnimationFrame(animationId);
      if(observer) observer.disconnect();
    };
  }, []);

  return (
    <canvas 
      ref={canvasRef}
      style={{display: "block", width: "100%", height: "100%"}} 
      width="1280" 
      height="1100"
    />
  );
}
