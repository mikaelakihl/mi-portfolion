
import {
  Routes,
  Route,
  Outlet,
  Navigate,
} from "react-router-dom";

import "./App.css";

import { Projects } from "./routes/Projects";
import { CV } from "./routes/CV";
import { Art } from "./routes/Art";
import { ArtDetail } from "./routes/ArtDetail";
import { Header } from "./components/Header";
import { ScrollToTop } from "./components/ScrollToTop";



const Layout = () => {
  return (
    <div className="App">
      <Header />
      <main className="max-w-7xl mx-auto px-4 md:px-8 bg-brand-100">
        <Outlet />
      </main>
    </div>
  );
};



const App = () => {
  return (
    <>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="/" element={<CV />} />
          <Route path="projects" element={<Projects />} />
          <Route path="art" element={<Art />} />
          <Route path="art/:id" element={<ArtDetail />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Route>
      </Routes>
    </>
  );
};

export default App;
