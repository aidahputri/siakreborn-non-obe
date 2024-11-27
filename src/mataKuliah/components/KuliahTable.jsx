/*
	Generated on 22/10/2024 by UI Generator PRICES-IDE
	https://amanah.cs.ui.ac.id/research/ifml-regen
	version 3.5.5
*/
import React from "react";
import { Link, useNavigate, useParams } from "react-router-dom";

import { useAuth } from "@/commons/auth";
import { Button, Modal } from "@/commons/components";
import { isMobile } from "@/commons/utils/responsive";

import * as Layouts from "@/commons/layouts";

const KuliahTable = ({ mataKuliahDataList, kurikulumSelectionField }) => {
  const { checkPermission } = useAuth();
  const navigate = useNavigate();
  const detail = async (kuliahItem) => {
    isMobile() && navigate(`/matakuliah/${kuliahItem.id}`);
  };

  return (
    <Layouts.ListComponentTableLayout
      items={[mataKuliahDataList, kurikulumSelectionField]}
      detail={detail}
      isSearchable
      filterFields={[
        {
          label: "Kurikulum",
          featureName: "kurikulumName",
          options: kurikulumSelectionField,
        },
      ]}
      itemsAttrs={[
        {
          id: "kode",
          condition: "isHeading",
          label: "Kode",
          featureName: "kode",
        },
        {
          id: "nama",
          condition: "isHeading",
          label: "Nama",
          featureName: "nama",
        },
        {
          id: "sKS",
          condition: "isHeading",
          label: "SKS",
          featureName: "sks",
        },
        {
          id: "term",
          condition: "isHeading",
          label: "Term",
          featureName: "term",
        },
        {
          id: "kurikulum",
          condition: "isHeading",
          label: "Kurikulum",
          featureName: "kurikulumName",
        },
      ]}
      itemsEvents={(kuliahItem) => [
        <Link to={`/matakuliah/${kuliahItem.id}`}>
          <Button variant="primary">Detail</Button>
        </Link>,
      ]}
      itemsModals={(kuliahItem) => []}
    />
  );
};

export default KuliahTable;
