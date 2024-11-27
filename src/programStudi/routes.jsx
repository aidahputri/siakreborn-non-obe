/*
	Generated on 22/10/2024 by UI Generator PRICES-IDE
	https://amanah.cs.ui.ac.id/research/ifml-regen
	version 3.5.5
*/
import RequireAuth from "@/commons/auth/RequireAuth";
import React from 'react';
import DaftarProgramStudiPage from './containers/DaftarProgramStudiPage'
import DetailProgramStudiPage from './containers/DetailProgramStudiPage'
import UbahProgramStudiPage from './containers/UbahProgramStudiPage'
import TambahProgramStudiPage from './containers/TambahProgramStudiPage'

const programStudiRoutes = [
{ 
	path: "/programstudi/ubah",
	element: <RequireAuth permissionNeeded="UpdateProgramStudi" ><UbahProgramStudiPage/></RequireAuth>
}

	
,
{ 
	path: "/programstudi/tambah",
	element: <RequireAuth permissionNeeded="CreateProgramStudi" ><TambahProgramStudiPage/></RequireAuth>
}

	
,
{ 
	path: "/programstudi",
	element: <RequireAuth permissionNeeded="ReadProgramStudi" ><DaftarProgramStudiPage/></RequireAuth>
}	
,
{ 
	path: "/programstudi/:id",
	element: <RequireAuth permissionNeeded="ReadProgramStudi" ><DetailProgramStudiPage/></RequireAuth>
}	

]

export default programStudiRoutes
