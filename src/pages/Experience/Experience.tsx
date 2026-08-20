import ExperienceCard from "../../components/ExperienceCard/ExperienceCard";
import { section } from "../Home/Home";

const Experience = () => {
  return (
    <div className={section}>
      <ExperienceCard
        left
        title="title"
        date="date"
        logo="logo"
        description="description"
        link="link"
      />
    </div>
  );
};

export default Experience;
