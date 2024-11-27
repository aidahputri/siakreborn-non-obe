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
import KuliahTable from "../components/KuliahTable";

import getMataKuliahDataList from "../services/getMataKuliahDataList";
import getKurikulumSelectionField from "../services/getKurikulumSelectionField";
const DaftarMataKuliahPage = (props) => {
  const { checkPermission } = useAuth();

  const [isLoading, setIsLoading] = useState({
    mataKuliah: false,
  });
  const { setTitle } = useContext(HeaderContext);

  const [mataKuliahDataList, setMataKuliahDataList] = useState();
  const [kurikulumSelectionField, setKurikulumSelectionField] = useState();

  useEffect(() => {
    const fetchData = async () => {
      try {
        setIsLoading((prev) => ({ ...prev, mataKuliah: true }));
        const { data: mataKuliahDataList } = await getMataKuliahDataList({});
        const { data: kurikulumSelectionField } =
          await getKurikulumSelectionField({});
        setMataKuliahDataList(mataKuliahDataList.data);
        setKurikulumSelectionField(kurikulumSelectionField.data);
      } finally {
        setIsLoading((prev) => ({ ...prev, mataKuliah: false }));
      }
    };
    fetchData();
  }, []);

  useEffect(() => {
    setTitle("Daftar Mata Kuliah Page");
  }, []);
  return (
    <Layouts.ViewContainerLayout
      buttons={
        <>
          {checkPermission("CreateMataKuliah") && (
            <Layouts.ViewContainerButtonLayout>
              <Link
                to={`/matakuliah/tambah
			  	`}
              >
                {" "}
                <Button className="p-2" variant="primary">
                  Tambah Mata Kuliah
                </Button>
              </Link>
            </Layouts.ViewContainerButtonLayout>
          )}
        </>
      }
    >
      <Layouts.ListContainerTableLayout
        title={"Mata Kuliah"}
        singularName={"Kuliah"}
        items={[mataKuliahDataList, kurikulumSelectionField]}
        isLoading={isLoading.mataKuliah}
      >
        <KuliahTable
          mataKuliahDataList={mataKuliahDataList}
          kurikulumSelectionField={kurikulumSelectionField}
        />
      </Layouts.ListContainerTableLayout>
    </Layouts.ViewContainerLayout>
  );
};
export default DaftarMataKuliahPage;
