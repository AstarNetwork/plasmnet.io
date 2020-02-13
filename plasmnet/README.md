# Plasm Homepage

Preview: [https://brave-kalam-1e9b1f.netlify.com/](https://brave-kalam-1e9b1f.netlify.com/)

This repository is a static home page for Plasm Network.

## Environment

```bash
$ node -v
v10.17.0
$ yarn -v
v1.19.2
```

- React: `16.12.0`
- TypeScript: `3.7.2`

## Dependencies

### For Application

- [semantic-ui-react](https://react.semantic-ui.com/)
  - The official React integration for Semantic UI.
- [material-ui](https://github.com/mui-org/material-ui)
  - React components for faster and easier web development.
- [styled-components](https://www.styled-components.com/)
  - Visual primitives for the component age. Use the best bits of ES6 and CSS to style your apps without stress.
- [styled-media-query](https://github.com/morajabi/styled-media-query)
  - Better media queries for styled-component.
- [gsap](https://github.com/greensock/GSAP)
  - GreenSock's GSAP JavaScript animation library.
- [react-use](https://react.semantic-ui.com/)
  - React hooks.

### For Development

- [typescript-eslint](https://github.com/typescript-eslint/typescript-eslint)
  - TypeScript ESLint.

## Package manager

- [yarn](https://yarnpkg.com/)
  - Fast, reliable, and secure dependency management.

## How To Use

```bash
$ yarn
$ yarn start
```

## How To Contribute

This project is using [TypeScript ESLint](https://github.com/typescript-eslint/typescript-eslint). When you push your branch to remote ones, please run `yarn lint --fix` to comply to the code convention.

When you add a new library, please make sure its license is not [GPL](https://en.wikipedia.org/wiki/GNU_General_Public_License). And please use `-D` for @types.

### References

- [Images](https://www.notion.so/staketechnologies/Homepage-094b8a97eb564cfbac10c584b17dca67)
