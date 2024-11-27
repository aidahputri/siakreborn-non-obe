/*
	Generated on 13/06/2024 by UI Generator PRICES-IDE
	https://amanah.cs.ui.ac.id/research/ifml-regen
	version 3.4.0
*/
import React from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';

import { useAuth } from '@/commons/auth';
import { Button, Modal } from '@/commons/components';
import isSelectedFeature from '@/commons/utils/isSelectedFeature';

import * as Layouts from "@/commons/layouts";

const NilaiTable = ({ nilaiMahasiswaDataList
	}) => {
  const { checkPermission } = useAuth();
  
  
  return (
    <Layouts.ListComponentTableLayout
  	  items={[nilaiMahasiswaDataList]}
  	  itemsAttrs={[
  		{
            id: "komponen",
            condition: "isHeading",
            label: "Komponen",
            featureName: "komponenPenilaianNama",
  		}
  ,
  		{
            id: "bobot",
            condition: "isHeading",
            label: "Bobot",
            featureName: "komponenPenilaianBobot",
  		}
  ,
  		{
            id: "nilai",
            condition: "isHeading",
            label: "Nilai",
            featureName: "nilai",
  		}
  	  ]}
  	/>
  )
};

export default NilaiTable;
