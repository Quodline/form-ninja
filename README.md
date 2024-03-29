- Next.js App Router
- Supabase
- Mantine
- React Query
- Storybook
- React Testing Library

```
"scripts": {
  "dev": "next dev",
  "build": "next build",
  "analyze": "ANALYZE=true next build",
  "start": "next start",
  "typecheck": "tsc --noEmit",
  "lint": "next lint && npm run lint:stylelint",
  "lint:stylelint": "stylelint '**/*.css' --cache",
  "jest": "jest",
  "jest:watch": "jest --watch",
  "prettier:check": "prettier --check \"**/*.{ts,tsx}\"",
  "prettier:write": "prettier --write \"**/*.{ts,tsx}\"",
  "test": "npm run prettier:check && npm run lint && npm run typecheck && npm run jest",
  "storybook": "storybook dev -p 6006",
  "storybook:build": "storybook build"
},
```
