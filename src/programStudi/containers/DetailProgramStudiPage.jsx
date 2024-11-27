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
import DetailProgramStudi from "../components/DetailProgramStudi";
import getProgramStudiDataDetail from "../services/getProgramStudiDataDetail";
import KurikulumTable from "../components/KurikulumTable";

import getKurikulumDataList from "../services/getKurikulumDataList";
const DetailProgramStudiPage = (props) => {
  const { checkPermission } = useAuth();

  const [isLoading, setIsLoading] = useState({
    detailProgramStudi: false,
    daftarKurikulum: false,
  });
  const { setTitle } = useContext(HeaderContext);

  const [programStudiDataDetail, setProgramStudiDataDetail] = useState();
  const { id } = useParams();
  useEffect(() => {
    const fetchData = async () => {
      try {
        setIsLoading((prev) => ({ ...prev, detailProgramStudi: true }));
        const { data: programStudiDataDetail } =
          await getProgramStudiDataDetail({ id });
        setProgramStudiDataDetail(programStudiDataDetail.data);
      } finally {
        setIsLoading((prev) => ({ ...prev, detailProgramStudi: false }));
      }
    };
    fetchData();
  }, []);
  const [kurikulumDataList, setKurikulumDataList] = useState();

  useEffect(() => {
    const fetchData = async () => {
      try {
        setIsLoading((prev) => ({ ...prev, daftarKurikulum: true }));
        const { data: kurikulumDataList } = await getKurikulumDataList({
          programStudiId: id,
        });
        setKurikulumDataList(kurikulumDataList.data);
      } finally {
        setIsLoading((prev) => ({ ...prev, daftarKurikulum: false }));
      }
    };
    fetchData();
  }, []);

  useEffect(() => {
    setTitle("Detail Program Studi Page");
  }, []);
  return (
    <Layouts.ViewContainerLayout
      buttons={
        <>
          <Layouts.ViewContainerBackButtonLayout>
            <Link
              to={`/programstudi
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
        title={"Detail Program Studi"}
        singularName={"Program"}
        items={{ ...programStudiDataDetail }}
        isLoading={isLoading.detailProgramStudi}
        isCorrelatedWithAnotherComponent={false}
      >
        <DetailProgramStudi {...{ data: { ...programStudiDataDetail } }} />
      </Layouts.DetailContainerLayout>
      <Layouts.ListContainerTableLayout
        title={"Daftar Kurikulum"}
        singularName={"Kurikulum"}
        items={[kurikulumDataList]}
        isLoading={isLoading.daftarKurikulum}
      >
        <KurikulumTable kurikulumDataList={kurikulumDataList} />
      </Layouts.ListContainerTableLayout>
    </Layouts.ViewContainerLayout>
  );
};
export default DetailProgramStudiPage;
