import { TableOfContents } from '~/libs/types';
import Hr from './common/Hr';

export default function TocTop({ tableOfContents }: { tableOfContents: TableOfContents }) {
  if (tableOfContents.length === 0) {
    return <></>;
  }

  return (
    <>
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
    </>
  );
}