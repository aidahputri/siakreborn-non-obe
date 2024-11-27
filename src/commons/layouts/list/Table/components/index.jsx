import React, { useEffect, useState } from "react";

import TableHeaderLayout from "./TableHeaderLayout";
import TableRowLayout from "./TableRowLayout";
import DataTable from "react-data-table-component";
import searchItems from "@/commons/utils/Table/SearchItems";
import filterItems from "@/commons/utils/Table/FilterItems";
import SearchField from "@/commons/components/Table/SearchField";
import FilterField from "@/commons/components/Table/FilterField";

const ListComponentLayout = ({
  items,
  detail,
  isSearchable,
  filterFields,
  itemsAttrs,
  itemsEvents,
  itemsModals,
}) => {
  const [viewItems, setViewItems] = useState([]);

  const [searchText, setSearchText] = useState("");

  const [filterTextList, setFilterTextList] = useState([]);

  useEffect(() => {
    var newItems = items;
    newItems = searchItems(newItems, searchText, itemsAttrs);
    newItems = filterItems(newItems, filterTextList);

    setViewItems(newItems);
  }, [searchText, filterTextList, items]);

  useEffect(() => {
    setFilterTextList(
      filterFields?.map((filterField) => ({ ...filterField, text: "" }))
    );
  }, [filterFields]);

  const updateSearchText = (newSearchText) => setSearchText(newSearchText);

  const updateFilterText = (newFilterText, featureName) =>
    setFilterTextList((prev) =>
      prev.map((filterText) =>
        filterText.featureName == featureName
          ? { ...filterText, text: newFilterText }
          : filterText
      )
    );

  return (
    <div>
      <DataTable
        columns={TableHeaderLayout({ itemsAttrs, itemsEvents, itemsModals })}
        data={TableRowLayout({ viewItems, itemsAttrs })}
        pagination
        subHeader
        subHeaderComponent={
          <div className="flex flex-wrap items-center justify-stretch gap-5 w-full">
            {isSearchable && (
              <SearchField updateSearchText={updateSearchText} />
            )}
            {filterFields?.map(
              (filterField) =>
                filterField && (
                  <FilterField
                    filterField={filterField}
                    updateFilterText={updateFilterText}
                  />
                )
            )}
          </div>
        }
      />
    </div>
  );
};

export default ListComponentLayout;
