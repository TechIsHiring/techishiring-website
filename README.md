# TechIsHiring Website

The website for TechIsHiring.com

## Technologies Used

* Next.js
* Tailwind CSS
* Chakra UI
* TypeScript
* Storybook
* Axios

## Project Design Document

This is a link to the Design Document for this project: [Design Document](https://drive.google.com/file/d/15jYKdhq1NcL4rHJIvBxoLUuNlYRqOhMr/view?usp=sharing)

## Atomic Design

This project uses Atomic Design for it's Components. Here are several resources for Atomic Design if you are unfamiliar:

* [Atomic Design by Brad Frost](https://bradfrost.com/blog/post/atomic-web-design/)
* [Atomic Design - How To Make Web and UI Design Easier](https://www.youtube.com/watch?v=W3A33dmp17E)

## Storybook

The Stoybook for this project can be found at [https://stories.techishiring.com](https://stories.techishiring.com).

### Run it locally

```shell
npm run storybook
```

## Local development

To install the application:

```shell
npm ci
```

To run the application on a developement server:

```shell
npm run dev
```

To reinstall your node_modules if a problem occurs with your dependencies:

```shell
npm run reset-deps
```

### Code linting

To check the code and styles quality, use the following command:

```shell
npm run lint
```

To fix the linting errors, use the following command:

```shell
npm run format
```

### Production deployment

Run this command to build the project.

```shell
npm run build
```
