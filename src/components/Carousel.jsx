import { useEffect, useState } from "react";
import {
  Carousel,
  CarouselContent,
  CarouselNavigation,
  CarouselItem,
} from "./core/Carousel";
import { Button } from "@nextui-org/react";
import Vector from "../../public/Vector.svg";
import Squar from "../../public/Squar.svg";
import { FaPlus } from "react-icons/fa";

const CustomCarousel = () => {
  // Load image data from localStorage or use initial dummy data
  const [imageData, setImageData] = useState(() => {
    const storedImages = localStorage.getItem("carouselImages");
    return storedImages ? JSON.parse(storedImages) : ["./DummyImage.jpg"];
  });

  // Function to add a new image
  const addImage = () => {
    const newImageData = [...imageData, "./DummyImage.jpg"];
    setImageData(newImageData);
    localStorage.setItem("carouselImages", JSON.stringify(newImageData));
  };

  // Function to remove an image

  // UseEffect to load the images from localStorage
  useEffect(() => {
    const storedImages = localStorage.getItem("carouselImages");
    if (storedImages) {
      setImageData(JSON.parse(storedImages));
    }
  }, []);
  return (
    <div className="flex w-full justify-center flex-col md:flex-row bg-[#363C43] p-5 sm:pl-0 rounded-[18.89px] shadow-black drop-shadow-2xl">
      {/* Side Icons */}
      <span className="flex px-3 flex-row md:flex-col items-center md:h-36 justify-between">
        <div className="w-[25px] h-[25px] mb-4 md:mb-0">
          <img
            src={Vector}
            alt="Vector"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="w-[35px] h-[35px]">
          <img
            src={Squar}
            alt="Square"
            className="w-full h-full object-contain"
          />
        </div>
      </span>
      <div className="relative flex flex-col -mt-2 px-4">
        <Carousel>
          <div className="flex mt-3 flex-row justify-between items-center">
            <div className="p-3 px-8 rounded-2xl bg-[#171717]">
              <h1 className="text-xl">Gallery</h1>
            </div>
            <div className="flex flex-row w-[370px] min-[500px]:justify-around max-[500px]:ml-4">
              <Button onClick={addImage} radius="full" color="secondary" className="sm:p-3 sm:px-5 bg-[#ffffff08] rounded-[104px] shadow-[inset_0px_3.26px_3.26px_#ffffff26,inset_0px_0px_48.91px_#ffffff0d,9px_10px_7.1px_#00000066,-0.5px_-0.5px_6.9px_#ffffff40] backdrop-blur-[104.56px] backdrop-brightness-[100%] [-webkit-backdrop-filter:blur(104.56px)_brightness(100%)]">
              <FaPlus /><span className="max-sm:hidden">Add Image</span>
              </Button>
              <CarouselNavigation
              className="w-full -mt-11 gap-2 max-sm:mr-10 mr-20"
              classNameButton="bg-gradient-to-r from-[#303439] to-[#161718] *:stroke-zinc-50 dark:bg-zinc-400 dark:*:stroke-zinc-800 shadow-[4px_5px_30px_5px_#101113,-5px_-3px_30px_-10px_#95bee6]"
              alwaysShow
            />
            </div>
            
          </div>

          <CarouselContent className="-ml-4 mt-10 mx-[240px] max-sm:-mx-[50px] hover:mb-10">
            {imageData.map((image, index) => (
              <CarouselItem key={index} className="basis-1/2 max-sm:basis-[60%] pl-4 hover:scale-125 transition-all duration-200 hover:z-40 hover:-rotate-6">
                <div className="flex aspect-[1/1] items-center justify-center max-w-52">
                  <img
                    sizes="10px"
                    src="./DummyImage.jpg"
                    alt="NextUI Album Cover"
                    className="w-full h-full object-cover rounded-3xl saturate-0 hover:saturate-100 shadow-gray-700 shadow-sm"
                  />
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          {/* <div className="mt-4 flex justify-center">
            <Button onClick={addImage} color="secondary">
              Add Image
            </Button>
          </div> */}
          {/* <div className="mt-4 flex justify-center">
            <Button
              onClick={() => removeImage(imageData.length - 1)}
              color="secondary"
            >
              Remove Image
            </Button>
          </div> */}
        </Carousel>
      </div>
    </div>
  );
};

export default CustomCarousel;
