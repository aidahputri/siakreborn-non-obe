/*
	Generated on 13/06/2024 by UI Generator PRICES-IDE
	https://amanah.cs.ui.ac.id/research/ifml-regen
	version 3.4.0
*/
import React from "react";
import { Controller, useForm } from "react-hook-form";
import { useNavigate, useParams, useSearchParams } from "react-router-dom";
import toast from "react-hot-toast";
import {
  Button,
  Form,
  SelectionField,
  MultiSelectionField,
  InputField,
  MultiSelectField,
  TextAreaField,
  VisualizationAttr,
  Spinner,
} from "@/commons/components";
import {
  ALLOWED_PERMISSIONS,
  findAllowedPermission,
} from "@/commons/constants/allowedPermission";
import cleanFormData from "@/commons/utils/cleanFormData";

import saveKomponenPenilaian from "../services/saveKomponenPenilaian";

import { notifyError } from "@/commons/utils/toaster";
import * as Layouts from "@/commons/layouts";

const FormTambahKomponenPenilaian = ({}) => {
  const { control, handleSubmit } = useForm();

  const navigate = useNavigate();
  const { id } = useParams();

  const tambah = (data) => {
    const cleanData = cleanFormData(data);
    saveKomponenPenilaian({
      ...cleanData,
      kelasId: id,
    })
      .then(({ data: { data } }) => {
        navigate(`/penilaian-kelas/${id}`);
      })
      .catch((error) => {
        console.error(error);
        notifyError(error);
      });
  };

  return (
    <Layouts.FormComponentLayout
      title="Tambah Komponen Penilaian"
      onSubmit={handleSubmit(tambah)}
      vas={[]}
      formFields={[
        <Controller
          name="nama"
          control={control}
          render={({ field, fieldState }) => (
            <InputField
              label="Nama Komponen"
              placeholder="Masukkan nama komponen"
              fieldState={fieldState}
              {...field}
              isRequired={false}
            />
          )}
        />,

        <Controller
          name="bobot"
          control={control}
          render={({ field, fieldState }) => (
            <InputField
              label="Bobot"
              placeholder="Masukkan bobot"
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

export default FormTambahKomponenPenilaian;
