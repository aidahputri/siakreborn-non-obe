import React from "react";

import { Spinner } from "@/commons/components";

const ListContainerCardLayout = ({
  title,
  singularName,
  isLoading,
  items,
  children,
}) => {
  return (
    <div className="mx-auto w-full max-w-screen-xl prose flex flex-col">
      <div className="w-full flex flex-col sm:flex-row justify-center sm:justify-between items-center mb-4">
        <h2 className="m-0 text-center">{title}</h2>
        <div className="flex gap-3 items-center">
          {items && `Terdapat ${items.flat().length} ${singularName}`}
        </div>
      </div>
      <div className="grid grid-cols-4 gap-3">
        <div className="not-prose col-span-3">
          {isLoading ? (
            <div className={"py-8 text-center"}>
              <Spinner />
            </div>
          ) : items?.every(collection => collection?.length) ? (
            children
          ) : (
            <div className="py-8 text-center">
              Tidak ada data untuk ditampilkan
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ListContainerCardLayout;
