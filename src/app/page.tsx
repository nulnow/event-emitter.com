import { promises as fs } from 'fs';

import hljs from 'highlight.js';
import javascript from 'highlight.js/lib/languages/javascript';
import typescript from 'highlight.js/lib/languages/typescript';
import Image from "next/image";
import Link from "next/link";
import src from './Octicons-mark-github.svg';

hljs.registerLanguage('javascript', javascript);
hljs.registerLanguage('typescript', typescript);


const HEADER_HEIGHT_PX = 40;

export default async function Home() {
  const [
    typescriptCode,
    javascriptCode
  ] = await Promise.all([
    fs.readFile(process.cwd() + '/src/examples/typescript.txt', 'utf8'),
    fs.readFile(process.cwd() + '/src/examples/javascript.txt', 'utf8')
  ]);

  const highlightedJavaScriptCode = hljs.highlight(
    javascriptCode,
    { language: 'javascript' }
  ).value;

  const highlightedTypeScriptCode = hljs.highlight(
    typescriptCode,
    { language: 'typescript' }
  ).value;

  const white = '#565656';
  const keyword = '#d90c66';
  const title = '#0098dc';
  const cls = title; // '#d000ff';
  const green = '#0db040';

  return (
    <>
      <title>event-emitter.com</title>
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
      `}</style>
      <header className="flex justify-between items-center px-4 sticky top-0 backdrop-blur-xl text-gray-700" style={{ height: HEADER_HEIGHT_PX }}>
        <div>
          <h1 className="font-light text-md md:text-2xl">event-emitter.com <span className="text-xs md:text-sm text-gray-600">With great power comes great responsibility</span></h1>
        </div>
        <nav>
          <Link href="https://github.com/nulnow">
            <Image width={20} height={20} src={src} alt={"github logo"}></Image>
          </Link>
        </nav>
      </header>
      <div className="px-4 text-xs font-light">
        Fast copy&paste solution
      </div>
      <main className="flex flex-row flex-wrap justify-start items-start" style={{ minHeight: `calc(100svh - ${HEADER_HEIGHT_PX}px)` }}>
        <section className="p-4" style={{ fontSize: 11, color: white }}>
          <h3 className="text-black bg-yellow-300 p-1 rounded-md font-semibold mb-6">JavaScript</h3>
          <pre className="font-mono" style={{ color: white }} dangerouslySetInnerHTML={{__html: highlightedJavaScriptCode}}></pre>
        </section>

        <section className=" p-4" style={{ fontSize: 11, color: white }}>
          <h3 className="text-white p-1 rounded-md font-semibold mb-6" style={{ backgroundColor: '#3178c6' }}>TypeScript</h3>
          <pre className="font-mono" style={{ color: white }} dangerouslySetInnerHTML={{__html: highlightedTypeScriptCode}}></pre>
        </section>
      </main>
    </>
  );
}
