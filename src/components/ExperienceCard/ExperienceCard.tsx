import { Avatar, Button, Card, CardContent, Typography } from "@mui/material";

interface ExperienceCardProps {
  background?: string;
  title: string;
  date: string;
  logo: string;
  description: string;
  link: string;
}

const ExperienceCard = ({
  background,
  title,
  date,
  logo,
  description,
  link,
}: ExperienceCardProps) => {
  return (
    <div className="w-full flex flex-col sm:flex-row sm:gap-0 gap-4 justify-start p-5 rounded-lg border-4 border-fern">
      <div className="flex flex-1 flex-col h-full w-full justify-center gap-6 items-center">
        <Avatar
          className={`!w-1/3 !h-auto !z-0 ${background}`}
          alt="Alyssa Tripp Photo"
          src={logo}
        />
        <Typography
          variant="h3"
          className="text-rosewood !font-bfold sm:text-left"
        >
          {title}
        </Typography>
        <Typography variant="h6" className="text-midnight-violet text-left">
          {date}
        </Typography>
        <Button className="w-[80%] " target="_blank" href={link}>
          Visit Project
        </Button>
      </div>
      <div className="flex flex-1 flex-col h-full justify-center">
        <Typography variant="body1" className="text-midnight-violet text-left">
          {description}
        </Typography>
      </div>
    </div>
  );
};

export default ExperienceCard;
