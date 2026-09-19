export async function handle({ event, resolve }) {
  const pathname = event.url.pathname;

  if (pathname.startsWith('/demos/')) {
    const parts = pathname.split('/').filter(p => p);
    const repo = parts[1];
    const restPath = pathname.replace(`/demos/${repo}`, '');

    return fetch(`https://bunn1e5.github.io/${repo}${restPath}${event.url.search}`);
  }

  return resolve(event);
}
