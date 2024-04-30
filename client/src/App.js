import React from "react";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import "./App.css";
import Posts from "./posts";
import Headers from "./header";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <main>
              <Headers />
              <Posts />
            </main>
          }
        />
        <Route path="/login" element={<div>Login</div>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
