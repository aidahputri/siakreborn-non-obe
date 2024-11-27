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
import saveKurikulum from "../services/saveKurikulum";

import { notifyError } from "@/commons/utils/toaster";
import * as Layouts from "@/commons/layouts";

const FormTambahKurikulum = ({ programStudiSelectionField }) => {
  const { control, handleSubmit } = useForm();

  const navigate = useNavigate();

  const tambah = (data) => {
    const cleanData = cleanFormData(data);
    saveKurikulum({
      ...cleanData,
    })
      .then(({ data: { data } }) => {
        navigate(`/kurikulum`);
      })
      .catch((error) => {
        console.error(error);
        notifyError(error);
      });
  };

  return (
    <Layouts.FormComponentLayout
      title="Tambah Kurikulum"
      onSubmit={handleSubmit(tambah)}
      vas={[]}
      formFields={[
        <Controller
          name="kode"
          control={control}
          render={({ field, fieldState }) => (
            <InputField
              label="Kode"
              placeholder="Masukkan kode"
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
              fieldState={fieldState}
              {...field}
              isRequired={false}
            />
          )}
        />,

        <Controller
          name="status"
          control={control}
          render={({ field, fieldState }) => (
            <InputField
              label="Status"
              placeholder="Masukkan status"
              fieldState={fieldState}
              {...field}
              isRequired={false}
            />
          )}
        />,

        <Controller
          name="profilLulusan"
          control={control}
          render={({ field, fieldState }) => (
            <InputField
              label="Profil Lulusan"
              placeholder="Masukkan profil lulusan"
              fieldState={fieldState}
              {...field}
              isRequired={false}
            />
          )}
        />,

        <Controller
          name="programStudiId"
          control={control}
          render={({ field, fieldState }) => (
            <SelectionField
              label="Program Studi"
              options={programStudiSelectionField}
              placeholder="Masukkan program studi"
              fieldState={fieldState}
              {...field}
              isRequired={false}
            />
          )}
        />,
      ]}
      itemsEvents={[
        <Button type="submit" variant="primary">
          Tambah
        </Button>,
      ]}
    />
  );
};

export default FormTambahKurikulum;
