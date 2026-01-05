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
-   **AI Integration**: [Vercel AI SDK](https://sdk.vercel.ai/docs) + [Google Gemini](https://ai.google.dev/)

## Requirements

-   **Bun**: You must have Bun installed to run this project. **Do not use Node.js, npm, or yarn.**
    -   [Install Bun](https://bun.sh/docs/installation)
-   **Google Gemini API Key**: Required for AI-powered feedback features.

## AI Configuration (Google Gemini)

To enable AI feedback features, you need a free Google Gemini API key.

1.  **Get a Free Key**: Go to [Google AI Studio](https://aistudio.google.com/app/apikey) and create a new API key.
2.  **Configure Environment**:
    -   Create a `.env` file in the root directory (copy from `.env.example` if available).
    -   Add your key to the file:
        ```env
        VITE_GOOGLE_GENERATIVE_AI_API_KEY=your_api_key_starting_with_AIza...
        ```
    > **Note**: This key is exposed to the browser client-side. For a personal demo/learning project this is acceptable, but for a public production app, you should proxy requests through a backend.

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
