/*
	Generated on 22/10/2024 by UI Generator PRICES-IDE
	https://amanah.cs.ui.ac.id/research/ifml-regen
	version 3.5.5
*/
import React, { useContext } from 'react';
import { useNavigate, Link } from 'react-router-dom';

import { useAuth } from '@/commons/auth';
import { Button, Detail, VisualizationAttr, Modal, Spinner } from '@/commons/components';


import * as Layouts from "@/commons/layouts";


const DataAkademis = ({ data }) => {
    const { checkPermission } = useAuth();
    const navigate = useNavigate();
  
  
  return (
    <Layouts.DetailComponentLayout
      item={data}
      itemsAttrs={[
        {
          id: "nPM",
          condition: "",
          label: "NPM",
          featureName: "npm",
        }
        ,
        {
          id: "nama",
          condition: "",
          label: "Nama",
          featureName: "nama",
        }
        ,
        {
          id: "programStudi",
          condition: "",
          label: "Program Studi",
          featureName: "programStudiNama",
        }
        ,
        {
          id: "sKSDiperoleh",
          condition: "",
          label: "SKS Diperoleh",
          featureName: "totalSKS",
        }
        ,
        {
          id: "jenjang",
          condition: "",
          label: "Jenjang",
          featureName: "programStudiJenjang",
        }
        
      ]}
      itemsEvents={[
        
      ]}
      itemsModals={[
        
      ]}
    />
  );
};

export default DataAkademis;
