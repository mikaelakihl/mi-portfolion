import { NavLink } from "react-router-dom";

export const Cloud = () => {
    return (
        <>
            <NavLink to="/art">
                <div className=" relative h-full">
                    <div className="absolute inset-3 flex items-center gap-2 -translate-y-[10%] transition-transform duration-500 hover:scale-110 ease-in-out">
                        <img
                            src="/assets/art/flysland.png"
                            alt="floating island"
                            className="w-full h-full object-contain -rotate-20 mt-[5%] mx-[2%] translate-x-[20%] md:translate-x-[9%] filter-[drop-shadow(0_0_1px_rgba(0,0,0,0.3))_drop-shadow(0_4px_6px_rgba(0,0,0,0.3))]"
                        />
                        <img
                            src="/assets/art/no_one_is_captain_but_you.png"
                            alt="floating island"
                            className="w-full h-full mb-10 object-contain -rotate-6 -translate-x-[8%] filter-[drop-shadow(0_0_1px_rgba(0,0,0,0.3))_drop-shadow(0_4px_6px_rgba(0,0,0,0.3))]"
                        />
                        <img
                            src="/assets/art/djungle_2.png"
                            alt="floating island"
                            className="w-full h-full object-contain rotate-6 mb-[12%] -translate-x-[20%] filter-[drop-shadow(0_0_1px_rgba(0,0,0,0.3))_drop-shadow(0_4px_6px_rgba(0,0,0,0.3))]"
                        />
                        <img
                            src="/assets/art/caravan_dolphin.png"
                            alt="floating island"
                            className="w-full h-full object-contain rotate-15 mt-[5%] mx-[-4%] -translate-x-[25%] md:-translate-x-[20%] filter-[drop-shadow(0_0_1px_rgba(0,0,0,0.3))_drop-shadow(0_4px_6px_rgba(0,0,0,0.3))]"
                        />
                    </div>
                    <img
                        src="/assets/cloud.png"
                        alt="cloud"
                        className="w-full h-full relative z-20"
                    />
                </div>
            </NavLink>
        </>
    );
};
