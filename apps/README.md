# Notes
Key concepts I learned.
## Server Components

A concept introduced recently in react that makes it easy to serve large dependecies, sensitive information(secrets, access tokens, api keys) and fetching data from the server without the use of hooks. They're rendered on the server, so they don't need to hydrate in the browser. This makes them faster on the cleint.
A bit more complex to tell the difference at first, but it's good to have the option of SSG ( Server Sided Rendering ).

Can be declared as async functions.
```ts
async function getData(){
  const res = await fetch('api/route/');

  if( !res.ok) { 
    throw new OoofError("Failed to fetch data :/ ");
  }

  return res.json();
}

export defualt async function Page(){
  const data = await getData();
  return <main/>
}

```
## App directory

Different, but with new features and cleaner syntax than the Pages Directory.
Example features in NextJS 13:
- Streaming & Suspense boundaries ( Nonblocking data fatching )
- New Image component
- New Link component
- New font system for custom fonts
- Server actions ( functions that run on the server that can be creating from components )
- Route Handlers for the apis

## How NextJS renders 

### Client Side Rendering

The OG React way. Plop a big ol' root div where everything is rendered using javascript.
Not the best for SEO or on less powerful devices or places with bad internet, as instead of sending HTML over the wire, we send JS that updates the virtual DOM.

*Bundle Size Matters*

### Server Side Rendering

With a smaller JS Bundle, enabled by Hydration ( sending a bit of JS with the prerendered HTML file).
Good for SEO. AKA Static Site Generation. This is how NextJS does stuff. Even Nextjs 12.

### Client Component
- Rendered on the server
- Hydrated in the browser
- Interactive

### Server Component
- Rendered on the server
- No hydration needed
- No interactivity

The official NextJS 13 docs on [Server Components](https://nextjs.org/docs/app/building-your-application/rendering/server-components) has a good example.

### Goldilocks

Finding a good balance between these is key to a modern, performant website.
I'll prioritize server components, but whenever I'll need to use onClick(), onChange() etc, I'll use a client components.


