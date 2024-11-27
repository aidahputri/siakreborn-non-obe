/*
	Generated on 22/10/2024 by UI Generator PRICES-IDE
	https://amanah.cs.ui.ac.id/research/ifml-regen
	version 3.5.5
*/
import React from "react";
import { Link, useNavigate, useParams } from "react-router-dom";

import { useAuth } from "@/commons/auth";
import { Button, Modal } from "@/commons/components";

import * as Layouts from "@/commons/layouts";

const NilaiTable = ({ laporanNilaiCPLDataList, kurikulumSelectionField }) => {
  const { checkPermission } = useAuth();

  return (
    <Layouts.ListComponentTableLayout
      items={[laporanNilaiCPLDataList]}
      isSearchable
      // filterFields={[
      //   {
      //     label: "Kurikulum",
      //     featureName: "kurikulumName",
      //     options: kurikulumSelectionField,
      //   },
      // ]}
      itemsAttrs={[
        {
          id: "kodeCPL",
          condition: "isHeading",
          label: "Kode CPL",
          featureName: "kode",
        },
        // {
        //   id: "kurikulum",
        //   condition: "isHeading",
        //   label: "Kurikulum",
        //   featureName: "kurikulumName",
        // },
        // {
        //   id: "deskripsi",
        //   condition: "isHeading",
        //   label: "Deskripsi",
        //   featureName: "deskripsi",
        // },
        {
          id: "nilai",
          condition: "isHeading",
          label: "Nilai",
          featureName: "nilai",
        },
      ]}
    />
  );
};

export default NilaiTable;
