# github-actions-cicd-platform

Reusable GitHub Actions CI/CD template with a sample Node.js API.

[![CI](https://github.com/sanjanapeterlead/github-actions-cicd-platform/actions/workflows/ci.yml/badge.svg)](https://github.com/sanjanapeterlead/github-actions-cicd-platform/actions/workflows/ci.yml)

## What's included

| Path | Purpose |
|------|---------|
| `.github/workflows/ci.yml` | Runs tests on push/PR to `main` only |
| `services/api/` | Sample Express API with health endpoint |
| `services/api/Dockerfile` | Multi-stage image (build locally; not run in CI) |

## CI safety

The workflow is intentionally minimal to stay within GitHub Actions free-tier limits:

- **One job** per run (no matrices)
- **10-minute timeout**
- **No scheduled triggers** (`cron`)
- **No secrets** required
- **Concurrency** cancels duplicate runs on the same branch
- **Docker build excluded** from CI (run locally instead)

This pattern avoids the resource-exhaustion issues caused by mining scripts, infinite workflow loops, or large job matrices.

## Quick start

```bash
cd services/api
npm install
npm test
npm start
```

Health check: `GET http://localhost:3000/health` → `{ "status": "ok" }`

## Docker (local)

```bash
cd services/api
docker build -t sample-api .
docker run -p 3000:3000 sample-api
```

## Extending

- Add a separate `deploy.yml` with `workflow_dispatch` or tagged releases
- Copy `services/api/` as a starting point for your own service
- Wire secrets only when you add deployment steps

## License

MIT
