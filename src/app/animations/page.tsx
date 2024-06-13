import {promises as fs} from 'fs';
import {Page} from "@/components/Page";

import hljs from 'highlight.js';
// import javascript from 'highlight.js/lib/languages/javascript';
// import typescript from 'highlight.js/lib/languages/typescript';
import css from 'highlight.js/lib/languages/css';
import xml from 'highlight.js/lib/languages/xml';
import {cls, white} from "@/app/consts";

// hljs.registerLanguage('javascript', javascript);
// hljs.registerLanguage('typescript', typescript);
hljs.registerLanguage('css', css);
hljs.registerLanguage('xml', xml);


export default async function Animations() {
  const [
    animationsCode,
    htmlCode,
    // javascriptCode
  ] = await Promise.all([
    fs.readFile(process.cwd() + '/src/examples/animations/animations.css', 'utf8'),
    fs.readFile(process.cwd() + '/src/examples/animations/animations.html', 'utf8'),
    // fs.readFile(process.cwd() + '/src/examples/event-emitter/javascript.txt', 'utf8')
    // fs.readFile(process.cwd() + '/src/examples/event-emitter/javascript.txt', 'utf8')
  ]);

  const highlightedAnimationsCode = hljs.highlight(
    animationsCode,
    { language: 'css' }
  ).value;

  const highlightedHtmlCode = hljs.highlight(
    htmlCode,
    { language: 'xml' }
  ).value;

  return <Page title="Simple animations:">
    <div className="flex flex-row flex-wrap justify-start items-start">
      <section className=" p-4" style={{ fontSize: 11, color: white, maxWidth: '100vw', overflow: 'scroll' }}>
        <div>
          <h3 className="text-white py-1 px-3 rounded-md font-semibold mb-6 inline-block" style={{ backgroundColor: '#3178c6' }}>CSS</h3>
          {/*<h3 className="text-white py-1 px-3 rounded-md font-semibold mb-6 inline-block" style={{ backgroundColor: '#185ca8' }}>CSS</h3>*/}
        </div>
        <pre className="font-mono" style={{ color: white }} dangerouslySetInnerHTML={{__html: highlightedAnimationsCode}}></pre>
      </section>

      <section className="p-4" style={{ fontSize: 11, color: white, maxWidth: '100vw', overflow: 'scroll' }}>
        <div>
          <h3 className="text-black bg-yellow-300 py-1 px-3 rounded-md font-semibold mb-6 inline-block">HTML</h3>
        </div>
        <pre className="font-mono" style={{ color: white }} dangerouslySetInnerHTML={{__html: highlightedHtmlCode}}></pre>
      </section>

      <div className="p-4 font-light">
        <h2 className="font-bold mb-3" style={{ fontSize: 20 }}>Example:</h2>

        <style>{`
          .my-html div {
            max-width: 300px;
          } 
          .my-html button {
            margin-top: 20px;
            color: deepskyblue;
          }
        `}</style>
        <style dangerouslySetInnerHTML={{__html: animationsCode}}></style>
        <div className="my-html" dangerouslySetInnerHTML={{__html: htmlCode}}></div>
      </div>
    </div>
  </Page>;
}