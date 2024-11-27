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

const KurikulumTable = ({ kurikulumDataList }) => {
  const { checkPermission } = useAuth();
  const navigate = useNavigate();
  const detail = async (kurikulumItem) => {
    isMobile() && navigate(`/kurikulum/${kurikulumItem.id}`);
  };

  return (
    <Layouts.ListComponentTableLayout
      items={[kurikulumDataList]}
      detail={detail}
      isSearchable
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
          label: "Status",
          featureName: "status",
        },
        {
          id: "profilLulusan",
          condition: "isHeading",
          label: "Profil Lulusan",
          featureName: "profilLulusan",
        },
        {
          id: "programStudi",
          condition: "isHeading",
          label: "Program Studi",
          featureName: "programStudiName",
        },
      ]}
      itemsEvents={(kurikulumItem) => [
        <Link to={`/kurikulum/${kurikulumItem.id}`}>
          <Button variant="primary">Detail</Button>
        </Link>,
      ]}
      itemsModals={(kurikulumItem) => []}
    />
  );
};

export default KurikulumTable;
