import { Button, Typography } from "@mui/material";

interface EducationCardProps {
  major?: string;
  gpa: string;
  title: string;
  date: string;
  logo: string;
  description: string;
  link: string;
}

const EducationCard = ({
  major,
  gpa,
  title,
  date,
  logo,
  description,
  link,
}: EducationCardProps) => {
  return (
    <div className="w-full flex flex-col sm:flex-row sm:gap-0 gap-4 justify-start p-5 rounded-lg border-4 border-fern">
      <div className="flex flex-1 flex-col h-full w-full justify-center gap-6 items-center">
        <img
          className={`!w-1/3 !h-auto !z-0 rounded-md`}
          alt="School Logo"
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
          Visit School Website
        </Button>
      </div>
      <div className="flex flex-1 flex-col h-full justify-center">
        <Typography
          variant="h5"
          className="text-left text-rosewood !font-black"
        >
          {major}
        </Typography>
        <Typography
          variant="h5"
          className="text-left text-midnight-violet !font-black"
        >
          {gpa} GPA
        </Typography>

        <Typography
          variant="body1"
          className="text-midnight-violet text-left !mt-6"
        >
          {description}
        </Typography>
      </div>
    </div>
  );
};

export default EducationCard;
