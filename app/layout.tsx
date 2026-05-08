import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "FormVault – Secure Auto-Fill for Browser Forms",
  description: "Securely store encrypted form templates and auto-fill repetitive browser forms with one click. Built for QA engineers and web developers."
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <script defer src="https://umami.microtool.dev/script.js" data-website-id="8b14d4f4-261b-4f77-b2c1-91bd378f3086"></script>
      </head>
      <body className="bg-[#0d1117] text-[#c9d1d9] antialiased">{children}</body>
    </html>
  );
}
