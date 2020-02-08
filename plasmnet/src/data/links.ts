import twitterImg from "../resources/twitter.svg";
import githubImg from "../resources/github.svg";
import telegramImg from "../resources/telegram.svg";
import discordImg from "../resources/discord.svg";
import cryptoeconomicsLabImg from "../resources/crypto-economics-lab.png";
import parityImg from "../resources/parity.png";
import web3Img from "../resources/web3-foundation.png";
import istudyImg from "../resources/istudy.png";
import longhashImg from "../resources/longhash.png";
import universityOfTokyoImg from "../resources/university-of-tokyo.png";

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

export const SponsorLinks = {
  cryptoEconomicsLab: "https://www.cryptoeconomicslab.com/",
  parityTechnologies: "https://www.parity.io/",
  web3Foundation: "https://web3.foundation/",
  istudy: "https://www.istudy.co.jp/",
  longhash: "https://longhash.co.jp/en/",
  universityOfTokyo: "https://www.u-tokyo.ac.jp/en/index.html"
};

export const Whitepaper = [
  {
    description: "English",
    link:
      "https://github.com/stakedtechnologies/plasmdocs/blob/master/wp/en.pdf",
    icon: `sticky note outline`
  },
  {
    description: "Japanese",
    link:
      "https://github.com/stakedtechnologies/plasmdocs/blob/master/wp/jp.pdf",
    icon: `sticky note outline`
  }
];

export const Community = [
  {
    description: "Discord",
    link: Links.discord,
    icon: "discord"
  },
  {
    description: "Telegram",
    link: Links.telegram,
    icon: "telegram"
  }
];

export const Company = [
  {
    description: "Home",
    link: Links.home
  },
  {
    description: "Contact us",
    link: `mailto:${Links.email}`
  }
];

export const Products = [
  {
    description: "Plasm Testnet v3",
    link: "https://github.com/staketechnologies/Plasm"
  }
];

export const Blogs = [
  {
    description: "Medium",
    link: Links.blog
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

export const Sponsors = [
  {
    description: "Cryptoeconomics Lab",
    link: SponsorLinks.cryptoEconomicsLab,
    className: "cryptoeconomics-lab",
    image: cryptoeconomicsLabImg
  },
  {
    description: "Parity Technologies",
    link: "https://www.parity.io/",
    className: "parity-technologies",
    image: parityImg
  },
  {
    description: "Web3 Foundation",
    link: SponsorLinks.web3Foundation,
    className: "web3-foundation",
    image: web3Img
  },
  {
    description: "iStudy",
    link: SponsorLinks.istudy,
    className: "istudy",
    image: istudyImg
  },
  {
    description: "LongHash",
    link: SponsorLinks.longhash,
    className: "long-hash",
    image: longhashImg
  },
  {
    description: "The University of Tokyo",
    link: SponsorLinks.universityOfTokyo,
    className: "university-of-tokyo",
    image: universityOfTokyoImg
  }
];
