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
import TermTable from "../components/TermTable";

import getTermRiwayatAkademisDataList from "../services/getTermRiwayatAkademisDataList";
import { formatAcademicYear } from "@/commons/utils/getFormatAcademicYear";
const BerdasarkanTerm = (props) => {
  const { checkPermission } = useAuth();

  const [isLoading, setIsLoading] = useState({
    tableTermRiwayatAkademis: false,
  });
  const { setTitle } = useContext(HeaderContext);

  const [termRiwayatAkademisDataList, setTermRiwayatAkademisDataList] =
    useState();
  useEffect(() => {
    const fetchData = async () => {
      try {
        setIsLoading((prev) => ({ ...prev, tableTermRiwayatAkademis: true }));
        const { data: termRiwayatAkademisDataList } =
          await getTermRiwayatAkademisDataList({});
        setTermRiwayatAkademisDataList(termRiwayatAkademisDataList.data);
      } finally {
        setIsLoading((prev) => ({ ...prev, tableTermRiwayatAkademis: false }));
      }
    };
    fetchData();
  }, []);

  useEffect(() => {
    setTitle("Berdasarkan Term");
  }, []);
  return (
    <Layouts.ViewContainerLayout
      buttons={
        <>
          <></>
        </>
      }
    >
      {termRiwayatAkademisDataList?.map((term, idx) => {
        return (
          <div key={idx} className="flex flex-col gap-4">
            <Layouts.ListContainerTableLayout
              title={
                term.kode ? formatAcademicYear(term.kode) : "Undefined term"
              }
              singularName={"Berdasarkan Term"}
              items={[term.kelas]}
              isLoading={isLoading.tableTermRiwayatAkademis}
            >
              <TermTable termRiwayatAkademisDataList={term.kelas} />
            </Layouts.ListContainerTableLayout>
          </div>
        );
      })}
    </Layouts.ViewContainerLayout>
  );
};
export default BerdasarkanTerm;
