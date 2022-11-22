import { Fragment, useEffect, useState } from 'react';

import { $ } from '~/libs/core';
import { Section, SubSection, TableOfContents } from '~/libs/types';

const useScroll = (tableOfContents: TableOfContents) => {
  const [currentSectionSlug, setCurrentSectionSlug] = useState(tableOfContents?.[0].slug);

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

      let current = headings[0].id;
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

export default function TocBanner({ tableOfContents }: { tableOfContents: TableOfContents }) {
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
    <div className="fixed ml-8 mt-8 overflow-y-auto px-8">
      <p className="mb-4 text-sm font-semibold leading-6 text-gray-900 dark:text-gray-100">
        On this page
      </p>
      <ul className="flex flex-col items-start justify-start text-sm">
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
    </div>
  );
}
