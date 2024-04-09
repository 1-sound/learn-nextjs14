import "../styles/global.css";
import { Metadata } from "next";
import Navigation from "../components/navigation";

export const metadata: Metadata = {
  title: {
    template: "%s | Next Movies",
    default: "Next Movies",
  },
  description: "The best movies on the best framework",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <link rel="manifest" href="/manifest.json" />
        <link
          rel="apple-touch-icon"
          href="/assets/icons/icon-384x384.png"
        ></link>
      </head>
      <body>
        <Navigation />
        {children}
      </body>
    </html>
  );
}
