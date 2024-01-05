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
  let req = await fetch(url, { cach: "no-store" });

  const storyData = await req.json();
}

export default function Home() {
  return (
    <>
      <Navbar />
      <HeroSection />
      <ServicesSection />
      <TestimonialsSection />
      <ContactSection />
      <FaqSection />
      <Footer />
    </>
  );
}
