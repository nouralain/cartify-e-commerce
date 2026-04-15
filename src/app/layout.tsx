import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { apiClient } from "@/lib/api-client";
import ProviderWrapper from './../providers/ProviderWrapper';

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Cartify - Online Shopping",
  description:
    "Shop online for electronics, apparel, computers, books, DVDs & more",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const categories = await apiClient.getCategories();
  return (
    <html lang="en">
      <body className={`${inter.className} min-h-screen flex flex-col`}>
        <ProviderWrapper>
          <Header categories={categories} />
          <main className="grow w-full mx-auto">{children}</main>
          <Footer />
        </ProviderWrapper>
      </body>
    </html>
  );
}
