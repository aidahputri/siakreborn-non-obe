/*
	Generated on 22/10/2024 by UI Generator PRICES-IDE
	https://amanah.cs.ui.ac.id/research/ifml-regen
	version 3.5.10
*/
import React, { useEffect, useState, useContext } from "react";
import { Button, Spinner } from "@/commons/components";
import * as Layouts from "@/commons/layouts";
import { Link, useParams } from "react-router-dom";
import { HeaderContext } from "@/commons/components";
import { useNavigate } from "react-router-dom";
import { useAuth } from "@/commons/auth";
import MKTable from "../components/MKTable";

import getMKRiwayatAkademisDataList from "../services/getMKRiwayatAkademisDataList";
const BerdasarkanMataKuliah = (props) => {
  const { checkPermission } = useAuth();

  const [isLoading, setIsLoading] = useState({
    tableMKRiwayatAkademis: false,
  });
  const { setTitle } = useContext(HeaderContext);

  const [mKRiwayatAkademisDataList, setMKRiwayatAkademisDataList] = useState();
  useEffect(() => {
    const fetchData = async () => {
      try {
        setIsLoading((prev) => ({ ...prev, tableMKRiwayatAkademis: true }));
        const { data: mKRiwayatAkademisDataList } =
          await getMKRiwayatAkademisDataList({});
        setMKRiwayatAkademisDataList(mKRiwayatAkademisDataList.data);
      } finally {
        setIsLoading((prev) => ({ ...prev, tableMKRiwayatAkademis: false }));
      }
    };
    checkPermission("ReadKelasMahasiswaMe") && fetchData();
  }, []);

  useEffect(() => {
    setTitle("Berdasarkan Mata Kuliah");
  }, []);
  return (
    <Layouts.ViewContainerLayout
      buttons={
        <>
          <></>
        </>
      }
    >
      {mKRiwayatAkademisDataList?.map((mk, idx) => {
        return (
          <div key={idx} className="flex flex-col gap-4">
            <Layouts.ListContainerTableLayout
              title={mk.mataKuliahNama}
              singularName={"MK"}
              items={[[mk]]}
              isLoading={isLoading.tableMKRiwayatAkademis}
            >
              <MKTable mKRiwayatAkademisDataList={[mk]} />
            </Layouts.ListContainerTableLayout>
          </div>
        );
      })}
    </Layouts.ViewContainerLayout>
  );
};
export default BerdasarkanMataKuliah;
