import { Route, Routes } from "react-router-dom";
import { Fragment } from 'react';
import Login from "./pages/login";
import DashBoard from "./pages/dashboard";  

function App() {
  return (
    <Fragment>
      <Routes>
        <Route path="/" element={<Login/>} />
        <Route index path="/dashboard" element={<DashBoard />} />
      </Routes>
    </Fragment>
  );
}

export default App;
