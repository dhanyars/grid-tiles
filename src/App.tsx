import React from "react";
import { Grid } from "./routes/grid";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <Routes>
      <Route path="*" element={<Grid />} />
    </Routes>
  );
}

export default App;
