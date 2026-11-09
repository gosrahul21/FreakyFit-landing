import { Language } from "@/constants/lang.enum";
import { createClient } from "@sanity/client";
import { createImageUrlBuilder } from "@sanity/image-url";

// TrueMind Labs multi-tenant Sanity configuration
// Project ID: "bsplxesb" | Dataset: "production" | Studio: https://truemindlabs.sanity.studio
export const projectId =
  process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || "bsplxesb";
export const dataset =
  process.env.NEXT_PUBLIC_SANITY_DATASET || "production";
export const apiVersion =
  process.env.NEXT_PUBLIC_SANITY_API_VERSION || "2024-01-01";
export const domainName =
  process.env.DOMAIN_NAME ||
  process.env.NEXT_PUBLIC_DOMAIN_NAME ||
  "freakyfit.xyz";

// Cache revalidation interval: default 86400s (24 hours) so CDN cache remains long-lived & stable without frequent polling.
// Configurable via SANITY_REVALIDATE_SECONDS in .env
export const revalidateInterval = process.env.SANITY_REVALIDATE_SECONDS
  ? parseInt(process.env.SANITY_REVALIDATE_SECONDS, 10)
  : 86400; // 24 hours default

// Create Sanity client
export const sanityClient = projectId
  ? createClient({
    projectId,
    dataset,
    apiVersion,
    useCdn: true,
  })
  : null;

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const builder = projectId && sanityClient ? createImageUrlBuilder(sanityClient as any) : null;

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function urlFor(source: any) {
  if (!builder || !source) return "";
  try {
    return builder.image(source).auto("format").fit("max").url();
  } catch {
    return typeof source === "string" ? source : "";
  }
}

export interface Author {
  name: string;
  role: string;
  avatar?: string;
}

export interface KeyTakeaway {
  title: string;
  description: string;
}

export type SupportedLang = "en" | "hi" | "tr";

export interface BlogPost {
  _id: string;
  title: string;
  slug: string;
  lang: Language | SupportedLang | string;
  availableLangs?: (Language | SupportedLang | string)[];
  publishedAt: string;
  readingTime: string;
  category: string;
  excerpt: string;
  coverImage?: string;
  videoUrl?: string;
  author: Author;
  keyTakeaways?: KeyTakeaway[];
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  body?: any;
  // Markdown or plain text fallback
  rawContent?: string;
}

