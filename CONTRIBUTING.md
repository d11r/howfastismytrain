# Contributing to How Fast Is My Train?

Thanks for your interest in contributing! This project is open source and welcomes contributions.

## Getting Started

1. Fork the repository
2. Clone your fork: `git clone https://github.com/YOUR_USERNAME/howfastismytrain.git`
3. Install dependencies: `npm install`
4. Create a branch: `git checkout -b feature/your-feature-name`
5. Start the dev server: `npm run dev`

## Development

```bash
npm run dev     # Start development server
npm run build   # Build for production
npm run lint    # Run ESLint
```

## Making Changes

1. Make your changes
2. Test on a mobile device if possible (GPS features require a real device)
3. Ensure the code passes linting: `npm run lint`
4. Commit with a descriptive message
5. Push to your fork
6. Open a Pull Request

## Pull Request Guidelines

- Keep PRs focused on a single change
- Update documentation if needed
- Add a clear description of what the PR does
- Reference any related issues

## Code Style

- TypeScript for all new code
- Use Tailwind CSS for styling
- Follow existing patterns in the codebase
- Keep components small and focused

## Testing on Mobile

Since this app uses GPS, testing on a real mobile device is recommended:

1. Run `npm run dev` to start the dev server
2. Find your local IP (e.g., `192.168.1.100`)
3. Open `http://YOUR_IP:3000` on your phone (must be on same network)
4. Note: HTTPS is required for GPS on some browsers in production

## Questions?

Open an issue if you have questions or want to discuss a feature idea before implementing it.

## License

By contributing, you agree that your contributions will be licensed under the MIT License.
