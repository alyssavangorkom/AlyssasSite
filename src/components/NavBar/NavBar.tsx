import { useState } from "react";

const tabs = [
  { id: "home", label: "Home" },
  { id: "exp", label: "Experience" },
  { id: "edu", label: "Education" },
];

const NavBar = () => {
  const [current, setCurrent] = useState("home");

  return (
    <div className="bg-midnight-violet p-5 flex flex-row justify-between">
      <h1 className="text-apricot-cream text-3xl"> Alyssa Tripp</h1>
    </div>
  );
};
export default NavBar;
