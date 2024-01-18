"use client";
import { useAuth } from "@clerk/nextjs";
import Link from "next/link";
import TypeWriterComponent from "typewriter-effect";
import { Button } from "./ui/button";
const LandingHero = () => {
  const isSignedIn = useAuth();

  return (
    <div className="text-white font-bold py-36 text-center space-y-5">
      <div className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl space-y-5 font-extrabold">
        <h1>The Best AI Tool for</h1>
        <div className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600 ">
          <TypeWriterComponent
            options={{
              strings: [
                "Chatbot.",
                "Photo Generation.",
                "Music Generation.",
                "Code Generation.",
                "Video Generation",
              ],
              autoStart: true,
              loop: true,
            }}
          />
        </div>
      </div>
      <div className="text-sm md:text-xl font-light text-zinc-400">
        Create content using AI 10x faster.
      </div>
      <div>
        <Link
          href={
            isSignedIn
              ? "/dashboard"
              : "/https://calm-bug-25.accounts.dev/sign-up?redirect_url=https%3A%2F%2Fai-saa-s-rose.vercel.app%2Fsign-up%23__clerk_db_jwt%5BeyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJkZXYiOiJkdmJfMmI4TTIyTEVJb0c1YzNTTzFCbUgySGhodUY5In0.GrpETY7PJXwyviz4WtLGjfFoshd1PXJu7cLA4JLHfnBPkHNxUmA8KKBiG91Sfvitx7EIXcyBegWfT3-OSF0JhzdGzJyo0j9Ph3lqbioTHy3nFm3p5Yyf11iqedA7laEIWu95OJBnFJk_IkfNHocbmuaTa2kW2uCHaMu_R_JFyvcoXjhKYbnRJybuTKx63uPxiGI5RFWXoBwML9DMqS8S5LDARgq3pnh2SPowioLNLTluB0Ba8U-MPLQdLVRzurcGweItP8Hf6dksnSCHFPaVu6EQTblIh2CxlZ8S7Yt1SAwRbJye_bQk5-726Y3d31NXp5bqjJsP45Bz43osGbz3uw%5D"
          }
        >
          <Button
            variant="premium"
            className="md:text-lg p-4 md:p-6 rounded-full font-semibold"
          >
            Start Generating For Free
          </Button>
        </Link>
      </div>
      <div className="text-zinc-400 text-xs md:text-sm font-normal">
        No credit card required for.
      </div>
    </div>
  );
};

export default LandingHero;
