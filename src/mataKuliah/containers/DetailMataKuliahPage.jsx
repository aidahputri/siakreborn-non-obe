/*
	Generated on 22/10/2024 by UI Generator PRICES-IDE
	https://amanah.cs.ui.ac.id/research/ifml-regen
	version 3.5.5
*/
import React, { useEffect, useState, useContext } from "react";
import { Button, Spinner } from "@/commons/components";
import * as Layouts from "@/commons/layouts";
import { Link, useParams } from "react-router-dom";
import { HeaderContext } from "@/commons/components";
import { useNavigate } from "react-router-dom";
import { useAuth } from "@/commons/auth";
import DetailMataKuliah from "../components/DetailMataKuliah";
import getMataKuliahDataDetail from "../services/getMataKuliahDataDetail";
import CPMKTable from "../components/CPMKTable";

import getCPMKDataList from "../services/getCPMKDataList";
import isSelectedFeature from "@/commons/utils/isSelectedFeature";
const DetailMataKuliahPage = (props) => {
  const { checkPermission } = useAuth();

  const [isLoading, setIsLoading] = useState({
    detailMataKuliah: false,
    daftarCPMK: false,
  });
  const { setTitle } = useContext(HeaderContext);

  const [mataKuliahDataDetail, setMataKuliahDataDetail] = useState();
  const { id } = useParams();
  useEffect(() => {
    const fetchData = async () => {
      try {
        setIsLoading((prev) => ({ ...prev, detailMataKuliah: true }));
        const { data: mataKuliahDataDetail } = await getMataKuliahDataDetail({
          id,
        });
        setMataKuliahDataDetail(mataKuliahDataDetail.data);
      } finally {
        setIsLoading((prev) => ({ ...prev, detailMataKuliah: false }));
      }
    };
    fetchData();
  }, []);
  const [cPMKDataList, setCPMKDataList] = useState();

  useEffect(() => {
    const fetchData = async () => {
      try {
        setIsLoading((prev) => ({ ...prev, daftarCPMK: true }));
        const { data: cPMKDataList } = await getCPMKDataList({
          mataKuliahId: id,
        });
        setCPMKDataList(cPMKDataList.data);
      } finally {
        setIsLoading((prev) => ({ ...prev, daftarCPMK: false }));
      }
    };
    fetchData();
  }, []);

  useEffect(() => {
    setTitle("Detail Mata Kuliah Page");
  }, []);
  return (
    <Layouts.ViewContainerLayout
      buttons={
        <>
          <Layouts.ViewContainerBackButtonLayout>
            <Link
              to={`/matakuliah
			  	`}
            >
              {" "}
              <Button className="p-4 w-full" variant="secondary">
                Kembali
              </Button>
            </Link>
          </Layouts.ViewContainerBackButtonLayout>
        </>
      }
    >
      <Layouts.DetailContainerLayout
        title={"Detail Mata Kuliah"}
        singularName={"Mata"}
        items={{ ...mataKuliahDataDetail }}
        isLoading={isLoading.detailMataKuliah}
        isCorrelatedWithAnotherComponent={false}
      >
        <DetailMataKuliah {...{ data: { ...mataKuliahDataDetail } }} />
      </Layouts.DetailContainerLayout>
      {isSelectedFeature("CPMK") && (
        <Layouts.ListContainerTableLayout
          title={"Daftar CPMK"}
          singularName={"CPMK"}
          items={[cPMKDataList]}
          isLoading={isLoading.daftarCPMK}
        >
          <CPMKTable cPMKDataList={cPMKDataList} />
        </Layouts.ListContainerTableLayout>
      )}
    </Layouts.ViewContainerLayout>
  );
};
export default DetailMataKuliahPage;
