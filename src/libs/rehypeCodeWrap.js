import { visit } from 'unist-util-visit';

export default function rehypeCodeWrap() {
  return (tree) => {
    visit(tree, { tagName: 'pre' }, (node, index) => {
      if (!node.children || !node.children.length) return;

      // code tag
      const { properties } = node.children[0];
      if (!properties.className || !properties.className.length) return;

      // parse code title
      const [lang, filename] = properties.className[0].split(':').map((e) => e.trim());
      if (filename) {
        properties.className = lang;
        node.properties.title = filename;
      }

      tree.children[index] = node;
    });
  };
}
