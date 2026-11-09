export const PLAYSTORE_LINK =
  process.env.NEXT_PUBLIC_PLAYSTORE_LINK ||
  "https://play.google.com/store/apps/details?id=com.freakyfit.app";

export const APPSTORE_LINK =
  process.env.NEXT_PUBLIC_APPSTORE_LINK?.trim() || "/app-store";

export const IS_APPSTORE_AVAILABLE = Boolean(
  process.env.NEXT_PUBLIC_APPSTORE_LINK?.trim() &&
    process.env.NEXT_PUBLIC_APPSTORE_LINK.trim().startsWith("http")
);
