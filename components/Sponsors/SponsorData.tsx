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
    { image: "/images/sponsors/rbc.png", link: "https://www.rbc.com/about-rbc.html"}
  ],
  silver: [
    { image: "/images/sponsors/Compulsion_Games.png", link: "https://compulsiongames.com/" },
    { image: "/images/sponsors/fellow.webp", link: "https://fellow.app/" }
  ],
  bronze: [
    { image: "/images/sponsors/ciena.png", link: "https://www.ciena.com" },
    { image: "/images/sponsors/cse.svg", link: "https://www.cse-cst.gc.ca/" }
  ],
  collaborators: [
    { image: "/images/tailed.png", link: "https://www.tailed.com" }
  ],
  inkind: [
    { image: "/images/sponsors/wolfram.png", link: "https://www.wolframalpha.com/" },
    { image: "/images/sponsors/stickerbeaver.png", link: "https://www.stickerbeaver.com" }
  ],
};

export default sponsors;