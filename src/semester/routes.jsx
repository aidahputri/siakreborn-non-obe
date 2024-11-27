/*
	Generated on 22/10/2024 by UI Generator PRICES-IDE
	https://amanah.cs.ui.ac.id/research/ifml-regen
	version 3.5.5
*/
import RequireAuth from "@/commons/auth/RequireAuth";
import React from "react";
import DaftarSemesterPage from "./containers/DaftarSemesterPage";
import UbahSemesterPage from "./containers/UbahSemesterPage";
import TambahSemesterPage from "./containers/TambahSemesterPage";

const semesterRoutes = [
  {
    path: "/semester",
    element: (
      <RequireAuth permissionNeeded="ReadSemester">
        <DaftarSemesterPage />
      </RequireAuth>
    ),
  },
  {
    path: "/semester/ubah",
    element: (
      <RequireAuth permissionNeeded="UpdateSemester">
        <UbahSemesterPage />
      </RequireAuth>
    ),
  },
  {
    path: "/semester/tambah",
    element: (
      <RequireAuth permissionNeeded="CreateSemester">
        <TambahSemesterPage />
      </RequireAuth>
    ),
  },
];

export default semesterRoutes;
