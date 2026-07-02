"use client";

import { QRCodeSVG } from "qrcode.react";

export function PrintQrCode({ url, label }: { url: string; label: string }) {
  return (
    <div className="print-qr">
      <QRCodeSVG
        value={url}
        size={56}
        level="M"
        bgColor="#ffffff"
        fgColor="#000000"
        aria-hidden
      />
      <p className="print-qr-label">{label}</p>
    </div>
  );
}
