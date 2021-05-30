import React, { useEffect, useState,useContext} from 'react';
import axios from 'axios';


import {
  CBadge,
  CCard,
  CCardBody,
  CCardHeader,
  CCol,
  CDataTable,
  CButton,
  CForm,
  CSelect,
  CTabs,
  CTabContent,
  CNavItem,
  CNavLink,
  CNav,
  CTabPane,
  CFormGroup,
  CFormText,
  CCardFooter,
  CInput,
  CLabel,
  CRow,
} from '@coreui/react'
import { DocsLink } from 'src/reusable'
import usersData from '../../users/UsersData'
import UserContext from '../../../userContext';

import { Calendar, momentLocalizer} from 'react-big-calendar'
import moment from 'moment';
import {
  useHistory
} from "react-router-dom";





const getBadge = status => {
  switch (status) {
    case 'Active': return 'success'
    case 'Inactive': return 'secondary'
    case 'Pending': return 'warning'
    case 'Banned': return 'danger'
    default: return 'primary'
  }
}
const changestatus = reviewstatusId => {
  switch (reviewstatusId) {
    case 1 : return "Approved"
    case 2 : return 'Declined'
    case 3 : return 'Pending'

    default: return 'primary'
  }
}
const fields = ['otHrsMax','otHrsMin', 'employeeTypeId', 'otRate',{
  key: 'show_details',
  label: 'Action',

  sorter: false,
  filter: false
}]
const fields1 = ['id','HolidayInfo', 'otAllowancePercentage', 'createdAt',{
  key: 'show_details',
  label: 'Action',

  sorter: false,
  filter: false
}]

const Tables = () => {
  const [otHrsMax, setotHrsMax] = useState([]);
  const [otHrsMin, setotHrsMin] = useState([]);
  const [incharge_email, setincharge_email] = useState([]);
  const [employeeTypeId, setemployeeTypeId] = useState([]);
  const [otRate, setotRate] = useState([]);
  const [otAllowancePercentage, setotpercentage] = useState([]);
  const [SpecialDate, setdate] = useState([]);
  const [SpecialDayName, setspecial] = useState([]);
  const { userData, setUserData } = useContext(UserContext);
  const [HolidayInfo, setHolidayInfo] = useState([]);
  const [listData, setListData] = useState({ lists: [] });
  const [listData1, setListData1] = useState({ lists: [] });
  const [listData2, setListData2] = useState({ lists: [] });
  const [listData3, setListData3] = useState({ lists: [] });
  const token = localStorage.getItem("Token")
  const empId = localStorage.getItem("id")
  const history = useHistory();
  const localizer = momentLocalizer(moment)
  const onChangeMax_Hours = (e) => {
    setotHrsMax(e.target.value);
  };
  const onChangedate = (e) => {
    setdate(e.target.value);
  };
  const onChangeMin_Hours = (e) => {
    setotHrsMin(e.target.value );
  };
  const onChangeemploy_type = (e) => {
    setemployeeTypeId( e.target.value );
  };
  const onChangeInchemail = (e) => {
    setincharge_email(e.target.value );
  };
  const onChangehour_rate = (e) => {
    setotRate( e.target.value );
  };
  const onChangepercentage = (e) => {

    setotpercentage( e.target.value );
  };
  const onChangespecialday = (e) => {
    setspecial( e.target.value );
  };

  const onChangeHolidayInfo = (e) => {
    setHolidayInfo( e.target.value );
  };
  const headers = {
    headers: {

      "Authorization":`Bearer ${token}`
    }
  };

  useEffect(() => {
    const fetchData = async () => {
      const result = await axios.get(
        `https://hrm-innovigent.herokuapp.com/api/v1/organizations/${empId}/overtime/empot`,headers
      );
      setListData({ lists: result.data.data.OtDetails});
      console.log(result.data)
    };

    fetchData();
  }, []);



  const events= listData3.lists.map((appointment)=>{
    return {
      id: appointment.id,
      title: appointment.SpecialName,
      start: new Date(appointment.SpecialDate),
      end: new Date(appointment.SpecialDate),
      allDay: true
    }
  })
  return (

    <>


      <CRow>
        <CCol>
          <CCard>
            <CCardHeader>
              My Leaves
            </CCardHeader>
            <CCardBody>
              <CDataTable
                items={listData1.lists}
                fields={fields}
                hover
                striped
                bordered
                size="sm"
                itemsPerPage={10}
                pagination
                scopedSlots = {{
                  'status':
                    (item)=>(
                      <td>
                        <CBadge color={getBadge(item.status)}>
                          {item.status}
                        </CBadge>
                      </td>
                    ),
                  'reviewstatusId':
                    (item)=>(
                      <td>
                        <CBadge color={getBadge(item.reviewstatusId)}>
                          {changestatus(item.reviewstatusId)}
                        </CBadge>
                      </td>
                    ),


                }}
              />
            </CCardBody>
          </CCard>
        </CCol>
      </CRow>

    </>
  )
}

export default Tables
