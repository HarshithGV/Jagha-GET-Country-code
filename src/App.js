
import ReactDOM from "react-dom/client";
import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Countries from "./components/Countries";
import Layout from "./components/Layout";
import States from "./components/States";
import Jagha from "./components/Jagha";
import Districts from "./components/Districts";
import Taluks from "./components/Taluks";
import Places from "./components/Places";
import Countryadd from "./components/Countryadd";


export default function App() {
  return (


    <BrowserRouter>
      <Routes>
      <Route path="/" element={<Layout />}>
      <Route index element={<Jagha />}/>
        <Route path="/countries" element={<Countries />}/>
        <Route path="/states" element={<States />}/>
        <Route path="/districts" element={<Districts />}/>
        <Route path="/taluks" element={<Taluks />}/>
        <Route path="/places" element={<Places />}/>
        <Route path="/countryadd" element={<Countryadd />}/>
         
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
