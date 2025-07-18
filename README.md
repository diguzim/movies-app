# Movies App

## Requirements
- Node.js (version 16 or higher recommended)
- npm or yarn (package manager)

## Installing Dependencies
Run the following command to install the required dependencies:
```bash
npm install
```

## Running Locally
To start the development server locally, use:
```bash
npm run dev
```
This will start the app on `http://localhost:5173`.

## Running the tests
To run the tests use:
```bash
npm run test
```

## Starting Storybook
To start Storybook for UI component development, use:
```bash
npm run storybook
```
This will start Storybook on `http://localhost:6006`.

## Design Patterns Used

### Dependency Inversion
The project uses the Dependency Inversion Principle by abstracting the movie service functionality into an interface (`IMovieService`) and providing concrete implementations (`FakeMovieService`, `TheMovieDBService`). The `MovieServiceProvider` injects the service implementation into the React context, and the `useMovieService` hook allows components to access the service without directly depending on its implementation.

### Context and Provider
React's Context API is used to manage the movie service dependency. The `MovieServiceContext` and `MovieServiceProvider` encapsulate the service and make it accessible throughout the application.

### Component Composition
The project follows a component-based architecture, where reusable components like `TopBar`, `DefaultLayout`, and `MovieSummaryCard` are composed to build pages (`Home`, `MovieDetails`, `NotFound`).

### Custom Hooks
Custom hooks like `useMovieService` abstract logic for accessing the movie service, improving code reusability and separation of concerns.

### Test-Driven Development
The project includes unit tests for components and pages using `vitest` and `@testing-library/react`. Mocking is used extensively to isolate components and test their behavior.

### Storybook for UI Development
Storybook is integrated for isolated UI component development and documentation, enabling visual testing and showcasing of components.

### Modular TypeScript Design
The project uses TypeScript for type safety and modular design. Types are organized into domain (`MovieSummary`, `MovieDetails`) and service (`IMovieService`) categories for clarity.

### Routing
React Router is used for navigation, with routes defined in a centralized `Routes` component.

### Mock Data
A `FakeMovieService` provides mock data for development and testing, ensuring the app can function without external dependencies during these phases.
