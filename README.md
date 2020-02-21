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
- [react-use](https://github.com/streamich/react-use)
  - React hooks.
- [react-scroll](https://github.com/fisshy/react-scroll)
  - Component for animating vertical scrolling.
- [react-scroll-to-component](https://github.com/flyingant/react-scroll-to-component)
  - Smooth srolls to react component via reference.
- [rxjs](https://github.com/ReactiveX/rxjs)
  - A reactive programming library for JavaScript.
- [rxjs-hooks](https://github.com/LeetCode-OpenSource/rxjs-hooks)
  - React hooks for RxJS.
- [react-scroll-progress-bar](https://github.com/thisisadityarao/react-scroll-progress-bar#readme)
  - A scroll progress bar component for React.
- [moment](https://github.com/moment/moment)
  - Parse, validate, manipulate, and display dates in javascript.

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

## How To Add A Data Of Contents

Contents data is passed as an object array to each react component.

### Plasm Networks achieves

- src/contents/achieveIntroductions.ts

```
export const AchieveIntroductions = [
  {
    // Memo: `icon` from Semantic UI React
    // Docs: https://react.semantic-ui.com/elements/icon/
    icon: "gem",
    title: "Stable Currency",
    description:
      "Asset-backed decentralized currency without volatility. Stable by design and without borders."
  }
];
```

### Roadmap

- src/contents/roadmapRecord.ts

```
RoadmapList = [
  {
    // Memo: `id` is used for css styling
    id: 1,
    month: "2020.03",
    task: ["task 1", "task 2", "task 3"]
  }
];
```

### Links

- src/contents/links.ts

Please define URL in the inside of the object and make an array variable to pass(map) to the react component.

```
export const Links = {
  docs: "https://docs.plasmnet.io",
  blog: "https://medium.com/stake-technologies",
  twitter: "https://twitter.com/Plasm_Network",
  github: "https://github.com/staketechnologies/Plasm",
  telegram: "https://t.me/PlasmOfficial",
  discord: "https://discordapp.com/invite/Dnfn5eT",
  email: "example@example.com",
  home: "https://stake.co.jp/"
};

export const Community = [
  {
    description: "Discord",
    link: Links.discord,
    // Memo: `icon` from Semantic UI React
    // Docs: https://react.semantic-ui.com/elements/icon/
    icon: "discord"
  },
  {
    description: "Telegram",
    link: Links.telegram,
    icon: "telegram"
  }
];
```

### Countdown

- src/components/Title.tsx

Please pass the countdown date and time as props.

```
<div className="lockdrop">
  {/* Memo: format must "yyyy-dd-dd hh:mm:ss" */}
  {/* Memo: cannot work on mobile device if props as "2021-1-1 00:00:00". Date format must dd:dd  */}
  {/* Time standard: UTC  */}

  <LockdropInfo countdownDate="2021-01-01 00:00:00" />
</div>
```

## How To Contribute

This project is using [TypeScript ESLint](https://github.com/typescript-eslint/typescript-eslint). When you push your branch to remote ones, please run `yarn lint --fix` to comply with the code convention.

When you add a new library, please make sure its license is not [GPL](https://en.wikipedia.org/wiki/GNU_General_Public_License). And please use `-D` for @types.

### References

- [Images](https://www.notion.so/staketechnologies/Homepage-094b8a97eb564cfbac10c584b17dca67)
