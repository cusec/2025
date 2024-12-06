type SponsorData = {
  gold: string[];
  silver: string[];
  bronze: string[];
  collaborators: string[];
  inkind: string[];
};

const sponsors: SponsorData = {
  gold: ["/images/sponsors/rbc.png"],
  silver: ["/images/sponsors/Compulsion_Games.png"],
  bronze: ["/images/sponsors/ciena.png", "/images/sponsors/cse.svg"],
  collaborators: ["/images/sponsors/tailed.png"],
  inkind: [
    "/images/sponsors/wolfram.png",
    "/images/sponsors/stickerbeaver.png",
  ],
};

export default sponsors;
