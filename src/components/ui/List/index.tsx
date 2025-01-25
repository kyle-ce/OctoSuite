import React, { useEffect, useState } from "react";
import ListHeader from "./ListHeader";
import Loading from "../../loading";
import { useUser } from "../../../UserProvider";
import ListData from "./ListData";
import ListAction from "./ListAction";
import useList from "../../../hooks/useList";

const List = () => {
  // get user details
  const { user, token: auth, isLoggingin } = useUser();
  const {
    data,
    fetchData,
    selectedItems,
    toggleSelect,
    toggleSelectAll,
    clearSelection,
    isDeleting,
    deleteSelectedData,
    isLoading,
  } = useList(auth, user);

  useEffect(() => {
    if (user) {
      fetchData();
    }
  }, [user, isLoggingin]);
  if (!user && !isLoggingin) {
    return;
  }
  return (
    <Loading isLoading={isLoading || isLoggingin}>
      <div className="container w-full p-3 px-2 mx-auto" id="repos">
        <ListHeader
          items={data}
          refresh={fetchData}
          toggleSelectAll={toggleSelectAll}
          clearSelection={clearSelection}
        />
        <ListData
          items={data}
          selectedItems={selectedItems}
          toggleSelect={toggleSelect}
          isDeleting={isDeleting}
        />
        <ListAction
          items={selectedItems}
          clearSelection={clearSelection}
          deleteSelectedData={deleteSelectedData}
        />
      </div>
    </Loading>
  );
};

export default List;
