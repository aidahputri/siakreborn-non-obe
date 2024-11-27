/*
	Generated on 22/10/2024 by UI Generator PRICES-IDE
	https://amanah.cs.ui.ac.id/research/ifml-regen
	version 3.5.5
*/
import { React, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";

import { useAuth } from "@/commons/auth";
import { Button, Modal } from "@/commons/components";
import { isMobile } from "@/commons/utils/responsive";

import * as Layouts from "@/commons/layouts";

const KelasTable = ({ kelasRencanaStudiDataList, handleChange, selectedClasses }) => {
  const { checkPermission } = useAuth();
  const navigate = useNavigate();

  const detail = async (kelasItem) => {
    isMobile() && navigate(`/kelas/${kelasItem.id}`);
  };

  return (
    <Layouts.FormListComponentTableLayout
      items={[kelasRencanaStudiDataList]}
      detail={detail}
      selected={selectedClasses}
      handleChange={handleChange}
      itemsAttrs={[
        {
          id: "radio",
          condition: "isHeading",
          label: "",
          featureName: "mataKuliahId",
        },
        {
          id: "namaKelas",
          condition: "isHeading",
          label: "Nama Kelas",
          featureName: "nama",
        },
        {
          id: "periode",
          condition: "isHeading",
          label: "Periode",
          featureName: "semesterTanggal",
        },
        {
          id: "kapasitas",
          condition: "isHeading",
          label: "Kapasitas",
          featureName: "kapasitas",
        },
        {
          id: "jadwal",
          condition: "isHeading",
          label: "Jadwal",
          featureName: "jadwal",
        },
        {
          id: "ruangan",
          condition: "isHeading",
          label: "Ruangan",
          featureName: "ruangan",
        },
        {
          id: "pengajar",
          condition: "isHeading",
          label: "Pengajar",
          featureName: "dosen",
        },
      ]}
      itemsEvents={(kelasItem) => [
        <Link to={`/kelas/${kelasItem.id}`}>
          <Button variant="secondary">Detail</Button>
        </Link>,
      ]}
      itemsModals={(kelasItem) => []}
    />
  );
};

export default KelasTable;
