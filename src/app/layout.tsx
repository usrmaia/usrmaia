import { Fira_Code, Lora, Space_Grotesk } from "next/font/google";
import "./globals.css";
import { StructuredData } from "@/components/analytics/structured-data";

export * from "./documents";

const fontSans = Space_Grotesk({
  variable: "--font-space-grotesk-sans",
  subsets: ["latin"],
});

const fontSerif = Lora({
  variable: "--font-lora-serif",
  subsets: ["latin"],
});

const fontMono = Fira_Code({
  variable: "--font-fira-code-mono",
  subsets: ["latin"],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" suppressHydrationWarning>
      <body
        className={`${fontSans.variable} ${fontSerif.variable} ${fontMono.variable} antialiased`}
      >
        <StructuredData />
        {children}
      </body>
    </html>
  );
}
