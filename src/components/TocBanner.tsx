import { Fragment, useEffect, useRef, useState } from 'react';

import { $ } from '~/libs/core';
import { Section, SubSection, TableOfContents } from '~/libs/types';
import IconButton from './common/IconButton';
import UpIcon from './icons/UpIcon';
import ThemeSwitch from './ThemeSwitch';

const useScroll = (tableOfContents: TableOfContents) => {
  const [currentSectionSlug, setCurrentSectionSlug] = useState<string | undefined>();

  useEffect(() => {
    if (tableOfContents.length === 0) return;

    let headings: { id: string; top: number }[];
    const style = window.getComputedStyle(document.documentElement);
    const scrollMt =
      parseFloat(style.getPropertyValue('--scroll-mt').match(/[\d.]+/)?.[0] ?? '0') *
      parseFloat(style.fontSize.match(/[\d.]+/)?.[0] ?? '16');

    function onResize() {
      headings = Array.from(
        document.querySelectorAll<HTMLElement>(
          '.prose h2:not(#table-of-contents),h3:not(#table-of-contents)',
        ),
      ).map((element) => ({ id: element.id, top: element.offsetTop }));
    }

    function onScroll() {
      if (!headings) return;

      const NAV_TOP = 120;
      const top = window.pageYOffset + scrollMt - NAV_TOP + 1;

      let current: typeof currentSectionSlug = undefined;
      for (let i = 0; i < headings.length; i++) {
        if (top >= headings[i].top) {
          current = headings[i].id;
        }
      }
      setCurrentSectionSlug(current);
    }

    onResize();
    onScroll();
    window.addEventListener('scroll', onScroll, { capture: true, passive: true });
    window.addEventListener('resize', onResize, { capture: true, passive: true });
    return () => {
      window.removeEventListener('scroll', onScroll, { capture: true });
      window.removeEventListener('resize', onResize, { capture: true });
    };
  }, [tableOfContents]);

  return { tableOfContents, currentSectionSlug };
};

const useObserver = () => {
  const rootRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const $toc = document.querySelector('#table-of-contents');
    if (!$toc) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!rootRef.current) return;

        const $root = rootRef.current;
        $root.style.display = 'block';

        const $header = $root.querySelector<HTMLElement>('#toc-header');
        const $list = Array.from($root.querySelectorAll<HTMLElement>('#toc-content > li'));
        const $footer = $root.querySelector<HTMLElement>('#toc-footer');
        const elementList = [$root, $header, $footer, ...$list].filter(Boolean) as HTMLElement[];

        if (entry.isIntersecting) {
          elementList.reverse().forEach((element, i) => {
            element.style.opacity = '0';
            element.style.pointerEvents = 'none';
            element.style.transition = '200ms ease-out';
            element.style.transitionDelay = `${i * 15}ms`;
          });
        } else {
          elementList.forEach((element, i) => {
            element.style.opacity = '1';
            element.style.pointerEvents = 'auto';
            element.style.transition = '150ms ease-out';
            element.style.transitionDelay = `${i * 10}ms`;
          });
        }
      },
      { threshold: 0.7 },
    );

    observer.observe($toc);
  }, []);

  return rootRef;
};

export default function TocBanner({
  tableOfContents,
  className,
}: {
  tableOfContents: TableOfContents;
  className?: string;
}) {
  const rootRef = useObserver();
  const { currentSectionSlug } = useScroll(tableOfContents);

  const isSubSectionActive = (subSection: SubSection) => {
    return subSection.slug === currentSectionSlug;
  };

  const isSectionActive = (section: Section) => {
    return (
      section.slug === currentSectionSlug ||
      section.subSections.some((v) => v.slug === currentSectionSlug)
    );
  };

  if (tableOfContents.length === 0) {
    return <></>;
  }

  return (
    <div
      ref={rootRef}
      className={$(
        'hidden rounded-xl border border-gray-250/50 p-4 dark:border-gray-700',
        className,
      )}
    >
      <p
        id="toc-header"
        className="mb-4 text-sm font-semibold leading-6 text-gray-900 dark:text-gray-100"
      >
        On this page
      </p>
      <ul id="toc-content" className="flex flex-col items-start justify-start text-sm">
        {tableOfContents.map((section) => (
          <Fragment key={section.slug}>
            <li>
              <a
                href={`#${section.slug}`}
                className={$(
                  'group block py-1 transition-colors',
                  section.subSections && 'font-medium',
                  isSectionActive(section)
                    ? 'font-medium text-yellow-500 drop-shadow-base dark:text-yellow-400'
                    : 'text-gray-700 hover:text-gray-900 hover:drop-shadow-base dark:text-gray-400 dark:hover:text-gray-300',
                )}
              >
                {section.text}
              </a>
            </li>
            {section.subSections.map((subSection) => (
              <li key={subSection.slug} className="ml-4">
                <a
                  href={`#${subSection.slug}`}
                  className={$(
                    'group flex items-start py-1 transition-colors',
                    isSubSectionActive(subSection)
                      ? 'text-yellow-500 drop-shadow-base dark:text-yellow-400'
                      : 'text-gray-700 hover:text-gray-900 hover:drop-shadow-base dark:text-gray-400 dark:hover:text-gray-300',
                  )}
                >
                  <svg
                    width="3"
                    height="24"
                    viewBox="0 -9 3 24"
                    className={$(
                      'mr-2 overflow-visible',
                      'text-gray-400 group-hover:text-gray-600 dark:text-gray-600 dark:group-hover:text-gray-500',
                    )}
                  >
                    <path
                      d="M0 0L3 3L0 6"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                    />
                  </svg>
                  {subSection.text}
                </a>
              </li>
            ))}
          </Fragment>
        ))}
      </ul>
      <div id="toc-footer" className="mt-4 flex items-center justify-end">
        <IconButton onClick={() => window.scrollTo({ top: 0 })}>
          <UpIcon width={20} />
        </IconButton>
        <ThemeSwitch />
      </div>
    </div>
  );
}
