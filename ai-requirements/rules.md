# Project Rules for AI Assistants

## Runtime & Package Management
- **Runtime**: **Bun** is the strictly enforced runtime for this project.
- **Package Manager**: **Bun** is the strictly enforced package manager.
- **Commands**:
  - Install dependencies: `bun install`
  - Run development server: `bun run dev`
  - Build project: `bun run build`
  - Run generic scripts: `bun run <script>`
  - Execute binaries: `bun x <package>` (equivalent to `npx`)

**FORBIDDEN**:
- Do NOT use `npm`, `yarn`, or `pnpm`.
- Do NOT use `node` to execute scripts directly unless wrapped by Bun.
