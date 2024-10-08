'use client';

import { useState, useCallback, useRef } from 'react';
import { PrismTheme } from 'prism-react-renderer';
import { copyToClipboard } from '@/utils/copy-to-clipboard';

/*
Isolated logic for the entire copy functionality instead
of a separate button component and with the added utility
*/

interface Props {
  code: string;
  language?: string;
  theme?: PrismTheme | undefined;
}

export default function CopyButton({ code, ...props }: Props) {
  const [isCopied, setIsCopied] = useState(false);
  const timer = useRef<NodeJS.Timeout | null>(null);

  const handleCopy = useCallback(() => {
    timer.current && clearTimeout(timer.current);
    copyToClipboard(code).then(() => {
      setIsCopied(true);
      timer.current = setTimeout(() => setIsCopied(false), 1000);
    });
  }, [code]);

  return (
    <>
      <button className="copy-button" onClick={handleCopy} {...props}>
        {isCopied ? (
          'Copied!'
        ) : (
          <>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width={16}
              height={16}
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth={2}
              strokeLinecap="round"
              strokeLinejoin="round"
              {...props}
            >
              <rect x={9} y={9} width={13} height={13} rx={2} ry={2} />
              <path d="M5 15H4a2 2 0 01-2-2V4a2 2 0 012-2h9a2 2 0 012 2v1" />
            </svg>
          </>
        )}
      </button>
    </>
  );
}
