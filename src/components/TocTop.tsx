import { TableOfContents } from '~/libs/types';

import Hr from './common/Hr';

export default function TocTop({
  tableOfContents,
  className,
}: {
  tableOfContents: TableOfContents;
  className?: string;
}) {
  if (tableOfContents.length === 0) {
    return <></>;
  }

  return (
    <div className={className}>
      <h2 id="table-of-contents">Table of contents</h2>
      <ul>
        {tableOfContents.map((section) => (
          <li key={section.slug}>
            <a href={`#${section.slug}`}>{section.text}</a>
            <ul>
              {section.subSections.map((subSection) => (
                <li key={subSection.slug}>
                  <a href={`#${subSection.slug}`}>{subSection.text}</a>
                </li>
              ))}
            </ul>
          </li>
        ))}
      </ul>
      <Hr />
    </div>
  );
}
