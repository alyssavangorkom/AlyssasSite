import React, { useState } from "react";
import "./App.css";
import { Button, ThemeProvider } from "@mui/material";
import theme from "./theme";

const tabs = [
  { id: "home", label: "Home" },
  { id: "exp", label: "Experience" },
  { id: "edu", label: "Education" },
];

function App() {
  const [current, setCurrent] = useState("home");

  return (
    <ThemeProvider theme={theme}>
      <div className="App flex flex-col h-screen">
        {/* NAV BAR SECTION */}
        <div className="bg-midnight-violet p-5 flex flex-row justify-between">
          <h1 className="text-apricot-cream text-3xl"> Alyssa Tripp</h1>
          <div className="flex flex-row justify-end gap-3">
            {tabs.map((tab) => (
              <Button
                className="text-apricot-cream"
                variant="contained"
                key={tab.id}
                onClick={() => setCurrent(tab.id)}
              >
                {tab.label}
              </Button>
            ))}
          </div>
        </div>
        <header className="App-header text-midnight-violet bg-apricot-cream flex flex-1">
          <p>Under Construction!!!</p>
        </header>
      </div>
    </ThemeProvider>
  );
}

export default App;
