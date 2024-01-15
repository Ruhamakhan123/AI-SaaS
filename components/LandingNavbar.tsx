"use client";
import { Montserrat } from "next/font/google";
import Image from "next/image";
import Link from "next/link";
import { useAuth } from "@clerk/nextjs"; //it is one of code available in client components and it support both client and server componenets that is why we used a hook
import { cn } from "@/lib/utils";
import { Button } from "./ui/button";

const font = Montserrat({
  weight: "600",
  subsets: ["latin"],
});

const LandingNavbar = () => {
  const { isSignedIn } = useAuth();
  return (
    <nav className="flex items-center justify-between p-4 bg-transparent ">
      <Link href="/" className="flex items-center">
        <div className="h-8 w-8 mr-4 relative">
          <Image fill alt="Logo" src="/logo.png" />
        </div>
        <h1 className={cn("text-2xl font-bold text-white", font.className)}>
          Genius
        </h1>
      </Link>
      <div className="flex items-center gap-x-2">
        <Link href={isSignedIn ? "/dashboard" : "/sign-up"}>
          <Button variant="outline" className="rounded-full">
            Get Started
          </Button>
        </Link>
      </div>
    </nav>
  );
};

export default LandingNavbar;
