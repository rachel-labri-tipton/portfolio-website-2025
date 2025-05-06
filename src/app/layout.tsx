"use client";

import Header from "@/components/Header/Header";
import Footer from "@/components/Footer/Footer";

import "./globals.scss";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <div className="layout">
          <Header />
          <main className="content">{children}</main>
          <Footer />
          </div>

      </body>
    </html>
  );
}
