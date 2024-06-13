import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Script from 'next/script'

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Event-Emitter.com",
  description: "Easy way to copy event emitter to your code. With great power comes great responsibility",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <Script
        id="yandex-metrika"
        dangerouslySetInnerHTML={{
          __html: `
             (function(m,e,t,r,i,k,a){m[i]=m[i]||function(){(m[i].a=m[i].a||[]).push(arguments)};
             m[i].l=1*new Date();
             for (var j = 0; j < document.scripts.length; j++) {if (document.scripts[j].src === r) { return; }}
             k=e.createElement(t),a=e.getElementsByTagName(t)[0],k.async=1,k.src=r,a.parentNode.insertBefore(k,a)})
             (window, document, "script", "https://mc.yandex.ru/metrika/tag.js", "ym");
          
             ym(97561916, "init", {
                  clickmap:true,
                  trackLinks:true,
                  accurateTrackBounce:true,
                  webvisor:true
             });
          `,
        }}
      />
      <body
        className={inter.className}
        // style={{ backgroundColor: '#101010' }}
      >
        <noscript><div><img src="https://mc.yandex.ru/watch/97561916" style={{ position: 'absolute', left: -9999 }} alt="" /></div></noscript>
        {children}
      </body>
    </html>
  );
}
