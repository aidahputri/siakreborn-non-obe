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

import deleteMataKuliah from "../services/deleteMataKuliah";

import * as Layouts from "@/commons/layouts";

const DetailMataKuliah = ({ data }) => {
  const { checkPermission } = useAuth();
  const navigate = useNavigate();
  const [
    showModalKonfirmasiHapusMataKuliah,
    setShowModalKonfirmasiHapusMataKuliah,
  ] = React.useState(false);

  const ubahMataKuliah = async () => {
    navigate("/matakuliah/ubah?" + `id=${data.id}`);
  };

  const hapus = async () => {
    await deleteMataKuliah({
      id: data.id,
    });
    navigate("/matakuliah");
  };

  return (
    <Layouts.DetailComponentLayout
      item={data}
      itemsAttrs={[
        {
          id: "kode",
          condition: "",
          label: "Kode",
          featureName: "kode",
        },
        {
          id: "nama",
          condition: "",
          label: "Nama",
          featureName: "nama",
        },
        {
          id: "sKS",
          condition: "",
          label: "SKS",
          featureName: "sks",
        },
        {
          id: "term",
          condition: "",
          label: "Term",
          featureName: "term",
        },
        {
          id: "kurikulum",
          condition: "",
          label: "Kurikulum",
          featureName: "kurikulumName",
        },
      ]}
      itemsEvents={[
        checkPermission("DeleteMataKuliah") && (
          <Button
            variant="tertiary"
            onClick={() => setShowModalKonfirmasiHapusMataKuliah(true)}
          >
            Hapus
          </Button>
        ),
        checkPermission("UpdateMataKuliah") && (
          <Button variant="secondary" onClick={() => ubahMataKuliah()}>
            Ubah
          </Button>
        ),
      ]}
      itemsModals={[
        <Modal
          isShow={showModalKonfirmasiHapusMataKuliah}
          title={"Konfirmasi Hapus Mata Kuliah"}
        >
          <Link to="">
            <Button
              variant="tertiary"
              onClick={() => setShowModalKonfirmasiHapusMataKuliah(false)}
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

export default DetailMataKuliah;
