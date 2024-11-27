/*
	Generated on 13/06/2024 by UI Generator PRICES-IDE
	https://amanah.cs.ui.ac.id/research/ifml-regen
	version 3.4.0
*/
import RequireAuth from "@/commons/auth/RequireAuth";

import DaftarKelasDiajarPage from "./containers/DaftarKelasDiajarPage";
import DetailPenilaianKelasPage from "./containers/DetailPenilaianKelasPage";
import TambahKomponenPenilaianPage from "./containers/TambahKomponenPenilaianPage";
import UbahKomponenPenilaianPage from "./containers/UbahKomponenPenilaianPage";
import DetailNilaiMahasiswaPage from "./containers/DetailNilaiMahasiswaPage";
import TambahNilaiMahasiswaPage from "./containers/TambahNilaiMahasiswaPage";
import TambahPemetaanCapaian from "./containers/TambahPemetaanCapaian";

const penilaianKelasRoutes = [
  {
    path: "/penilaian-kelas/:id/komponen/tambah",
    element: <TambahKomponenPenilaianPage />,
  },
  {
    path: "/penilaian-kelas/:id/komponen/:komponenId/ubah",
    element: (
      <RequireAuth permissionNeeded="UpdateKomponenPenilaian">
        <UbahKomponenPenilaianPage />
      </RequireAuth>
    ),
  },
  {
    path: "/penilaian-kelas/:id/nilai/:mahasiswaId/tambah",
    element: <TambahNilaiMahasiswaPage />,
  },
  {
    path: "/penilaian-kelas/:id/pemetaan-capaian/tambah",
    element: (
      <RequireAuth permissionNeeded="CreateBobotKomponenPenilaian">
        <TambahPemetaanCapaian />
      </RequireAuth>
    ),
  },
  {
    path: "/penilaian-kelas",
    element: <DaftarKelasDiajarPage />,
  },
  {
    path: "/penilaian-kelas/:id",
    element: <DetailPenilaianKelasPage />,
  },
  {
    path: "/penilaian-kelas/:id/nilai/:mahasiswaId",
    element: <DetailNilaiMahasiswaPage />,
  },
];

export default penilaianKelasRoutes;
