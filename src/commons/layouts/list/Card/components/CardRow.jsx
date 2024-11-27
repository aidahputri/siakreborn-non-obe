import React from "react";

import { ListItem, VisualizationAttr } from "@/commons/components";

const CardRow = ({ item, itemsAttrs, itemsEvents }) => {
  return (
    <ListItem>
      {/* Data Binding [singularName /] Card Element */}
      <div className="card-body flex flex-row gap-2 content-center">
        {itemsAttrs?.map((itemsAttr) =>
          itemsAttr.featureName == "logoUrl" ? (
            <VisualizationAttr
              content={item[itemsAttr.featureName]}
            />
          ) : (
            <div className="flex flex-col">
              <VisualizationAttr
                content={item[itemsAttr.featureName]}
              />
            </div>
          )
        )}
        <div className="card-actions self-end justify-end">
          {/* View Element Event [singularName /] Card Element*/}
          {itemsEvents(item)?.map((event) => event)}
        </div>
      </div>
    </ListItem>
  );
};

export default CardRow;
