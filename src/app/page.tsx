import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import MenuTicker from "@/components/MenuTicker";
import Offerings from "@/components/Offerings";
import Signature from "@/components/Signature";
import HowToOrder from "@/components/HowToOrder";
import Testimonial from "@/components/Testimonial";
import Hours from "@/components/Hours";
import OrderForm from "@/components/OrderForm";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <MenuTicker />
        <Offerings />
        <Signature />
        <HowToOrder />
        <Testimonial />
        <Hours />
        <OrderForm />
      </main>
      <Footer />
    </>
  );
}
