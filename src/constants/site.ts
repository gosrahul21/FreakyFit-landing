export const SITE_NAME = "FreakyFit";

export const SITE_URL = (
  process.env.NEXT_PUBLIC_SITE_URL?.trim() || "https://www.freakyfit.xyz"
).replace(/\/+$/, "");

