export default {
  async fetch(request, env) {
    const url = new URL(request.url);
    const pathname = url.pathname;

    if (pathname.startsWith('/demos/')) {
      const parts = pathname.split('/').filter(p => p);
      const repo = parts[1];
      const restPath = pathname.replace(`/demos/${repo}`, '');
      
      return fetch(`https://bunn1e5.github.io/${repo}${restPath}${url.search}`);
    }
    //return fetch(request);
    return env.assets.fetch(request);
  },
};