// Fallback high-quality mock data when Sanity is offline or domain has not published posts yet
export const FALLBACK_POSTS: BlogPost[] = [
  {
    _id: "post-1-en",
    title: "Why dumbbells alone are completely sufficient for hypertrophy",
    slug: "why-dumbbells-alone-are-sufficient",
    lang: Language.ENGLISH,
    availableLangs: Object.values(Language),
    publishedAt: "November 6, 2026",
    readingTime: "5 min read",
    category: "Hypertrophy & Biomechanics",
    coverImage:
      "https://images.unsplash.com/photo-1583454110551-21f2fa2afe61?auto=format&fit=crop&q=80&w=1200",
    author: {
      name: "Alex Sterling",
      role: "Exercise Physiologist & Coach",
    },
    excerpt:
      "The fitness industry often implies that serious muscle growth requires commercial cable stacks, plate-loaded leg presses, and specialised barbells. Exercise physiology contradicts this narrative.",
    keyTakeaways: [
      {
        title: "Muscle fibers cannot read equipment brand labels",
        description:
          "Your muscles respond strictly to mechanical tension, motor unit recruitment, and fatigue near failure. A dumbbell taken to 1 RIR builds identical muscle tissue to an Olympic barbell.",
      },
      {
        title: "Dumbbells offer distinct biomechanical advantages",
        description:
          "They allow natural wrist rotation, independent bilateral loading to fix side-to-side asymmetries, and deeper active stretch positions in chest and back movements.",
      },
      {
        title: "No bench required",
        description:
          "Floor presses, standing overhead presses, and hinge-supported rows allow you to train every plane of motion safely on the floor.",
      },
      {
        title: "Progressive overload beyond adding plates",
        description:
          "When dumbbell weights are fixed, you can drive progression through rep increases, tempo slowing, pauses at the stretched position, and shortened rest periods.",
      },
    ],
    rawContent: `
### The Tension Principle: What Actually Builds Muscle?

To understand why dumbbells alone are sufficient, we must examine the primary stimulus for muscle growth: **mechanical tension**. When a muscle fiber contracts under high loads or near concentric muscular failure, mechanosensors within the fiber initiate intracellular signaling cascades (primarily via mTORC1) that stimulate muscle protein synthesis.

Your quadriceps, pectorals, or lats cannot determine whether the resistance resisting their contraction originates from a $5,000 Italian cable crossover or an iron dumbbell you found in your garage.

### Free Movement Planes vs. Fixed Machine Tracks

While machines offer extraordinary stability, dumbbells deliver biomechanical advantages machines physically cannot replicate:

- **Converging and diverging resistance paths:** Dumbbell presses allow your wrists to converge at the peak and flare comfortably at the bottom, following your specific clavicular joint angle.
- **Unilateral balance:** Imbalances between your left and right sides cannot hide behind a barbell. Each limb must carry 100% of its designated load.
- **Micro-loading versatility:** Dumbbells enable angle adjustments by 5 degrees to accommodate individual shoulder or hip carrying angles without pain.

### Complete Muscle Growth Without a Bench

Lifters often believe dumbbells require an adjustable gym bench. That is false:

1. **Floor Press:** By lying flat on an exercise mat, the floor acts as a natural joint safety barrier for your shoulders while giving massive triceps and pectoral stimulation.
2. **Standing Dumbbell Push Press:** Builds explosive vertical pushing power, overhead stability, and core rigidity.
3. **Romanian Deadlifts & Split Squats:** Dumbbells provide unmatched lower-body hypertrophy for the glutes, hamstrings, and quads without spinal compression.

### How to Overload When You Run Out of Heavy Plates

If you train at home and only have moderate dumbbell weights, progressive overload is achieved through:

- **Altering Movement Tempo:** 3-second eccentric (lowering) phase increases mechanical work per repetition.
- **Lengthened Partials:** Training the muscle exclusively in its stretched range of motion triggers maximum hypertrophy response.
- **Rest Period Manipulation:** Decreasing rest from 90s to 45s increases metabolic stress and muscle fiber fatigue.

Track your progression seamlessly in **FreakyFit** — extract sets, reps, and exercise progressions directly from your favorite workout reels with one click.
    `,
  },
  {
    _id: "post-1-hi",
    title: "मांसपेशियों के विकास (हाइपरट्रॉफी) के लिए केवल डम्बल ही काफी क्यों हैं",
    slug: "why-dumbbells-alone-are-sufficient",
    lang: Language.HINDI,
    availableLangs: Object.values(Language),
    publishedAt: "6 नवंबर, 2026",
    readingTime: "5 मिनट पढ़ें",
    category: "हाइपरट्रॉफी और बायोमैकेनिक्स",
    coverImage:
      "https://images.unsplash.com/photo-1583454110551-21f2fa2afe61?auto=format&fit=crop&q=80&w=1200",
    author: {
      name: "एलेक्स स्टर्लिंग",
      role: "एक्सरसाइज फिजियोलॉजिस्ट",
    },
    excerpt:
      "फिटनेस उद्योग अक्सर यह दर्शाता है कि गंभीर बॉडीबिल्डिंग के लिए भारी जिम मशीनों की आवश्यकता होती है। आधुनिक खेल विज्ञान इसे पूरी तरह खारिज करता है।",
    keyTakeaways: [
      {
        title: "मांसपेशियों को ब्रांड का नाम नहीं पता होता",
        description:
          "आपकी मांसपेशियों को केवल तनाव (मैकेनिकल टेंशन) से मतलब होता है। डम्बल से 1 RIR तक किया गया वर्कआउट बारबेल जितना ही असरदार होता है।",
      },
      {
        title: "डम्बल के प्राकृतिक बायोमैकेनिकल फायदे",
        description:
          "डम्बल कलाइयों को स्वतंत्र रूप से घूमने देते हैं, जिससे जोड़ों पर अनावश्यक दबाव नहीं पड़ता और दोनों भुजाओं को समान रूप से ताकत मिलती है।",
      },
      {
        title: "बेंच की आवश्यकता नहीं",
        description:
          "फ्लोर प्रेस और स्टैंडिंग ओवरहेड प्रेस जैसी एक्सरसाइज फर्श पर सुरक्षित रूप से की जा सकती हैं।",
      },
      {
        title: "वजन के बिना प्रोग्रेसिव ओवरलोड",
        description:
          "रेप्स की गति धीमी करके, स्ट्रेच पोजीशन में रुककर, और आराम का समय कम करके आप प्रगति जारी रख सकते हैं।",
      },
    ],
    rawContent: `
### मैकेनिकल टेंशन का मूल सिद्धांत

मांसपेशियों के विकास के लिए सबसे महत्वपूर्ण चीज **मैकेनिकल टेंशन** (Mechanical Tension) है। जब मांसपेशियां किसी वजन के खिलाफ कड़ी मेहनत करती हैं, तो शरीर प्रोटीन संश्लेषण शुरू करता है।

आपकी मांसपेशियों को इस बात से कोई फर्क नहीं पड़ता कि वजन एक लाख रुपये की मशीन का है या आपके हाथ में मौजूद डम्बल का।

### डम्बल के स्वाभाविक लाभ

- **प्राकृतिक गति:** डम्बल के साथ आप अपनी हड्डियों और जोड़ों की बनावट के अनुसार हाथ हिला सकते हैं।
- **संतुलन और सिमिट्री:** बायाँ और दायाँ हाथ दोनों को बराबर मेहनत करनी पड़ती है, जिससे कमजोर हिस्से भी मजबूत होते हैं।
- **कम जगह में संपूर्ण वर्कआउट:** घर पर बिना किसी भारी उपकरण के पूरा शरीर ट्रेन किया जा सकता है।
    `,
  },
  {
    _id: "post-2-en",
    title: "How to Turn Saved Workout Reels Into an Actionable Gym Split",
    slug: "turn-workout-reels-into-training-split",
    lang: "en",
    availableLangs: Object.values(Language),
    publishedAt: "November 2, 2026",
    readingTime: "4 min read",
    category: "Workout Organization",
    coverImage:
      "https://images.unsplash.com/photo-1517838277536-f5f99be501cd?auto=format&fit=crop&q=80&w=1200",
    author: {
      name: "Marcus Vance",
      role: "Strength & Conditioning Coach",
    },
    excerpt:
      "Most lifters have hundreds of Instagram and TikTok workout reels bookmarked in folders they never open. Here is a step-by-step framework to categorize and execute them.",
    keyTakeaways: [
      {
        title: "The Bookmarking Black Hole",
        description:
          "Saving a reel releases dopamine, creating a false sense of accomplishment. Without an extraction tool, 94% of saved fitness content is never performed.",
      },
      {
        title: "Sort by Movement Pattern, Not Muscle",
        description:
          "Organize saved reels into Push, Pull, Hinge, Squat, and Carry folders to build balanced weekly training blocks.",
      },
      {
        title: "Log Reps and Sets Instantly",
        description:
          "Parse text captions into a clean digital routine with rest timers so you don't keep glancing at your screen during gym sets.",
      },
    ],
    rawContent: `
### The Problem with Saved Folders

Instagram and TikTok algorithms are designed to keep you scrolling, not sweating. When you see a killer chest variation or a smart mobility sequence, you hit 'Save'. But when you walk into the gym, searching through 300 unrelated clips is frustrating and wastes gym momentum.

### The 3-Step Organization System

1. **Filter by Utility:** Keep only exercises that fit your current 6-week goal.
2. **Extract Key Metrics:** Record target reps, sets, tempo, and rest intervals.
3. **Schedule into Splits:** Place push movements on Monday/Thursday and pull movements on Tuesday/Friday.

Using FreakyFit, you can paste the reel link and let the AI extract every exercise into a structured session automatically.
    `,
  },
  {
    _id: "post-2-hi",
    title: "सेव किए गए वर्कआउट रील्स को एक व्यवस्थित ट्रेनिंग प्लान में कैसे बदलें",
    slug: "turn-workout-reels-into-training-split",
    lang: "hi",
    availableLangs: Object.values(Language),
    publishedAt: "2 नवंबर, 2026",
    readingTime: "4 मिनट पढ़ें",
    category: "वर्कआउट प्रबंधन",
    coverImage:
      "https://images.unsplash.com/photo-1517838277536-f5f99be501cd?auto=format&fit=crop&q=80&w=1200",
    author: {
      name: "मार्कस वेंस",
      role: "स्ट्रेंथ एंड कंडीशनिंग कोच",
    },
    excerpt:
      "अधिकांश फिटनेस प्रेमियों के पास सैकड़ों इंस्टाग्राम और टिकटॉक रील्स सेव होती हैं जिन्हें वे कभी नहीं देखते। जानिए उन्हें एक व्यावहारिक रूटीन में बदलने का आसान तरीका।",
    keyTakeaways: [
      {
        title: "सेव करने का भ्रम",
        description:
          "वीडियो सेव करने से संतुष्टि का अहसास होता है, लेकिन बिना सही योजना के 94% सेव किए गए वर्कआउट कभी किए ही नहीं जाते।",
      },
      {
        title: "मूवमेंट पैटर्न के अनुसार छांटें",
        description:
          "पुश, पुल, लेग्स और कोर के आधार पर रील्स को व्यवस्थित करें ताकि संतुलित साप्ताहिक योजना बन सके।",
      },
      {
        title: "तुरंत रूटीन बनाएं",
        description:
          "रील्स के कैप्शन से सीधे सेट और रेस्ट टाइमर जोड़ें ताकि जिम में फोन बार-बार न देखना पड़े।",
      },
    ],
    rawContent: `
### सेव किए गए वीडियो की समस्या

जब आप जिम जाते हैं, तो सैकड़ों सेव की हुई रील्स में से काम की एक्सरसाइज ढूंढना समय की बर्बादी है।

### फ्रीकीफिट का समाधान

फ्रीकीफिट में किसी भी रील का लिंक पेस्ट करें, और AI स्वचालित रूप से एक्सरसाइज, सेट्स, रेप्स और रेस्ट टाइमर निकाल कर एक साफ-सुथरा वर्कआउट तैयार कर देता है।
    `,
  },
  {
    _id: "post-1-tr",
    title: "Hipertrofi İçin Neden Yalnızca Dambıllar Tamamen Yeterlidir?",
    slug: "why-dumbbells-alone-are-sufficient",
    lang: "tr",
    availableLangs: Object.values(Language),
    publishedAt: "6 Kasım 2026",
    readingTime: "5 dk okuma",
    category: "Hipertrofi ve Biyomekanik",
    coverImage:
      "https://images.unsplash.com/photo-1583454110551-21f2fa2afe61?auto=format&fit=crop&q=80&w=1200",
    author: {
      name: "Alex Sterling",
      role: "Egzersiz Fizyoloğu ve Koç",
    },
    excerpt:
      "Fitness endüstrisi, ciddi kas büyümesinin ticari kablo istasyonları ve özel makineler gerektirdiğini iddia eder. Egzersiz fizyolojisi ise bu anlatıyı çürütmektedir.",
    keyTakeaways: [
      {
        title: "Kas lifleri ekipman markalarını okuyamaz",
        description:
          "Kaslarınız yalnızca mekanik gerilime, motor ünite katılımına ve tükenişe yakın yorgunluğa yanıt verir. 1 RIR ile yapılan dambıl çalışması olimpiyat barı ile aynı kas dokusunu inşa eder.",
      },
      {
        title: "Dambılların sunduğu biyomekanik avantajlar",
        description:
          "Doğal bilek rotasyonuna, asimetrileri düzeltmek için bağımsız yüke ve göğüs ile sırt hareketlerinde daha derin aktif esneme pozisyonlarına izin verirler.",
      },
      {
        title: "Sehpaya gerek yok",
        description:
          "Yer presleri (floor press), ayakta omuz presleri ve menteşe destekli çekişler yerde güvenle tüm hareket düzlemlerini çalıştırmanızı sağlar.",
      },
      {
        title: "Aşamalı aşırı yükleme (Progressive Overload)",
        description:
          "Dambıl ağırlıkları sabit olduğunda tekrar artışı, tempoyu yavaşlatma ve dinlenme sürelerini kısaltarak ilerleyebilirsiniz.",
      },
    ],
    rawContent: `
### Gerilim Prensibi: Kası Gerçekte Ne Büyütür?

Dambılların neden tek başına yeterli olduğunu anlamak için kas büyümesinin birincil uyarıcısını incelemeliyiz: **mekanik gerilim**. Bir kas lifi yüksek yükler altında veya tükenişe yakın kasıldığında kas protein sentezini uyarır.

Göğüs veya sırt kaslarınız direncin 5.000 dolarlık bir makineden mi yoksa evdeki bir dambıldan mı geldiğini ayırt edemez.

### Serbest Hareket Düzlemleri ve Biyomekanik Üstünlük

- **Doğal eklem yolları:** Dambıl presleri bileklerinizi ve dirseklerinizi en rahat açıya getirme özgürlüğü tanır.
- **İki yönlü denge:** Sol ve sağ taraf arasındaki kuvvet farkları bar arkasına saklanamaz.
- **Evde eksiksiz gelişim:** Sehpa olmadan yer presleri ve RDL hareketleriyle tüm vücut çalışılabilir.
    `,
  },
  {
    _id: "post-2-tr",
    title: "Kaydedilen Antrenman Reels Videolarını Gerçek Bir Antrenman Planına Dönüştürme",
    slug: "turn-workout-reels-into-training-split",
    lang: "tr",
    availableLangs: Object.values(Language),
    publishedAt: "2 Kasım 2026",
    readingTime: "4 dk okuma",
    category: "Antrenman Organizasyonu",
    coverImage:
      "https://images.unsplash.com/photo-1517838277536-f5f99be501cd?auto=format&fit=crop&q=80&w=1200",
    author: {
      name: "Marcus Vance",
      role: "Kondisyon ve Güç Koçu",
    },
    excerpt:
      "Çoğu sporcunun Instagram ve TikTok klasörlerinde hiç açmadığı yüzlerce egzersiz videosu var. İşte bunları net bir plana dönüştürme yöntemi.",
    keyTakeaways: [
      {
        title: "Kaydetme Tuzağı",
        description:
          "Bir videoyu kaydetmek sahte bir başarı hissi verir. Bir çıkarma aracı olmadan kaydedilen içeriklerin %94'ü asla uygulanmaz.",
      },
      {
        title: "Kasa Göre Değil, Harekete Göre Sıralayın",
        description:
          "Dengeli haftalık antrenman blokları oluşturmak için videoları İtiş, Çekiş, Menteşe, Squat ve Taşıma klasörlerine ayırın.",
      },
      {
        title: "Set ve Tekrarları Anında Çıkarın",
        description:
          "Video açıklamalarındaki metinleri dinlenme sayaçları olan dijital bir programa dönüştürün.",
      },
    ],
    rawContent: `
### Kaydedilen Klasörler Sorunu

Instagram ve TikTok algoritmaları sizi spor salonunda terletmek için değil, ekranda tutmak için tasarlanmıştır.

### FreakyFit Çözümü

FreakyFit'e herhangi bir reels bağlantısını yapıştırın; yapay zeka hareketleri, setleri, tekrarları ve dinlenme sürelerini otomatik olarak çıkararak temiz bir antrenman seansına dönüştürür.
    `,
  },
];

