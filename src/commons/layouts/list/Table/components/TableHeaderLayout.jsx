import React from "react";

const TableHeaderLayout = ({ itemsAttrs, itemsEvents, itemsModals }) => {
  var column = itemsAttrs?.map((itemsAttr) => ({
    name: itemsAttr.label,
    selector: (row) => row[itemsAttr.featureName],
    sortable: true,
    cell: (row) => <div className="whitespace-pre overflow-hidden text-ellipsis">
      {row[itemsAttr.featureName]}
    </div>,
  }));

  if (itemsEvents && itemsEvents.length) {
    column = column.concat({
      cell: (row) => (
        <div className="flex flex-row justify-center w-full p-1 gap-1">
          {itemsEvents(row)?.map((event) => event)}
          {itemsModals(row).map((modal) => modal)}
        </div>
      ),
      grow: 2,
    });
  }

  return column;
};

export default TableHeaderLayout;
