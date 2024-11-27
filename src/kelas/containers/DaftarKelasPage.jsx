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
import KelasTable from "../components/KelasTable";

import getKelasDataList from "../services/getKelasDataList";
const DaftarKelasPage = (props) => {
  const { checkPermission } = useAuth();

  const [isLoading, setIsLoading] = useState({
    daftarKelas: false,
  });
  const { setTitle } = useContext(HeaderContext);

  const [kelasDataList, setKelasDataList] = useState();

  useEffect(() => {
    const fetchData = async () => {
      try {
        setIsLoading((prev) => ({ ...prev, daftarKelas: true }));
        const { data: kelasDataList } = await getKelasDataList();
        setKelasDataList(kelasDataList.data);
      } finally {
        setIsLoading((prev) => ({ ...prev, daftarKelas: false }));
      }
    };
    fetchData();
  }, []);

  useEffect(() => {
    setTitle("Daftar Kelas Page");
  }, []);
  return (
    <Layouts.ViewContainerLayout
      buttons={
        <>
          <Layouts.ViewContainerButtonLayout>
            {checkPermission("CreateKelas") && (
              <Link to={`/kelas/tambah`}>
                {" "}
                <Button className="p-2" variant="primary">
                  Tambah Kelas
                </Button>
              </Link>
            )}
          </Layouts.ViewContainerButtonLayout>
        </>
      }
    >
      {isLoading.tableKelas ? (
        <div className="flex justify-center items-center h-full">
          <Spinner />
        </div>
      ) : (
        <>
          {kelasDataList?.map((mk, idx) => (
            <div key={idx}>
              <Layouts.ListContainerTableLayout
                title={mk.nama}
                singularName={"Kelas"}
                items={[mk.kelas]}
                isLoading={isLoading.daftarKelas}
              >
                <KelasTable kelasDataList={mk.kelas} />
              </Layouts.ListContainerTableLayout>
            </div>
          ))}
        </>
      )}
    </Layouts.ViewContainerLayout>
  );
};
export default DaftarKelasPage;
