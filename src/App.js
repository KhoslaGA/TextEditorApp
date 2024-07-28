import "./App.css";
import Navbar from "./components/Navbar";
import TextForm from "./components/Textform";
import React, { useState } from "react";
import Alert from "./components/Alert";
// Switch as been replaced by Routes in React js
// import { BrowserRouter as Router, Link, Route, Routes } from "react-router-dom";
// import About from "./components/About";

function App() {
  const [mode, setMode] = useState("light");
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type,
    });
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  }; // Whether dark mode is enabled or not

  const toggleMode = () => {
    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "#042743";
      showAlert("Dark Mode Enabled", "success");
      document.title = "TextEditor- Dark Mode";

      setInterval(() => {
        document.title = "TextEditor is Amazing";
      }, 2000);
      setInterval(() => {
        document.title = "Install TextEditor Now";
      }, 1500);
    } else {
      setMode("light");
      document.body.style.backgroundColor = "white";
      document.title = "TextEditor- Light Mode";
    }
  };
  return (
    <>
      <Navbar
        title="TextEditor"
        aboutText="About TextEditor"
        mode={mode}
        toggleMode={toggleMode}
      />
      <Alert alert={alert} />
      <div className="container my-3">
        <TextForm
          showAlert={showAlert}
          heading="Enter the text to analyze below"
          mode={mode}
        />
      </div>
    </>
  );
}
export default App;

//.https://create-react-app.dev/docs/deployment/- link to deploy react app