// Helper to normalize TrueMind Labs post schema into FreakyFit BlogPost format
// eslint-disable-next-line @typescript-eslint/no-explicit-any
function normalizeSanityPost(raw: any, defaultLang: Language | string = "en"): BlogPost {
  const content = raw.content || raw.body;
  const authorName = raw.authorName || raw.author?.name || "Rael";
  const authorRole = raw.author?.role || 'Founder';
  const cover =
    raw.coverImage?.asset?.url ||
    raw.coverImage ||
    raw.mainImage?.asset?.url ||
    raw.mainImage;

  // Extract takeaways from callout items with tone 'takeaway' if keyTakeaways is absent
  let keyTakeaways: KeyTakeaway[] | undefined = raw.keyTakeaways;
  if (!keyTakeaways && Array.isArray(content)) {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const callouts = content.filter((b: any) => b._type === "callout" && b.tone === "takeaway");
    if (callouts.length > 0) {
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      keyTakeaways = callouts.map((c: any) => ({
        title: c.title || "Key Takeaway",
        description: c.content || "",
      }));
    }
  }

  const category = (raw.tags && raw.tags[0]) || raw.category || "Fitness & Training";

  const isTurkish =
    raw.language === "tr" ||
    raw.lang === "tr" ||
    (typeof raw.slug === "string" && raw.slug.endsWith("-tr")) ||
    (raw.slug?.current && raw.slug.current.endsWith("-tr")) ||
    (Array.isArray(raw.tags) && (raw.tags.includes("tr") || raw.tags.includes("turkish") || raw.tags.includes("türkçe")));

  const isHindi =
    !isTurkish && (
      raw.language === "hi" ||
      raw.lang === "hi" ||
      (typeof raw.slug === "string" && raw.slug.endsWith("-hi")) ||
      (raw.slug?.current && raw.slug.current.endsWith("-hi")) ||
      (Array.isArray(raw.tags) && (raw.tags.includes("hi") || raw.tags.includes("hindi")))
    );

  const rawLang = raw.language || raw.lang;
  const postLang: string = isTurkish
    ? "tr"
    : isHindi
    ? "hi"
    : rawLang || defaultLang || "en";

  // Calculate rough reading time if not present
  let readingTime = raw.readingTime;
  if (!readingTime) {
    let wordCount = (raw.excerpt || "").split(/\s+/).length;
    if (Array.isArray(content)) {
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      content.forEach((block: any) => {
        if (block._type === "block" && block.children) {
          // eslint-disable-next-line @typescript-eslint/no-explicit-any
          wordCount += block.children.map((c: any) => c.text || "").join(" ").split(/\s+/).length;
        }
      });
    }
    const minutes = Math.max(1, Math.ceil(wordCount / 180));
    readingTime = postLang === "tr" ? `${minutes} dk okuma` : postLang === "hi" ? `${minutes} मिनट पढ़ें` : `${minutes} min read`;
  }

  // Strip language suffix (-hi, -tr, -en) to ensure clean frontend URL: /blog/[lang]/[baseSlug]
  const rawSlug = typeof raw.slug === "string" ? raw.slug : raw.slug?.current || "";
  const cleanSlug = rawSlug.replace(/-hi$/, "").replace(/-tr$/, "").replace(/-en$/, "");

  const locale = postLang === "tr" ? "tr-TR" : postLang === "hi" ? "hi-IN" : "en-US";

  return {
    _id: raw._id,
    title: raw.title,
    slug: cleanSlug,
    lang: postLang,
    publishedAt: raw.publishedAt
      ? new Date(raw.publishedAt).toLocaleDateString(locale, {
        year: "numeric",
        month: "long",
        day: "numeric",
      })
      : "Recent",
    readingTime,
    category,
    coverImage: cover ? urlFor(cover) : "/logo.svg",
    videoUrl: raw.videoUrl,
    author: {
      name: authorName,
      role: authorRole,
      avatar: raw.author?.avatar,
    },
    excerpt: raw.excerpt || "",
    keyTakeaways,
    body: content,
    rawContent: raw.rawContent,
  };
}

