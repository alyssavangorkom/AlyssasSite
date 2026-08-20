import { Avatar, Button } from "@mui/material";
import headshot from "../../images/headshot.jpg";

export const section =
  "flex flex-col justify-start items-center gap-3 w-full lg:w-4/5 mx-auto";

const Home = () => {
  return (
    <div className={section}>
      <div className="flex flex-row gap-8 w-full">
        <Avatar
          className="!w-1/2 !h-auto"
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
    </div>
  );
};

export default Home;
