'use client';

import typescriptCode from '@/resources/typescript-code';
import javascriptCode from '@/resources/javascript-code';
import { useLangTada } from '@/store/tada';
import { Highlight } from 'prism-react-renderer';
import SnippetLang from './SnippetLang';
import CopyButton from './CopyButton';

const useLang = useLangTada.useTada;

export default function CodePreview() {
  const [lang, setLang] = useLang((state) => state.lang);

  const code = lang === 'javascript' ? javascriptCode : typescriptCode;

  return (
    <Highlight code={code} language="tsx" theme={undefined}>
      {({ className, style, tokens, getLineProps, getTokenProps }) => (
        <pre className={className} style={{ ...style, position: 'relative' }}>
          {tokens.map((line, i) => (
            <div {...getLineProps({ line })} key={i}>
              {line.map((token, key) => (
                <span {...getTokenProps({ token })} key={key} />
              ))}
            </div>
          ))}
          <div className="snippet-container">
            <SnippetLang lang={lang} setLang={setLang} />
            <CopyButton code={code} />
          </div>
        </pre>
      )}
    </Highlight>
  );
}