export async function getBlogPosts(lang: string = "en"): Promise<BlogPost[]> {
  if (sanityClient && projectId) {
    try {
      // Query TrueMind Labs multi-tenant schema:
      // If lang == "tr", match posts ending with -tr, language == "tr", or tags containing "tr"/"turkish"/"türkçe".
      // If lang == "hi", match posts ending with -hi, language == "hi", or tags containing "hi"/"hindi".
      // If lang == "en", match base posts (default English) or posts ending with -en.
      // For any other language code, match posts ending with -[lang], language == [lang], or [lang] in tags.
      const langFilter =
        lang === "tr"
          ? `(slug.current match "*-tr" || language == "tr" || lang == "tr" || "tr" in tags || "turkish" in tags || "türkçe" in tags)`
          : lang === "hi"
            ? `(slug.current match "*-hi" || language == "hi" || lang == "hi" || "hi" in tags || "hindi" in tags)`
            : lang === "en"
              ? `(!(slug.current match "*-hi") && !(slug.current match "*-tr") && language != "hi" && language != "tr" && lang != "hi" && lang != "tr" && !("hi" in tags) && !("hindi" in tags) && !("tr" in tags) && !("turkish" in tags))`
              : `(slug.current match "*-" + $lang || language == $lang || lang == $lang || $lang in tags)`;

      const query = `*[_type == "post" && (domainName match "freakyfit*" || domainName == "freakyfit.xyz" || domainName == $domainName || domainName == "freakyfit.truemindlabs.com" || !defined(domainName)) && ${langFilter}] | order(publishedAt desc) {
        _id,
        title,
        slug,
        domainName,
        content,
        body,
        excerpt,
        "coverImage": coalesce(coverImage.asset->url, mainImage.asset->url),
        authorName,
        author->{name, role, "avatar": image.asset->url},
        tags,
        category,
        publishedAt,
        videoUrl,
        language,
        lang,
        keyTakeaways
      }`;

      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      const posts: any[] = await sanityClient.fetch(
        query,
        { domainName, lang },
        { next: { revalidate: revalidateInterval, tags: ["blog-posts"] } }
      );
      if (posts && posts.length > 0) {
        return posts.map((p) => normalizeSanityPost(p, lang));
      }

      // If no language-specific posts found in Sanity and not English, fall back to English posts
      if (lang !== "en") {
        const enPosts = await getBlogPosts("en");
        if (enPosts.length > 0) {
          return enPosts;
        }
      }
    } catch (err) {
      console.warn("Sanity fetch failed or not connected, using fallback blog posts:", err);
    }
  }

  const fallbackForLang = FALLBACK_POSTS.filter((p) => p.lang === lang);
  return fallbackForLang.length > 0
    ? fallbackForLang
    : FALLBACK_POSTS.filter((p) => p.lang === "en" || p.lang === Language.ENGLISH);
}

