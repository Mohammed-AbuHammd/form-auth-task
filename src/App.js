// import './App.css';
// import SignupPage from './Pages/SignupPage';
// function App() {
//   return (
//     <div className="App">
//       <SignupPage />

//     </div>
//   );
// }

// export default App;
import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import SignupPage from "../src/Pages/SignupPage";
import LoginPage from "../src/Pages/LoginPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<SignupPage />} />
        <Route path="/login" element={<LoginPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
