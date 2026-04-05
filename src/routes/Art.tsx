import { useState } from "react";
import { NavLink } from "react-router-dom";
import { artData } from "../data/artData";
import { TbBrandAdobePhotoshop, TbBrush } from "react-icons/tb";

type ArtToolFilter = "all" | "photoshop" | "procreate";

export const Art = () => {
  const [toolFilter, setToolFilter] = useState<ArtToolFilter>("all");

  if (!artData) return <div>No data available</div>;

  const filteredArt =
    toolFilter === "all"
      ? artData
      : artData.filter((item) => item.art === toolFilter);

  const toggleTool = (tool: "photoshop" | "procreate") => {
    setToolFilter((prev) => (prev === tool ? "all" : tool));
  };

  const filterBtn =
    "rounded-full px-2 py-2 border border-white/20 bg-white/10 backdrop-blur-md text-white/80 transition-colors hover:bg-white/20 hover:text-white";
  const filterBtnActive = "ring-2 ring-white/50 bg-white/20 text-white";

  return (
    <>
      {" "}
      <div className="max-w-7xl mx-auto p-4">
        <h2 className="text-center font-normal text-white uppercase tracking-wider">
          Art
        </h2>

        <div className="bg-gradient-to-r from-transparent via-white to-transparent h-[1px] my-6"></div>
        <div className="flex justify-end gap-2 mb-4 px-4">
          <button
            type="button"
            aria-label="Show only Photoshop pieces"
            aria-pressed={toolFilter === "photoshop"}
            onClick={() => toggleTool("photoshop")}
            className={`${filterBtn} ${toolFilter === "photoshop" ? filterBtnActive : ""}`}
          >
            <TbBrandAdobePhotoshop size={20} />
          </button>
          <button
            type="button"
            aria-label="Show only Procreate pieces"
            aria-pressed={toolFilter === "procreate"}
            onClick={() => toggleTool("procreate")}
            className={`${filterBtn} ${toolFilter === "procreate" ? filterBtnActive : ""}`}
          >
            <TbBrush size={20} />
          </button>
        </div>
        <section className="max-w-7xl mx-auto p-4">
          {filteredArt.length === 0 ? (
            <p className="text-center text-white/70 text-sm">
              No pieces in this category.
            </p>
          ) : (
            <ul className="grid md:grid-cols-4 gap-8">
              {filteredArt.map((art) => (
                <li key={art.id}>
                  <div className="flex flex-col gap-2">
                    <NavLink
                      to={`/art/${art.id}`}
                      className="block aspect-square overflow-hidden rounded-lg group relative"
                    >
                      <img
                        src={art.img?.url}
                        alt={art.img?.alt}
                        className="w-full h-full object-cover border border-2 border-white/20 rounded-xl transition-transform duration-500 group-hover:scale-110 ease-in-out"
                      />
                      <div className="absolute top-2 right-2 bg-white/10 backdrop-blur-md rounded-full p-2 text-white/70 pointer-events-none">
                        {art.art === "photoshop" && (
                          <TbBrandAdobePhotoshop size={20} />
                        )}
                        {art.art === "procreate" && <TbBrush size={20} />}
                      </div>
                    </NavLink>
                    <h3 className="text-white text-center ">{art.name}</h3>
                  </div>
                </li>
              ))}
            </ul>
          )}
        </section>
      </div>
    </>
  );
};
