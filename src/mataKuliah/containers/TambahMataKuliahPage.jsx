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
import { useSearchParams } from "react-router-dom";
import FormTambahMataKuliah from "../components/FormTambahMataKuliah";

import getKurikulum from "../services/getKurikulum";
const TambahMataKuliahPage = (props) => {
  const [isLoading, setIsLoading] = useState({
    tambahMataKuliah: false,
  });
  const { setTitle } = useContext(HeaderContext);

  const [kurikulum, setKurikulum] = useState();

  useEffect(() => {
    const fetch = async () => {
      setIsLoading((prev) => ({ ...prev, tambahMataKuliah: true }));
      const { data: kurikulumResponse } = await getKurikulum({});

      setKurikulum(kurikulumResponse.data);

      setIsLoading((prev) => ({ ...prev, tambahMataKuliah: false }));
    };
    fetch();
  }, []);

  useEffect(() => {
    setTitle("Tambah Mata Kuliah Page");
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
              <Button className="p-4" variant="secondary">
                Kembali
              </Button>
            </Link>
          </Layouts.ViewContainerBackButtonLayout>
        </>
      }
    >
      <Layouts.FormContainerLayout
        singularName={"Mata"}
        isLoading={isLoading.tambahMataKuliah}
      >
        {kurikulum ? (
          <>
            <FormTambahMataKuliah
              {...{
                kurikulum,
              }}
            />
          </>
        ) : (
          <></>
        )}
      </Layouts.FormContainerLayout>
    </Layouts.ViewContainerLayout>
  );
};
export default TambahMataKuliahPage;
