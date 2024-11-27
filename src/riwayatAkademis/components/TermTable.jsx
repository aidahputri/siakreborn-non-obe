/*
	Generated on 13/06/2024 by UI Generator PRICES-IDE
	https://amanah.cs.ui.ac.id/research/ifml-regen
	version 3.4.0
*/
import React from "react";
import { Link, useNavigate, useParams } from "react-router-dom";

import { useAuth } from "@/commons/auth";
import { Button, Modal } from "@/commons/components";
import isSelectedFeature from "@/commons/utils/isSelectedFeature";
import { isMobile } from "@/commons/utils/responsive";

import * as Layouts from "@/commons/layouts";

const TermTable = ({ termRiwayatAkademisDataList }) => {
  const { checkPermission } = useAuth();
  const navigate = useNavigate();
  const detail = async (termItem) => {
    isMobile() && navigate(`/kelas/${termItem.id}`);
  };

  return (
    <Layouts.ListComponentTableLayout
      items={[termRiwayatAkademisDataList]}
      detail={detail}
      isSearchable
      itemsAttrs={[
        {
          id: "kodeMK",
          condition: "isHeading",
          label: "Kode MK",
          featureName: "mataKuliahKode",
        },
        {
          id: "kurikulum",
          condition: "isHeading",
          label: "Kurikulum",
          featureName: "mataKuliahKurikulumName",
        },
        {
          id: "namaMK",
          condition: "isHeading",
          label: "Nama MK",
          featureName: "mataKuliahName",
        },
        {
          id: "kelas",
          condition: "isHeading",
          label: "Kelas",
          featureName: "nama",
        },
        {
          id: "nilaiAkhir",
          condition: "isHeading",
          label: "Nilai Akhir",
          featureName: "nilaiAkhir",
        },
        {
          id: "nilaiHuruf",
          condition: "isHeading",
          label: "Nilai Huruf",
          featureName: "nilaiHuruf",
        },
      ]}
      itemsEvents={(termItem) => [
        <Link to={`/kelas/${termItem.id}`}>
          <Button variant="primary">Detail</Button>
        </Link>,
      ]}
      itemsModals={(termItem) => []}
    />
  );
};

export default TermTable;
