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
import FormTambahKurikulum from "../components/FormTambahKurikulum";

import getProgramStudiSelectionField from "../services/getProgramStudiSelectionField";
const TambahKurikulumPage = (props) => {
  const [isLoading, setIsLoading] = useState({
    tambahKurikulum: false,
  });
  const { setTitle } = useContext(HeaderContext);

  const [programStudiSelectionField, setProgramStudiSelectionField] =
    useState();

  useEffect(() => {
    const fetch = async () => {
      setIsLoading((prev) => ({ ...prev, tambahKurikulum: true }));
      const { data: programStudiSelectionFieldResponse } =
        await getProgramStudiSelectionField({});

      setProgramStudiSelectionField(programStudiSelectionFieldResponse.data);

      setIsLoading((prev) => ({ ...prev, tambahKurikulum: false }));
    };
    fetch();
  }, []);

  useEffect(() => {
    setTitle("Tambah Kurikulum Page");
  }, []);
  return (
    <Layouts.ViewContainerLayout
      buttons={
        <>
          <Layouts.ViewContainerBackButtonLayout>
            <Link
              to={`/kurikulum
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
        singularName={"Kurikulum"}
        isLoading={isLoading.tambahKurikulum}
      >
        {programStudiSelectionField ? (
          <>
            <FormTambahKurikulum
              {...{
                programStudiSelectionField,
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
export default TambahKurikulumPage;
