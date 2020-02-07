import twitterImg from "../resources/twitter.svg";
import githubImg from "../resources/github.svg";
import telegramImg from "../resources/telegram.svg";
import discordImg from "../resources/discord.svg";

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

export const Whitepaper = [
  {
    link:
      "https://github.com/stakedtechnologies/plasmdocs/blob/master/wp/en.pdf",
    description: "English"
  },
  {
    link:
      "https://github.com/stakedtechnologies/plasmdocs/blob/master/wp/jp.pdf",
    description: "Japanese"
  }
];

export const Community = [
  {
    link: Links.discord,
    description: "Discord"
  },
  {
    link: Links.telegram,
    description: "Telegram"
  }
];

export const Company = [
  {
    link: Links.home,
    description: "Home"
  },
  {
    link: `mailto:${Links.email}`,
    description: "Contact us"
  }
];

export const Products = [
  {
    link: "https://github.com/staketechnologies/Plasm",
    description: "Plasm Testnet v3"
  }
];

export const Blogs = [
  {
    link: Links.blog,
    description: "Medium"
  }
];

export const Discussions = [
  {
    link: Links.twitter,
    className: "twitter",
    image: twitterImg
  },
  {
    link: Links.github,
    className: "github",
    image: githubImg
  },
  {
    link: Links.telegram,
    className: "telegram",
    image: telegramImg
  },
  {
    link: Links.discord,
    className: "discord",
    image: discordImg
  }
];
