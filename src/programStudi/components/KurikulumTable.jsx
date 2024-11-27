/*
	Generated on 22/10/2024 by UI Generator PRICES-IDE
	https://amanah.cs.ui.ac.id/research/ifml-regen
	version 3.5.5
*/
import React from "react";
import { Link, useNavigate, useParams } from "react-router-dom";

import { useAuth } from "@/commons/auth";
import { Button, Modal } from "@/commons/components";

import deleteProgramStudi from "../services/deleteProgramStudi";

import * as Layouts from "@/commons/layouts";

const KurikulumTable = ({ kurikulumDataList }) => {
  const { checkPermission } = useAuth();

  const [
    showModalKonfirmasiHapusProgramStudi,
    setShowModalKonfirmasiHapusProgramStudi,
  ] = React.useState(false);
  const hapus = async (kurikulum) => {
    await deleteProgramStudi({
      id: kurikulum.id,
    });
    window.location.reload(false);
  };

  return (
    <Layouts.ListComponentTableLayout
      items={[kurikulumDataList]}
      itemsAttrs={[
        {
          id: "kode",
          condition: "isHeading",
          label: "Kode",
          featureName: "kode",
        },
        {
          id: "nomorSK",
          condition: "isHeading",
          label: "Nomor SK",
          featureName: "noSK",
        },
        {
          id: "status",
          condition: "isHeading",
          label: "Status ",
          featureName: "status",
        },
        {
          id: "programStudi",
          condition: "isHeading",
          label: "Program Studi",
          featureName: "programStudiName",
        },
        {
          id: "profilLulusan",
          condition: "isHeading",
          label: "Profil Lulusan",
          featureName: "profilLulusan",
        },
      ]}
    />
  );
};

export default KurikulumTable;
