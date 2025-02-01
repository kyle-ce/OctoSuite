import React from "react";
import Skeleton from "./Skeleton";

const Loading = ({
  isLoading,
  children,
}: {
  isLoading: boolean;
  children: React.ReactNode;
}) => {
  if (isLoading) {
    return <Skeleton />;
  }
  return <>{children}</>;
};

export default Loading;
