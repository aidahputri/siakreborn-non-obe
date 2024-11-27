/*
	Generated on 22/10/2024 by UI Generator PRICES-IDE
	https://amanah.cs.ui.ac.id/research/ifml-regen
	version 3.5.5
*/
import RequireAuth from "@/commons/auth/RequireAuth";
import React from 'react';
import DaftarKelasPage from './containers/DaftarKelasPage'
import DetailKelasPage from './containers/DetailKelasPage'
import UbahKelasPage from './containers/UbahKelasPage'
import TambahKelasPage from './containers/TambahKelasPage'

const kelasRoutes = [
{ 
	path: "/kelas",
	element: <RequireAuth permissionNeeded="ReadKelas" ><DaftarKelasPage/></RequireAuth>,
}

	
,
{ 
	path: "/kelas/ubah",
	element: <RequireAuth permissionNeeded="UpdateKelas" ><UbahKelasPage/></RequireAuth>
}

	
,
{ 
	path: "/kelas/tambah",
	element: <RequireAuth permissionNeeded="CreateKelas" ><TambahKelasPage/></RequireAuth>
}

	
,
{ 
	path: "/kelas/:id",
	element: <RequireAuth permissionNeeded="ReadKelas" ><DetailKelasPage/></RequireAuth>,
}

	

]

export default kelasRoutes
