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
import saveMataKuliah from "../services/saveMataKuliah";

import { notifyError } from "@/commons/utils/toaster";
import * as Layouts from "@/commons/layouts";

const FormTambahMataKuliah = ({ kurikulum }) => {
  const { control, handleSubmit } = useForm();

  const navigate = useNavigate();

  const tambah = (data) => {
    const cleanData = cleanFormData(data);
    saveMataKuliah({
      ...cleanData,
    })
      .then(({ data: { data } }) => {
        navigate(`/matakuliah`);
      })
      .catch((error) => {
        console.error(error);
        notifyError(error);
      });
  };

  return (
    <Layouts.FormComponentLayout
      title="Tambah Mata Kuliah"
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
          name="nama"
          control={control}
          render={({ field, fieldState }) => (
            <InputField
              label="Nama"
              placeholder="Masukkan nama"
              fieldState={fieldState}
              {...field}
              isRequired={false}
            />
          )}
        />,

        <Controller
          name="sks"
          control={control}
          render={({ field, fieldState }) => (
            <InputField
              label="SKS"
              placeholder="Masukkan sks"
              type="number"
              fieldState={fieldState}
              {...field}
              isRequired={false}
            />
          )}
        />,

        <Controller
          name="term"
          control={control}
          render={({ field, fieldState }) => (
            <InputField
              label="Term"
              placeholder="Masukkan term"
              type="number"
              fieldState={fieldState}
              {...field}
              isRequired={false}
            />
          )}
        />,

        <Controller
          name="kurikulumId"
          control={control}
          render={({ field, fieldState }) => (
            <SelectionField
              label="Pilihan Kurikulum"
              options={kurikulum}
              placeholder="Masukkan pilihan kurikulum"
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

export default FormTambahMataKuliah;
