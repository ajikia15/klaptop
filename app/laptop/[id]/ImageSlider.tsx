"use client";
import { supabase } from "@/utils/supabase";
import { useEffect, useState, useRef } from "react";
export const ImageSlider = ({ id }: { id: number }) => {
  const [isLoading, setIsLoading] = useState(true);
  const [images, setImages] = useState<string[]>([]);
  const [activeImage, setActiveImage] = useState(0);
  const activeImageRef = useRef<HTMLLIElement | null>(null);
  const parentContainerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const fetchImages = async () => {
      try {
        const { data, error } = await supabase
          .from("images")
          .select("image_url")
          .eq("laptop_id", id); // Filter images by laptop_id
        if (error) {
          throw error;
        }

        if (data && data.length > 0) {
          setImages(data.map((item) => item.image_url));
        }

        setIsLoading(false);
      } catch (error) {
        console.error("Error fetching images:", error);
        setIsLoading(false);
      }
    };

    fetchImages();
  }, [id]);
  useEffect(() => {
    if (parentContainerRef.current && activeImageRef.current) {
      const parentContainer = parentContainerRef.current;
      const activeImage = activeImageRef.current;
      const activeImagePosition = activeImage.getBoundingClientRect();
      const parentContainerPosition = parentContainer.getBoundingClientRect();

      parentContainer.scrollTo({
        left: activeImagePosition.left - parentContainerPosition.left,
        behavior: "smooth",
      });
    }
  }, [activeImage]);
  const nextImage = () => {
    if (activeImage === images.length - 1) {
      return;
    }

    setActiveImage((prevIndex) => prevIndex + 1);
  };
  const previousImage = () => {
    if (activeImage === 0) {
      return;
    }

    setActiveImage((prevIndex) => prevIndex - 1);
  };
  const moveContainerLeft = () => {
    return;
  };
  const moveContainerRight = () => {
    return;
  };
  return (
    <>
      <div className="w-full bg-white bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-10 aspect-video rounded-lg relative">
        <div
          className="absolute flex items-center justify-center top-1/2 -translate-y-1/2 left-6 p-1 rounded-full aspect-square bg-background/90 opacity-40 hover:opacity-80 transition-opacity cursor-pointer select-none"
          onClick={previousImage}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="32"
            height="32"
            viewBox="0 0 24 24"
          >
            <path
              fill="none"
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="m14 7l-5 5l5 5"
            />
          </svg>
        </div>
        <img
          src={images.at(activeImage)}
          className="w-full h-full object-contain aspect-video"
          alt=""
        />
        <div
          className="absolute flex items-center justify-center top-1/2 -translate-y-1/2 right-6 p-1 rounded-full aspect-square bg-background/90 opacity-40 hover:opacity-80 transition-opacity cursor-pointer select-none"
          onClick={nextImage}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="32"
            height="32"
            viewBox="0 0 24 24"
          >
            <path
              fill="none"
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="m10 17l5-5l-5-5"
            />
          </svg>
        </div>
      </div>
      <ul className="w-full rounded-lg relative">
        <div
          className="absolute flex items-center justify-center top-0 bottom-0 left-0 right-[100%-10px] p-1 z-20 bg-gray-800 opacity-30 hover:opacity-80 transition-opacity cursor-pointer select-none"
          onClick={previousImage}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="32"
            height="32"
            viewBox="0 0 24 24"
          >
            <path
              fill="none"
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="m14 7l-5 5l5 5"
            />
          </svg>
        </div>
        <div
          ref={parentContainerRef}
          className="flex relative overflow-x-auto space-x-4 w-full bg-white bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-10 rounded-md scrollbar-hide snap-x px-6"
        >
          {images.map((imageUrl, index) => (
            <li
              key={index}
              ref={activeImage === index ? activeImageRef : null}
              className={`flex-shrink-0  border-4 border-primary rounded-lg snap-center transition-opacity ${
                activeImage !== index
                  ? "border-opacity-0  cursor-pointer opacity-80"
                  : "border-opacity-100 opacity-100 "
              }`}
              onClick={() => {
                setActiveImage(index);
              }}
            >
              <img
                src={imageUrl}
                alt={`Laptop picture #${index}`}
                className=" h-20 rounded-md"
              />
            </li>
          ))}
        </div>
      </ul>
    </>
  );
};
