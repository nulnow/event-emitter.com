import {promises as fs} from 'fs';
import {headerHeightPx, white} from "@/app/consts";
import {Page} from "@/components/Page";

import hljs from 'highlight.js';
import javascript from 'highlight.js/lib/languages/javascript';
import typescript from 'highlight.js/lib/languages/typescript';

hljs.registerLanguage('javascript', javascript);
hljs.registerLanguage('typescript', typescript);

export default async function Home() {
  const [
    typescriptCode,
    javascriptCode
  ] = await Promise.all([
    fs.readFile(process.cwd() + '/src/examples/event-emitter/typescript.txt', 'utf8'),
    fs.readFile(process.cwd() + '/src/examples/event-emitter/javascript.txt', 'utf8')
  ]);

  const highlightedJavaScriptCode = hljs.highlight(
    javascriptCode,
    { language: 'javascript' }
  ).value;

  const highlightedTypeScriptCode = hljs.highlight(
    typescriptCode,
    { language: 'typescript' }
  ).value;

  return (
    <Page title="Event Emitter examples:">
      <div className="flex flex-row flex-wrap justify-start items-start">
        <section className="p-4" style={{ fontSize: 11, color: white }}>
          <div>
            <h3 className="text-black bg-yellow-300 py-1 px-3 rounded-md font-semibold mb-6 inline-block">JavaScript</h3>
          </div>
          <pre className="font-mono" style={{ color: white }} dangerouslySetInnerHTML={{__html: highlightedJavaScriptCode}}></pre>
        </section>

        <section className=" p-4" style={{ fontSize: 11, color: white }}>
          <div>
            <h3 className="text-white py-1 px-3 rounded-md font-semibold mb-6 inline-block" style={{ backgroundColor: '#3178c6' }}>TypeScript</h3>
          </div>
          <pre className="font-mono" style={{ color: white }} dangerouslySetInnerHTML={{__html: highlightedTypeScriptCode}}></pre>
        </section>
      </div>
    </Page>
  );
}
