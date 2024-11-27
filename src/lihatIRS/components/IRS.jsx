/*
	Generated on 22/10/2024 by UI Generator PRICES-IDE
	https://amanah.cs.ui.ac.id/research/ifml-regen
	version 3.5.5
*/
import React, { useContext } from "react";
import { useNavigate, Link } from "react-router-dom";

import { useAuth } from "@/commons/auth";
import {
  Button,
  Detail,
  VisualizationAttr,
  Modal,
  Spinner,
} from "@/commons/components";

import * as Layouts from "@/commons/layouts";

const IRS = ({ data }) => {
  const { checkPermission } = useAuth();
  const navigate = useNavigate();

  return (
    <Layouts.DetailComponentLayout
      item={data}
      itemsAttrs={[
        {
          id: "statusIRS",
          condition: "",
          label: "Status IRS",
          featureName: "status",
        },
        {
          id: "totalSKS",
          condition: "",
          label: "Total SKS",
          featureName: "totalSKS",
        },
      ]}
      itemsEvents={[]}
      itemsModals={[]}
    />
  );
};

export default IRS;
