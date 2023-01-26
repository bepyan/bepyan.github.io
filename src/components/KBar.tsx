import {
  KBarAnimator,
  KBarPortal,
  KBarPositioner,
  KBarProvider,
  KBarResults,
  KBarSearch,
  useMatches,
} from 'kbar';
import { useRouter } from 'next/router';

import { $ } from '~/libs/core';
import useKbarThemeAction from '~/libs/useKbarThemeAction';
import ArchiveBoxIcon from './icons/ArchiveBoxIcon';
import HomeIcon from './icons/HomeIcon';
import InBox from './icons/InBox';
import InBoxStack from './icons/InBoxStack';

export default function KBar() {
  const router = useRouter();

  const actions = [
    {
      id: 'home',
      name: 'Home',
      shortcut: ['H'],
      keywords: 'profile',
      section: 'Pages',
      icon: <HomeIcon width={18} />,
      perform: () => router.push('/'),
    },
    {
      id: 'blog',
      name: 'Blog',
      shortcut: ['B'],
      keywords: 'writing words',
      section: 'Pages',
      icon: <ArchiveBoxIcon width={18} />,
      perform: () => router.push('/blog'),
    },
    {
      id: 'snippets',
      name: 'Code Snippets',
      shortcut: ['S'],
      keywords: 'code',
      section: 'Pages',
      icon: <InBox width={18} />,
      perform: () => router.push('/snippets'),
    },
    {
      id: 'archives',
      name: 'Archives',
      shortcut: ['A'],
      section: 'Pages',
      icon: <InBoxStack width={18} />,
      perform: () => router.push('/archives'),
    },
  ];

  return (
    <KBarProvider actions={actions} options={{ enableHistory: true }}>
      <CommandBar />
    </KBarProvider>
  );
}

function CommandBar() {
  useKbarThemeAction();

  return (
    <KBarPortal>
      <KBarPositioner>
        <div className="pointer-events-none fixed inset-0 z-40 h-full w-full bg-white bg-opacity-50 backdrop-blur dark:bg-black dark:bg-opacity-50" />
        <KBarAnimator
          className={$(
            'z-50 w-full overflow-hidden rounded-lg bg-gray-100 shadow-xl dark:bg-gray-700',
            'dark:border dark:border-gray-600',
          )}
          style={{
            maxWidth: '600px',
            boxShadow: '0 16px 70px rgb(0 0 0 / 20%)',
          }}
        >
          <KBarSearch className="box-border w-full border-none bg-gray-100 px-6 py-4 outline-none dark:bg-gray-700" />
          <div className="p-4 pt-0">
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
          <div className="py-2 text-xs text-gray-700 dark:text-gray-400">{item}</div>
        ) : (
          <div
            className={$(
              'flex cursor-pointer items-center gap-3 rounded-lg p-3 text-sm transition-colors',
              active && 'bg-gray-200 dark:bg-gray-600',
            )}
          >
            {item.icon && item.icon}
            <div className="flex flex-col font-medium">
              <div>{item.name}</div>
              {item.subtitle && <span style={{ fontSize: 12 }}>{item.subtitle}</span>}
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
