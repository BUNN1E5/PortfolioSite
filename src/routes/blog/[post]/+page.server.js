import { error } from '@sveltejs/kit';
import hljs from 'highlight.js/lib/core';
import { Marked } from 'marked';
import { markedHighlight } from 'marked-highlight';
import markedKatex from 'marked-katex-extension';

const marked = new Marked(
  markedHighlight({
    emptyLangClass: 'hljs',
    langPrefix: 'hljs language-',
    highlight(code, lang) {
      const language = hljs.getLanguage(lang) ? lang : 'plaintext';
      return hljs.highlight(code, { language }).value;
    }
  })
);

marked.use(markedKatex({
  throwOnError: false
}));

export const load = async ({ params }) => {
  const { post: repo } = params;
  
  const response = await fetch(
    `https://raw.githubusercontent.com/BUNN1E5/${repo}/blog/blog.md`
  );
  
  if (!response.ok) {
    throw error(404, "Blog post not found");
  }
  
  const markdown = await response.text();
  const htmlOutput = marked.parse(markdown);
  
  return { htmlContent: htmlOutput, repo };
};