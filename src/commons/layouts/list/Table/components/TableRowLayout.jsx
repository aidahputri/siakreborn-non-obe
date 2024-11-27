import React from "react";

const TableRowLayout = ({ viewItems, itemsAttrs }) => {
  return (
    viewItems &&
    viewItems.map((collection) => collection?.map(item => {
      var itemMap = { id: item?.id };
      itemsAttrs.map((itemsAttr) => {
        itemMap[itemsAttr.featureName] = item[itemsAttr.featureName];
      });
      return itemMap;
    })).flat()
  );
};

export default TableRowLayout;
