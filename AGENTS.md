# AGENTS.md

## Project
- Repo: grupomassaru/lamadre-configs
- Portfolio Area: Shared
- Class: Shared
- Role: Shared technical configs, tooling, and reusable baselines.
- Runtime/Environment: Public GitHub/shared config
- Canonical source: 01-projects/github-repository-catalog-2026-05-10.md
- Operational risk: Medium

## Agent Rules
- Track work in GitHub Project Master Roadmap 2026: https://github.com/users/grupomassaru/projects/2
- Keep GitHub code, green CI, deployed code, and runtime proof as separate states.
- Record durable evidence in issues/PRs and canonical docs in lamadre-docs.
- Never rotate keys, tokens, passwords, certificates, JWT secrets, or other secrets without Rafael double confirmation in the same conversation.
- Never expose secret values in issues, PRs, logs, screenshots, docs, or responses.
- Validate the correct environment when runtime is affected: Local Mac, GitHub, VPS, Lovable Cloud, Supabase, or Production.
- For public or documentation repositories, keep content free of credentials and sensitive internal details.
This repository is public: do not include secrets or sensitive internal details.

## Labels
- Use standard labels: type:*, priority:*, evidence:*, env:*, risk:*, gate:*, area:*.
- Use evidence:runtime-verified only after real proof in the target environment.
- Use gate:rafael-confirmation for secrets or destructive work.

## Canonical References
- Repository catalog: lamadre-docs/01-projects/github-repository-catalog-2026-05-10.md
- Portfolio organization: lamadre-docs/01-projects/github-portfolio-organization-2026-05-10.md