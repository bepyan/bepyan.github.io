import { useTheme } from 'next-themes';
import { useEffect, useRef } from 'react';

const REPO_NAME = 'bepyan/bepyan.github.io';

export default function Utterances() {
  const ref = useRef<HTMLDivElement>(null);
  const { resolvedTheme } = useTheme();

  const theme = resolvedTheme === 'dark' ? 'github-dark' : 'github-light';

  // first load
  useEffect(() => {
    if (!ref.current || ref.current.hasChildNodes()) return;

    const scriptElem = document.createElement('script');
    scriptElem.src = 'https://utteranc.es/client.js';
    scriptElem.async = true;
    scriptElem.crossOrigin = 'anonymous';
    scriptElem.setAttribute('repo', REPO_NAME);
    scriptElem.setAttribute('issue-term', 'pathname');
    scriptElem.setAttribute('label', ':speech_balloon:');
    scriptElem.setAttribute('theme', theme);

    ref.current.appendChild(scriptElem);
  }, []);

  // when theme change
  useEffect(() => {
    const iframe = document.querySelector<HTMLIFrameElement>('.utterances-frame');

    if (iframe) {
      iframe?.contentWindow?.postMessage({ type: 'set-theme', theme }, 'https://utteranc.es');
    }
  }, [theme]);

  return <section ref={ref} />;
}
