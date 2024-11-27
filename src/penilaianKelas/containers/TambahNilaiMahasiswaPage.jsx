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
import { useSearchParams } from "react-router-dom";
import FormTambahNilai from "../components/FormTambahNilai";

import getKomponenPenilaianDataList from "../services/getKomponenPenilaianDataList";
const TambahNilaiMahasiswaPage = (props) => {
  const [isLoading, setIsLoading] = useState({
    tambahNilai: false,
  });
  const { setTitle } = useContext(HeaderContext);

  const { id, mahasiswaId } = useParams();
  const [komponenPenilaianDataList, setKomponenPenilaianDataList] = useState();

  useEffect(() => {
    const fetch = async () => {
      setIsLoading((prev) => ({ ...prev, tambahNilai: true }));
      const { data: komponenPenilaianDataListResponse } =
        await getKomponenPenilaianDataList({ kelasId: id, mahasiswaId });

      setKomponenPenilaianDataList(
        komponenPenilaianDataListResponse.data.map((v) => ({
          ...v,
          name: v.nama,
        }))
      );

      setIsLoading((prev) => ({ ...prev, tambahNilai: false }));
    };
    fetch();
  }, []);

  useEffect(() => {
    setTitle("Tambah/Ubah Nilai Mahasiswa Page");
  }, []);
  
  return (
    <Layouts.ViewContainerLayout
      buttons={
        <>
          <Layouts.ViewContainerBackButtonLayout>
            <Link to={`/penilaian-kelas/${id}/nilai/${mahasiswaId}`}>
              {" "}
              <Button className="p-4" variant="secondary">
                Kembali
              </Button>
            </Link>
          </Layouts.ViewContainerBackButtonLayout>
        </>
      }
    >
      <Layouts.FormContainerLayout
        singularName={"Nilai"}
        isLoading={isLoading.tambahNilai}
      >
        {komponenPenilaianDataList ? (
          <>
            <FormTambahNilai
              {...{
                komponenPenilaianDataList,
              }}
            />
          </>
        ) : (
          <></>
        )}
      </Layouts.FormContainerLayout>
    </Layouts.ViewContainerLayout>
  );
};
export default TambahNilaiMahasiswaPage;
