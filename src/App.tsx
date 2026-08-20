import React, { useState } from "react";
import "./App.css";
import { Button, ThemeProvider, Typography } from "@mui/material";
import theme from "./theme";
import Home from "./pages/Home/Home";
import Education from "./pages/Education/Education";
import Experience from "./pages/Experience/Experience";

const tabs = [
  { id: "home", label: "Home" },
  { id: "exp", label: "Experience" },
  { id: "edu", label: "Education" },
];

function App() {
  const params = new URLSearchParams(window.location.search);
  const [current, setCurrent] = useState(params.get("tab") || "home");

  function renderTab() {
    switch (current) {
      case "home":
        return <Home />;
      case "edu":
        return <Education />;
      case "exp":
        return <Experience />;
      default:
        return <Home />;
    }
  }

  return (
    <ThemeProvider theme={theme}>
      <div className="App flex flex-col h-screen">
        {/* NAV BAR SECTION */}
        <div className="bg-midnight-violet p-5 flex flex-col justify-between sm:flex-row  sm:items-center sm:justify-between gap-6">
          <h1 className="text-apricot-cream text-3xl"> Alyssa Tripp</h1>
          <div className="flex flex-row justify-center items-center gap-3 w-full sm:w-auto">
            {tabs.map((tab) => (
              <Button
                className="text-apricot-cream"
                variant="contained"
                key={tab.id}
                onClick={() => {
                  setCurrent(tab.id);
                  window.history.pushState({}, "", `?tab=${tab.id}`);
                }}
              >
                {tab.label}
              </Button>
            ))}
          </div>
        </div>
        {/* CONTENT */}
        <div className="p-10 text-midnight-violet bg-apricot-cream flex flex-1">
          {renderTab()}
        </div>

        {/* Footer */}
        <div className="bg-midnight-violet p-5 flex flex-col justify-between sm:flex-row sm:items-center sm:justify-between gap-6">
          <div className="flex flex-col">
            <Typography className="text-apricot-cream text-start">
              Alyssa Tripp
            </Typography>
            <Typography className="text-apricot-cream text-start">
              Created using React and Typescript on 08/20/2026
            </Typography>
          </div>

          <div className="flex flex-col sm:flex-row sm:gap-3">
            <Button
              variant="outlined"
              color="secondary"
              component="a"
              download
              href="/RESUME.pdf"
            >
              Download Resume
            </Button>
            <Button
              variant="outlined"
              color="secondary"
              component="a"
              href="mailto:alyssajvangorkom@gmail.com"
            >
              Contact Me
            </Button>
          </div>
        </div>
      </div>
    </ThemeProvider>
  );
}

export default App;
