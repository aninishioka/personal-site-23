import Header from "./code/components/SiteHeader";
import "../styles/global.css";
import { Metadata } from "next";
import { ReactNode } from "react";
import { ThemeProvider } from "../contexts/themeContext";

export const metadata: Metadata = {
  title: "Anissa Nishioka",
  description: "Anissa Nishioka, Full Stack Software Engineer.",
  openGraph: {
    title: "Anissa Nishioka",
    siteName: "Anissa Nishioka",
    description: "Anissa Nishioka, Full Stack Software Engineer.",
    url: "https://www.aninishioka.com/",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "https://aninishioka.com/ogimage.png",
        secureUrl: "",
        width: 1200,
        height: 640,
        type: "image/png",
      },
    ],
  },
  alternates: {
    canonical: "https://www.aninishioka.com/",
  },
  icons: {
    icon: "/favicon.ico",
  },
};

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <html>
      <body>
        <div className={`appContainer`}>
          <ThemeProvider>
            <Header></Header>
            {children}
          </ThemeProvider>
        </div>
      </body>
    </html>
  );
}
