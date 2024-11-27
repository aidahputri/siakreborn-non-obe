/*
	Generated on 22/10/2024 by UI Generator PRICES-IDE
	https://amanah.cs.ui.ac.id/research/ifml-regen
	version 3.5.5
*/
import RequireAuth from "@/commons/auth/RequireAuth";
import React from 'react';
import PengaturanMasaPengisianIRSPage from './containers/PengaturanMasaPengisianIRSPage'

const pengaturanPengisianIRSRoutes = [
{ 
	path: "/irs/pengaturan",
	element: <RequireAuth permissionNeeded="UpdatePengisianRencanaStudi" ><PengaturanMasaPengisianIRSPage/></RequireAuth>
}

	

]

export default pengaturanPengisianIRSRoutes
