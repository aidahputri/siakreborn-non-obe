import React from "react";
import { IRSForm } from "@/commons/components";

const IRSFormComponentLayout = ({
  title,
  onSubmit,
  vas,
  formFields,
  itemsEvents,
}) => {
  return (
    <IRSForm title={title} onSubmit={onSubmit}>
      {vas}
      {formFields}
      <div className="card-actions col-end-3 justify-end">{itemsEvents}</div>
    </IRSForm>
  );
};

export default IRSFormComponentLayout;
