import { TableOfContents } from '~/libs/types';
import Hr from './common/Hr';

export default function TocTop({ tableOfContents }: { tableOfContents: TableOfContents }) {
  return (
    <div>
      <h2 id="table-of-contents">Table of contents</h2>
      <ul>
        {tableOfContents.map((section) => (
          <li key={section.slug}>
            <p>
              <a href={`#${section.slug}`}>{section.text}</a>
            </p>
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
