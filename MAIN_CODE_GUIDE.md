# Main Code Guide

This guide covers best practices and implementation details for the main codebase, focusing on frontend integration with a Laravel Sanctum + Fortify backend, Tauri native app support, and modern frontend patterns.

---

## 1. Internationalization (i18n)

- Use a robust i18n library compatible with Vue (e.g., vue-i18n).
- Organize translation files by locale and feature.
- Ensure all user-facing text is translatable.
- Provide fallback locales and support dynamic locale switching.
- Load locale data asynchronously for performance.

---

## 2. Authentication and Authorization

- Use Laravel Sanctum + Fortify for backend authentication.
- On the frontend, manage authentication state with Pinia.
- Protect routes by checking authentication status.
- Redirect unauthenticated users to the login page.
- Use route guards or navigation guards in Vue Router.
- Handle authorization roles/permissions as needed.

---

## 3. API Key Rotation and Session Refresh

- Implement automatic session refresh based on token expiry.
- Use silent refresh or refresh tokens to maintain sessions.
- Rotate API keys or tokens securely without user disruption.
- Handle token expiry errors gracefully and prompt re-login if needed.

---

## 4. CSRF Protection

- Ensure CSRF tokens are included in all state-changing requests.
- Laravel Sanctum provides CSRF protection; ensure frontend fetch calls include credentials.
- Use `withCredentials: true` in fetch requests to send cookies.
- Validate CSRF tokens on the backend.

---

## 5. API Calls: Lean Implementation

- Use native `fetch` API for all HTTP requests.
- Avoid using Axios or other heavy libraries.
- Create a lightweight wrapper around fetch for common tasks (e.g., JSON parsing, error handling).
- Include authentication tokens and CSRF tokens as needed.

---

## 6. Backend Integration: Laravel Sanctum + Fortify

- Backend API uses Sanctum for SPA authentication and Fortify for security features.
- Organize API routes logically in Laravel.
- Frontend should align with backend route structure for clarity.
- Use Sanctum's cookie-based authentication for secure sessions.

---

## 7. Route Organization

- Organize frontend routes by feature modules.
- Use nested routes for related views.
- Keep route definitions clean and maintainable.
- Protect routes with authentication guards.
- Group API routes logically on the backend.

---

## 8. State Management with Pinia

- Use Pinia as the centralized state management solution.
- Organize stores by feature or domain.
- Keep stores focused and modular.
- Use Pinia plugins if needed for persistence or devtools integration.
- Manage authentication, user data, notifications, and websocket state in Pinia.

---

## 9. Websocket Communication with Laravel Echo

- Use `laravel-echo` library to connect to backend websockets.
- Configure Echo with the correct broadcaster (e.g., Pusher, Redis).
- Manage websocket connection state in Pinia.
- Listen for relevant events and update UI reactively.
- Handle reconnection and error states gracefully.

---

## 10. Notifications

- Design notifications for both web app and Tauri native environments.
- Use a unified notification interface to abstract platform differences.
- For web, use in-app toast notifications with clear actions.
- For Tauri, use native OS notifications with actionable buttons.
- Ensure notifications follow good UX patterns: concise, timely, and actionable.
- Manage notification state in Pinia.

---

## 11. UI Consistency and Design Patterns

- Maintain consistent UI across all screens.
- Use Tailwind CSS utility classes for styling.
- Follow a minimal but informative design philosophy.
- Place buttons and controls in predictable locations.
- Avoid adding new screens or buttons without clear user flow.
- Use reusable components for common UI elements.

---

## 12. Tauri Native App Integration

- Provide placeholders in the codebase to handle app URLs natively.
- Register URL handlers in Tauri configuration.
- Manage native-specific features like notifications and deep linking.
- Ensure smooth integration between web and native layers.

---

## Summary

This guide ensures the main codebase is secure, maintainable, and user-friendly by leveraging modern frontend technologies, Laravel backend features, and Tauri native capabilities. Follow these guidelines to build a robust and scalable application.
