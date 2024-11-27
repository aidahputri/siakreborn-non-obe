const menus = [];
const addMenu = (menu) => {
  menus.push(menu);
};

const addSubMenu = (label, subMenu, menu = menus) => {
  for (const item of menu) {
    if (item.label === label) {
      item.subMenus.push(subMenu);
      return;
    }
    if (item.subMenus) {
      addSubMenu(label, subMenu, item.subMenus);
    }
  }
};

export const settingsMenu = [
  {
    route: "#",
    label: "Pengaturan",
    permission: "settings.view",
    subMenus: [
      {
        route: "/settings/appearance",
        label: "Pengaturan Tampilan",
        permission: "administrator",
      },
      {
        route: "/settings/role",
        label: "Pengaturan Role",
        permission: "administrator",
      },
      {
        route: "/settings/user",
        label: "Pengaturan User",
        permission: "administrator",
      },
    ],
  },
];

export default menus;

// Add menus with permission attributes
addMenu({
  route: "/programstudi",
  label: "Program Studi",
  permission: "ReadProgramStudi",
  subMenus: [],
});

addMenu({
  route: "/kurikulum",
  label: "Kurikulum",
  permission: "ReadKurikulum",
  subMenus: [],
});

addMenu({
  route: "/semester",
  label: "Semester",
  permission: "ReadSemester",
  subMenus: [],
});

addMenu({
  route: "/matakuliah",
  label: "Mata Kuliah",
  permission: "ReadMataKuliah",
  subMenus: [],
});

addMenu({
  route: "/kelas",
  label: "Kelas",
  permission: "ReadKelas",
  subMenus: [],
});

addMenu({
  route: "#",
  label: "Akademis",
  permission: "ReadKelasMahasiswaMe",
  subMenus: [],
});

addSubMenu('Akademis', {
	route: '/akademis/ringkasan',
	label: 'Ringkasan',
	permission: "ReadRencanaStudiMe"
})

addSubMenu("Akademis", {
  route: "/akademis/riwayat",
  label: "Riwayat",
  permission: "ReadKelasMahasiswaMe",
});

addMenu({
  route: "#",
  label: "IRS",
  permission: "ReadRencanaStudiMe",
  subMenus: [],
});

addSubMenu("IRS", {
  route: "/irs/ringkasan",
  label: "Lihat IRS",
  permission: "ReadRencanaStudiMe",
});

addSubMenu("IRS", {
  route: "/irs/isi",
  label: "Isi/Ubah IRS",
  permission: "CreateRencanaStudiMe",
});

addSubMenu("IRS", {
  route: "/irs/pengaturan",
  label: "Pengaturan Pengisian IRS",
  permission: "UpdatePengisianRencanaStudi",
});

addMenu({
  route: "/penilaian-kelas",
  label: "Penilaian Kelas",
  permission: "ReadKelasDosenMe",
  subMenus: [],
});
