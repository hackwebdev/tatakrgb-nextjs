https://github.com/basir/next-amazona

$ npx create-next-app .

### Create a Layout

Install Material UI

- npm install @material-ui/core

\_document.js - is commonly used to augment your application's <html> and <body> tags. This is necessary because Next.js pages skip the definition of the surrounding document's markup.

### Error webpack 5

```
ChunkLoadError: Loading chunk node_modules_next_dist_client_dev_noop_js failed.
(error: http://localhost:3000/_next/static/chunks/fallback/node_modules_next_dist_client_dev_noop_js.js)
```

Fix

```
Delete the .next folder at the root of your project, relaunch your project, and force-refresh your page (Shift+F5 / Cmd+Shift+R) to remove the cache.
```
