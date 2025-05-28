# Tailwind CSS Guidance for Project

This document outlines the Tailwind CSS instructions and best practices to be strictly followed throughout the project to ensure consistent, scalable, and modern frontend development.

## General Principles
- Always use Tailwind CSS utility classes for styling instead of custom CSS unless absolutely necessary.
- Maintain a clean and semantic HTML structure.
- Use Tailwind's responsive utilities to ensure designs are fully responsive across all device sizes.
- Prioritize accessibility by using appropriate ARIA attributes and semantic HTML elements.
- Avoid inline styles or custom CSS overrides that conflict with Tailwind utilities.
- Always design mobile-first but ensure the layout is desktop friendly.
- Implement dark mode and light mode correctly, ensuring seamless toggling and consistent styling in both modes.
- Follow accessibility rules strictly to enable keyboard navigation and screen reader support. Refer to [Headless UI](https://headlessui.com) for accessible component patterns and implement relevant parts.

## Color Scheme and Theming
- Use a modern black and white color palette as the primary theme.
- Use Tailwind's built-in color utilities for text, backgrounds, borders, and shadows.
- Avoid using icons unless explicitly specified; focus on clean typography and spacing.
- Use subtle shades of gray for borders, backgrounds, and text to create depth and hierarchy.
- Always ensure the primary action buttons have the correct and consistent color to indicate importance.

## Typography
- Use Google Fonts imported in the HTML head for all typography.
- Prefer modern, clean fonts that enhance readability and aesthetics.
- Use Tailwind's typography utilities for font size, weight, line height, and letter spacing.
- Maintain consistent font usage across the project.

## Layout and Spacing
- Use Tailwind's spacing utilities (margin, padding) to create appropriate whitespace.
- Use Flexbox and Grid utilities for layout structure.
- Ensure consistent alignment and spacing for a clean, modern look.

## Responsiveness
- Use Tailwind's responsive prefixes (sm:, md:, lg:, xl:) to adapt layouts and typography.
- Test layouts on multiple screen sizes to ensure usability and aesthetics.

## Modals
- When creating modals, position them near the lower part of the screen.
- If the modal has two options, place them side by side for easy clicking.
- If the modal has more than two options, align them vertically centered.
- Ensure modals are accessible and keyboard navigable.

## Animations and Transitions
- Use Tailwind's transition and animation utilities for smooth and subtle effects.
- Ensure all moving elements have smooth transitions to enhance user experience.
- Avoid excessive or distracting animations; keep user experience smooth and professional.

## Component Styling
- When using shadcn components, customize them to align with the black and white theme.
- For games or custom UI, prefer handcrafted Tailwind styles over pre-built components.

## Important Notes
- Never modify `src/app/globals.css` as it may break the entire app.
- Always add the "use client" directive in Next.js components that use React hooks.
- Update `next.config.ts` remotePatterns when integrating external image sources.
- Use lucid-react icons only if explicitly requested.

By following these guidelines, we ensure a consistent, maintainable, accessible, and visually appealing frontend codebase.

---
This file should be referenced and adhered to for all Tailwind CSS related development in this project.
