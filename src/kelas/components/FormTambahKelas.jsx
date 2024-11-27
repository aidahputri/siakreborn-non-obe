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
import saveKelas from "../services/saveKelas";

import { notifyError } from "@/commons/utils/toaster";
import * as Layouts from "@/commons/layouts";

const FormTambahKelas = ({ mataKuliah, semester }) => {
  const { control, handleSubmit } = useForm();

  const navigate = useNavigate();

  const tambah = (data) => {
    const cleanData = cleanFormData(data);
    saveKelas({
      ...cleanData,
    })
      .then(({ data: { data } }) => {
        navigate(`/kelas`);
      })
      .catch((error) => {
        console.error(error);
        notifyError(error);
      });
  };

  return (
    <Layouts.FormComponentLayout
      title="Tambah Kelas"
      onSubmit={handleSubmit(tambah)}
      vas={[]}
      formFields={[
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
          name="kapasitas"
          control={control}
          render={({ field, fieldState }) => (
            <InputField
              label="Kapasitas"
              placeholder="Masukkan kapasitas"
              type="number"
              fieldState={fieldState}
              {...field}
              isRequired={false}
            />
          )}
        />,

        <Controller
          name="ruangan"
          control={control}
          render={({ field, fieldState }) => (
            <InputField
              label="Ruangan"
              placeholder="Masukkan ruangan"
              fieldState={fieldState}
              {...field}
              isRequired={false}
            />
          )}
        />,

        <Controller
          name="jadwal"
          control={control}
          render={({ field, fieldState }) => (
            <InputField
              label="Jadwal"
              placeholder="Masukkan jadwal"
              fieldState={fieldState}
              {...field}
              isRequired={false}
            />
          )}
        />,

        <Controller
          name="mataKuliahId"
          control={control}
          render={({ field, fieldState }) => (
            <SelectionField
              label="Mata Kuliah"
              options={mataKuliah}
              placeholder="Masukkan mata kuliah"
              fieldState={fieldState}
              {...field}
              isRequired={false}
            />
          )}
        />,

        <Controller
          name="semesterId"
          control={control}
          render={({ field, fieldState }) => (
            <SelectionField
              label="Semester"
              options={semester}
              placeholder="Masukkan semester"
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

export default FormTambahKelas;
