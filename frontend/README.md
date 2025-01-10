# The Good AI Lab Website

This is the frontend website for The Good AI Lab

## Development

If you don't have node installed run the following command to install it:

```bash
brew install node@22
brew link node@22
brew install pnpm
```

Before making changes, prepare automatic pre-commit hooks:

```bash
pnpm prepare
```

To run the development server:

```bash
# Install dependencies
pnpm install

# Start the development server
pnpm dev
```

Then open [http://localhost:5173](http://localhost:5173) with your browser to see the result.


For linting run:

```bash
pnpm lint
```
