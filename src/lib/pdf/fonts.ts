import path from "node:path";
import { Font } from "@react-pdf/renderer";

const fontsDir = path.join(process.cwd(), "public/fonts");

let registered = false;

export function registerPdfFonts(): void {
  if (registered) return;

  Font.register({
    family: "NotoSans",
    fonts: [
      {
        src: path.join(fontsDir, "NotoSans-Regular.ttf"),
        fontWeight: 400,
      },
      {
        src: path.join(fontsDir, "NotoSans-Bold.ttf"),
        fontWeight: 700,
      },
    ],
  });

  Font.registerHyphenationCallback((word) => [word]);

  registered = true;
}

export const PDF_FONT = "NotoSans";
