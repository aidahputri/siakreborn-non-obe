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

const KelasTable = ({ kelasDataList }) => {
  const { checkPermission } = useAuth();
  const navigate = useNavigate();
  const detail = async (kelasItem) => {
    isMobile() && navigate(`/kelas/${kelasItem.id}`);
  };

  return (
    <Layouts.ListComponentTableLayout
      items={[kelasDataList]}
      detail={detail}
      isSearchable
      itemsAttrs={[
        {
          id: "nama",
          condition: "isHeading",
          label: "Nama",
          featureName: "nama",
        },
        {
          id: "kapasitas",
          condition: "isHeading",
          label: "Kapasitas",
          featureName: "kapasitas",
        },
        {
          id: "ruangan",
          condition: "isHeading",
          label: "Ruangan",
          featureName: "ruangan",
        },
        {
          id: "jadwal",
          condition: "isHeading",
          label: "Jadwal",
          featureName: "jadwal",
        },
        {
          id: "mataKuliah",
          condition: "isHeading",
          label: "Mata Kuliah",
          featureName: "mataKuliahNama",
        },
        {
          id: "semester",
          condition: "isHeading",
          label: "Semester",
          featureName: "semesterName",
        },
      ]}
      itemsEvents={(kelasItem) => [
        <Link to={`/kelas/${kelasItem.id}`}>
          <Button variant="primary">Detail</Button>
        </Link>,
      ]}
      itemsModals={(kelasItem) => []}
    />
  );
};

export default KelasTable;
