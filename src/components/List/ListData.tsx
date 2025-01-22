import React, { useEffect, useState } from "react";
import Loading from "../loading";
import { useUser } from "../../utils/UserProvider";
import useThrottle from "../../hooks/useThrottle";
import useListData, { IRepoItem } from "../../hooks/useListData";
import useSelectItem from "../../hooks/useSelectItem";
import ListUI from "./ListUI";

const List = () => {
  // get user details
  const { user, token: auth, isLoggingin } = useUser();
  // get data details
  const { data, isLoading, isDeleting, fetchData, deleteSelectedData } =
    useListData(auth, user);
  // get selected item details
  const { selectedItems, toggleSelectAll, toggleSelect, clearSelection } =
    useSelectItem<IRepoItem>();
  // validation
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isValid, setIsValid] = useState(false);

  const handleToggleSelect = (item: IRepoItem) => {
    toggleSelect(item);
  };

  const handleSelectAll = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.checked) {
      // Select all repositories
      toggleSelectAll(data);
    } else {
      // Deselect all repositories
      clearSelection();
    }
  };

  const handleDelete = async () => {
    setIsModalOpen(false);
    deleteSelectedData(selectedItems);
    clearSelection();
  };

  const throttleRefresh = useThrottle(async () => {
    fetchData();
  }, 3000);

  const handleValidation = (value: string) => {
    // validate input matches "{owner}" using regex
    const regex = new RegExp(user, "i");
    if (!regex.test(value)) {
      return setIsValid(false);
    }
    return setIsValid(true);
  };

  useEffect(() => {
    if (user) throttleRefresh();
  }, [user, isLoggingin]);

  if (!user && !isLoggingin) {
    return;
  }
  return (
    <Loading isLoading={isLoading || isLoggingin}>
      <ListUI
        {...{
          user,
          data,
          handleSelectAll,
          throttleRefresh,
          selectedItems,
          handleToggleSelect,
          setIsModalOpen,
          isDeleting,
          isModalOpen,
          isValid,
          handleDelete,
          handleValidation,
        }}
      />
    </Loading>
  );
};

export default List;
