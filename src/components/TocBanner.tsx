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
        'overflow-hidden rounded-xl border border-neutral-200 transition-all dark:border-neutral-800',
        className,
      )}
    >
      {tableOfContents.length !== 0 && (
        <div className="p-4 pr-2 dark:border-neutral-700 dark:bg-neutral-800">
          <p id="toc-header" className="text-primary text-sm font-semibold leading-6">
            On this page
          </p>
          <ul id="toc-content" className="mt-2 flex flex-col items-start justify-start text-sm">
            {tableOfContents.map((section) => (
              <Fragment key={section.slug}>
                <li>
                  <a
                    href={`#${section.slug}`}
                    className={$(
                      'group block py-1',
                      section.subSections && '',
                      isSectionActive(section)
                        ? 'bg-gradient-to-r from-neutral-700 to-yellow-900 bg-clip-text font-extrabold text-transparent dark:from-yellow-400 dark:to-yellow-600'
                        : 'text-secondary hover:text-primary hover:drop-shadow-base-bold dark:hover:drop-shadow-base',
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
                        'group flex items-start py-1',
                        isSubSectionActive(subSection)
                          ? 'bg-gradient-to-r from-neutral-700 to-yellow-900 bg-clip-text font-extrabold text-transparent dark:from-yellow-400 dark:to-yellow-600'
                          : 'text-secondary hover:text-primary hover:drop-shadow-base-bold dark:hover:drop-shadow-base',
                      )}
                    >
                      <svg
                        width="3"
                        height="24"
                        viewBox="0 -9 3 24"
                        className={$(
                          'mr-2 overflow-visible',
                          'text-tertiary group-hover:text-secondary',
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
      <div className={$('flex items-center justify-end p-2', 'bg-neutral-150 dark:bg-neutral-750')}>
        <CopyLinkButton className="mr-auto hover:bg-mute" />
        <IconButton
          className="hover:bg-mute"
          aria-label="scroll-up"
          onClick={() => window.scrollTo({ top: 0 })}
        >
          <UpIcon width={20} />
        </IconButton>
        <IconButton
          className="hover:bg-mute"
          aria-label="scroll-down"
          onClick={() => document.querySelector('.giscus')?.scrollIntoView()}
        >
          <ChatIcon width={20} />
        </IconButton>
        <ThemeSwitch className="hover:bg-mute" />
      </div>
    </div>
  );
}
