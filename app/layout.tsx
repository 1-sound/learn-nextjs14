import "../styles/global.css";
import { Metadata } from "next";
import Navigation from "../components/navigation";
import Head from "next/head";

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
      <Head>
        <link rel="manifest" href="/manifest.json" />
      </Head>
      <body>
        <Navigation />
        {children}
      </body>
      <script
        dangerouslySetInnerHTML={{
          __html: `
            if ('serviceWorker' in navigator) {
              window.addEventListener('load', function() {
                navigator.serviceWorker.register('/sw.js').then(function(registration) {
                  console.log('서비스 워커 등록 성공:', registration);
                }, function(err) {
                  console.log('서비스 워커 등록 실패:', err);
                });
              });
            }
          `,
        }}
      />
    </html>
  );
}
