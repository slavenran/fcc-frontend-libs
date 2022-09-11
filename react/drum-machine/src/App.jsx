import React from "react";
import { Route, Routes } from "react-router-dom";
import DrumMachine from "./pages/DrumMachine.jsx";

const App = () => {
  return <Routes>
    <Route
      exact
      path="/"
      element={<DrumMachine />}
    />
  </Routes>
}

export default App;