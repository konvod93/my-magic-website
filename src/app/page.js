import Navbar from "./_components/Navbar"
import HeroSection from "./_components/Hero";
import ServicesSection from "./_components/Services";
import TestimonialsSection from "./_components/Testimonials";
import ContactSection from "./_components/Contact";
import FaqSection from "./_components/Faq";
import Footer from "./_components/Footer";

const getLandingPageData = async () => {
  const version="draft";
  const token = "HmCn7MO1cApM9L9GxKBdrQtt";
  const url = `https://api.storyblok.com/v2/cdn/stories/landing-page?version=${version}&token=${token}`;
  let req = await fetch(url, { cache: "no-store" });

  const storyData = await req.json();
  const { nav_section, hero_section, services_section, testimonials_section } = storyData.story.content;

  return {
    nav_section: nav_section[0],
    hero_section: hero_section[0],
    services_section: services_section[0],
    testimonials_section: testimonials_section[0]
  }
}

export default async function Home() {
  const storyData = await getLandingPageData();
  return (
    <>
      <Navbar data={storyData.nav_section} />
      <HeroSection data={storyData.hero_section} />
      <ServicesSection data={storyData.services_section} />
      <TestimonialsSection data={storyData.testimonials_section}/>
      <ContactSection />
      <FaqSection />
      <Footer />
    </>
  );
}
