# Avinash Chandra Srivastava | Senior Platform Engineer Portfolio

Personal portfolio site for Avinash Chandra Srivastava, a Senior Platform Engineer with 16+ years of experience in AWS, Kubernetes (EKS), Terraform, SRE, DevSecOps, and agentic platform operations.

Live: [https://hey.iamavi.uk](https://hey.iamavi.uk)

## Highlights

- Senior Platform Engineer at Viator (TripAdvisor): EKS lifecycle, Disaster Recovery, edge / WAF, IaC governance, IDP, and agentic operations.
- Severity 1 Incident Commander (AWS NAT blackhole, DataDome global block, Fastly regression, GitLab.com outage).
- Multi-quarter platform programs: AWS SSO migration, Disaster Recovery, kagent + MCP rollout.
- Awards: DevOps Industry Awards 2019, European Software Testing Awards 2018 and 2019.

## Tech Stack

- Frontend: React 18, Vite 7, Sass, Lottie, react-awesome-reveal
- Hosting: GitHub Pages on `hey.iamavi.uk` (Cloudflare DNS)
- CI / CD: GitHub Actions (build + deploy + Dependabot weekly updates)

## Local Development

```bash
# Install
npm ci

# Run dev server (http://localhost:3000)
npm start

# Production build
npm run build

# Preview production build
npm run preview

# Tests
npm test

# Format / lint
npm run format
npm run check-format
```

## Configuration

Edit content in `src/portfolio.js`. Theme colours live in `src/_globalColor.scss`. Page metadata, structured data (JSON-LD `Person`), and security headers live in `index.html`.

Optional GitHub / Medium data fetch is gated by `USE_GITHUB_DATA` / `MEDIUM_USERNAME` environment variables (see `fetch.js`).

## Security Posture

- Strict Content Security Policy (CSP) and Permissions-Policy delivered via `<meta>` headers.
- `Referrer-Policy: strict-origin-when-cross-origin`, `X-Content-Type-Options: nosniff`.
- `frame-ancestors 'none'` (clickjacking protection), `object-src 'none'`, `upgrade-insecure-requests`.
- `crossorigin="anonymous"` on third-party CDN stylesheets.
- `.well-known/security.txt` for responsible disclosure.
- Dependabot weekly updates for npm and GitHub Actions.

## SEO

- Canonical URL, descriptive `<title>` and meta description, Open Graph, Twitter Card.
- `sitemap.xml` referenced from `robots.txt`.
- JSON-LD `Person` schema for rich results.

## Deployment

Pushes to `main` trigger `.github/workflows/deploy.yml`, which builds the site and publishes to GitHub Pages via `actions/deploy-pages`.

## License

MIT - see `LICENSE`.
