# github-actions-cicd-platform

Reusable GitHub Actions CI/CD template with a sample containerized Node.js API.

[![CI](https://github.com/sanjanapeterlead/github-actions-cicd-platform/actions/workflows/ci.yml/badge.svg)](https://github.com/sanjanapeterlead/github-actions-cicd-platform/actions/workflows/ci.yml)

## What's included

| Path | Purpose |
|------|---------|
| `.github/workflows/ci.yml` | Runs tests and Docker build on push/PR |
| `services/api/` | Sample Express API with health endpoint |
| `services/api/Dockerfile` | Multi-stage image for the sample API |

## Quick start

```bash
cd services/api
npm install
npm test
npm start
```

Health check: `GET http://localhost:3000/health` → `{ "status": "ok" }`

## Docker

```bash
cd services/api
docker build -t sample-api .
docker run -p 3000:3000 sample-api
```

## Extending

- Add deployment workflows (GHCR, AWS, etc.) under `.github/workflows/`
- Copy `services/api/` as a starting point for your own service
- Wire secrets in GitHub → Settings → Secrets and variables → Actions

## License

MIT
