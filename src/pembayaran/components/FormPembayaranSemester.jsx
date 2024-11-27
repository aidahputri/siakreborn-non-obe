/*
	Generated on 22/10/2024 by UI Generator PRICES-IDE
	https://amanah.cs.ui.ac.id/research/ifml-regen
	version 3.5.10
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
import savePembayaranMe from "../services/savePembayaranMe";

import { notifyError } from "@/commons/utils/toaster";
import * as Layouts from "@/commons/layouts";

const FormPembayaranSemester = ({}) => {
  const { control, handleSubmit } = useForm();
  const navigate = useNavigate();

  const bayar = (data) => {
    savePembayaranMe({
      vendorName: "Oy",
    })
      .then(({ data: { data } }) => {
        window.location.href = data.paymentLink;
      })
      .catch((error) => {
        console.error(error);
        notifyError(error);
      });
  };

  return (
    <Layouts.FormComponentLayout
      title="Pembayaran Semester"
      onSubmit={handleSubmit(bayar)}
      vas={[]}
      formFields={[
        <span>
          Klik tombol <b>Bayar</b> untuk menyelesaikan pembayaran
          semester Anda.
        </span>,
      ]}
      itemsEvents={[
        <Button type="submit" variant="primary">
          Bayar
        </Button>,
      ]}
    />
  );
};

export default FormPembayaranSemester;
