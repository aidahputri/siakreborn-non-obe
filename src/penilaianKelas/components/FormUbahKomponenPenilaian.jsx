/*
	Generated on 13/06/2024 by UI Generator PRICES-IDE
	https://amanah.cs.ui.ac.id/research/ifml-regen
	version 3.4.0
*/
import React from "react";
import { Controller, useForm } from "react-hook-form";
import { useNavigate, useSearchParams } from "react-router-dom";
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

import ubahKomponenPenilaian from "../services/ubahKomponenPenilaian";

import { notifyError } from "@/commons/utils/toaster";
import * as Layouts from "@/commons/layouts";

const FormUbahKomponenPenilaian = ({ komponenPenilaianUbah }) => {
  const { control, handleSubmit } = useForm({
    defaultValues: komponenPenilaianUbah,
  });

  const navigate = useNavigate();

  const simpan = (data) => {
    const cleanData = cleanFormData(data);
    ubahKomponenPenilaian({
      ...cleanData,
    })
      .then(({ data: { data } }) => {
        navigate(`/penilaian-kelas/${komponenPenilaianUbah.kelasId}`);
      })
      .catch((error) => {
        console.error(error);
        notifyError(error);
      });
  };

  return (
    <Layouts.FormComponentLayout
      title="Ubah Komponen Penilaian"
      onSubmit={handleSubmit(simpan)}
      vas={[]}
      formFields={[
        <Controller
          name="nama"
          control={control}
          render={({ field, fieldState }) => (
            <InputField
              label="Nama Komponen"
              placeholder="Masukkan nama komponen"
              defaultValue={komponenPenilaianUbah.nama}
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
              defaultValue={komponenPenilaianUbah.bobot}
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

export default FormUbahKomponenPenilaian;
