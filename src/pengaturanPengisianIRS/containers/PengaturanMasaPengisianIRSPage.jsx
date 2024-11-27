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
import FormPengaturanMasaPengisianIRS from "../components/FormPengaturanMasaPengisianIRS";

import getPeriodePengisianIRS from "../services/getPeriodePengisianIRS";
const PengaturanMasaPengisianIRSPage = (props) => {
  const [isLoading, setIsLoading] = useState({
    pengaturanMasaPengisianIRS: false,
  });
  const { setTitle } = useContext(HeaderContext);

  const [periodePengisianIRS, setPeriodePengisianIRS] = useState();

  useEffect(() => {
    const fetch = async () => {
      setIsLoading((prev) => ({ ...prev, pengaturanMasaPengisianIRS: true }));
      const { data: periodePengisianIRSResponse } =
        await getPeriodePengisianIRS({});

      setPeriodePengisianIRS(periodePengisianIRSResponse.data);

      setIsLoading((prev) => ({ ...prev, pengaturanMasaPengisianIRS: false }));
    };
    fetch();
  }, []);

  useEffect(() => {
    setTitle("Pengaturan Masa Pengisian IRS Page");
  }, []);

  return (
    <Layouts.ViewContainerLayout
      buttons={
        <>
          <></>
        </>
      }
    >
      <Layouts.FormContainerLayout
        singularName={"Masa"}
        isLoading={isLoading.pengaturanMasaPengisianIRS}
      >
        <FormPengaturanMasaPengisianIRS
          {...{
            periodePengisianIRS,
          }}
          periodeData={periodePengisianIRS}
        />
      </Layouts.FormContainerLayout>
    </Layouts.ViewContainerLayout>
  );
};
export default PengaturanMasaPengisianIRSPage;
