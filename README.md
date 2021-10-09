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

# Next.js Amazona

Build ECommerce Website Like Amazon by Next.js

## Lessons

1. Introduction
   1. What you will learn
   2. What you will build
   3. What Packages you will use
2. Install Tools
   1. VS Code
   2. Chrome
   3. Node.js
   4. MongoDB
3. Create Next App
   1. npx create-next-app
   2. add layout component
   3. add header, main and footer
4. Add Styles
   1. add css to header, main and footer
5. Fix SSR Issue on MaterialUI
   1. add \_documents.js
   2. add code to fix styling issue
6. List Products
   1. add data.js
   2. add images
   3. render products
7. Add header links
   1. Add cart and login link
   2. use next/link and mui/link
   3. add css classes for header links
8. Route Product Details Page
   1. Make Product cards linkable
   2. Create /product/[slug] route
   3. find product based on slug
9. Create Product Details Page
   1. Create 3 columns
   2. show image in first column
   3. show product info in second column
   4. show add to cart action on third column
   5. add styles
