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
import { useRouter } from "next/router";

export default function Home() {
  const router = useRouter();

  return (
    <Layout noContain={[0, 2, 3, 4, 6]} locale={router.locale}>
      <HeroBanner index={0} locale={router.locale} />
      <AboutUs index={1} locale={router.locale} />
      <OurServices index={2} locale={router.locale} />
      <GotAnyQuestions index={3} locale={router.locale} />
      <OurWorkEthics index={4} locale={router.locale} />
      <OurPortfolio index={5} locale={router.locale} />
      <OurPartners index={6} locale={router.locale} />
      <ContactUs index={7} locale={router.locale} />
    </Layout>
  );
}
