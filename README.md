# Prono

**Prono** is a modern React application built for fast, client-side audio-to-text transcription. It leverages the browser's native Web Speech API to provide real-time speech recognition without external service dependencies.

## Tech Stack

This project uses a modern, high-performance stack:

-   **Runtime & Package Manager**: [Bun](https://bun.sh) (Strictly Enforced)
-   **Framework**: [React 19](https://react.dev)
-   **Build Tool**: [Vite](https://vitejs.dev)
-   **Language**: [TypeScript](https://www.typescriptlang.org)
-   **Styling**: [Tailwind CSS v4](https://tailwindcss.com) (using CSS variables via `@theme`)
-   **Typography**: [Inter](https://fonts.google.com/specimen/Inter)
-   **Icons**: [React Icons](https://react-icons.github.io/react-icons/)

## Requirements

-   **Bun**: You must have Bun installed to run this project. **Do not use Node.js, npm, or yarn.**
    -   [Install Bun](https://bun.sh/docs/installation)

## Getting Started

1.  **Clone the repository**:
    ```bash
    git clone <repository-url>
    cd prono
    ```

2.  **Install dependencies**:
    ```bash
    bun install
    ```

3.  **Run the development server**:
    ```bash
    bun run dev
    ```

4.  **Build for production**:
    ```bash
    bun run build
    ```

## Version Control & Rules

-   **Runtime**: Always use `bun` for scripts and package management.
-   **Styling**: Use Tailwind CSS utility classes. For custom theme values, defined them in the `@theme` block in `src/index.css`.
-   **AI Assistance**: Refer to the `ai-requirements/` folder for specific rules and context when working with AI coding assistants.

## Features

-   **Real-time Transcription**: Converts speech to text instantly using the Web Speech API.
-   **Privacy Focused**: Runs entirely in the browser; no audio data is sent to third-party servers (dependent on browser implementation).
-   **Modern UI**: Clean, responsive interface built with Tailwind CSS v4.
