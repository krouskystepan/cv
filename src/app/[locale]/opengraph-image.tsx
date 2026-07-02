import {
  brandImageContentType,
  createBrandImageResponse,
} from "@/lib/brand-image";

export const alt = "Štěpán Krouský";
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = brandImageContentType;

export default function Image() {
  return createBrandImageResponse();
}
