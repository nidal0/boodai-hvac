/* Component Imports */

import Layout from "/components/layout-components/Layout";
import HeroBanner from "/components/page-sections/index/HeroBanner";
import AboutUs from "/components/page-sections/index/AboutUs";
import OurServices from "/components/page-sections/index/OurServices";
import OurWorkEthics from "/components/page-sections/index/OurWorkEthics";
import GotAnyQuestions from "/components/page-sections/index/GotAnyQuestions";
import OurPartners from "/components/page-sections/index/OurPartners";
import OurPortfolio from "/components/page-sections/index/OurPortfolio";
import ContactUs from "@/components/page-sections/index/ContactUs";

export default function Home() {
  return (
    <Layout noContain={[0, 2, 3, 4, 6]}>
      <HeroBanner index={0} />
      <AboutUs index={1} />
      <OurServices index={2} />
      <GotAnyQuestions index={4} />
      <OurWorkEthics index={4} />
      <OurPortfolio index={5} />
      <OurPartners index={6} />
      <ContactUs index={7} />
    </Layout>
  );
}
