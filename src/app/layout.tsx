import type {Metadata} from "next";
import {Inter} from "next/font/google";
import "./globals.css";
import Script from 'next/script'
import {cls, green, keyword, orange, title} from "@/app/consts";
import {Navbar} from "@/components/Navbar";

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
      <head>
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
        <style>{`
        .hljs-keyword {
          color: ${keyword};
        }
        
        .hljs-title {
          color: ${title};
        }
        
        .hljs-title.class_ {
          color: ${cls};
        }
        
        .hljs-string, .hljs-comment {
          color: ${green};
        }
        .hljs-tag .hljs-name {
          color: ${orange}
        }
        
        .hljs-tag .hljs-attr {
          color: ${keyword}
        }
        
        .hljs-attribute {
          color: ${title}
        }
      `}</style>
        <meta name="google-site-verification" content="KhxMrRSEWaqrhxde6OpRGn0fG8ydEzW1CRO53gNT7qc" />
        <meta name="yandex-verification" content="d46c851ad1cdbf13" />
      </head>
      <body
        className={inter.className}
        // style={{ backgroundColor: '#101010' }}
      >
        <noscript><div><img src="https://mc.yandex.ru/watch/97561916" style={{ position: 'absolute', left: -9999 }} alt="" /></div></noscript>

        <title>event-emitter.com</title>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
