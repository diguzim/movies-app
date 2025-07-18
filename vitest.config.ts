import { defineConfig } from 'vitest/config';

export default defineConfig({
  test: {
    globals: true, // Enables global test functions like `describe`, `it`, etc.
    environment: 'jsdom', // Sets the testing environment to `jsdom` for React components
    setupFiles: './vitest.setup.ts', // Optional: Add setup files for global configurations
  },
});