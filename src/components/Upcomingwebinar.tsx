import { div } from "framer-motion/client";
import { HoverEffect } from "./ui/card-hover-effect";
import Link from "next/link";
import Coursedata from "@/data/music_courses.json";

const featuredWebinars = [
    {
      title: 'Understanding Music Theory',
      description:
        'Dive deep into the fundamentals of music theory and enhance your musical skills.',
      link:'/music_theory',
    },
    {
      title: 'The Art of Songwriting',
      description:
        'Learn the craft of songwriting from experienced musicians and songwriters.',
        link:'/songwriting',
    },
    {
      title: 'Mastering Your Instrument',
      description:
        'Advanced techniques to master your musical instrument of choice.',
        link:'/mastering_instrument',
    },
    {
      title: 'Music Production Essentials',
      description:
        'Get started with music production with this comprehensive overview.',
        link:'/music_ess',
    },
    // Added two more webinars
    {
      title: 'Live Performance Techniques',
      description:
        'Enhance your live performance skills with expert tips and strategies.',
        link:'/live_perf',
    },
    {
      title: 'Digital Music Marketing',
      description:
        'Learn how to promote your music effectively in the digital age.',
        link:'/digimus',
    },
  ];

function Upcomingwebinar() {
  return (
    <div className="py-12 bg-gray-900">
           <div className="text-center">
           <h2 className="text-base text-teal-600 font-semibold tracking-wide uppercase">Featured Webinars</h2>
           <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-white sm:text-4xl">Enhance Your Musical Journey</p>
           </div>
           <div className="max-w-5xl mx-auto px-8">
      <HoverEffect items={featuredWebinars} />
    </div>
    <div className="mt-10 text-center">
          <Link href={"/"}
          className="px-4 py-2 rounded border border-neutral-600 text-neutral-700 bg-white hover:bg-gray-100 transition duration-200"
          >
            View All webinars
          </Link>
        </div>
    </div>
    
  )
}

export default Upcomingwebinar