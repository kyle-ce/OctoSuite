import React from "react";

const Skeleton = () => {
  return (
    <div className="container w-full h-screen p-3 px-2 mx-auto duration-300 rounded-sm bg-gray-500/50 animate-pulse">
      <div className="h-[15px] mx-16 rounded-sm duration-300 bg-gray-500/50 animate-pulse mt-2"></div>
      <div className="h-[15px] w-1/4 mt-2  mx-16 rounded-sm duration-300 bg-gray-500/50 animate-pulse"></div>
      <div className="flex flex-grow gap-2 mt-2">
        <div className="h-[15px] w-[15px] p-2 ml-16 rounded-full duration-300 bg-gray-500/50 animate-pulse"></div>
        <div className="h-[15px] w-1/3  mr-16 rounded-sm duration-300 bg-gray-500/50 animate-pulse"></div>
      </div>
      <div className="flex flex-col w-full gap-4 mt-8">
        {Array.from({ length: 15 }, (_, i) => (
          <div className="h-[15px] mx-16 rounded-sm duration-300 bg-gray-500/50 animate-pulse"></div>
        ))}
        <div className="h-[15px] w-1/12 mx-16 rounded-sm duration-300 bg-gray-500/50 animate-pulse"></div>
      </div>
    </div>
  );
};

export default Skeleton;
