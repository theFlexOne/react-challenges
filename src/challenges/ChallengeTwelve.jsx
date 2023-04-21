import { useEffect, useState } from "react";

/* Instruction
 Create a custom hook to track the dimensions of users window while resizing.*/

const useWindowDimensions = () => {
  const [dimensions, setDimensions] = useState({
    width: window.innerWidth,
    height: window.innerHeight,
  });

  const handleResize = () => {
    setDimensions({
      width: window.innerWidth,
      height: window.innerHeight,
    });
  };

  useEffect(() => {
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return dimensions;
};

const ChallengeTwelve = () => {
  const { width, height } = useWindowDimensions();
  return (
    <div className="h-full flex justify-center items-center">
      <div className="flex flex-col gap-8">
        <h1 className="text-3xl font-bold">Window Dimensions:</h1>
        <div className="flex gap-4 justify-center">
          <p className="text-3xl">Width:</p>
          <p className="text-4xl text-lime-500">{width}</p>
        </div>
        <div className="flex gap-4 justify-center">
          <p className="text-3xl">Height:</p>
          <p className="text-4xl text-lime-500">{height}</p>
        </div>
      </div>
    </div>
  );
};

export default ChallengeTwelve;
