# The Good AI Lab Website

This is the frontend website for The Good AI Lab, built with [Next.js](https://nextjs.org).

## Development

If you don't have node installed run the following command to install it:

```bash
brew install node@22
brew link node@22
brew install pnpm
```

To run the development server:

```bash
# Install dependencies
pnpm install

# Start the development server
pnpm dev
```

Then open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Project Structure

- `src/app` - Next.js app router pages and layouts
- `src/components` - React components
  - `sections` - Main page sections (About, WhatWeDo, HowWeOperate)
  - `layout` - Layout components like Footer
  - `icons` - SVG icons and related components
- `src/config` - Configuration files and settings

## Technologies

- [Next.js 15](https://nextjs.org/) - React framework
- [Tailwind CSS](https://tailwindcss.com/) - Styling
- [Framer Motion](https://www.framer.com/motion/) - Animations
- [TypeScript](https://www.typescriptlang.org/) - Type safety

