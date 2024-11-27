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

import DetailKelas from "../components/DetailKelas";
import getKelasDataDetail from "../services/getKelasDataDetail";
const DetailKelasPage = (props) => {
  const [isLoading, setIsLoading] = useState({
    detailKelas: false,
  });
  const { setTitle } = useContext(HeaderContext);

  const [kelasDataDetail, setKelasDataDetail] = useState();
  const { id } = useParams();
  useEffect(() => {
    const fetchData = async () => {
      try {
        setIsLoading((prev) => ({ ...prev, detailKelas: true }));
        const { data: kelasDataDetail } = await getKelasDataDetail({ kelasId:id });
        setKelasDataDetail(kelasDataDetail.data);
      } finally {
        setIsLoading((prev) => ({ ...prev, detailKelas: false }));
      }
    };
    fetchData();
  }, []);

  useEffect(() => {
    setTitle("Detail Kelas Page");
  }, []);
  return (
    <Layouts.ViewContainerLayout
      buttons={
        <>
          <Layouts.ViewContainerBackButtonLayout>
            <Link
              to={`/kelas
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
        title={"Detail Kelas"}
        singularName={"Kelas"}
        items={{ ...kelasDataDetail }}
        isLoading={isLoading.detailKelas}
        isCorrelatedWithAnotherComponent={false}
      >
        <DetailKelas {...{ data: { ...kelasDataDetail } }} />
      </Layouts.DetailContainerLayout>
    </Layouts.ViewContainerLayout>
  );
};
export default DetailKelasPage;
