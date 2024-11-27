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
import FormTambahProgramStudi from "../components/FormTambahProgramStudi";
const TambahProgramStudiPage = (props) => {
  const [isLoading, setIsLoading] = useState({
    tambahProgramStudi: false,
  });
  const { setTitle } = useContext(HeaderContext);

  useEffect(() => {
    setTitle("Tambah Program Studi Page");
  }, []);
  return (
    <Layouts.ViewContainerLayout
      buttons={
        <>
          <Layouts.ViewContainerBackButtonLayout>
            <Link
              to={`/programstudi
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
      <Layouts.FormContainerLayout singularName={"Program"}>
        <FormTambahProgramStudi {...props} />
      </Layouts.FormContainerLayout>
    </Layouts.ViewContainerLayout>
  );
};
export default TambahProgramStudiPage;
