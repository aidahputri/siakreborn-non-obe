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

const MataTable = ({ mataKuliahDipilihDataList }) => {
  const { checkPermission } = useAuth();

  return (
    <Layouts.ListComponentTableLayout
      items={[mataKuliahDipilihDataList]}
      itemsAttrs={[
        {
          id: "kodeMK",
          condition: "isHeading",
          label: "Kode MK",
          featureName: "mataKuliahKode",
        },
        {
          id: "namaMK",
          condition: "isHeading",
          label: "Nama MK",
          featureName: "mataKuliahName",
        },
        {
          id: "sKS",
          condition: "isHeading",
          label: "SKS",
          featureName: "mataKuliahSks",
        },
        {
          id: "namaKelas",
          condition: "isHeading",
          label: "Nama Kelas",
          featureName: "nama",
        },
        {
          id: "tanggalPengisian",
          condition: "isHeading",
          label: "Tanggal Pengisian",
          featureName: "tanggalPengisian",
        },
        {
          id: "penyelenggara",
          condition: "isHeading",
          label: "Penyelenggara",
          featureName: "mataKuliahKurikulumProgramStudiNama",
        },
      ]}
    />
  );
};

export default MataTable;
