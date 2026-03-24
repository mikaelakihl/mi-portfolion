import { useNavigate, useParams } from "react-router-dom";
import { artData } from "../data/artData";
import { FaChevronLeft } from "react-icons/fa";
import { FaChevronRight } from "react-icons/fa";

export const ArtDetail = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const currentId = Number(id);

    const art = artData.find((item) => item.id === currentId);

    if (!art) return <div>No art found</div>;

    const currentIndex = artData.findIndex((item) => item.id === currentId);
    const prevArt = artData[currentIndex - 1];
    const nextArt = artData[currentIndex + 1];

    const handlePrev = () => {
        if (prevArt) navigate(`/art/${prevArt.id}`);
    };

    const handleNext = () => {
        if (nextArt) navigate(`/art/${nextArt.id}`);
    };

    return (
        <div className="flex flex-col items-center justify-center min-h-[calc(100vh-120px)] p-4 relative">
            <h2 className="font-normal text-center my-8 text-white uppercase tracking-wider">
                {art.name}
            </h2>

            <div className="flex items-center justify-center w-full gap-4 relative">
                {/* Previous Button */}
                <button
                    onClick={handlePrev}
                    disabled={!prevArt}
                    className={`absolute left-0 md:static z-10 p-2 rounded-full bg-white/10 backdrop-blur-md text-white transition-opacity ${!prevArt ? "opacity-30 cursor-not-allowed hidden md:block" : "hover:bg-white/20"}`}
                >
                    <FaChevronLeft size={30} />
                </button>

                <img
                    src={"/" + art.img?.url}
                    alt={art.img?.alt}
                    className="max-w-full md:max-w-[80vw] max-h-[70vh] md:max-h-[80vh] object-contain rounded-lg shadow-xl border border-2 border-white/20"
                />

                {/* Next Button */}
                <button
                    onClick={handleNext}
                    disabled={!nextArt}
                    className={`absolute right-0 md:static z-10 p-2 rounded-full bg-white/10 backdrop-blur-md text-white transition-opacity ${!nextArt ? "opacity-30 cursor-not-allowed hidden md:block" : "hover:bg-white/20"}`}
                >
                    <FaChevronRight size={30} />
                </button>
            </div>
        </div>
    );
};
