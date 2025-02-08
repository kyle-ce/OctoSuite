import React, { useEffect } from "react";
import ListHeader from "./ListHeader";
import Loading from "./Loading";
import { useUser } from "../../../contexts/UserProvider";
import ListData from "./ListData";
import ListAction from "./ListAction";
import useList from "../../../hooks/useList";
import {
  deleteRepositories,
  fetchRepositoriesData,
} from "../../../services/repositoryService";
import { useNavigate } from "react-router";

const List = () => {
  const fetchDataHandler = () => fetchRepositoriesData(auth);
  const deleteDataHandler = (selectedItems) =>
    deleteRepositories(selectedItems, auth, user);

  const navigate = useNavigate();

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
  } = useList(fetchDataHandler, deleteDataHandler);

  useEffect(() => {
    if (!user) {
      navigate("/");
    }
    fetchData();
  }, [user, isLoggingin]);
  // if (!user) {

  // }
  return (
    <Loading isLoading={isLoading || isLoggingin}>
      <div
        className="container w-full max-w-lg p-3 px-2 mx-auto bg-white rounded-lg shadow-lg"
        id="repos"
      >
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
          isLoading={isDeleting}
        />
        <ListAction items={selectedItems} onSubmit={deleteSelectedData} />
      </div>
    </Loading>
  );
};

export default List;
