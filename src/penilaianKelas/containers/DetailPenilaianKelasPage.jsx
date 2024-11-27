/*
	Generated on 13/06/2024 by UI Generator PRICES-IDE
	https://amanah.cs.ui.ac.id/research/ifml-regen
	version 3.4.0
*/
import React, { useEffect, useState, useContext } from "react";
import { Button, Spinner } from "@/commons/components";
import * as Layouts from "@/commons/layouts";
import { Link, useParams } from "react-router-dom";
import { HeaderContext } from "@/commons/components";
import isSelectedFeature from "@/commons/utils/isSelectedFeature";
import { useNavigate } from "react-router-dom";
import { useAuth } from "@/commons/auth";
import KomponenTable from "../components/KomponenTable";

import getKomponenPenilaianDataList from "../services/getKomponenPenilaianDataList";
import DaftarTable from "../components/DaftarTable";

import getMahasiswaDataList from "../services/getMahasiswaDataList";
import PemetaanTable from "../components/PemetaanTable";
import getCapaianDataList from "../services/getCapaianDataList";
const DetailPenilaianKelasPage = (props) => {
  const { checkPermission } = useAuth();

  const { id } = useParams();

  const [isLoading, setIsLoading] = useState({
    tabelKomponenPenilaian: false,
    tableDaftarMahasiswa: false,
    daftarPemetaanCapaian: false,
  });
  const { setTitle } = useContext(HeaderContext);

  const [komponenPenilaianDataList, setKomponenPenilaianDataList] = useState();

  useEffect(() => {
    const fetchData = async () => {
      try {
        setIsLoading((prev) => ({ ...prev, tabelKomponenPenilaian: true }));
        const { data: komponenPenilaianDataList } =
          await getKomponenPenilaianDataList({ kelasId: id });
        setKomponenPenilaianDataList(komponenPenilaianDataList.data);
      } finally {
        setIsLoading((prev) => ({ ...prev, tabelKomponenPenilaian: false }));
      }
    };
    fetchData();
  }, []);

  const [mahasiswaDataList, setMahasiswaDataList] = useState();

  useEffect(() => {
    const fetchData = async () => {
      try {
        setIsLoading((prev) => ({ ...prev, tableDaftarMahasiswa: true }));
        const { data: mahasiswaDataList } = await getMahasiswaDataList({
          kelasId: id,
        });
        setMahasiswaDataList(mahasiswaDataList.data);
      } finally {
        setIsLoading((prev) => ({ ...prev, tableDaftarMahasiswa: false }));
      }
    };
    fetchData();
  }, []);

  const [capaianDataList, setCapaianDataList] = useState();

  useEffect(() => {
    const fetchData = async () => {
      try {
        setIsLoading((prev) => ({ ...prev, daftarPemetaanCapaian: true }));
        const { data: capaianDataList } = await getCapaianDataList({
          kelasId: id,
        });
        setCapaianDataList(capaianDataList.data);
      } finally {
        setIsLoading((prev) => ({ ...prev, daftarPemetaanCapaian: false }));
      }
    };
    fetchData();
  }, []);

  useEffect(() => {
    setTitle("Detail Penilaian Kelas Page");
  }, []);
  return (
    <Layouts.ViewContainerLayout
      buttons={
        <>
          <Layouts.ViewContainerBackButtonLayout>
            <Link to={`/penilaian-kelas`}>
              {" "}
              <Button className="p-4" variant="secondary">
                Kembali
              </Button>
            </Link>
          </Layouts.ViewContainerBackButtonLayout>

          <Layouts.ViewContainerButtonLayout>
            {checkPermission("CreateKomponenPenilaian") && (
              <Link to={`/penilaian-kelas/${id}/komponen/tambah`}>
                <Button className="p-2" variant="primary">
                  Tambah Komponen Penilaian
                </Button>
              </Link>
            )}

            {isSelectedFeature("CPMK") &&
              isSelectedFeature("SubCPMK") &&
              checkPermission("CreateBobotKomponenPenilaian") && (
                <Link
                  to={`/penilaian-kelas/${id}/pemetaan-capaian/tambah
			  	  `}
                >
                  <Button className="p-2" variant="primary">
                    Tambah/Ubah Pemetaan Capaian
                  </Button>
                </Link>
              )}
          </Layouts.ViewContainerButtonLayout>
        </>
      }
    >
      <Layouts.ListContainerTableLayout
        title={"Daftar Komponen Penilaian"}
        singularName={"Komponen"}
        items={[komponenPenilaianDataList]}
        isLoading={isLoading.tabelKomponenPenilaian}
      >
        <KomponenTable komponenPenilaianDataList={komponenPenilaianDataList} />
      </Layouts.ListContainerTableLayout>

      {isSelectedFeature("CPMK") && isSelectedFeature("SubCPMK") && (
        <>
          {isLoading.daftarPemetaanCapaian ? (
            <div className="flex justify-center items-center h-full">
              <Spinner />
            </div>
          ) : (
            <>
              {capaianDataList && capaianDataList.komponen.length > 1 && (
                <Layouts.ListContainerTableLayout
                  title={"Daftar Pemetaan Capaian"}
                  singularName={"Pemetaan"}
                  items={[capaianDataList?.komponen ?? []]}
                  isLoading={isLoading.daftarPemetaanCapaian}
                >
                  <PemetaanTable
                    capaianDataList={capaianDataList?.komponen ?? []}
                    capaianList={capaianDataList?.capaian ?? []}
                  />
                </Layouts.ListContainerTableLayout>
              )}
            </>
          )}
        </>
      )}

      <Layouts.ListContainerTableLayout
        title={"Daftar Mahasiswa"}
        singularName={"Daftar"}
        items={[mahasiswaDataList]}
        isLoading={isLoading.tableDaftarMahasiswa}
      >
        <DaftarTable mahasiswaDataList={mahasiswaDataList} />
      </Layouts.ListContainerTableLayout>
    </Layouts.ViewContainerLayout>
  );
};
export default DetailPenilaianKelasPage;
