import type { MetaFunction } from "@remix-run/node";
import { useRef } from "react";

import About from "~/components/about";
import Contact from "~/components/contact";
import Donate from "~/components/donate";
import Footer from "~/components/footer";
import Landing from "~/components/landing";
import Map from "~/components/map";
import Navbar from "~/components/navbar";

import kansas from "../assets/kansas-main.jpeg";

// import { useOptionalUser } from "~/utils";

export const meta: MetaFunction = () => [
  {
    title: "Donna J. McGinty for Kansas District 57",
    description: "Faith, family, freedom.",
  },
];

export default function Index() {
  const aboutRef = useRef<HTMLDivElement>(null);
  const contactRef = useRef<HTMLDivElement>(null);
  const donateRef = useRef<HTMLDivElement>(null);

  // const user = useOptionalUser();

  const menuLinks = ["About", "Contact", "Donate"];

  const scrollTo = (linkName: string) => {
    const block = linkName === "About" ? "start" : "center";
    const ref =
      linkName === "About"
        ? aboutRef
        : linkName === "Contact"
          ? contactRef
          : donateRef;
    ref.current?.scrollIntoView({ behavior: "smooth", block });
  };

  return (
    <main
      style={{
        backgroundImage: `url(${kansas})`,
        backgroundPosition: "center",
        backgroundSize: "cover",
        height: "100vh",
        width: "100vw",
        overflowY: "scroll",
      }}
    >
      <Navbar menuLinks={menuLinks} scrollTo={scrollTo} />
      <Landing />
      <div ref={aboutRef}>
        <About />
      </div>
      <div ref={contactRef}>
        <Contact />
      </div>
      <div ref={donateRef}>
        <Donate />
      </div>
      <Map />
      <Footer />
    </main>
  );
}
