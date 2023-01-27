import { KBarAnimator, KBarPortal, KBarPositioner, KBarResults, useMatches } from 'kbar';
import React from 'react';

import { $ } from '~/libs/core';
import useKBarPostAction from '~/libs/useKBarPostAction';
import useKBarThemeAction from '~/libs/useKBarThemeAction';

import { KBarSearch } from './KBarSearch';

export default function KBar() {
  useKBarThemeAction();
  useKBarPostAction();

  return (
    <KBarPortal>
      <KBarPositioner className="z-50">
        <div className="pointer-events-none fixed inset-0 h-full w-full bg-white bg-opacity-50 backdrop-blur dark:bg-black dark:bg-opacity-50" />
        <KBarAnimator
          className={$(
            'w-full overflow-hidden rounded-lg bg-gray-100 shadow-xl dark:bg-gray-700',
            'dark:border dark:border-gray-600',
          )}
          style={{
            maxWidth: '600px',
            boxShadow: '0 16px 70px rgb(0 0 0 / 20%)',
          }}
        >
          <KBarSearch className="box-border w-full border-none bg-gray-100 px-6 py-4 outline-none dark:bg-gray-700" />
          <div className="kbar-scrollbar pb-4">
            <RenderResults />
          </div>
        </KBarAnimator>
      </KBarPositioner>
    </KBarPortal>
  );
}

function RenderResults() {
  const { results } = useMatches();

  return (
    <KBarResults
      items={results}
      onRender={({ item, active }) =>
        typeof item === 'string' ? (
          <div className="mx-3 py-2 text-xs text-gray-700 dark:text-gray-400">{item}</div>
        ) : (
          <div
            className={$(
              'mx-3 flex cursor-pointer items-center gap-3 rounded-lg p-3 text-sm transition-colors',
              active && 'bg-gray-200 dark:bg-gray-600',
            )}
          >
            {item.icon && item.icon}
            <div className="flex flex-col font-medium">
              <div>{item.name}</div>
              {item.subtitle && (
                <span className="text-xs font-normal text-gray-600 dark:text-gray-400">
                  {item.subtitle}
                </span>
              )}
            </div>

            {item.shortcut?.length && (
              <div className="ml-auto flex gap-2">
                {item.shortcut.map((sc) => (
                  <kbd
                    key={sc}
                    className="rounded-md px-2 py-1 text-xs"
                    style={{
                      background: 'rgba(0 0 0 / .1)',
                    }}
                  >
                    {sc}
                  </kbd>
                ))}
              </div>
            )}
          </div>
        )
      }
    />
  );
}
