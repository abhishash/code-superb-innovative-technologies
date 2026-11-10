import type { Metadata } from "next";
import Link from "next/link";
import { Geist, Geist_Mono } from "next/font/google";
import CustomCursor from "./custom-cursor";
import "./globals.css";
import CopyrightNotice from "./copyright-notice";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Codex Pro — Thoughtful Software, Meaningful Progress",
  description:
    "Codex Pro partners with ambitious teams to design and build digital products, AI solutions, and cloud platforms that make a real difference.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <CustomCursor />
        <header className="site-header px-20">
          <Link className="brand" href="/" aria-label="Codex Pro home">
            <span className="brand-mark" aria-hidden="true">
              <i />
              <i />
              <i />
              <i />
            </span>
            <span className="brand-name">
              code<span>view</span>
            </span>
          </Link>
          <nav className="main-nav" aria-label="Main navigation">
            <Link href="/">Home</Link>
            <Link href="/about">About</Link>
            <Link href="/services">Services</Link>
            <Link href="/products">Products</Link>
            <Link href="/careers">Careers</Link>
            <Link href="/contact">Contact</Link>
          </nav>
          <Link className="header-cta" href="/contact">
            Start a project <ArrowUpRight />
          </Link>
        </header>
        {children}
        <footer className="site-footer">
          <div className="page-wrap footer-inner">
            <a
              className="brand footer-brand"
              href="#home"
              aria-label="Codex Pro home"
            >
              <span className="brand-mark" aria-hidden="true">
                <i />
                <i />
                <i />
                <i />
              </span>
              <span className="brand-name">
                code<span>view</span>
              </span>
            </a>
            <span>Product thinking. Thoughtful engineering.</span>
            <a href="mailto:hello@codexpro.dev">
              hello@codexpro.dev <ArrowUpRight />
            </a>
            <CopyrightNotice />
          </div>
        </footer>
      </body>
    </html>
  );
}

const ArrowUpRight = () => (
  <svg viewBox="0 0 20 20" aria-hidden="true">
    <path d="M5 15 15 5M6 5h9v9" />
  </svg>
);
