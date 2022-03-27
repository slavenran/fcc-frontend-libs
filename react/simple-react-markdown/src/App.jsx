import React from "react";
import { Route, Routes } from "react-router-dom";
import MarkdownPreviewer from "./pages/MarkdownPreviewer.jsx";

const App = () => {
    return <Routes>
        <Route
            exact
            path="/"
            element={<MarkdownPreviewer />}
        />
    </Routes>
};

export default App;