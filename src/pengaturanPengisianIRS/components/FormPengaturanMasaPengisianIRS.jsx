import React, { useState } from "react";
import { Controller, useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { Button, InputField } from "@/commons/components";
import cleanFormData from "@/commons/utils/cleanFormData";
import updateRencanaStudi from "../services/updateRencanaStudi";
import { notifyError } from "@/commons/utils/toaster";
import * as Layouts from "@/commons/layouts";
import { Spinner } from "@/commons/components";

const FormPengaturanMasaPengisianIRS = ({ periodeData }) => {
  const { control, handleSubmit } = useForm();
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);

  const simpan = (data) => {
    const cleanData = cleanFormData({
      mulai: new Date(data.mulai).toISOString(),
      akhir: new Date(data.akhir).toISOString(),
    });

    setIsLoading(true);

    updateRencanaStudi(cleanData)
      .then(({ data: { data } }) => {})
      .catch((error) => {
        console.error(error);
        notifyError(error);
      })
      .finally(() => {
        setIsLoading(false);
      });
  };

  return (
    <>
      {isLoading ? (
        <div className="flex justify-center items-center h-full">
          <Spinner />
        </div>
      ) : (
        <Layouts.FormComponentLayout
          title="Pengaturan Masa Pengisian IRS"
          onSubmit={handleSubmit(simpan)}
          formFields={[
            <Controller
              name="mulai"
              defaultValue={
                periodeData?.mulai === undefined
                  ? ""
                  : new Date(periodeData?.mulai).toISOString().slice(0, -1)
              }
              control={control}
              render={({ field }) => (
                <InputField
                  {...field}
                  type="datetime-local"
                  label="Tanggal Mulai"
                  placeholder="Pilih tanggal mulai pengisian IRS"
                />
              )}
              rules={{ required: true }}
            />,
            <Controller
              name="akhir"
              defaultValue={
                periodeData?.akhir === undefined
                  ? ""
                  : new Date(periodeData?.akhir).toISOString().slice(0, -1)
              }
              control={control}
              render={({ field }) => (
                <InputField
                  {...field}
                  type="datetime-local"
                  label="Tanggal Akhir"
                  placeholder="Pilih tanggal akhir pengisian IRS"
                />
              )}
              rules={{ required: true }}
            />,
          ]}
          itemsEvents={[
            <Button type="submit" variant="primary">
              Simpan
            </Button>,
          ]}
        />
      )}
    </>
  );
};

export default FormPengaturanMasaPengisianIRS;
