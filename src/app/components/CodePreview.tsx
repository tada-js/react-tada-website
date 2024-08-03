'use client';

import { Highlight } from 'prism-react-renderer';
import CopyButton from '@/app/components/CopyButton';
import SnippetLang from '@/app/components/SnippetLang';
import javascriptCode from '@/app/resources/javascript-code';
import typescriptCode from '@/app/resources/typescript-code';
import { useLangTada } from '@/app/store/tada';

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
