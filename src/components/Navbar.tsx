'use client';
import React, { useState } from "react";
import { HoveredLink, Menu, MenuItem, ProductItem } from "./ui/navbar-menu";
import { cn } from "@/lib/utils";

function Navbar({ className }: { className?: string }) {
  const [active, setActive] = useState<string | null>(null);
  return (
    <div className={cn("fixed top-10 inset-x-0 max-w-2xl mx-auto z-50", className)}
    >
      <Menu setActive={setActive}>
      <HoveredLink href="/"><MenuItem setActive={setActive} active={active} item="Home">     
         </MenuItem></HoveredLink>
         <MenuItem setActive={setActive} active={active} item="Our Courses">
         <div className="flex flex-col space-y-4 text-sm">
            <HoveredLink href="/OurCourses">All Courses</HoveredLink>
            <HoveredLink href="/interface-design">Basic Music Theory</HoveredLink>
            <HoveredLink href="/seo">Advance Composition</HoveredLink>
            <HoveredLink href="/branding">Music Production</HoveredLink>
         </div>

         </MenuItem>
         <MenuItem setActive={setActive} active={active} item="Contact Us"></MenuItem>
      </Menu></div>
  )
}

export default Navbar