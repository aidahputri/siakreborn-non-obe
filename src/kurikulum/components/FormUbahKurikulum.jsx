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
import updateKurikulum from "../services/updateKurikulum";

import { notifyError } from "@/commons/utils/toaster";
import * as Layouts from "@/commons/layouts";

const FormUbahKurikulum = ({ kurikulumData, programStudiSelectionField }) => {
  const { control, handleSubmit } = useForm({ defaultValues: kurikulumData });

  const navigate = useNavigate();

  const simpan = (data) => {
    const cleanData = cleanFormData(data);
    updateKurikulum({
      ...cleanData,
    })
      .then(({ data: { data } }) => {
        navigate(`/kurikulum/${kurikulumData.id}`);
      })
      .catch((error) => {
        console.error(error);
        notifyError(error);
      });
  };

  return (
    <Layouts.FormComponentLayout
      title="Ubah Kurikulum"
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
              defaultValue={kurikulumData.kode}
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
              defaultValue={kurikulumData.noSK}
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
              defaultValue={kurikulumData.status}
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
              defaultValue={kurikulumData.profilLulusan}
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
              defaultValue={kurikulumData.programStudiId}
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

export default FormUbahKurikulum;
