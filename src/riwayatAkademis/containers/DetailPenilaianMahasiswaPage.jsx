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
import DetailPenilaianMahasiswa from "../components/DetailPenilaianMahasiswa";
import getPenilaianDataDetail from "../services/getPenilaianDataDetail";
import PenilaianTable from "../components/PenilaianTable";

import getPenilaianMahasiswaDataList from "../services/getPenilaianMahasiswaDataList";
const DetailPenilaianMahasiswaPage = (props) => {
  const { checkPermission } = useAuth();

  const [isLoading, setIsLoading] = useState({
    detailPenilaianMahasiswa: false,
    tablePenilaianMahasiswa: false,
  });
  const { setTitle } = useContext(HeaderContext);

  const [penilaianDataDetail, setPenilaianDataDetail] = useState();
  const { id } = useParams();
  useEffect(() => {
    const fetchData = async () => {
      try {
        setIsLoading((prev) => ({ ...prev, detailPenilaianMahasiswa: true }));
        const { data: penilaianDataDetail } = await getPenilaianDataDetail({
          kelasId: id,
        });
        setPenilaianDataDetail(penilaianDataDetail.data);
      } finally {
        setIsLoading((prev) => ({ ...prev, detailPenilaianMahasiswa: false }));
      }
    };
    fetchData();
  }, []);
  const [penilaianMahasiswaDataList, setPenilaianMahasiswaDataList] =
    useState();

  useEffect(() => {
    const fetchData = async () => {
      try {
        setIsLoading((prev) => ({ ...prev, tablePenilaianMahasiswa: true }));
        const { data: penilaianMahasiswaDataList } =
          await getPenilaianMahasiswaDataList({ kelasId: id });
        setPenilaianMahasiswaDataList(penilaianMahasiswaDataList.data);
      } finally {
        setIsLoading((prev) => ({ ...prev, tablePenilaianMahasiswa: false }));
      }
    };
    fetchData();
  }, []);

  useEffect(() => {
    setTitle("Detail Penilaian Mahasiswa Page");
  }, []);

  return (
    <Layouts.ViewContainerLayout
      buttons={
        <>
          <Layouts.ViewContainerBackButtonLayout>
            <Link to={`/riwayat-akademis`}>
              {" "}
              <Button className="p-4 w-full" variant="secondary">
                Kembali
              </Button>
            </Link>
          </Layouts.ViewContainerBackButtonLayout>
        </>
      }
    >
      <div className="flex flex-col">
        <Layouts.DetailContainerLayout
          title={`${penilaianDataDetail?.mahasiswaNpm} - ${penilaianDataDetail?.mahasiswaNama}`}
          singularName={"Penilaian"}
          items={{ ...penilaianDataDetail }}
          isLoading={isLoading.detailPenilaianMahasiswa}
          isCorrelatedWithAnotherComponent={false}
        >
          <DetailPenilaianMahasiswa {...{ data: { ...penilaianDataDetail } }} />
        </Layouts.DetailContainerLayout>
      </div>
      <Layouts.ListContainerTableLayout
        title={"Detail Nilai"}
        singularName={"Penilaian"}
        items={[penilaianMahasiswaDataList]}
        isLoading={isLoading.tablePenilaianMahasiswa}
      >
        <PenilaianTable
          penilaianMahasiswaDataList={penilaianMahasiswaDataList}
        />
      </Layouts.ListContainerTableLayout>
    </Layouts.ViewContainerLayout>
  );
};
export default DetailPenilaianMahasiswaPage;
