'use client';

import { fontMono, fontSpoqa } from '~/libs/fonts';

export default function Fonts() {
  return (
    <>
      <style jsx global>{`
        :root {
          --font-spoqa: ${fontSpoqa.style.fontFamily};
          --font-mono: ${fontMono.style.fontFamily};
        }
      `}</style>
    </>
  );
}
