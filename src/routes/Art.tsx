import { NavLink } from "react-router-dom";
import { artData } from "../data/artData";
import { TbBrandAdobePhotoshop, TbBrush } from "react-icons/tb";

export const Art = () => {
    if (!artData) return <div>No data available</div>;

    return (
        <>
            {" "}
            <div className="max-w-7xl mx-auto p-4">
                <h2 className="text-center font-normal text-white uppercase tracking-wider">
                    Art
                </h2>

                <div className="bg-gradient-to-r from-transparent via-white to-transparent h-[1px] my-6"></div>
                <section className="max-w-7xl mx-auto p-4">
                    <ul className="grid md:grid-cols-4 gap-8">
                        {artData.map((art) => (
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
                                        <div>
                                        <div className="absolute top-2 right-2 bg-white/10 backdrop-blur-md rounded-full p-2 text-white/70">
                {art.art === 'photoshop' && <TbBrandAdobePhotoshop size={20} />
                }
                {art.art === 'procreate' && <TbBrush size={30} />}
            </div>
                                        </div>
                                    </NavLink>
                                    <h3 className="text-white text-center ">{art.name}</h3>
                                </div>
                            </li>
                        ))}
                    </ul>
                </section>
            </div>
        </>
    );
};