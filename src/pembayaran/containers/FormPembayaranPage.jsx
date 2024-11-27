/*
	Generated on 22/10/2024 by UI Generator PRICES-IDE
	https://amanah.cs.ui.ac.id/research/ifml-regen
	version 3.5.10
*/
import React, { useEffect, useState, useContext } from "react";
import { Button, Spinner } from "@/commons/components";
import * as Layouts from "@/commons/layouts";
import { Link, useParams } from "react-router-dom";
import { HeaderContext } from "@/commons/components";
import { useSearchParams } from "react-router-dom";
import FormPembayaranSemester from "../components/FormPembayaranSemester";
const FormPembayaranPage = (props) => {
  const [isLoading, setIsLoading] = useState({
    pembayaranSemester: false,
  });
  const { setTitle } = useContext(HeaderContext);

  useEffect(() => {
    setTitle("Form Pembayaran Page");
  }, []);
  return (
    <Layouts.ViewContainerLayout
      buttons={
        <>
          <></>
        </>
      }
    >
      <Layouts.FormContainerLayout singularName={"Semester"}>
        <FormPembayaranSemester {...props} />
      </Layouts.FormContainerLayout>
    </Layouts.ViewContainerLayout>
  );
};
export default FormPembayaranPage;
