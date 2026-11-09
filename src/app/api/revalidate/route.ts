import { revalidatePath, revalidateTag } from "next/cache";
import { NextRequest, NextResponse } from "next/server";

// On-demand webhook route to instantly purge CDN cache when a post is published/edited in Sanity Studio
// Can be called via: POST /api/revalidate?secret=YOUR_SECRET
export async function POST(req: NextRequest) {
  const secret = req.nextUrl.searchParams.get("secret");
  const expectedSecret = process.env.SANITY_REVALIDATE_SECRET;

  if (expectedSecret && secret !== expectedSecret) {
    return NextResponse.json({ message: "Invalid secret" }, { status: 401 });
  }

  try {
    const body = await req.json().catch(() => ({}));
    const slug = body?.slug?.current || body?.slug;

    // Invalidate blog list tag
    revalidateTag("blog-posts", "max");

    // Invalidate all blog paths
    revalidatePath("/blog", "layout");
    revalidatePath("/blog/en", "page");
    revalidatePath("/blog/hi", "page");

    if (slug) {
      const cleanSlug = String(slug).replace(/-hi$/, "").replace(/-en$/, "");
      revalidateTag(`post-${cleanSlug}`, "max");
      revalidatePath(`/blog/en/${cleanSlug}`, "page");
      revalidatePath(`/blog/hi/${cleanSlug}`, "page");
    }

    return NextResponse.json({
      revalidated: true,
      now: Date.now(),
      slug: slug || "all",
    });
  } catch (err: unknown) {
    const message = err instanceof Error ? err.message : "Error revalidating";
    return NextResponse.json({ message }, { status: 500 });
  }
}

export async function GET(req: NextRequest) {
  return POST(req);
}

