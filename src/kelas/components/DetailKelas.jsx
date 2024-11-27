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

import deleteKelas from "../services/deleteKelas";

import * as Layouts from "@/commons/layouts";

const DetailKelas = ({ data }) => {
  const { checkPermission } = useAuth();
  const navigate = useNavigate();
  const [showModalKonfirmasiHapusKelas, setShowModalKonfirmasiHapusKelas] =
    React.useState(false);
  const ubahKelas = async () => {
    navigate("/kelas/ubah?" + `id=${data.id}`);
  };

  const hapus = async () => {
    await deleteKelas({
      id: data.id,
    });
    navigate("/kelas");
  };

  return (
    <Layouts.DetailComponentLayout
      item={data}
      itemsAttrs={[
        {
          id: "nama",
          condition: "",
          label: "Nama",
          featureName: "nama",
        },
        {
          id: "kapasitas",
          condition: "",
          label: "Kapasitas",
          featureName: "kapasitas",
        },
        {
          id: "ruangan",
          condition: "",
          label: "Ruangan",
          featureName: "ruangan",
        },
        {
          id: "jadwal",
          condition: "",
          label: "Jadwal",
          featureName: "jadwal",
        },
        {
          id: "mataKuliah",
          condition: "",
          label: "Mata Kuliah",
          featureName: "mataKuliahNama",
        },
        {
          id: "semester",
          condition: "",
          label: "Semester",
          featureName: "semesterName",
        },
        {
          id: "dosen",
          condition: "",
          label: "Dosen",
          featureName: "dosen",
        },
      ]}
      itemsEvents={[
        checkPermission("UpdateKelas") && (
          <Button variant="secondary" onClick={() => ubahKelas()}>
            Ubah Kelas
          </Button>
        ),
        checkPermission("DeleteKelas") && (
          <Button
            variant="tertiary"
            onClick={() => setShowModalKonfirmasiHapusKelas(true)}
          >
            Hapus
          </Button>
        ),
      ]}
      itemsModals={[
        <Modal
          isShow={showModalKonfirmasiHapusKelas}
          title={"Konfirmasi Hapus Kelas"}
        >
          <Link to="">
            <Button
              variant="tertiary"
              onClick={() => setShowModalKonfirmasiHapusKelas(false)}
            >
              Batal
            </Button>
          </Link>
          <Button variant="danger" onClick={() => hapus()}>
            Hapus
          </Button>
        </Modal>,
      ]}
    />
  );
};

export default DetailKelas;
