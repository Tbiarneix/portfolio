interface IOtherItems {
    title: string;
    backgroudImage: string;
    descripion: string;
    url: string;
  }
  
  export const otherItems: IOtherItems[] = [
    {
      title: "Photo",
      backgroudImage:
        "./photography.jpg",
      descripion: "Discover my passion (and old profession) for phography.",
      url: "https://thomasbiarneix.com",
    },
    {
      title: "Podcast",
      backgroudImage: "./podcast.jpg",
      descripion: "I launched Photosensible podcast to give photographers a voice.",
      url: "https://photosensible.lepodcast.fr/",
    },
    {
      title: "Music",
      backgroudImage:
        "./music.jpg",
      descripion: "How live without music? Want to share?",
      url: "https://open.spotify.com/user/tbiarneix",
    },
  ];