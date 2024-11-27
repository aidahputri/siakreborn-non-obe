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
import KurikulumTable from "../components/KurikulumTable";

import getKurikulumDataList from "../services/getKurikulumDataList";
const DaftarKurikulumPage = (props) => {
  const { checkPermission } = useAuth();

  const [isLoading, setIsLoading] = useState({
    daftarKurikulum: false,
  });
  const { setTitle } = useContext(HeaderContext);

  const [kurikulumDataList, setKurikulumDataList] = useState();

  useEffect(() => {
    const fetchData = async () => {
      try {
        setIsLoading((prev) => ({ ...prev, daftarKurikulum: true }));
        const { data: kurikulumDataList } = await getKurikulumDataList();
        setKurikulumDataList(kurikulumDataList.data);
      } finally {
        setIsLoading((prev) => ({ ...prev, daftarKurikulum: false }));
      }
    };
    fetchData();
  }, []);

  useEffect(() => {
    setTitle("Daftar Kurikulum Page");
  }, []);
  return (
    <Layouts.ViewContainerLayout
      buttons={
        <>
          <Layouts.ViewContainerButtonLayout>
            {checkPermission("CreateKurikulum") && (
              <Link
                to={`/kurikulum/tambah
			  	  `}
              >
                {" "}
                <Button className="p-2" variant="primary">
                  Tambah Kurikulum
                </Button>
              </Link>
            )}
          </Layouts.ViewContainerButtonLayout>
        </>
      }
    >
      <Layouts.ListContainerTableLayout
        title={"Daftar Kurikulum"}
        singularName={"Kurikulum"}
        items={[kurikulumDataList]}
        isLoading={isLoading.daftarKurikulum}
      >
        <KurikulumTable kurikulumDataList={kurikulumDataList} />
      </Layouts.ListContainerTableLayout>
    </Layouts.ViewContainerLayout>
  );
};
export default DaftarKurikulumPage;
