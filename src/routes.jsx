import { useRoutes } from "react-router-dom";

import { commonRoutes, commonMobileRoutes } from "@/commons/routes";
import userRoutes from "@/user/routes";
import roleRoutes from "@/role/routes";
import staticPageRoutes from "@/staticPage/routes";
import homeRoutes from "@/home/routes";
import semesterRoutes from "@/semester/routes";
import kelasRoutes from "@/kelas/routes";
import lihatIRSRoutes from "@/lihatIRS/routes";
import isiUbahIRSRoutes from "@/isiUbahIRS/routes";
import pengaturanPengisianIRSRoutes from "@/pengaturanPengisianIRS/routes";
import penilaianKelasRoutes from "@/penilaianKelas/routes";
import kurikulumRoutes from "@/kurikulum/routes";
import mataKuliahRoutes from "@/mataKuliah/routes";
import programStudiRoutes from "@/programStudi/routes";
import ringkasanAkademisRoutes from "@/ringkasanAkademis/routes";
import riwayatAkademisRoutes from "@/riwayatAkademis/routes";
import pembayaranRoutes from "./pembayaran/routes";

const GlobalRoutes = () => {
  const router = useRoutes([
    ...commonRoutes,
    ...staticPageRoutes,
    ...userRoutes,
    ...roleRoutes,
    ...homeRoutes,
    ...semesterRoutes,
    ...kelasRoutes,
    ...lihatIRSRoutes,
    ...isiUbahIRSRoutes,
    ...pengaturanPengisianIRSRoutes,
    ...penilaianKelasRoutes,
    ...kurikulumRoutes,
    ...mataKuliahRoutes,
    ...programStudiRoutes,
    ...ringkasanAkademisRoutes,
    ...riwayatAkademisRoutes,
    ...pembayaranRoutes,
  ]);
  return router;
};

const MobileRoutes = () => {
  const router = useRoutes([...commonMobileRoutes]);
  return router;
};

export { GlobalRoutes, MobileRoutes };
