import { useNavigate, useParams } from "react-router-dom";
import { artData } from "../data/artData";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import {
  TbBrandAdobePhotoshop,
  TbBrush,
  TbInfoCircle,
} from "react-icons/tb";

const toolLabel: Record<"photoshop" | "procreate", string> = {
  photoshop: "Photoshop",
  procreate: "Procreate",
};

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

      <div className="flex items-center justify-center w-full gap-4 relative mb-2">
        <button
          type="button"
          onClick={handlePrev}
          disabled={!prevArt}
          className={`absolute left-0 md:static z-10 p-2 rounded-full bg-white/10 backdrop-blur-md text-white transition-opacity ${!prevArt ? "opacity-30 cursor-not-allowed hidden md:block" : "hover:bg-white/20"}`}
        >
          <FaChevronLeft size={30} />
        </button>

        <div className="relative shrink-0 max-w-full">
          <img
            src={"/" + art.img?.url}
            alt={art.img?.alt}
            className="max-w-full md:max-w-[80vw] max-h-[70vh] md:max-h-[80vh] object-contain rounded-lg shadow-xl border border-2 border-white/20 block"
          />

          <div className="absolute top-2 right-2 md:top-3 md:right-3 z-20 group">
            <button
              type="button"
              aria-label="Artwork details"
              aria-haspopup="true"
              className="relative z-10 rounded-full p-2.5 bg-white/15 backdrop-blur-md border border-white/25 text-white shadow-lg hover:bg-white/25 transition-colors outline-none focus-visible:ring-2 focus-visible:ring-white/60"
            >
              <TbInfoCircle size={22} aria-hidden />
            </button>

            <div
              role="region"
              aria-label="Artwork details"
              className="absolute top-[calc(100%+6px)] right-0 w-[min(20rem,calc(100vw-2rem))] rounded-xl border border-white/20 bg-white/10 backdrop-blur-md p-4 shadow-xl text-white opacity-0 invisible -translate-y-1 pointer-events-none transition-all duration-200 group-hover:opacity-100 group-hover:visible group-hover:translate-y-0 group-hover:pointer-events-auto group-focus-within:opacity-100 group-focus-within:visible group-focus-within:translate-y-0 group-focus-within:pointer-events-auto before:absolute before:left-0 before:right-0 before:bottom-full before:h-3 before:content-['']"
            >
              <dl className="flex flex-col gap-3 text-center">
                {art.year != null && (
                  <div>
                    <dt className="text-xs uppercase tracking-wider text-white/50 mb-0.5">
                      Year
                    </dt>
                    <dd className="text-sm">{art.year}</dd>
                  </div>
                )}
                <div>
                  <dt className="text-xs uppercase tracking-wider text-white/50 mb-0.5">
                    Made with
                  </dt>
                  <dd className="flex flex-row items-center justify-center gap-2 text-sm">
                    <span>{toolLabel[art.art]}</span>
                    {art.art === "photoshop" && (
                      <TbBrandAdobePhotoshop
                        size={16}
                        className="text-white/90 shrink-0"
                      />
                    )}
                    {art.art === "procreate" && (
                      <TbBrush size={16} className="text-white/90 shrink-0" />
                    )}
                  </dd>
                </div>
                <div>
                  <dt className="text-xs uppercase tracking-wider text-white/50 mb-0.5">
                    Dimensions
                  </dt>
                  <dd className="text-sm tabular-nums">
                    {art.img.width} × {art.img.height} px
                  </dd>
                </div>
              </dl>
              {art.description ? (
                <p className="mt-3 pt-3 border-t border-white/10 text-sm text-white/80 leading-relaxed text-center">
                  {art.description}
                </p>
              ) : null}
            </div>
          </div>
        </div>

        <button
          type="button"
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
