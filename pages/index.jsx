import Head from "next/head";
import Image from "next/image";
import AboutSection from "../components/sections/AboutSection";
import HomeFeaturedSection from "../components/sections/HomeFeatureSection";
import DetailsSection from "../components/sections/DetailSection";
import CTASection from "../components/sections/CTASection";
import TestimonialsSection from "../components/sections/TestimonialsSection";
import TextWithImageSection from "../components/sections/TextWithImageSection";
import PreFooterSection from "../components/sections/PreFooterSection";

import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Next Base App</title>
        <meta name="description" content="Base Next Application" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="container">
        <HomeFeaturedSection />
        <AboutSection />
        <DetailsSection />
        <CTASection />
        <TestimonialsSection />
        <TextWithImageSection />
        <PreFooterSection />
      </main>
    </div>
  );
}
