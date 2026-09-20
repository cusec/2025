import Sponsor from "./Sponsor";

type SponsorData = {
  gold: Sponsor[];
  silver: Sponsor[];
  bronze: Sponsor[];
  collaborators: Sponsor[];
  inkind: Sponsor[];
};

const sponsors: SponsorData = {
  gold: [
    {
      name: "RBC", image: "/images/sponsors/rbc.png",
      link: "https://www.rbc.com/about-rbc.html",
    },
  ],
  silver: [
    {
      name: "Compulsion Games", image: "/images/sponsors/Compulsion_Games.png",
      link: "https://compulsiongames.com/",
    },
    { name: "Fellow", image: "/images/sponsors/fellow.webp", link: "https://fellow.app/" },
  ],
  bronze: [
    { name: "Ciena", image: "/images/sponsors/ciena.png", link: "https://www.ciena.com" },
    { name: "Communications Security Establishment Canada", image: "/images/sponsors/cse.svg", link: "https://www.cse-cst.gc.ca/" },
    { name: "Gadget", image: "/images/sponsors/gadget.svg", link: "https://www.gadget.dev/" },
  ],
  collaborators: [
    { name: "Tailed", image: "/images/sponsors/tailed.png", link: "https://www.tailed.ca" },
  ],
  inkind: [
    {
      name: "Wolfram", image: "/images/sponsors/wolfram.png",
      link: "https://www.wolframalpha.com/",
    },
    {
      name: "Sticker Beaver", image: "/images/sponsors/stickerbeaver.png",
      link: "https://www.stickerbeaver.com",
    },
  ],
};

export default sponsors;
