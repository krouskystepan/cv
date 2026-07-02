export const BRAND_IMAGE_PATH = "/favicon.svg";

export const BRAND_IMAGE_SIZE = {
  width: 1200,
  height: 630,
} as const;

export function getBrandImageAlt(name: string) {
  return name;
}
