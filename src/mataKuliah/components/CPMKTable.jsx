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

import deleteMataKuliah from "../services/deleteMataKuliah";

import * as Layouts from "@/commons/layouts";

const CPMKTable = ({ cPMKDataList }) => {
  const { checkPermission } = useAuth();
  const navigate = useNavigate();
  const detail = async (cPMKItem) => {
    isMobile() && navigate(`/cpmk/${cPMKItem.id}`);
  };

  const [
    showModalKonfirmasiHapusMataKuliah,
    setShowModalKonfirmasiHapusMataKuliah,
  ] = React.useState(false);
  const hapus = async (cPMK) => {
    await deleteMataKuliah({
      id: cPMK.id,
    });
    window.location.reload(false);
  };

  return (
    <Layouts.ListComponentTableLayout
      items={[cPMKDataList]}
      detail={detail}
      itemsAttrs={[
        {
          id: "kode",
          condition: "isHeading",
          label: "Kode",
          featureName: "kode",
        },
        {
          id: "deskripsi",
          condition: "isHeading",
          label: "Deskripsi",
          featureName: "deskripsi",
        },
        {
          id: "bobot",
          condition: "isHeading",
          label: "Bobot",
          featureName: "bobot",
        },
        {
          id: "cPL",
          condition: "isHeading",
          label: "CPL",
          featureName: "parentCPLKode",
        },
      ]}
      itemsEvents={(cPMKItem) => [
        <Link to={`/cpmk/${cPMKItem.id}`}>
          <Button variant="secondary">Detail</Button>
        </Link>,
      ]}
      itemsModals={(cPMKItem) => [
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
          <Button variant="danger" onClick={() => hapus(cPMKItem)}>
            Hapus
          </Button>
        </Modal>,
      ]}
    />
  );
};

export default CPMKTable;
