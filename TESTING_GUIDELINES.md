# Testing Guidelines for the Project

This document outlines the comprehensive testing instructions and best practices to ensure robust, maintainable, and reliable code quality throughout the project.

## General Principles

- Always ensure that all components and their corresponding styling are tested in practical detail.
- Tests should fail if any UI or styling changes occur that are not intended, to alert developers of potential issues.
- Maintain strict separation between different types of tests:
  - **Unit Tests:** Test individual functions, methods, or components in isolation.
  - **Feature Tests:** Test specific features or user stories, often involving multiple components or modules.
  - **Integration Tests:** Test the interaction between different parts of the system, including API integration.
- Use descriptive test names and organize tests logically in the codebase.

## Testing UI Components and Styling

- Use Vue Testing Library with Vitest to render components and assert on their behavior and appearance.
- Test for element presence, visibility, and disappearance to ensure dynamic UI changes work correctly.
- Use snapshot testing cautiously to detect unintended UI changes, but avoid over-reliance on snapshots.
- Ensure tests fail if styling classes or structure change unexpectedly.
- Test responsiveness by simulating different viewport sizes where applicable.

## Mocking and Testing External Dependencies

- **API Calls:**
  - Mock API calls using tools like `msw` (Mock Service Worker) or Vitest mocks.
  - Test the API calling functions themselves separately to ensure correct behavior.
- **Authentication:**
  - Mock authentication flows in tests.
  - Test authentication-related functions independently to verify logic.
- **Authorization:**
  - Mock authorization states and permissions.
  - Test authorization logic functions thoroughly.

## Testing for Bad Patterns and Code Quality

- Implement automated tests to detect common bad patterns or anti-patterns that could cause issues.
- Use linters and static analysis tools integrated with tests to enforce code quality.
- Write tests that assert on error handling and edge cases.

## Internationalization (i18n) Testing

- Always test for internationalization to ensure no display text is missed.
- Verify that values sent to the backend (e.g., dropdown values) remain consistent and are not affected by i18n.
- Use test cases with different locales to verify UI text changes accordingly.
- Mock translation functions in unit tests to isolate component logic.

## Test Organization and Execution

- Organize tests in folders by type (e.g., `unit/`, `feature/`, `integration/`).
- Use Vitest configuration to run tests selectively by type or all together.
- Ensure tests are fast, reliable, and independent.
- Run tests automatically on code changes and before merges using CI pipelines.

## Example Testing Practices

```ts
// Example of mocking an API call with Vitest and testing a function
import { vi } from 'vitest'
import { fetchData } from '@/api'

vi.mock('@/api', () => ({
  fetchData: vi.fn(() => Promise.resolve({ data: 'mocked data' })),
}))

test('fetchData returns mocked data', async () => {
  const result = await fetchData()
  expect(result.data).toBe('mocked data')
})
```

```ts
// Example of testing component appearance and i18n
import { render, screen } from '@testing-library/vue'
import MyComponent from '@/components/MyComponent.vue'
import { createI18n } from 'vue-i18n'

const i18n = createI18n({
  locale: 'en',
  messages: {
    en: { greeting: 'Hello' },
    fr: { greeting: 'Bonjour' },
  },
})

test('displays greeting in English', () => {
  render(MyComponent, { global: { plugins: [i18n] } })
  expect(screen.getByText('Hello')).toBeVisible()
})

test('displays greeting in French', async () => {
  i18n.global.locale = 'fr'
  render(MyComponent, { global: { plugins: [i18n] } })
  expect(screen.getByText('Bonjour')).toBeVisible()
})
```

---

By following these guidelines, the project will maintain high test coverage, catch regressions early, and ensure a stable and maintainable codebase.
