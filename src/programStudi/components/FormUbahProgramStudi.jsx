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
  RichTextField,
  VisualizationAttr,
  Spinner,
} from "@/commons/components";
import {
  ALLOWED_PERMISSIONS,
  findAllowedPermission,
} from "@/commons/constants/allowedPermission";
import cleanFormData from "@/commons/utils/cleanFormData";
import updateProgramStudi from "../services/updateProgramStudi";

import { notifyError } from "@/commons/utils/toaster";
import * as Layouts from "@/commons/layouts";

const FormUbahProgramStudi = ({ programStudiData }) => {
  const { control, handleSubmit } = useForm({
    defaultValues: programStudiData,
  });

  const navigate = useNavigate();

  const simpan = (data) => {
    const cleanData = cleanFormData(data);
    updateProgramStudi({
      ...cleanData,
    })
      .then(({ data: { data } }) => {
        navigate(`/programstudi/${programStudiData.id}`);
      })
      .catch((error) => {
        console.error(error);
        notifyError(error);
      });
  };

  return (
    <Layouts.FormComponentLayout
      title="Ubah Program Studi"
      onSubmit={handleSubmit(simpan)}
      vas={[]}
      formFields={[
        <Controller
          name="kode"
          control={control}
          render={({ field, fieldState }) => (
            <InputField
              label="Kode"
              placeholder="Masukkan kode"
              defaultValue={programStudiData.kode}
              fieldState={fieldState}
              {...field}
              isRequired={false}
            />
          )}
        />,

        <Controller
          name="nama"
          control={control}
          render={({ field, fieldState }) => (
            <InputField
              label="Nama"
              placeholder="Masukkan nama"
              defaultValue={programStudiData.nama}
              fieldState={fieldState}
              {...field}
              isRequired={false}
            />
          )}
        />,

        <Controller
          name="jenjang"
          control={control}
          render={({ field, fieldState }) => (
            <InputField
              label="Jenjang"
              placeholder="Masukkan jenjang"
              defaultValue={programStudiData.jenjang}
              fieldState={fieldState}
              {...field}
              isRequired={false}
            />
          )}
        />,

        <Controller
          name="noSK"
          control={control}
          render={({ field, fieldState }) => (
            <InputField
              label="Nomor SK"
              placeholder="Masukkan nomor sk"
              defaultValue={programStudiData.noSK}
              fieldState={fieldState}
              {...field}
              isRequired={false}
            />
          )}
        />,

        <Controller
          name="kaprodi"
          control={control}
          render={({ field, fieldState }) => (
            <InputField
              label="Kaprodi"
              placeholder="Masukkan kaprodi"
              defaultValue={programStudiData.kaprodi}
              fieldState={fieldState}
              {...field}
              isRequired={false}
            />
          )}
        />,
      ]}
      itemsEvents={[
        <Button type="submit" variant="primary">
          Simpan
        </Button>,
      ]}
    />
  );
};

export default FormUbahProgramStudi;
