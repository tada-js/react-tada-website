type LangType = 'javascript' | 'typescript';

interface Props {
  lang: LangType;
  setLang: (lang: { lang: LangType }) => void;
}

export default function SnippetLang({ lang, setLang }: Props) {
  return (
    <select
      className="snippet-lang"
      value={lang}
      onChange={(e) => setLang({ lang: e.target.value as LangType })}
    >
      <option value="javascript">JavaScript</option>
      <option value="typescript">TypeScript</option>
    </select>
  );
}
