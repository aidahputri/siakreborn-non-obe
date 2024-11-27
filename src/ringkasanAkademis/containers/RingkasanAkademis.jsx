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
import DataAkademis from "../components/DataAkademis";
import getDetailMahasiswaDataList from "../services/getDetailMahasiswaDataList";
import SemesterTable from "../components/SemesterTable";

import getRingkasanSemesterDataList from "../services/getRingkasanSemesterDataList";
import NilaiTable from "../components/NilaiTable";

import getLaporanNilaiCPLDataList from "../services/getLaporanNilaiCPLDataList";
import getKurikulumSelectionField from "../services/getKurikulumSelectionField";
import isSelectedFeature from "@/commons/utils/isSelectedFeature";
const RingkasanAkademis = (props) => {
  const { checkPermission } = useAuth();

  const [isLoading, setIsLoading] = useState({
    dataAkademis: false,
    ringkasanSemester: false,
    laporanNilaiCPL: false,
  });
  const { setTitle } = useContext(HeaderContext);

  const [detailMahasiswaDataList, setDetailMahasiswaDataList] = useState();
  const { id } = useParams();
  useEffect(() => {
    const fetchData = async () => {
      try {
        setIsLoading((prev) => ({ ...prev, dataAkademis: true }));
        const { data: detailMahasiswaDataList } =
          await getDetailMahasiswaDataList({ id });
        setDetailMahasiswaDataList(detailMahasiswaDataList.data);
      } finally {
        setIsLoading((prev) => ({ ...prev, dataAkademis: false }));
      }
    };
    fetchData();
  }, []);
  const [ringkasanSemesterDataList, setRingkasanSemesterDataList] = useState();
  useEffect(() => {
    const fetchData = async () => {
      try {
        setIsLoading((prev) => ({ ...prev, ringkasanSemester: true }));
        const { data: ringkasanSemesterDataList } =
          await getRingkasanSemesterDataList({ id });
        setRingkasanSemesterDataList(ringkasanSemesterDataList.data);
      } finally {
        setIsLoading((prev) => ({ ...prev, ringkasanSemester: false }));
      }
    };
    fetchData();
  }, []);
  const [laporanNilaiCPLDataList, setLaporanNilaiCPLDataList] = useState();
  const [kurikulumSelectionField, setKurikulumSelectionField] = useState();
  useEffect(() => {
    const fetchData = async () => {
      try {
        setIsLoading((prev) => ({ ...prev, laporanNilaiCPL: true }));
        const { data: laporanNilaiCPLDataList } =
          await getLaporanNilaiCPLDataList({ id });
        const { data: kurikulumSelectionField } =
          await getKurikulumSelectionField({ id });
        setLaporanNilaiCPLDataList(laporanNilaiCPLDataList.data);
        setKurikulumSelectionField(kurikulumSelectionField.data);
      } finally {
        setIsLoading((prev) => ({ ...prev, laporanNilaiCPL: false }));
      }
    };
    fetchData();
  }, []);

  useEffect(() => {
    setTitle("Ringkasan Akademis");
  }, []);
  return (
    <Layouts.ViewContainerLayout
      buttons={
        <>
          <></>
        </>
      }
    >
      <Layouts.DetailContainerLayout
        title={"Data Akademis"}
        singularName={"Akademis"}
        items={{ ...detailMahasiswaDataList }}
        isLoading={isLoading.dataAkademis}
        isCorrelatedWithAnotherComponent={false}
      >
        <DataAkademis {...{ data: { ...detailMahasiswaDataList } }} />
      </Layouts.DetailContainerLayout>
      <Layouts.ListContainerTableLayout
        title={"Ringkasan Semester"}
        singularName={"Semester"}
        items={[ringkasanSemesterDataList]}
        isLoading={isLoading.ringkasanSemester}
      >
        <SemesterTable ringkasanSemesterDataList={ringkasanSemesterDataList} />
      </Layouts.ListContainerTableLayout>
      {isSelectedFeature("CPL") && (
        <Layouts.ListContainerTableLayout
          title={"Laporan Nilai CPL"}
          singularName={"Nilai"}
          items={[laporanNilaiCPLDataList, kurikulumSelectionField]}
          isLoading={isLoading.laporanNilaiCPL}
        >
          <NilaiTable
            laporanNilaiCPLDataList={laporanNilaiCPLDataList}
            kurikulumSelectionField={kurikulumSelectionField}
          />
        </Layouts.ListContainerTableLayout>
      )}
    </Layouts.ViewContainerLayout>
  );
};
export default RingkasanAkademis;
