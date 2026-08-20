import { Avatar, Button, Card, CardContent, Typography } from "@mui/material";
import headshot from "../../images/headshot.jpg";
import Break from "../../components/Break/Break";

export const section =
  "flex flex-col justify-start items-center gap-8 w-full lg:w-4/5 mx-auto";

const Home = () => {
  return (
    <div className={section}>
      <div className="flex flex-row gap-8 w-full">
        <Avatar
          className="!w-1/2 !max-w-[500px] !h-auto"
          alt="Alyssa Tripp Photo"
          src={headshot}
        />

        {/* Card 1 */}
        <div className="flex flex-col gap-5 w-full justify-center">
          <h1 className="text-5xl font-black justify-start text-rosewood  text-start">
            Hi,
          </h1>
          <p className=" text-start">
            My name is Alyssa Tripp (formerly van Gorkom). I graduated from
            Michigan Technological University in May of 2026 with a BS in
            Software Engineering. I am passionate about intuitive, accessible,
            and fun designs and would love to join your web development team!
          </p>
          <Button
            className="w-fit mx-auto"
            variant="contained"
            size="large"
            component="a"
            href="mailto:alyssajvangorkom@gmail.com"
          >
            Contact Me!
          </Button>
        </div>
      </div>

      <Break />

      <div className="flex flex-row gap-8 w-full">
        <Card className="!bg-fern !rounded-lg flex-1">
          <CardContent>
            <Typography
              variant="h4"
              className="font-bold !mb-4 text-apricot-cream"
            >
              Modern Stack
            </Typography>
            <Typography variant="body1" className="mb-2 text-apricot-cream">
              Proficient in React, Typescript, and JavaScript for building
              modern web applications.
            </Typography>
          </CardContent>
        </Card>
        <Card className="!bg-fern !rounded-lg flex-1">
          <CardContent>
            <Typography
              variant="h4"
              className="font-bold !mb-4 text-apricot-cream"
            >
              Real World Experience
            </Typography>
            <Typography variant="body1" className="mb-2 text-apricot-cream">
              2 years of internship experience - delivering real products to
              real sponsors.
            </Typography>
          </CardContent>
        </Card>
        <Card className="!bg-fern !rounded-lg flex-1">
          <CardContent>
            <Typography
              variant="h4"
              className="font-bold !mb-4 text-apricot-cream"
            >
              Personality Hire
            </Typography>
            <Typography variant="body1" className="mb-2 text-apricot-cream">
              Fun and enthusiastic! I love teamwork and working with people!
              (yes, that includes pair programming)
            </Typography>
          </CardContent>
        </Card>
      </div>

      <Break />

      <div className="flex flex-col justify-start w-full">
        <Typography
          variant="h3"
          className="text-rosewood !font-black text-start "
        >
          About Me
        </Typography>
      </div>
    </div>
  );
};

export default Home;
