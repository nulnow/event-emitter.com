import {promises as fs} from 'fs';
import {headerHeightPx, white} from "@/app/consts";
import {Page} from "@/components/Page";

import hljs from 'highlight.js';
import javascript from 'highlight.js/lib/languages/javascript';
import typescript from 'highlight.js/lib/languages/typescript';
import {CopyToClipboard} from "@/components/CopyToClipboard";
import React from "react";

hljs.registerLanguage('javascript', javascript);
hljs.registerLanguage('typescript', typescript);

export default async function Home() {
  const [
    typescriptCode,
    // javascriptCode
  ] = await Promise.all([
    fs.readFile(process.cwd() + '/src/examples/event-emitter/typescript.txt', 'utf8'),
    // fs.readFile(process.cwd() + '/src/examples/event-emitter/javascript.txt', 'utf8')
  ]);

  // const highlightedJavaScriptCode = hljs.highlight(
  //   javascriptCode,
  //   { language: 'javascript' }
  // ).value;

  const highlightedTypeScriptCode = hljs.highlight(
    typescriptCode,
    { language: 'typescript' }
  ).value;

  return (
    <Page title="">
      <div className="p-4">
      </div>
      <div className="flex flex-row flex-wrap justify-start items-start">
        <section className=" p-4" style={{ fontSize: 11, color: white, maxWidth: '100vw', overflow: 'scroll', margin: '0 auto' }}>
          <h1 className="font-black text-3xl text-gray-900 mb-6" style={{ fontSize: 40 }}>Typesafe Event Emitter examples:</h1>
          <p className="mb-2 text-sm text-gray-600">Installation:</p>
          <p>
            <CopyToClipboard textToCopy="npm i event-emitter-typescript">
              <code title="Copy" className="text-base py-1 px-3 bg-gray-100 hover:bg-gray-200 rounded-md cursor-pointer">npm i event-emitter-typescript <span>📑</span></code>
            </CopyToClipboard>
          </p>

          <div className="mt-6"></div>
          <div className="flex justify-start items-center gap-4 mb-10">
            <h3 className="text-white py-1 px-3 rounded-md font-semibold inline-block" style={{ backgroundColor: '#3178c6' }}>TypeScript</h3>
          </div>
          <pre className="font-mono md:text-base" style={{ color: white }} dangerouslySetInnerHTML={{__html: highlightedTypeScriptCode}}></pre>
        </section>

        {/*<section className="p-4" style={{ fontSize: 11, color: white, maxWidth: '100vw', overflow: 'scroll' }}>*/}
        {/*  <div>*/}
        {/*    <h3 className="text-black bg-yellow-300 py-1 px-3 rounded-md font-semibold mb-6 inline-block">JavaScript</h3>*/}
        {/*  </div>*/}
        {/*  <pre className="font-mono" style={{ color: white }} dangerouslySetInnerHTML={{__html: highlightedJavaScriptCode}}></pre>*/}
        {/*</section>*/}
      </div>
    </Page>
  );
}
