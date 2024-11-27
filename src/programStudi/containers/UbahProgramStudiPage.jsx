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
import FormUbahProgramStudi from "../components/FormUbahProgramStudi";

import getProgramStudiData from "../services/getProgramStudiData";
const UbahProgramStudiPage = (props) => {
  const [isLoading, setIsLoading] = useState({
    ubahProgramStudi: false,
  });
  const { setTitle } = useContext(HeaderContext);

  const [searchParams] = useSearchParams();
  const id = searchParams.get("id");
  const [programStudiData, setProgramStudiData] = useState();

  useEffect(() => {
    const fetch = async () => {
      setIsLoading((prev) => ({ ...prev, ubahProgramStudi: true }));
      const { data: programStudiDataResponse } = await getProgramStudiData({
        id,
      });

      setProgramStudiData(programStudiDataResponse.data);

      setIsLoading((prev) => ({ ...prev, ubahProgramStudi: false }));
    };
    fetch();
  }, []);

  useEffect(() => {
    setTitle("Ubah ProgramStudi Page");
  }, []);
  return (
    <Layouts.ViewContainerLayout
      buttons={
        <>
          <Layouts.ViewContainerBackButtonLayout>
            <Link to={`/programstudi/${id}`}>
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
        singularName={"Program"}
        isLoading={isLoading.ubahProgramStudi}
      >
        {programStudiData ? (
          <>
            <FormUbahProgramStudi
              {...{
                programStudiData,
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
export default UbahProgramStudiPage;
