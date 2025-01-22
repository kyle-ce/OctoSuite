import React from "react";
import { RotatingLines } from "react-loader-spinner";
import Skeleton from "./List/Skeleton";

const Loading = ({
  isLoading,
  children,
}: {
  isLoading: boolean;
  children: React.ReactNode;
}) => {
  if (isLoading) {
    return (
      // <div className="flex h-full items-center justify-center min-w-[350px] min-h-[200px] border border-solid rounded-sm shadow-lg border-black/30">
      //   <RotatingLines
      //     visible={true}
      //     width="64"
      //     strokeColor="gray"
      //     strokeWidth="5"
      //     animationDuration="0.75"
      //     ariaLabel="rotating-lines-loading"
      //   />
      // </div>
      <Skeleton />
    );
  }
  return <>{children}</>;
};

export default Loading;
