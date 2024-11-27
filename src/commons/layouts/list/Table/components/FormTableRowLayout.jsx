import React from "react";

const FormTableRowLayout = ({
  selected,
  viewItems,
  itemsAttrs,
  handleChange,
}) => {
  return (
    viewItems &&
    viewItems
      .map((collection) =>
        collection?.map((item) => {
          var itemMap = { id: item?.id };
          itemsAttrs.map((itemsAttr) => {
            if (itemsAttr.id === "radio") {
              const isChecked = selected.some(
                (selectedItem) =>
                  selectedItem.id === item.id
              );

              itemMap[itemsAttr.featureName] = (
                <div className="table-cell">
                  <input
                    type="radio"
                    name={item[itemsAttr.featureName]}
                    value={item.id}
                    checked={isChecked}
                    onClick={() => handleChange(item)}
                  />
                </div>
              );
            } else itemMap[itemsAttr.featureName] = item[itemsAttr.featureName];
          });
          return itemMap;
        })
      )
      .flat()
  );
};

export default FormTableRowLayout;
