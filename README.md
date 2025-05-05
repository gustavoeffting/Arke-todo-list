
## Atomic Design Todo List

A modern, interactive Todo application built using TypeScript and Atomic Design principles.

## Project setup
Install dependencies:
```
npm install
```

Start dev server:

```
npm run dev
```

Run tests:
```
npm test
```

Design Decisions

State Management: Kept it simple with React's useState and useEffect hooks, using localStorage for persistence. For a larger application, I might have chosen Context API or Jotai.
CSS Organization: Followed the same atomic structure for CSS files. This prevents style leaks and makes the codebase more maintainable.
TypeScript Integration: Used TypeScript interfaces throughout the app to ensure type safety.
Testing Approach: Implemented tests that focus on user interactions rather than implementation details.