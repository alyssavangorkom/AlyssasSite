import { section } from "../Home/Home";
import mtulogo from "../../images/mtu.png";
import altoonalogo from "../../images/altoona.png";
import EducationCard from "../../components/EducationCard/EducationCard";

const Education = () => {
  return (
    <div className={section}>
      <EducationCard
        title="Michigan Technological University"
        date="August 2022 to May 2026"
        logo={mtulogo}
        major="BS Software Engineering"
        gpa="3.8"
        description="I chose to go to Michigan Technological University because of the beauty of living in the UP, so close to Lake Superior. 
        Through my time there, I took a co-op at Creative Mines and spent a semester off while working full-time.  I was able to take classes in ecology
        and pursue things that I enjoyed outside of computer science to give me a well-rounded education. I worked on many real-world projects through things like HIDE Enterprise
        and classes like Team Software and UI/UX Design.  I was also able to find my niche in software through courses like Accessible Design and UI/UX Design. Outside of classes,
        I loved to hike and explore with my friends and was on the leadership team of Serve the King Christian Fellowship."
        link="https://www.mtu.edu/"
      />
      <EducationCard
        title="Altoona High School"
        date="September 2018 to June 2022"
        logo={altoonalogo}
        gpa="4.0"
        description="I graduated from Altoona High School as valedictorian with a 4.0 GPA.  I made the most of my 
        high school experience by taking as many AP courses as I could and even took some web development courses through 
        the local community college.  My main extracurriculars were choir and show choir."
        link="https://www.altoona.k12.wi.us/high-school-home"
      />
    </div>
  );
};

export default Education;
