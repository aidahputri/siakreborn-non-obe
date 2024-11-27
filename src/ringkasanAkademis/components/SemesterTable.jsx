/*
	Generated on 22/10/2024 by UI Generator PRICES-IDE
	https://amanah.cs.ui.ac.id/research/ifml-regen
	version 3.5.5
*/
import React from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';

import { useAuth } from '@/commons/auth';
import { Button, Modal } from '@/commons/components';

import * as Layouts from "@/commons/layouts";

const SemesterTable = ({ ringkasanSemesterDataList
	}) => {
  const { checkPermission } = useAuth();
  
  
  return (
    <Layouts.ListComponentTableLayout
  	  items={[ringkasanSemesterDataList]}
  	  isSearchable
  	  itemsAttrs={[
  		{
            id: "term",
            condition: "isHeading",
            label: "Term",
            featureName: "semesterKode",
  		}
  ,
  		{
            id: "periode",
            condition: "isHeading",
            label: "Periode",
            featureName: "semesterTanggal",
  		}
  ,
  		{
            id: "statusIRS",
            condition: "isHeading",
            label: "Status IRS",
            featureName: "status",
  		}
  ,
  		{
            id: "totalSKS",
            condition: "isHeading",
            label: "Total SKS",
            featureName: "totalSKS",
  		}
  	  ]}
  	/>
  )
};

export default SemesterTable;
