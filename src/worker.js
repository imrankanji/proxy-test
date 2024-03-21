/**
 * Welcome to Cloudflare Workers! This is your first worker.
 *
 * - Run "npm run dev" in your terminal to start a development server
 * - Open a browser tab at http://localhost:8787/ to see your worker in action
 * - Run "npm run deploy" to publish your worker
 *
 * Learn more at https://developers.cloudflare.com/workers/
 */

export default {
    async fetch(request, env, ctx) {
      const oldUrl = new URL(request.url)
      console.log({oldUrl})
      console.log('xx', oldUrl.searchParams.get('url'))
      let url = oldUrl.searchParams.get('url')
      if (!url.includes('http')) url = oldUrl.protocol+ '//' + url
  
      console.log(url)
      
      const modifiedRequest = new Request(url, request);
      return fetch(modifiedRequest);
    },
  };