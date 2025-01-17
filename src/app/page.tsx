import { main } from "framer-motion/client";
import Image from "next/image";
import Hero from "@/components/Hero";
import Mycourses from "@/components/Mycourses";
import WhyChooseUs from "@/components/WhyChooseUs";
import Testimonial from "@/components/Testimonial";
import Upcomingwebinar from "@/components/Upcomingwebinar";
import Instructors from "@/components/Instructors";
import Footer from "@/components/Footer";


export default function Home() {
  return (
        <main className="min-h-screen bg-black/[0.96] antialised ">
              <Hero />
              <Mycourses />
              <WhyChooseUs />
              <Testimonial />
              <Upcomingwebinar />
              <Instructors />
              <Footer />
        </main>
    
  );
}
