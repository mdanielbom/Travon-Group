import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Travon Group | Websites, Automation & Digital Systems",
  description:
    "Travon helps businesses improve websites, automate workflows, and build stronger digital systems. Based in Rotterdam.",
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/favicon.ico",
  },
  openGraph: {
    title: "Travon Group | Websites, Automation & Digital Systems",
    description:
      "Travon helps businesses improve websites, automate workflows, and build stronger digital systems. Based in Rotterdam.",
    url: "https://travongroup.com",
    siteName: "Travon Group",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Travon Group | Websites, Automation & Digital Systems",
    description:
      "Travon helps businesses improve websites, automate workflows, and build stronger digital systems. Based in Rotterdam.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}

