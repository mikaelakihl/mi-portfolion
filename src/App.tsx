import { useEffect } from "react";
import {
  Routes,
  Route,
  Outlet,


  useLocation,
  Navigate,
} from "react-router-dom";


import "./App.css";



import { Projects } from "./pages/Projects";
import { CV } from "./pages/CV";
import { Art } from "./pages/Art";
import { ArtDetail } from "./pages/ArtDetail";
import { Header } from "./components/Header";



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

// const CV = () => {
//   return (
//     <div className="flex md:flex-row flex-col">
//       <SideBarCV />
//       <div className="flex flex-col flex-1">
//         <div className="flex-1 md:mt-20 mt-20">
//           <Cloud />
//         </div>
//         <div className="flex-1">
//           <MainCV />
//         </div>
//       </div>
//     </div>
//   );
// };







// const Art = () => {
//   if (!artData) return <div>No data available</div>;

//   return (
//     <>
//       {" "}
//       <div className="max-w-7xl mx-auto p-4">
//         <h2 className="text-center font-normal text-white uppercase tracking-wider">
//           Art
//         </h2>

//         <div className="bg-gradient-to-r from-transparent via-white to-transparent h-[1px] my-6"></div>
//         <section className="max-w-7xl mx-auto p-4">
//           <ul className="grid md:grid-cols-4 gap-8">
//             {artData.map((art) => (
//               <li key={art.id}>
//                 <div className="flex flex-col gap-2">
//                   <NavLink
//                     to={`/art/${art.id}`}
//                     className="block aspect-square overflow-hidden rounded-lg group"
//                   >
//                     <img
//                       src={art.img?.url}
//                       alt={art.img?.alt}
//                       className="w-full h-full object-cover border border-2 border-white/20 rounded-xl transition-transform duration-500 group-hover:scale-110 ease-in-out"
//                     />
//                   </NavLink>
//                   <h3 className="text-white text-center ">{art.name}</h3>
//                 </div>
//               </li>
//             ))}
//           </ul>
//         </section>
//       </div>
//     </>
//   );
// };


const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    if (!pathname.startsWith("/art/")) {
      window.scrollTo(0, 0);
    }
  }, [pathname]);

  return null;
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
