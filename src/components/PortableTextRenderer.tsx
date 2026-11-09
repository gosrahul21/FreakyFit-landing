"use client";

import { PortableText, PortableTextComponents } from "@portabletext/react";
import React from "react";
import { urlFor } from "@/lib/sanity";
import FAQAccordion from "@/components/FAQAccordion";

// Helper to extract clean plain text from react children
// eslint-disable-next-line @typescript-eslint/no-explicit-any
function getPlainText(children: any): string {
  if (typeof children === "string") return children;
  if (Array.isArray(children)) return children.map(getPlainText).join("");
  if (children && typeof children === "object" && children.props?.text) {
    return children.props.text;
  }
  if (children && typeof children === "object" && children.props?.children) {
    return getPlainText(children.props.children);
  }
  return "";
}

function slugify(text: string): string {
  return text
    .toString()
    .toLowerCase()
    .trim()
    .replace(/\s+/g, "-")
    .replace(/[^\w-]+/g, "")
    .replace(/--+/g, "-");
}

// Components matching TrueMind Labs Sanity custom schema types
const components: PortableTextComponents = {
  block: {
    h2: ({ children }) => {
      const text = getPlainText(children);
      const id = slugify(text);
      return (
        <h2
          id={id}
          className="font-display font-extrabold text-2xl sm:text-3xl text-slate-900 dark:text-white mt-12 mb-4 scroll-mt-28 flex items-center group"
        >
          <span>{children}</span>
          <a
            href={`#${id}`}
            aria-label="Anchor link"
            className="ml-2 opacity-0 group-hover:opacity-100 text-[#FF5E1A] transition-opacity"
          >
            #
          </a>
        </h2>
      );
    },
    h3: ({ children }) => {
      const text = getPlainText(children);
      const id = slugify(text);
      return (
        <h3
          id={id}
          className="font-display font-bold text-xl sm:text-2xl text-slate-900 dark:text-white mt-8 mb-3 scroll-mt-28"
        >
          {children}
        </h3>
      );
    },
    h4: ({ children }) => (
      <h4 className="font-display font-bold text-lg text-slate-900 dark:text-white mt-6 mb-2">
        {children}
      </h4>
    ),
    normal: ({ children }) => (
      <p className="text-base sm:text-lg text-slate-700 dark:text-gray-300 leading-relaxed mb-6 font-normal">
        {children}
      </p>
    ),
    blockquote: ({ children }) => (
      <blockquote className="border-l-4 border-[#FF5E1A] pl-5 py-2 my-6 italic text-slate-800 dark:text-gray-200 bg-orange-50/50 dark:bg-zinc-900/40 rounded-r-xl">
        {children}
      </blockquote>
    ),
  },
  list: {
    bullet: ({ children }) => (
      <ul className="list-disc pl-6 space-y-2.5 text-base sm:text-lg text-slate-700 dark:text-gray-300 mb-6 marker:text-[#FF5E1A]">
        {children}
      </ul>
    ),
    number: ({ children }) => (
      <ol className="list-decimal pl-6 space-y-2.5 text-base sm:text-lg text-slate-700 dark:text-gray-300 mb-6 marker:font-bold marker:text-[#FF5E1A]">
        {children}
      </ol>
    ),
  },
  marks: {
    strong: ({ children }) => (
      <strong className="font-bold text-slate-900 dark:text-white">
        {children}
      </strong>
    ),
    em: ({ children }) => <em className="italic">{children}</em>,
    highlight: ({ children }) => (
      <mark className="bg-amber-300/60 dark:bg-amber-400/25 text-slate-900 dark:text-amber-200 px-1 py-0.5 rounded font-medium">
        {children}
      </mark>
    ),
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    textColor: ({ value, children }: any) => (
      <span style={{ color: value?.value }}>{children}</span>
    ),
    link: ({ value, children }) => {
      const target = (value?.href || "").startsWith("http")
        ? "_blank"
        : undefined;
      return (
        <a
          href={value?.href}
          target={target}
          rel={target ? "noopener noreferrer" : undefined}
          className="text-[#FF5E1A] hover:underline font-medium underline-offset-2"
        >
          {children}
        </a>
      );
    },
    code: ({ children }) => (
      <code className="px-1.5 py-0.5 rounded bg-slate-100 dark:bg-zinc-800 text-slate-900 dark:text-amber-300 text-sm font-mono border border-slate-200 dark:border-zinc-700">
        {children}
      </code>
    ),
  },
  types: {
    // TrueMind Labs Editorial Callout
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    callout: ({ value }: any) => {
      if (!value?.content) return null;
      const tone = value.tone || "takeaway";
      const toneMap: Record<
        string,
        { border: string; bg: string; text: string; icon: string; title: string }
      > = {
        takeaway: {
          border: "border-[#FF5E1A]",
          bg: "bg-orange-50/70 dark:bg-orange-950/20",
          text: "text-slate-900 dark:text-orange-100",
          icon: "💡",
          title: "Key Takeaway",
        },
        tip: {
          border: "border-emerald-500",
          bg: "bg-emerald-50/70 dark:bg-emerald-950/20",
          text: "text-slate-900 dark:text-emerald-100",
          icon: "✅",
          title: "Pro Tip",
        },
        warning: {
          border: "border-amber-500",
          bg: "bg-amber-50/70 dark:bg-amber-950/20",
          text: "text-slate-900 dark:text-amber-100",
          icon: "⚠️",
          title: "Warning",
        },
        stat: {
          border: "border-sky-500",
          bg: "bg-sky-50/70 dark:bg-sky-950/20",
          text: "text-slate-900 dark:text-sky-100",
          icon: "📊",
          title: "Key Metric",
        },
        quote: {
          border: "border-purple-500",
          bg: "bg-purple-50/70 dark:bg-purple-950/20",
          text: "text-slate-900 dark:text-purple-100",
          icon: "💬",
          title: "Case Study / Quote",
        },
      };

      const style = toneMap[tone] || toneMap.takeaway;

      return (
        <aside
          className={`my-8 p-6 rounded-2xl border-l-4 shadow-sm backdrop-blur-sm ${style.border} ${style.bg} ${style.text}`}
        >
          <div className="flex items-center gap-2 mb-2 font-display font-bold text-sm sm:text-base tracking-wide">
            <span className="text-xl">{style.icon}</span>
            <span className="text-slate-900 dark:text-white font-extrabold">
              {value.title || style.title}
            </span>
          </div>
          <div className="text-sm sm:text-base leading-relaxed opacity-95 whitespace-pre-line font-normal text-slate-700 dark:text-slate-200">
            {value.content}
          </div>
        </aside>
      );
    },

    // TrueMind Labs YouTube Embed
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    youtube: ({ value }: any) => {
      if (!value?.url) return null;
      let embedUrl = value.url;
      if (embedUrl.includes("youtube.com/shorts/")) {
        embedUrl = embedUrl.replace("youtube.com/shorts/", "youtube.com/embed/");
      } else if (embedUrl.includes("watch?v=")) {
        embedUrl = embedUrl.replace("watch?v=", "embed/");
      } else if (embedUrl.includes("youtu.be/")) {
        embedUrl = embedUrl.replace("youtu.be/", "youtube.com/embed/");
      }

      return (
        <figure className="my-8">
          <div className="w-full aspect-video rounded-2xl overflow-hidden shadow-lg bg-black border border-slate-200 dark:border-white/10">
            <iframe
              src={embedUrl}
              title={value.title || "YouTube Video"}
              className="w-full h-full"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>
          {(value.title || value.caption) && (
            <figcaption className="mt-3 text-center text-xs md:text-sm text-slate-500 dark:text-gray-400">
              <span className="font-semibold text-slate-800 dark:text-gray-200">
                {value.title}
              </span>
              {value.caption && ` — ${value.caption}`}
            </figcaption>
          )}
        </figure>
      );
    },

    // TrueMind Labs FAQ Accordion
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    faq: ({ value }: any) => {
      if (!value?.items || !Array.isArray(value.items) || value.items.length === 0) {
        return null;
      }
      return (
        <section className="my-10">
          <FAQAccordion
            title={value.title || "Frequently asked questions"}
            badge="FAQ"
            items={value.items}
            defaultOpenIndex={0}
          />
        </section>
      );
    },

    // TrueMind Labs Table Block
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    table: ({ value }: any) => {
      if (!value?.rows || !Array.isArray(value.rows) || value.rows.length === 0) {
        return null;
      }
      const [headerRow, ...bodyRows] = value.rows;
      return (
        <div className="my-8 overflow-x-auto rounded-2xl border border-slate-200 dark:border-white/10 shadow-sm">
          <table className="min-w-full divide-y divide-slate-200 dark:divide-white/10 text-left text-sm">
            {headerRow?.cells && (
              <thead className="bg-slate-100/90 dark:bg-zinc-800/90">
                <tr>
                  {headerRow.cells.map((cell: string, idx: number) => (
                    <th
                      key={idx}
                      className="px-4 py-3 font-display font-bold text-slate-900 dark:text-white"
                    >
                      {cell}
                    </th>
                  ))}
                </tr>
              </thead>
            )}
            <tbody className="divide-y divide-slate-200 dark:divide-white/10 bg-white dark:bg-zinc-900">
              {/* eslint-disable-next-line @typescript-eslint/no-explicit-any */}
              {bodyRows.map((row: any, rIdx: number) => (
                <tr
                  key={row._key || rIdx}
                  className="hover:bg-slate-50 dark:hover:bg-zinc-800/50 transition"
                >
                  {row.cells?.map((cell: string, cIdx: number) => (
                    <td
                      key={cIdx}
                      className="px-4 py-3 text-slate-700 dark:text-gray-300 whitespace-pre-line"
                    >
                      {cell}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      );
    },

    // Sanity Image
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    image: ({ value }: any) => {
      const imgUrl = value?.asset?._ref
        ? urlFor(value)
        : value?.asset?.url || value?.url;
      if (!imgUrl) return null;
      return (
        <figure className="my-8">
          <div className="w-full h-auto rounded-2xl overflow-hidden shadow-lg border border-slate-200 dark:border-white/10">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={imgUrl}
              alt={value.alt || "Article illustration"}
              loading="lazy"
              className="w-full h-auto object-cover"
            />
          </div>
          {value.caption && (
            <figcaption className="text-center text-xs text-slate-500 dark:text-gray-400 mt-2">
              {value.caption}
            </figcaption>
          )}
        </figure>
      );
    },
  },
};

interface BlockChild {
  _type?: string;
  text?: string;
}

interface PortableBlock {
  _type?: string;
  _key?: string;
  style?: string;
  children?: BlockChild[];
  [key: string]: unknown;
}

// Preprocess PortableText blocks: automatically bundle h2 (FAQ) followed by h3/h4 questions into a structured 'faq' block
function preprocessPortableTextBlocks(blocks: PortableBlock[]): PortableBlock[] {
  if (!Array.isArray(blocks) || blocks.length === 0) return blocks;

  const result: PortableBlock[] = [];
  let i = 0;

  while (i < blocks.length) {
    const block = blocks[i];
    const isBlockH2 = block._type === "block" && block.style === "h2";
    const text = block.children?.map((c) => c.text || "").join("").trim() || "";
    const isFAQHeading =
      isBlockH2 &&
      /frequently asked questions|faq|अक्सर पूछे जाने वाले सवाल|sıkça sorulan sorular|preguntas frecuentes|questions fréquentes|häufig gestellte fragen/i.test(
        text
      );

    if (isFAQHeading) {
      const faqTitle = text;
      const faqItems: { question: string; answer: string }[] = [];
      i++; // skip the h2 heading block

      let currentQuestion = "";
      let currentAnswerBlocks: PortableBlock[] = [];

      const flushCurrentItem = () => {
        if (currentQuestion) {
          const answerText = currentAnswerBlocks
            .map((b) => b.children?.map((c) => c.text || "").join("") || "")
            .filter(Boolean)
            .join("\n\n");
          faqItems.push({
            question: currentQuestion,
            answer: answerText || "",
          });
        }
        currentQuestion = "";
        currentAnswerBlocks = [];
      };

      while (i < blocks.length) {
        const nextBlock = blocks[i];
        const nextText =
          nextBlock.children?.map((c) => c.text || "").join("").trim() || "";

        // Stop if we encounter another major heading (h2) or a horizontal divider
        if (
          nextBlock._type === "block" &&
          (nextBlock.style === "h2" || nextText === "---")
        ) {
          if (nextText === "---") i++; // consume divider
          break;
        }

        if (
          nextBlock._type === "block" &&
          (nextBlock.style === "h3" || nextBlock.style === "h4")
        ) {
          flushCurrentItem();
          currentQuestion = nextText;
        } else {
          currentAnswerBlocks.push(nextBlock);
        }
        i++;
      }

      flushCurrentItem();

      if (faqItems.length > 0) {
        result.push({
          _type: "faq",
          _key: block._key || `faq-${i}`,
          title: faqTitle,
          items: faqItems,
        });
      }
      continue;
    }

    result.push(block);
    i++;
  }

  return result;
}

interface PortableTextRendererProps {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  value?: any;
  rawContent?: string;
}

export default function PortableTextRenderer({
  value,
  rawContent,
}: PortableTextRendererProps) {
  if (value && Array.isArray(value) && value.length > 0) {
    const processedValue = preprocessPortableTextBlocks(value);
    return (
      <div className="prose-content">
        <PortableText value={processedValue} components={components} />
      </div>
    );
  }

  // Fallback: render rawContent (markdown-like blocks)
  if (rawContent) {
    const lines = rawContent.trim().split("\n");
    const elements: React.ReactNode[] = [];
    let listBuffer: string[] = [];
    let isOrderedList = false;

    const flushList = () => {
      if (listBuffer.length === 0) return;
      if (isOrderedList) {
        elements.push(
          <ol
            key={`ol-${elements.length}`}
            className="list-decimal pl-6 space-y-2.5 text-base sm:text-lg text-slate-700 dark:text-gray-300 mb-6 marker:font-bold marker:text-[#FF5E1A]"
          >
            {listBuffer.map((item, idx) => (
              <li key={idx}>{renderFormattedInline(item)}</li>
            ))}
          </ol>
        );
      } else {
        elements.push(
          <ul
            key={`ul-${elements.length}`}
            className="list-disc pl-6 space-y-2.5 text-base sm:text-lg text-slate-700 dark:text-gray-300 mb-6 marker:text-[#FF5E1A]"
          >
            {listBuffer.map((item, idx) => (
              <li key={idx}>{renderFormattedInline(item)}</li>
            ))}
          </ul>
        );
      }
      listBuffer = [];
      isOrderedList = false;
    };

    let index = 0;
    while (index < lines.length) {
      const line = lines[index];
      const trimmed = line.trim();
      if (!trimmed) {
        flushList();
        index++;
        continue;
      }

      // Check if entering an FAQ markdown block
      if (
        trimmed.startsWith("## ") &&
        /frequently asked questions|faq|अक्सर पूछे जाने वाले सवाल|sıkça sorulan sorular/i.test(
          trimmed
        )
      ) {
        flushList();
        const faqTitle = trimmed.replace("## ", "").trim();
        const faqItems: { question: string; answer: string }[] = [];
        let currQ = "";
        let currA: string[] = [];

        const flushFaqItem = () => {
          if (currQ) {
            faqItems.push({
              question: currQ,
              answer: currA.join("\n\n"),
            });
          }
          currQ = "";
          currA = [];
        };

        index++;
        while (index < lines.length) {
          const l = lines[index].trim();
          if (l.startsWith("## ") || l === "---") break;
          if (l.startsWith("### ")) {
            flushFaqItem();
            currQ = l.replace("### ", "").trim();
          } else if (l) {
            currA.push(l);
          }
          index++;
        }
        flushFaqItem();

        if (faqItems.length > 0) {
          elements.push(
            <div key={`faq-${index}`} className="my-10">
              <FAQAccordion title={faqTitle} items={faqItems} defaultOpenIndex={0} />
            </div>
          );
        }
        continue;
      }

      if (trimmed.startsWith("### ")) {
        flushList();
        const headingText = trimmed.replace("### ", "").trim();
        const id = slugify(headingText);
        elements.push(
          <h2
            key={index}
            id={id}
            className="font-display font-extrabold text-2xl sm:text-3xl text-slate-900 dark:text-white mt-12 mb-4 scroll-mt-28 flex items-center group"
          >
            <span>{headingText}</span>
            <a
              href={`#${id}`}
              aria-label="Anchor link"
              className="ml-2 opacity-0 group-hover:opacity-100 text-[#FF5E1A] transition-opacity"
            >
              #
            </a>
          </h2>
        );
      } else if (trimmed.startsWith("## ")) {
        flushList();
        const headingText = trimmed.replace("## ", "").trim();
        const id = slugify(headingText);
        elements.push(
          <h2
            key={index}
            id={id}
            className="font-display font-black text-3xl sm:text-4xl text-slate-900 dark:text-white mt-14 mb-5 scroll-mt-28"
          >
            {headingText}
          </h2>
        );
      } else if (trimmed.startsWith("- ")) {
        if (isOrderedList) flushList();
        isOrderedList = false;
        listBuffer.push(trimmed.replace(/^- /, ""));
      } else if (/^\d+\.\s/.test(trimmed)) {
        if (!isOrderedList) flushList();
        isOrderedList = true;
        listBuffer.push(trimmed.replace(/^\d+\.\s*/, ""));
      } else {
        flushList();
        elements.push(
          <p
            key={index}
            className="text-base sm:text-lg text-slate-700 dark:text-gray-300 leading-relaxed mb-6 font-normal"
          >
            {renderFormattedInline(trimmed)}
          </p>
        );
      }
      index++;
    }

    flushList();

    return <div className="prose-content">{elements}</div>;
  }

  return null;
}

function renderFormattedInline(text: string): React.ReactNode {
  const parts = text.split(/(\*\*[^*]+\*\*|`[^`]+`)/g);
  return parts.map((part, i) => {
    if (part.startsWith("**") && part.endsWith("**")) {
      return (
        <strong key={i} className="font-bold text-slate-900 dark:text-white">
          {part.slice(2, -2)}
        </strong>
      );
    }
    if (part.startsWith("`") && part.endsWith("`")) {
      return (
        <code
          key={i}
          className="px-1.5 py-0.5 rounded bg-slate-100 dark:bg-zinc-800 text-slate-900 dark:text-amber-300 text-sm font-mono border border-slate-200 dark:border-zinc-700"
        >
          {part.slice(1, -1)}
        </code>
      );
    }
    return part;
  });
}
