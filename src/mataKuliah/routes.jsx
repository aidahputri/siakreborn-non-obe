/*
	Generated on 22/10/2024 by UI Generator PRICES-IDE
	https://amanah.cs.ui.ac.id/research/ifml-regen
	version 3.5.5
*/
import RequireAuth from "@/commons/auth/RequireAuth";

import TambahMataKuliahPage from "./containers/TambahMataKuliahPage";
import DaftarMataKuliahPage from "./containers/DaftarMataKuliahPage";
import DetailMataKuliahPage from "./containers/DetailMataKuliahPage";
import UbahMataKuliahPage from "./containers/UbahMataKuliahPage";

const mataKuliahRoutes = [
  {
    path: "/matakuliah/tambah",
    element: (
      <RequireAuth permissionNeeded="CreateMataKuliah">
        <TambahMataKuliahPage />
      </RequireAuth>
    ),
  },
  {
    path: "/matakuliah/ubah",
    element: (
      <RequireAuth permissionNeeded="UpdateMataKuliah">
        <UbahMataKuliahPage />
      </RequireAuth>
    ),
  },
  {
    path: "/matakuliah",
    element: (
      <RequireAuth permissionNeeded="ReadMataKuliah">
        <DaftarMataKuliahPage />
      </RequireAuth>
    ),
  },
  {
    path: "/matakuliah/:id",
    element: (
      <RequireAuth permissionNeeded="ReadMataKuliah">
        <DetailMataKuliahPage />
      </RequireAuth>
    ),
  },
];

export default mataKuliahRoutes;
