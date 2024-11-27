/*
	Generated on 22/10/2024 by UI Generator PRICES-IDE
	https://amanah.cs.ui.ac.id/research/ifml-regen
	version 3.5.5
*/
import React, { useEffect, useState, useContext } from "react";
import { Button, Detail, Spinner } from "@/commons/components";
import * as Layouts from "@/commons/layouts";
import { Link, useParams } from "react-router-dom";
import { HeaderContext } from "@/commons/components";
import { useNavigate } from "react-router-dom";
import { useAuth } from "@/commons/auth";
import FormIsiIRS from "../components/FormIsiIRS";
import KelasTable from "../components/KelasTable";

import getKelasRencanaStudiDataList from "../services/getKelasRencanaStudiDataList";
const IsiUbahIRSPage = (props) => {
  const { checkPermission } = useAuth();

  const [isLoading, setIsLoading] = useState({
    isiIRS: false,
    tableKelasRencanaStudi: false,
  });
  const { setTitle } = useContext(HeaderContext);

  const [kelasRencanaStudiDataList, setKelasRencanaStudiDataList] = useState();
  const [selectedClasses, setSelectedClasses] = useState([]);
  const [formTitle, setFormTitle] = useState();
  const [isIRSPeriod, setIsIRSPeriod] = useState(true);
  const [fallback, setFallback] = useState("");

  const handleChange = (item) => {
    const mkIdx = selectedClasses.findIndex(
      (i) => i.mataKuliahId === item.mataKuliahId
    );

    const idx = selectedClasses.findIndex((i) => i.id === item.id);

    if (idx !== -1) {
      setSelectedClasses([
        ...selectedClasses.slice(0, idx),
        ...selectedClasses.slice(idx + 1),
      ]);
    } else if (mkIdx !== -1) {
      setSelectedClasses([
        ...selectedClasses.filter((i) => i.mataKuliahId !== item.mataKuliahId),
        item,
      ]);
    } else setSelectedClasses([...selectedClasses, item]);
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        setIsLoading((prev) => ({ ...prev, tableKelasRencanaStudi: true }));
        const { data: kelasRencanaStudiDataList } =
          await getKelasRencanaStudiDataList({});
        setKelasRencanaStudiDataList(kelasRencanaStudiDataList.data.mataKuliah);
        setFormTitle(kelasRencanaStudiDataList.data.title);
        setSelectedClasses(
          kelasRencanaStudiDataList.data.mataKuliah
            .flatMap((mk) => mk.kelas)
            .filter((k) => k.selected === true)
        );
      } catch (error) {
        console.log(error);
        if (error.response.status === 403) {
          setIsIRSPeriod(false);
          setFallback(error.response.data.data.message);
        }
      } finally {
        setIsLoading((prev) => ({ ...prev, tableKelasRencanaStudi: false }));
      }
    };
    fetchData();
  }, []);

  useEffect(() => {
    console.log(isIRSPeriod);
  }, [isIRSPeriod]);

  useEffect(() => {
    setTitle("Isi/Ubah IRS Page");
  }, []);

  return (
    <Layouts.ViewContainerLayout
      buttons={
        <>
          <></>
        </>
      }
    >
      {isLoading.tableKelasRencanaStudi ? (
        <div className="flex justify-center items-center h-full">
          <Spinner />
        </div>
      ) : (
        <>
          {isIRSPeriod ? (
            <Layouts.FormContainerLayout singularName={"IRS"}>
              <FormIsiIRS
                formTitle={formTitle}
                kelasRencanaStudiDataList={kelasRencanaStudiDataList}
                selectedClasses={selectedClasses}
                handleChange={handleChange}
                isLoading={isLoading.tableKelasRencanaStudi}
              />
            </Layouts.FormContainerLayout>
          ) : (
            <Layouts.ViewContainerLayout>
              <Detail
                children={<p className="w-full text-center">{fallback}</p>}
              />
            </Layouts.ViewContainerLayout>
          )}
        </>
      )}
    </Layouts.ViewContainerLayout>
  );
};
export default IsiUbahIRSPage;
