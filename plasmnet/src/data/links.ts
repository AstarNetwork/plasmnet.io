import cryptoeconomicsLabImg from "../resources/crypto-economics-lab.png";
import discordImg from "../resources/discord.svg";
import githubImg from "../resources/github.svg";
import longhashImg from "../resources/longhash.png";
import telegramImg from "../resources/telegram.svg";
import twitterImg from "../resources/twitter.svg";
import web3Img from "../resources/web3-foundation.png";

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
export const BlogLinks = {
  lockdropIntroduction:
    "https://medium.com/stake-technologies/plasm-lockdrop-introduction-54614592a13"
};

export const AppLinks = {
  plasmnetIo: "https://apps.plasmnet.io/",
  polkadotNetwork: "https://telemetry.polkadot.io/#list/Plasm%20Testnet%20v3",
  joinLockdrop: "https://lockdrop.plasmnet.io"
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
    link: Links.discord,
    className: "discord",
    image: discordImg
  },
  {
    link: Links.telegram,
    className: "telegram",
    image: telegramImg
  },
  {
    link: Links.twitter,
    className: "twitter",
    image: twitterImg
  },
  {
    link: Links.github,
    className: "github",
    image: githubImg
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
    description: "Web3 Foundation",
    link: SponsorLinks.web3Foundation,
    className: "web3-foundation",
    image: web3Img
  },
  {
    description: "LongHash",
    link: SponsorLinks.longhash,
    className: "long-hash",
    image: longhashImg
  }
];
