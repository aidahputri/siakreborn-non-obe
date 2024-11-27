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
import { useSearchParams } from "react-router-dom";
import FormUbahKomponenPenilaian from "../components/FormUbahKomponenPenilaian";

import getKomponenPenilaianUbah from "../services/getKomponenPenilaianUbah";
const UbahKomponenPenilaianPage = (props) => {
  const [isLoading, setIsLoading] = useState({
    ubahKomponenPenilaian: false,
  });
  const { setTitle } = useContext(HeaderContext);

  const { id, komponenId } = useParams();
  const [komponenPenilaianUbah, setKomponenPenilaianUbah] = useState();

  useEffect(() => {
    const fetch = async () => {
      setIsLoading((prev) => ({ ...prev, ubahKomponenPenilaian: true }));
      const { data: komponenPenilaianUbahResponse } =
        await getKomponenPenilaianUbah({ id: komponenId });

      setKomponenPenilaianUbah(komponenPenilaianUbahResponse.data);

      setIsLoading((prev) => ({ ...prev, ubahKomponenPenilaian: false }));
    };
    fetch();
  }, []);

  useEffect(() => {
    setTitle("Ubah Komponen Penilaian Page");
  }, []);

  return (
    <Layouts.ViewContainerLayout
      buttons={
        <>
          <Layouts.ViewContainerBackButtonLayout>
            <Link to={`/penilaian-kelas/${id}`}>
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
        singularName={"Komponen"}
        isLoading={isLoading.ubahKomponenPenilaian}
      >
        {komponenPenilaianUbah ? (
          <>
            <FormUbahKomponenPenilaian
              {...{
                komponenPenilaianUbah,
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
export default UbahKomponenPenilaianPage;
