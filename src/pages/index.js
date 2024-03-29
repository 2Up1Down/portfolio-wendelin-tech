import Layout from "../components/common/layout";
import DefaultHead from "../components/common/default-head";
import HeroSection from "../components/sections/hero-section";
import WhatIDoSection from "../components/sections/what-i-do-section";
import ServicesSection from "../components/sections/services-section";
import AboutMeSection from "../components/sections/about-section";
import PortfolioSection from "../components/sections/portfolio-section";
import CtaSection from "../components/sections/cta-section";
import TestimonialSection from "../components/sections/testimonial-section";
import ContactSection from "../components/sections/contact-section";
import PartnersSection from "../components/sections/partners-section";
import { getHomepageData } from "../utils/contentful/query-homepage";
import { getLayout } from "../utils/contentful/query-layout";

export default function Home({ homepageData, layoutData }) {
  const {
    seoData: { metaTitle, metaDescription, metaKeywords, ogImage },
  } = homepageData;

  const { header, footer } = layoutData;
  const {
    heroSection,
    whatIDo,
    servicesSection,
    aboutMe,
    portfolioSection,
    cta,
    testimonialSection,
    contactSection,
    partnersSection,
  } = homepageData;

  return (
    <Layout footer={footer} header={header}>
      <DefaultHead
        title={metaTitle}
        description={metaDescription}
        keywords={metaKeywords}
        image={ogImage}
      />

      <HeroSection {...heroSection} />
      <WhatIDoSection {...whatIDo} />
      <ServicesSection {...servicesSection} />
      <AboutMeSection {...aboutMe} />
      <PortfolioSection {...portfolioSection} />
      {/*<CtaSection {...cta} />*/}
      {/*<TestimonialSection {...testimonialSection} />*/}
      <ContactSection {...contactSection} />
      <PartnersSection {...partnersSection} />
    </Layout>
  );
}

export async function getStaticProps({ locale }) {
  const homepageData = await getHomepageData(locale);
  const layoutData = await getLayout(locale);

  return {
    props: {
      homepageData,
      layoutData,
    },
    revalidate: 60, // in seconds
  };
}
