import { error } from '@sveltejs/kit';
import { marked } from 'marked';

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
  
  return { htmlOutput, repo };
};