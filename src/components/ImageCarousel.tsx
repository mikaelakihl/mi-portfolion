import { useState } from "react";
import { useTranslation } from "react-i18next";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import type { IProjectImage } from "../types/project";

export const ImageCarousel = ({ images }: { images: IProjectImage[] }) => {
  const { t } = useTranslation();
  const [index, setIndex] = useState(0);

  if (images.length === 0) return null;

  const image = images[index];
  const goPrev = () => setIndex((i) => (i - 1 + images.length) % images.length);
  const goNext = () => setIndex((i) => (i + 1) % images.length);

  return (
    <div className="mb-8">
      <div className="relative aspect-video border-2 border-white/20 rounded-xl shadow-xl overflow-hidden">
        <img
          src={image.src}
          alt={image.alt}
          width={image.width}
          height={image.height}
          className="w-full h-full object-cover"
        />
        {images.length > 1 && (
          <>
            <button
              type="button"
              onClick={goPrev}
              aria-label="Previous image"
              className="absolute left-2 top-1/2 -translate-y-1/2 p-2 rounded-full bg-white/10 backdrop-blur-md text-white hover:bg-white/20 transition-colors"
            >
              <FaChevronLeft size={18} />
            </button>
            <button
              type="button"
              onClick={goNext}
              aria-label="Next image"
              className="absolute right-2 top-1/2 -translate-y-1/2 p-2 rounded-full bg-white/10 backdrop-blur-md text-white hover:bg-white/20 transition-colors"
            >
              <FaChevronRight size={18} />
            </button>
          </>
        )}
      </div>

      {image.caption && (
        <p className="text-center text-white/60 text-sm mt-2">{t(image.caption)}</p>
      )}

      {images.length > 1 && (
        <div className="flex justify-center gap-1.5 mt-2">
          {images.map((_, i) => (
            <button
              key={i}
              type="button"
              onClick={() => setIndex(i)}
              aria-label={`Go to image ${i + 1}`}
              className={`w-1.5 h-1.5 rounded-full transition-colors ${
                i === index ? "bg-white" : "bg-white/30"
              }`}
            />
          ))}
        </div>
      )}
    </div>
  );
};
