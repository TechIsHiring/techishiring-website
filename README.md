# TechIsHiring Website

TechIsHiring's website, focusing on showcasing the top tweets from the Twitter account and the TechIsHiring newsletter.

[![Open in GitHub Codespaces](https://github.com/codespaces/badge.svg)](https://codespaces.new/TechIsHiring/techishiring-website)

## Technologies Used

- Next.js
- Tailwind CSS
- Chakra UI
- TypeScript
- Zod
- Storybook
- SendGrid
- Posthog

## Project Figma

This is a link to the Figma File for the TechIsHiring Website: [TechIsHiring Website Figma](https://www.figma.com/file/AHf38Z5LQ4v1YBIgJv0tsM/TechIsHiring?t=ItybLH9XnPZ96T8A-6)

## Project Design Document

This is a link to the Engineering Design Document for v1.0.0 release: [Engerineering Design Document](https://drive.google.com/file/d/15jYKdhq1NcL4rHJIvBxoLUuNlYRqOhMr/view?usp=sharing)

## Atomic Design

This project uses Atomic Design for it's Components. Here are several resources for Atomic Design if you are unfamiliar:

- [Atomic Design by Brad Frost](https://bradfrost.com/blog/post/atomic-web-design/)
- [Atomic Design - How To Make Web and UI Design Easier](https://www.youtube.com/watch?v=W3A33dmp17E)

## Dev Environment

Check out what the we're currently work on at [https://dev.techishiring.com](https://dev.techishiring.com)

## GitHub Codespaces Setup

_A codespace is a development environment that's hosted in the cloud. You can build and run this plugin via a GitHub Codespace by following the directions below:_

1. To open this environment, click the "Open in GitHub Codespaces" button at the top of this README or click on the green "Code" button on the repository > select the Codespaces tab > "Create new Codepsace on dev" button.

2. Allow this Codespace a few minutes to complete installing all needed dependencies. The first time you do this, it may take a while, so be patient.

3. Once the installation is complete, you should see a terminal window open in the bottom of the screen. You can click the link to open up the storybook in a new tab or your can go to the forward port tab to see the link to the storybook.

A simple browser window will automatically open up for you so you can view the stories seamlessly. 

4. You are now ready to start developing! 

## Storybook

The Stoybook for this project can be found at [https://stories.techishiring.com](https://stories.techishiring.com)

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

## Contributing

Check out the [CONTRIBUTING.md](CONTRIBUTING.md) guide to assist with all you need to know before getting started with making changes to the codebase.

## License

[MIT License](LICENSE)
