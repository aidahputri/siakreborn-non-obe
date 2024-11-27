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
import FormUbahKurikulum from "../components/FormUbahKurikulum";

import getKurikulumData from "../services/getKurikulumData";
import getProgramStudiSelectionField from "../services/getProgramStudiSelectionField";
const UbahKurikulumPage = (props) => {
  const [isLoading, setIsLoading] = useState({
    ubahKurikulum: false,
  });
  const { setTitle } = useContext(HeaderContext);

  const [searchParams] = useSearchParams();
  const id = searchParams.get("id");
  const [kurikulumData, setKurikulumData] = useState();
  const [programStudiSelectionField, setProgramStudiSelectionField] =
    useState();

  useEffect(() => {
    const fetch = async () => {
      setIsLoading((prev) => ({ ...prev, ubahKurikulum: true }));
      const { data: kurikulumDataResponse } = await getKurikulumData({ id });
      const { data: programStudiSelectionFieldResponse } =
        await getProgramStudiSelectionField({ id });

      setKurikulumData(kurikulumDataResponse.data);
      setProgramStudiSelectionField(programStudiSelectionFieldResponse.data);

      setIsLoading((prev) => ({ ...prev, ubahKurikulum: false }));
    };
    fetch();
  }, []);

  useEffect(() => {
    setTitle("Ubah Kurikulum Page");
  }, []);
  return (
    <Layouts.ViewContainerLayout
      buttons={
        <>
          <Layouts.ViewContainerBackButtonLayout>
            <Link to={`/kurikulum/${id}`}>
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
        isLoading={isLoading.ubahKurikulum}
      >
        {kurikulumData && programStudiSelectionField ? (
          <>
            <FormUbahKurikulum
              {...{
                kurikulumData,
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
export default UbahKurikulumPage;
