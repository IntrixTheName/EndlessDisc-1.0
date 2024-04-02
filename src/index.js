import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Notices from "./pages/Notices";
import Radio from "./pages/Radio";
import Library from "./pages/Library";
import Import from "./pages/Import";
import Export from "./pages/Export";
import './index.css';
//import App from './App';
import reportWebVitals from './reportWebVitals';



export default function App() {
  return(
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="login" element={<Login />} />
          <Route path="notices" element={<Notices />} />
          <Route path="radio" element={<Radio />} />
          <Route path="library" element={<Library />} />
          <Route path="import" element={<Import />} />
          <Route path="export" element={<Export />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
