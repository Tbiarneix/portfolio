import { useEffect } from "react";
import styles from "./description.module.css";
import Others from "./others/others";

function Description() {
    const handleScroll = () => {
        const scrollPosition = window.scrollY; // => scroll position
        console.log(scrollPosition);
    };
    handleScroll();
    useEffect(() => {
      handleScroll();
      window.addEventListener("scroll", handleScroll);
      return () => {
        window.removeEventListener("scroll", handleScroll);
      };
      }, []);

  return (
    <main className={styles.description} onScroll={handleScroll}>
      <section id="about">
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod
          eu lorem et ultricies. In porta lorem at dui semper, sit amet ornare
          nisl ullamcorper. Aliquam ut aliquet lorem. Donec mollis nulla ac
          nulla pretium, sed imperdiet ipsum pellentesque. Lorem ipsum dolor sit
          amet, consectetur adipiscing elit. Sed euismod eu lorem et ultricies.
          In porta lorem at dui semper, sit amet ornare nisl ullamcorper.
          Aliquam ut aliquet lorem. Donec mollis nulla ac nulla pretium, sed
          imperdiet ipsum pellentesque. Lorem ipsum dolor sit amet, consectetur
          adipiscing elit. Sed euismod eu lorem et ultricies. In porta lorem at
          dui semper, sit amet ornare nisl ullamcorper. Aliquam ut aliquet
          lorem. Donec mollis nulla ac nulla pretium, sed imperdiet ipsum
          pellentesque. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          Sed euismod eu lorem et ultricies. In porta lorem at dui semper, sit
          amet ornare nisl ullamcorper. Aliquam ut aliquet lorem. Donec mollis
          nulla ac nulla pretium, sed imperdiet ipsum pellentesque. Lorem ipsum
          dolor sit amet, consectetur adipiscing elit. Sed euismod eu lorem et
          ultricies. In porta lorem at dui semper, sit amet ornare nisl
          ullamcorper. Aliquam ut aliquet lorem. Donec mollis nulla ac nulla
          pretium, sed imperdiet ipsum pellentesque. Lorem ipsum dolor sit amet,
          consectetur adipiscing elit. Sed euismod eu lorem et ultricies. In
          porta lorem at dui semper, sit amet ornare nisl ullamcorper. Aliquam
          ut aliquet lorem. Donec mollis nulla ac nulla pretium, sed imperdiet
          ipsum pellentesque. Lorem ipsum dolor sit amet, consectetur adipiscing
          elit. Sed euismod eu lorem et ultricies. In porta lorem at dui semper,
          sit amet ornare nisl ullamcorper. Aliquam ut aliquet lorem. Donec
          mollis nulla ac nulla pretium, sed imperdiet ipsum pellentesque.
        </p>
      </section>
      <section id="experiences">
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod
          eu lorem et ultricies. In porta lorem at dui semper, sit amet ornare
          nisl ullamcorper. Aliquam ut aliquet lorem. Donec mollis nulla ac
          nulla pretium, sed imperdiet ipsum pellentesque. Lorem ipsum dolor sit
          amet, consectetur adipiscing elit. Sed euismod eu lorem et ultricies.
          In porta lorem at dui semper, sit amet ornare nisl ullamcorper.
          Aliquam ut aliquet lorem. Donec mollis nulla ac nulla pretium, sed
          imperdiet ipsum pellentesque. Lorem ipsum dolor sit amet, consectetur
          adipiscing elit. Sed euismod eu lorem et ultricies. In porta lorem at
          dui semper, sit amet ornare nisl ullamcorper. Aliquam ut aliquet
          lorem. Donec mollis nulla ac nulla pretium, sed imperdiet ipsum
          pellentesque. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          Sed euismod eu lorem et ultricies. In porta lorem at dui semper, sit
          amet ornare nisl ullamcorper. Aliquam ut aliquet lorem. Donec mollis
          nulla ac nulla pretium, sed imperdiet ipsum pellentesque. Lorem ipsum
          dolor sit amet, consectetur adipiscing elit. Sed euismod eu lorem et
          ultricies. In porta lorem at dui semper, sit amet ornare nisl
          ullamcorper. Aliquam ut aliquet lorem. Donec mollis nulla ac nulla
          pretium, sed imperdiet ipsum pellentesque. Lorem ipsum dolor sit amet,
          consectetur adipiscing elit. Sed euismod eu lorem et ultricies. In
          porta lorem at dui semper, sit amet ornare nisl ullamcorper. Aliquam
          ut aliquet lorem. Donec mollis nulla ac nulla pretium, sed imperdiet
          ipsum pellentesque. Lorem ipsum dolor sit amet, consectetur adipiscing
          elit. Sed euismod eu lorem et ultricies. In porta lorem at dui semper,
          sit amet ornare nisl ullamcorper. Aliquam ut aliquet lorem. Donec
          mollis nulla ac nulla pretium, sed imperdiet ipsum pellentesque.
        </p>
      </section>
      <section id="projects">
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod
          eu lorem et ultricies. In porta lorem at dui semper, sit amet ornare
          nisl ullamcorper. Aliquam ut aliquet lorem. Donec mollis nulla ac
          nulla pretium, sed imperdiet ipsum pellentesque. Lorem ipsum dolor sit
          amet, consectetur adipiscing elit. Sed euismod eu lorem et ultricies.
          In porta lorem at dui semper, sit amet ornare nisl ullamcorper.
          Aliquam ut aliquet lorem. Donec mollis nulla ac nulla pretium, sed
          imperdiet ipsum pellentesque. Lorem ipsum dolor sit amet, consectetur
          adipiscing elit. Sed euismod eu lorem et ultricies. In porta lorem at
          dui semper, sit amet ornare nisl ullamcorper. Aliquam ut aliquet
          lorem. Donec mollis nulla ac nulla pretium, sed imperdiet ipsum
          pellentesque. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          Sed euismod eu lorem et ultricies. In porta lorem at dui semper, sit
          amet ornare nisl ullamcorper. Aliquam ut aliquet lorem. Donec mollis
          nulla ac nulla pretium, sed imperdiet ipsum pellentesque. Lorem ipsum
          dolor sit amet, consectetur adipiscing elit. Sed euismod eu lorem et
          ultricies. In porta lorem at dui semper, sit amet ornare nisl
          ullamcorper. Aliquam ut aliquet lorem. Donec mollis nulla ac nulla
          pretium, sed imperdiet ipsum pellentesque. Lorem ipsum dolor sit amet,
          consectetur adipiscing elit. Sed euismod eu lorem et ultricies. In
          porta lorem at dui semper, sit amet ornare nisl ullamcorper. Aliquam
          ut aliquet lorem. Donec mollis nulla ac nulla pretium, sed imperdiet
          ipsum pellentesque. Lorem ipsum dolor sit amet, consectetur adipiscing
          elit. Sed euismod eu lorem et ultricies. In porta lorem at dui semper,
          sit amet ornare nisl ullamcorper. Aliquam ut aliquet lorem. Donec
          mollis nulla ac nulla pretium, sed imperdiet ipsum pellentesque.
        </p>
      </section>
      <section id="others">
        <Others />
      </section>
    </main>
  );
}

export default Description;
