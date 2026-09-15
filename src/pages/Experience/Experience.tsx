import ExperienceCard from "../../components/ExperienceCard/ExperienceCard";
import { section } from "../Home/Home";
import herpicon from "../../images/herpicon.png";
import fmhicon from "../../images/elephant.gif";
import raptoricon from "../../images/raptor.png";
import sfilogo from "../../images/sfilogo.webp";

const Experience = () => {
  return (
    <div className={section}>
      <ExperienceCard
        title="Michigan Herp Atlas"
        date="August 2024 to Present Date"
        logo={herpicon}
        description="The Michigan Herp Atlas App started out as a project for HIDE enterprise at Michigan Tech.
        I started out as a team member, coming up with designs for what the app should look like and 
        starting to implement them with my team.  My senior year (2025-2026) I became the project manager, leading a team of 3
        developers to build the application.  When I graduated, the sponsors wanted the app to stay in my hands
        and I have been working part time on finishing up the application and deploying it to the App Store and Google Play Store.
        Now that the app is complete, I have been stepping in to fix any bugs that might appear.  The app is built on C# and .NET. 
        It allows users to submit records of herpofauna they find in the field or save them as drafts to upload once they have a strong connection."
        link="https://apps.apple.com/us/app/michigan-herp-atlas/id6769060590"
      />
      <ExperienceCard
        title="Fair Medical Hire"
        date="February 2026 to April 2026"
        logo={fmhicon}
        background="bg-midnight-violet"
        description="Through my position as a full-stack developer at Creative Mines, I built a React-based 
        web application used for hiring medical professionals.  The main feature that I built out for this site
        was customizable marketing pages using Payload CMS.  As a 3 person team, we completed this project within a strict 8-week time frame,
        from design to development to deployment."
        link="https://fairmedhire.com/"
      />
      <ExperienceCard
        title="Raptor Comply"
        date="August 2025 to January 2026"
        logo={raptoricon}
        description="While at Creative Mines, I was a part of a team that worked with RaptorMaps to create a viable MVP that would
        manage access and policies for solar assets.  We had a 3-month time frame for this project.  We built 3 interconnected apps: 
        a content management system built off of Payload, a React based web application, and an API to communicate with our database.  Our tech
        stack also included RadixUI, pgAdmin, drizzle, and nextJS. Some of my contributions to the project included
        form builders and highly customizable table components.  This application is used by large energy companies such as 
        TotalEnergies and BayWa."
        link="https://www.raptorcomply.com/"
      />
      <ExperienceCard
        title="Project ARCH"
        date="October 2024 to August 2025"
        logo={sfilogo}
        background="bg-apricot-cream"
        description="Project ARCH is my favorite project that I worked on during my time at Creative Mines.
        ARCH started as a study in how online tools and AI can be used to work collaboratively online, but it ended 
        one step away from a learning management system as a collaborative hub for online conferences and classes. Universities globally 
        have used the ARCH for classes and Google DeepMind even hosted their AI conference in 2025 on the ARCH.  My main contribution to this 
        project was developing an advanced PDF viewer that allowed annotation features such as highlighting text and images and commenting on certain parts of the PDF
        using a live chat. I also helped build our video calling system based off of LiveKit."
        link="https://projectarch.org/"
      />
    </div>
  );
};

export default Experience;
