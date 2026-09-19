import { error } from '@sveltejs/kit';
import type { PageLoad } from './$types';

export const load: PageLoad = async ({ params }) => {
  const { repo } = params;
  
  const response = await fetch(
    `https://raw.githubusercontent.com/BUNN1E5/${repo}/blog/blog.md`
  );
  
  if (!response.ok) {
    throw error(404, "Blog post not found");
  }
  
  const markdown = await response.text();
  
  return { markdown, repo };
};