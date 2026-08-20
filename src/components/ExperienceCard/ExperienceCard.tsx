import { Button, Card, CardContent, Typography } from "@mui/material";

interface ExperienceCardProps {
  left: boolean;
  title: string;
  date: string;
  logo: string;
  description: string;
  link: string;
}

const ExperienceCard = ({
  left,
  title,
  date,
  logo,
  description,
  link,
}: ExperienceCardProps) => {
  return (
    // <Card className="w-full flex-col sm:flex-row !justify-start !rounded-xl !bg-apricot-cream border-2 border-none">
    //   <CardContent>Test 1</CardContent>
    // </Card>
    <div className="w-full flex flex-col sm:flex-row justify-start p-5">
      <div className="flex flex-1 flex-col">
        <Typography variant="h3" className="text-rosewood !font-bold text-left">
          {title}
        </Typography>
        <Typography variant="h6" className="text-midnight-violet text-left">
          {date}
        </Typography>
      </div>
      <div className="flex flex-1 flex-col">
        <Typography variant="body1" className="text-midnight-violet text-left">
          {description}
        </Typography>
        <Button href={link}>Visit Project</Button>
      </div>
    </div>
  );
};

export default ExperienceCard;
