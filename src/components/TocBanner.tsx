import { $ } from '~/libs/core';

const slugify = (str: string) => {
  return str
    .trim()
    .toLowerCase()
    .replace(/[^a-z0-9ㄱ-ㅎ|ㅏ-ㅣ|가-힣 -]/g, '')
    .replace(/\s+/g, '-')
    .replace(/-+/g, '-')
    .replace(/^-+/, '')
    .replace(/-+$/, '');
};

export default function TocBanner({ source }: { source: string }) {
  const headings = source
    .split('\n')
    .filter((line) => line.match(/(^#{1,3})\s/))
    .filter((line) => line.toLowerCase().match(/^(?!.*(toc|table of contents)).*$/g))
    .map((heading) => {
      return {
        href: slugify(heading),
        text: heading.replace(/^##*\s/, ''),
        isSubTitle: heading.split('#').length - 1 === 3,
      };
    });

  return (
    <div className="fixed ml-8 overflow-y-auto px-8">
      <p className="mb-4 text-sm font-semibold leading-6 text-gray-900 dark:text-gray-100">
        On this page
      </p>
      <ul className="flex flex-col items-start justify-start">
        {headings.map(({ href, text, isSubTitle }, i) => (
          <li key={i}>
            <a
              href={`#${href}`}
              className={$(
                'group flex items-start py-1 text-sm font-medium',
                'hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-300',
                isSubTitle && 'ml-4',
              )}
            >
              {isSubTitle && (
                <svg
                  width="3"
                  height="24"
                  viewBox="0 -9 3 24"
                  className="mr-2 overflow-visible text-gray-400 group-hover:text-gray-600 dark:text-gray-600 dark:group-hover:text-gray-500"
                >
                  <path
                    d="M0 0L3 3L0 6"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                  />
                </svg>
              )}
              {text}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}
