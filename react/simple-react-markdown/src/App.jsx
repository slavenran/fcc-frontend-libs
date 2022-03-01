import React from "react";
import { Route, Routes } from "react-router-dom";
import Wow from "./pages/Wow.jsx";

const App = () => {
    return <Routes>
        <Route
            exact
            path="/"
            element={<Wow />}
        />
    </Routes>
};

export default App;