import { h, s } from 'hastscript';
import { useEffect } from 'react';
import { toast } from 'react-hot-toast';
import { visit } from 'unist-util-visit';

export default function rehypeCodeWrap() {
  return (tree) => {
    visit(tree, { tagName: 'pre' }, (node, index) => {
      if (!node.children || !node.children.length) return;

      const { properties } = node.children[0];
      if (!properties.className || !properties.className.length) return;

      const childrens = [];

      // code title
      const [lang, filename] = properties.className[0].split(':').map((e) => e.trim());
      if (filename) {
        properties.className = lang;
        childrens.push(
          h('div', { class: 'rehype-code-wrap--title' }, [
            h('div', { class: 'rehype-code-wrap--title-text' }, filename),
            h('div', { class: 'rehype-code-wrap--title-blank' }, ''),
          ]),
        );
      }

      // code block
      childrens.push(node);

      // copy clipboard
      childrens.push(
        h(
          'button',
          {
            class: 'rehype-code-wrap--copy',
            'aria-label': 'copy-button',
          },
          [
            // copy icon
            s(
              'svg',
              {
                class: 'rehype-code-wrap--copy-icon',
                xmlns: 'http://www.w3.org/2000/svg',
                height: '16',
                width: '16',
                viewbox: '0 0 16 16',
                fill: 'currentColor',
              },
              [
                s('path', {
                  d: 'M0 6.75C0 5.784.784 5 1.75 5h1.5a.75.75 0 010 1.5h-1.5a.25.25 0 00-.25.25v7.5c0 .138.112.25.25.25h7.5a.25.25 0 00.25-.25v-1.5a.75.75 0 011.5 0v1.5A1.75 1.75 0 019.25 16h-7.5A1.75 1.75 0 010 14.25v-7.5z',
                }),
                s('path', {
                  d: 'M5 1.75C5 .784 5.784 0 6.75 0h7.5C15.216 0 16 .784 16 1.75v7.5A1.75 1.75 0 0114.25 11h-7.5A1.75 1.75 0 015 9.25v-7.5zm1.75-.25a.25.25 0 00-.25.25v7.5c0 .138.112.25.25.25h7.5a.25.25 0 00.25-.25v-7.5a.25.25 0 00-.25-.25h-7.5z',
                }),
              ],
            ),
            // check icon
            s(
              'svg',
              {
                class: 'rehype-code-wrap--check-icon',
                xmlns: 'http://www.w3.org/2000/svg',
                height: '16',
                width: '16',
                viewbox: '0 0 16 16',
                fill: 'currentColor',
              },
              [
                s('path', {
                  d: 'M13.78 4.22a.75.75 0 010 1.06l-7.25 7.25a.75.75 0 01-1.06 0L2.22 9.28a.75.75 0 011.06-1.06L6 10.94l6.72-6.72a.75.75 0 011.06 0z',
                }),
              ],
            ),
          ],
        ),
      );

      tree.children[index] = h('div', { class: 'rehype-code-wrap' }, childrens);
    });
  };
}

export const useRehypeCodeCopy = () => {
  useEffect(() => {
    let timeOut;

    const copyEvent = (e) => {
      const target = e.target.closest('.rehype-code-wrap--copy');
      if (!target) return;

      const text = target.parentNode.querySelector('code')?.innerText ?? '';
      const clipboardIcon = target.querySelector('.rehype-code-wrap--copy-icon');
      const checkIcon = target.querySelector('.rehype-code-wrap--check-icon');

      navigator.clipboard
        .writeText(text)
        .then(() => {
          if (checkIcon && clipboardIcon) {
            checkIcon.style.display = 'block';
            clipboardIcon.style.display = 'none';

            timeOut = setTimeout(() => {
              checkIcon.style.display = 'none';
              clipboardIcon.style.display = 'block';
            }, 1500);
          }

          toast.success('code copy successful');
        })
        .catch((e) => {
          console.error(e);
          toast.error('code copy failed');
        });
    };

    document.addEventListener('click', copyEvent);
    return () => {
      document.removeEventListener('click', copyEvent);
      timeOut && clearInterval(timeOut);
    };
  }, []);
};
