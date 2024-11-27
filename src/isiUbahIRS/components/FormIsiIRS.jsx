/*
	Generated on 22/10/2024 by UI Generator PRICES-IDE
	https://amanah.cs.ui.ac.id/research/ifml-regen
	version 3.5.5
*/
import React from "react";
import { Controller, useForm } from "react-hook-form";
import { useNavigate, useSearchParams } from "react-router-dom";
import {
  Button,
  Form,
  SelectionField,
  MultiSelectionField,
  InputField,
  MultiSelectField,
  TextAreaField,
  // RichTextField,
  VisualizationAttr,
  Spinner,
} from "@/commons/components";
import {
  ALLOWED_PERMISSIONS,
  findAllowedPermission,
} from "@/commons/constants/allowedPermission";
import cleanFormData from "@/commons/utils/cleanFormData";
import saveRencanaStudi from "../services/saveRencanaStudi";

import { notifyError } from "@/commons/utils/toaster";
import * as Layouts from "@/commons/layouts";
import KelasTable from "./KelasTable";

const FormIsiIRS = ({
  formTitle,
  kelasRencanaStudiDataList,
  selectedClasses,
  handleChange,
  isLoading,
}) => {
  const { control, handleSubmit } = useForm();

  const navigate = useNavigate();

  const simpan = (data) => {
    // const cleanData = cleanFormData(data);
    const req = {
      kelasIds: selectedClasses.map((item) => item.id),
    };
    // console.log(req)
    saveRencanaStudi(req)
      .then(({ data: { data } }) => {
        navigate('/irs/ringkasan')
      })
      .catch((error) => {
        console.error(error);
        notifyError(error);
      });
  };

  return (
    <Layouts.IRSFormComponentLayout
      title={formTitle}
      onSubmit={handleSubmit(simpan)}
      vas={[]}
      formFields={kelasRencanaStudiDataList?.map((mk, idx) => {
        return (
          <div key={idx} className="flex flex-col gap-4">
            <Layouts.ListContainerTableLayout
              title={mk.title}
              singularName={"Kelas"}
              items={[mk.kelas]}
              isLoading={isLoading}
            >
              <KelasTable
                handleChange={handleChange}
                kelasRencanaStudiDataList={mk.kelas}
                selectedClasses={selectedClasses}
              />
            </Layouts.ListContainerTableLayout>
          </div>
        );
      })}
      itemsEvents={[
        <Button type="submit" variant="primary">
          Simpan
        </Button>,
      ]}
    />
  );
};

export default FormIsiIRS;
