"use client";

import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";

const testimonials = [
  {
    name: "Ruhama",
    avatar: "R",
    title: "Software Engineer",
    description: "Great Application",
  },
  {
    name: "Subhan",
    avatar: "S",
    title: "Web developer",
    description: "Amazing Website I have ever used",
  },
  {
    name: "Taha",
    avatar: "T",
    title: "Musician",
    description: "It helped me a lot with my music",
  },
  {
    name: "Hammad",
    avatar: "H",
    title: "Full Stack Developer",
    description: "Never used a better website",
  },
];

const LandingContent = () => {
  return (
    <div className="px-10 pb-20">
      <h2 className="text-center text-4xl text-white font-extrabold mb-10">
        Testimonials
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {testimonials.map((item) => (
          <Card
            key={item.description}
            className="bg-[#192339] border-none text-white"
          >
            <CardHeader>
              <CardTitle className="flex items-center gap-x-2">
                <div>
                  <p className="text-lg">{item.name}</p>
                  <p className="text-zinc-400 text-sm">{item.title}</p>
                </div>
              </CardTitle>
              <CardContent className="pt-4 px-0">
                {item.description}
              </CardContent>
            </CardHeader>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default LandingContent;
