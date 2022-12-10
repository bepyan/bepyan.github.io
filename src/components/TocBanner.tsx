import { Fragment, useEffect, useState } from 'react';

import { $ } from '~/libs/core';
import { Section, SubSection, TableOfContents } from '~/libs/types';
import CopyLinkButton from './common/CopyLinkButton';
import IconButton from './common/IconButton';
import ChatIcon from './icons/ChatIcon';
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

export default function TocBanner({
  tableOfContents,
  className,
}: {
  tableOfContents: TableOfContents;
  className?: string;
}) {
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

  return (
    <div
      className={$(
        'overflow-hidden rounded-xl border border-gray-200 transition-all dark:border-gray-800',
        className,
      )}
    >
      {tableOfContents.length !== 0 && (
        <div className="bg-gray-100 p-4 pr-2 dark:border-gray-700 dark:bg-gray-800">
          <p
            id="toc-header"
            className="text-sm font-semibold leading-6 text-gray-900 dark:text-gray-100"
          >
            On this page
          </p>
          <ul id="toc-content" className="mt-2 flex flex-col items-start justify-start text-sm">
            {tableOfContents.map((section) => (
              <Fragment key={section.slug}>
                <li>
                  <a
                    href={`#${section.slug}`}
                    className={$(
                      'group block py-1 transition-colors',
                      section.subSections && 'font-medium',
                      isSectionActive(section)
                        ? 'font-medium text-gray-900 drop-shadow-base-bold dark:font-medium dark:text-yellow-400 dark:drop-shadow-base'
                        : 'text-gray-700 hover:text-gray-900 hover:drop-shadow-base-bold dark:text-gray-400 dark:hover:text-gray-300 dark:hover:drop-shadow-base',
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
                          ? 'font-medium text-gray-900 drop-shadow-base-bold dark:text-yellow-400 dark:drop-shadow-base'
                          : 'text-gray-700 hover:text-gray-900 hover:drop-shadow-base-bold dark:text-gray-400 dark:hover:text-gray-300 dark:hover:drop-shadow-base',
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
        </div>
      )}
      <div className="flex items-center justify-end bg-gray-150 p-2 dark:bg-gray-700">
        <CopyLinkButton />
        <IconButton onClick={() => window.scrollTo({ top: 0 })}>
          <UpIcon width={20} />
        </IconButton>
        <IconButton onClick={() => document.querySelector('.giscus')?.scrollIntoView()}>
          <ChatIcon width={20} />
        </IconButton>
        <ThemeSwitch />
      </div>
    </div>
  );
}
