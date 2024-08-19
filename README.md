# PPMS Dashboard

## Overview

The **PPMS Dashboard** is a customizable, user-friendly interface designed for efficient project management. This dashboard allows users to select which sections to display on the homepage, offering a streamlined experience tailored to specific needs.

If you want to see the project deployed without installation:
https://adherbomez-pro.github.io/ppms-homepage/

## Key Features

-   **Customizable Interface**: Easily select and organize sections to be displayed on the homepage.
-   **Light & Dark Mode Support**: Seamlessly switch between themes based on user preferences.
-   **WCAG Compliance**: Adheres to Web Content Accessibility Guidelines (WCAG) to ensure a fully accessible experience for all users.
-   **Responsive Design**: Optimized for all device types, ensuring a consistent experience across platforms.

## Technologies Used

-   **Vue 3**: Framework for building interactive and modern web interfaces.
-   **CSS3 with Custom Properties**: Leveraging CSS variables for theme management and style consistency.
-   **Figma**: Used for UI/UX design and prototyping.
-   **Lighthouse**: Performance and accessibility audits to ensure high standards across different themes and devices.

## Accessibility & Performance Audits

To ensure a fully accessible and performant application, the project has been audited using [Lighthouse](https://developers.google.com/web/tools/lighthouse). The audits were conducted for different scenarios, including light and dark modes on both desktop and mobile devices. These results confirm the application’s adherence to WCAG standards.

You can view the detailed Lighthouse reports here:

-   **Desktop Light Mode**: [View Report](https://googlechrome.github.io/lighthouse/viewer/?psiurl=https://adherbomez-pro.github.io/ppms-homepage%2F&strategy=desktop&category=accessibility&category=best-practices&locale=en-US&utm_source=lh-chrome-ext)
-   **Desktop Dark Mode**: [View Report](https://googlechrome.github.io/lighthouse/viewer/?psiurl=https://adherbomez-pro.github.io/ppms-homepage%2F%3Fforce-dark-mode%3Dtrue&strategy=desktop&category=accessibility&category=best-practices&locale=en-US&utm_source=lh-chrome-ext)
-   **Mobile Light Mode**: [View Report](https://googlechrome.github.io/lighthouse/viewer/?psiurl=https://adherbomez-pro.github.io/ppms-homepage%2F&strategy=mobile&category=accessibility&category=best-practices&locale=en-US&utm_source=lh-chrome-ext)
-   **Mobile Dark Mode**: [View Report](https://googlechrome.github.io/lighthouse/viewer/?psiurl=https://adherbomez-pro.github.io/ppms-homepage%2F%3Fforce-dark-mode%3Dtrue&strategy=mobile&category=accessibility&category=best-practices&locale=en-US&utm_source=lh-chrome-ext)

## Figma Design Access

For a detailed understanding of the visual structure and design principles, you can access the Figma file that was used for this project:

[Figma Design - PPMS Homepage](https://www.figma.com/design/dwo0NxeIAbuPi8I7yFGVRE/PPMS---Stratocore?node-id=25-78&t=QqsqLcSMKAeDzUrP-1)

This link showcases the design choices and provides insight into the UI/UX considerations made during development.

## Dataset

The application includes a structured dataset located in `src/config/dataset`. Each section is represented by a title, type, and a list of labels and values.
The data is adapted using a `SectionAdapter` function, which transforms the raw data into a format suitable for rendering within the application. This modular approach allows easy expansion and customization of the dataset, ensuring flexibility for future enhancements.

## My Contributions

During this project, I focused on:

-   Intuitive, usable and simple UX
-   Implementing a flexible and scalable theming system for both light and dark modes.
-   Ensuring the UI adheres to accessibility standards while maintaining a clean design.
-   Conducting performance and accessibility audits using Lighthouse to guarantee high standards.
-   Optimizing the Vue.js components for performance and responsiveness.

## Getting Started

### Prerequisites

Ensure you have the following tools installed on your machine:

-   **Node.js**: Version 14.x or higher.
-   **npm**: For dependency management.

### Installation

1. Clone the repository:

    `git clone https://github.com/adherbomez-pro/ppms-homepage.git`
    or with ssh key:
    `git@github.com:adherbomez-pro/ppms-homepage.git`

2. Navigate to the project directory:

    `cd ppms-homepage`

3. Install the dependencies:

    `npm install`

4. Start the development server:

    `npm run dev`
