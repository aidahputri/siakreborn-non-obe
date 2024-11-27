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
import KelasTable from "../components/KelasTable";

import getPenilaianKelasDataList from "../services/getPenilaianKelasDataList";
const DaftarKelasDiajarPage = (props) => {
  const { checkPermission } = useAuth();

  const [isLoading, setIsLoading] = useState({
    tableKelasDiajar: false,
  });
  const { setTitle } = useContext(HeaderContext);

  function formatAcademicYear(code) {
    const [academicYear, term] = code.split(" - ");
    return `Tahun Ajaran ${academicYear} Term ${term}`;
  }

  const [penilaianKelasDataList, setPenilaianKelasDataList] = useState();
  useEffect(() => {
    const fetchData = async () => {
      try {
        setIsLoading((prev) => ({ ...prev, tableKelasDiajar: true }));
        const { data: penilaianKelasDataList } =
          await getPenilaianKelasDataList({});
        setPenilaianKelasDataList(penilaianKelasDataList.data);
      } finally {
        setIsLoading((prev) => ({ ...prev, tableKelasDiajar: false }));
      }
    };
    fetchData();
  }, []);

  useEffect(() => {
    setTitle("Daftar Kelas Diajar Page");
  }, []);
  return (
    <Layouts.ViewContainerLayout
      buttons={
        <>
          <></>
        </>
      }
    >
      {penilaianKelasDataList?.map((term, idx) => {
        return (
          <div key={idx} className="flex flex-col gap-4">
            <Layouts.ListContainerTableLayout
              title={
                term.kode ? formatAcademicYear(term.kode) : "Undefined term"
              }
              singularName={"Kelas"}
              items={[term.kelas]}
              isLoading={isLoading.tableKelasDiajar}
            >
              <KelasTable penilaianKelasDataList={term.kelas} />
            </Layouts.ListContainerTableLayout>
          </div>
        );
      })}
    </Layouts.ViewContainerLayout>
  );
};
export default DaftarKelasDiajarPage;