export async function getBlogPostBySlug(
  slug: string,
  lang: string = "en"
): Promise<BlogPost | null> {
  // Always derive clean base slug (strips -hi, -tr, or -en if accidentally passed)
  const baseSlug = slug.replace(/-hi$/, "").replace(/-tr$/, "").replace(/-en$/, "");
  const localizedSlug = `${baseSlug}-${lang}`;
  const exactSlug = slug;

  if (sanityClient && projectId) {
    try {
      // 1. If searching for non-English, search for [slug]-[lang] (e.g. topic-tr, topic-hi)
      // or exactSlug if it ends with -lang, or baseSlug with language/tag matches
      if (lang !== "en") {
        const langTagCondition =
          lang === "tr"
            ? `(language == "tr" || lang == "tr" || "tr" in tags || "turkish" in tags || "türkçe" in tags)`
            : lang === "hi"
            ? `(language == "hi" || lang == "hi" || "hi" in tags || "hindi" in tags)`
            : `(language == $lang || lang == $lang || $lang in tags)`;

        const localizedQuery = `*[_type == "post" && (domainName match "freakyfit*" || domainName == "freakyfit.xyz" || domainName == $domainName || domainName == "freakyfit.truemindlabs.com" || !defined(domainName)) && (slug.current == $localizedSlug || (slug.current == $exactSlug && $exactSlug match "*-" + $lang) || (slug.current == $baseSlug && ${langTagCondition}))][0] {
          _id,
          title,
          slug,
          domainName,
          content,
          body,
          excerpt,
          "coverImage": coalesce(coverImage.asset->url, mainImage.asset->url),
          authorName,
          author->{name, role, "avatar": image.asset->url},
          tags,
          category,
          publishedAt,
          videoUrl,
          language,
          lang,
          keyTakeaways
        }`;

        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        const localizedPost: any = await sanityClient.fetch(
          localizedQuery,
          { domainName, localizedSlug, exactSlug, baseSlug, lang },
          { next: { revalidate: revalidateInterval, tags: ["blog-posts", `post-${baseSlug}`] } }
        );

        if (localizedPost) {
          const normalized = normalizeSanityPost(localizedPost, lang);
          normalized.slug = baseSlug;
          return normalized;
        }
      }

      // 2. Default fallback: search for baseSlug (or baseSlug-en), which is English
      const enSlug = `${baseSlug}-en`;
      const defaultQuery = `*[_type == "post" && (domainName match "freakyfit*" || domainName == "freakyfit.xyz" || domainName == $domainName || domainName == "freakyfit.truemindlabs.com" || !defined(domainName)) && (slug.current == $baseSlug || slug.current == $enSlug || slug.current == $exactSlug)][0] {
        _id,
        title,
        slug,
        domainName,
        content,
        body,
        excerpt,
        "coverImage": coalesce(coverImage.asset->url, mainImage.asset->url),
        authorName,
        author->{name, role, "avatar": image.asset->url},
        tags,
        category,
        publishedAt,
        videoUrl,
        language,
        lang,
        keyTakeaways
      }`;

      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      const defaultPost: any = await sanityClient.fetch(
        defaultQuery,
        { domainName, baseSlug, enSlug, exactSlug },
        { next: { revalidate: revalidateInterval, tags: ["blog-posts", `post-${baseSlug}`] } }
      );

      if (defaultPost) {
        const normalized = normalizeSanityPost(defaultPost, "en");
        normalized.slug = baseSlug;
        return normalized;
      }
    } catch (err) {
      console.warn("Sanity single post fetch failed, using fallback:", err);
    }
  }

  // Fallback in-memory posts:
  if (lang !== "en") {
    const fallbackLocalized = FALLBACK_POSTS.find(
      (p) =>
        (p.slug === baseSlug || p.slug === localizedSlug) &&
        (p.lang === lang || p._id.endsWith(`-${lang}`))
    );
    if (fallbackLocalized) {
      return { ...fallbackLocalized, slug: baseSlug };
    }
  }

  // English fallback:
  const fallbackEn = FALLBACK_POSTS.find(
    (p) =>
      (p.slug === baseSlug || p.slug === `${baseSlug}-en`) &&
      (p.lang === "en" || p._id.endsWith("-en"))
  );
  if (fallbackEn) {
    return { ...fallbackEn, slug: baseSlug };
  }

  // Any matching post:
  const fallbackAny = FALLBACK_POSTS.find(
    (p) => p.slug === baseSlug || p.slug === localizedSlug
  );
  if (fallbackAny) {
    return { ...fallbackAny, slug: baseSlug };
  }

  return null;
}
