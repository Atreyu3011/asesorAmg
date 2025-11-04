// Next.js => utils/markdownToHtml.js
// This utility will be used to convert the MDX content into HTML
 
import { unified } from 'unified';
import remarkParse from 'remark-parse';
import remarkGfm from 'remark-gfm';
import remarkRehype from 'remark-rehype';
import rehypeStringify from 'rehype-stringify';
import rehypePrettyCode from 'rehype-pretty-code';
// Utils to get the markdown and applies some conversions
export default async function markdownToHtml(markdown: string) {
  const result = await unified()
    .use(remarkParse) // parses the markdown into syntax tree
    .use(remarkGfm) // enables GitHub extensions to markdown
    .use(remarkRehype) // transforms markdown syntax tree into an HTML
    .use(rehypePrettyCode, {
      // syntax highlighting for code (like this one)
      theme: 'min-dark',
      keepBackground: false,
    })
    .use(rehypeStringify) // turns it into serialized HTML
    .process(markdown);
  return result.toString();
}