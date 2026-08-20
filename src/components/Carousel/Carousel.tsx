import { Card, CardContent, IconButton, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import { ChevronLeft, ChevronRight } from "@mui/icons-material";
import outdoors from "../../images/outdoors.jpg";
import marriage from "../../images/marriage.jpg";
import music from "../../images/music.jpg";
import church from "../../images/church.jpg";
import beach from "../../images/beach.jpg";

const funFacts = [
  {
    title: "Outdoorsy",
    text: "Especially going to school in the UP, I love nature! Creation is just so beautiful, and I am happy to sit and stare for ages!",
    image: outdoors,
  },
  {
    title: "In Love",
    text: "I married the love of my life on August 16, 2026, and won't shut up about it.  My husband, Hunter, is a Mechanical Engineer at Innotec.",
    image: marriage,
  },
  {
    title: "Musician",
    text: "I have played piano for 16 years, taught it while I was in high school, and love to play romantic classical tunes. I also love going to see my favorite artists live (usually country...)!",
    image: music,
  },
  {
    title: "Christian",
    text: "My faith is very important to me, and I love my church family!",
    image: church,
  },
  {
    title: "Beach Bum",
    text: "I love to sit around at the beach, preferably with a really good rom-com...",
    image: beach,
  },
];

const Carousel = () => {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    funFacts.forEach((fact) => {
      const img = new Image();
      img.src = fact.image;
    });
  }, []);

  const nextSlide = () => {
    setCurrent((prev) => (prev + 1) % funFacts.length);
  };

  const prevSlide = () => {
    setCurrent((prev) => (prev - 1 + funFacts.length) % funFacts.length);
  };

  const fact = funFacts[current];

  return (
    <div className="flex flex-col items-center mt-8 w-full">
      <div className="hidden md:flex flex-row items-center gap-4 w-full ">
        <IconButton onClick={prevSlide} className="!text-midnight-violet">
          <ChevronLeft fontSize="large" />
        </IconButton>

        <Card className="!bg-midnight-violet !rounded-2xl flex-1">
          <CardContent className="flex flex-col md:flex-row items-center gap-8 !p-8">
            <img
              src={fact.image}
              alt={fact.title}
              className="w-[20rem] h-[20rem] lg:w-[32rem] lg:h-[32rem] object-cover rounded-2xl"
            />

            <div className="flex flex-col text-center md:text-left">
              <Typography
                variant="h4"
                className="font-bold text-apricot-cream !mb-4"
              >
                {fact.title}
              </Typography>
              <Typography variant="body1" className="text-apricot-cream">
                {fact.text}
              </Typography>
            </div>
          </CardContent>
        </Card>

        <IconButton onClick={nextSlide} className="!text-midnight-violet">
          <ChevronRight fontSize="large" />
        </IconButton>
      </div>

      <div className="flex md:hidden flex-col items-center gap-4 w-full ">
        <Card className="!bg-midnight-violet !rounded-2xl flex-1">
          <CardContent className="flex flex-col md:flex-row items-center gap-8 !p-8">
            <img
              src={fact.image}
              alt={fact.title}
              className="w-[20rem] h-[20rem] lg:w-[32rem] lg:h-[32rem] object-cover rounded-2xl"
            />

            <div className="flex flex-col text-center md:text-left">
              <Typography
                variant="h4"
                className="font-bold text-apricot-cream !mb-4"
              >
                {fact.title}
              </Typography>
              <Typography variant="body1" className="text-apricot-cream">
                {fact.text}
              </Typography>
            </div>
          </CardContent>
        </Card>

        <div className="flex gap-3">
          <IconButton onClick={prevSlide} className="!text-midnight-violet">
            <ChevronLeft fontSize="large" />
          </IconButton>

          <IconButton onClick={nextSlide} className="!text-midnight-violet">
            <ChevronRight fontSize="large" />
          </IconButton>
        </div>
      </div>

      <div className="flex gap-2 mt-6">
        {funFacts.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrent(index)}
            className={`w-3 h-3 rounded-full transition ${
              index === current ? "bg-rosewood" : "bg-rosewood/30"
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default Carousel;
