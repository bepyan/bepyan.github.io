import React, { useRef, useState } from 'react';
import { toast } from 'react-hot-toast';

import { $ } from '~/libs/core';
import useWatchTimeout from '~/libs/useWatchTimeout';

import CheckIcon from '../icons/CheckIcon';

export default function CodeBlock({ children, title }: React.ComponentProps<'pre'>) {
  const ref = useRef<HTMLPreElement>(null);
  const [copied, setCopied] = useState(false);

  useWatchTimeout(copied, 1500, () => {
    setCopied(false);
  });

  const handleCopy = async () => {
    const text = ref.current?.querySelector('code')?.innerText;
    if (!text) return;

    try {
      await navigator.clipboard.writeText(text);
      setCopied(true);
      toast('코드를 복사했습니다.', { icon: '⌨️' });
    } catch (e) {
      console.error(e);
      toast.error('코드 복사에 실패했습니다.');
    }
  };

  return (
    <div className="group relative my-2 -mx-2 overflow-hidden rounded-lg sm:mx-0 sm:my-5">
      {title && (
        <div className="flex bg-[var(--prism-background)]">
          <div className="flex-none border-b-4 border-[#bbbbbb] px-5 pt-2 pb-1.5 text-sm font-bold text-[#bbbbbb]">
            {title}
          </div>
          <div className="mt-2 w-full rounded-tl bg-[var(--prism-selection)] ring-1 ring-inset ring-white/5" />
        </div>
      )}
      <pre ref={ref} className={'m-0 rounded-none p-5 leading-4'}>
        {children}
      </pre>
      <button
        className={$(
          'absolute right-2 bottom-2 flex h-8 w-8 items-center justify-center rounded-lg',
          'bg-neutral-700 text-xs text-neutral-400 hover:text-neutral-300',
          'opacity-0 transition-all group-hover:opacity-100',
        )}
        aria-label="copy-button"
        onClick={handleCopy}
      >
        {copied ? (
          <CheckIcon />
        ) : (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            height="16"
            width="16"
            viewBox="0 0 16 16"
            fill="currentColor"
          >
            <path d="M0 6.75C0 5.784.784 5 1.75 5h1.5a.75.75 0 010 1.5h-1.5a.25.25 0 00-.25.25v7.5c0 .138.112.25.25.25h7.5a.25.25 0 00.25-.25v-1.5a.75.75 0 011.5 0v1.5A1.75 1.75 0 019.25 16h-7.5A1.75 1.75 0 010 14.25v-7.5z"></path>
            <path d="M5 1.75C5 .784 5.784 0 6.75 0h7.5C15.216 0 16 .784 16 1.75v7.5A1.75 1.75 0 0114.25 11h-7.5A1.75 1.75 0 015 9.25v-7.5zm1.75-.25a.25.25 0 00-.25.25v7.5c0 .138.112.25.25.25h7.5a.25.25 0 00.25-.25v-7.5a.25.25 0 00-.25-.25h-7.5z"></path>
          </svg>
        )}
      </button>
    </div>
  );
}
