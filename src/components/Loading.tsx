import React from "react";
import Skeleton from "./List/Skeleton";

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
