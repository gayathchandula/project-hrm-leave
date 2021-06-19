import React, { useEffect, useState} from 'react';
import axios from 'axios';


import {
  CBadge,
  CCard,
  CCardBody,
  CCardHeader,
  CCol,
  CDataTable,
  CRow,
} from '@coreui/react'


import moment from 'moment';




const getBadge = reviewstatusId => {
  switch (reviewstatusId) {
    case 1 : return 'success'
    case 2 : return 'danger'
    case 3 : return 'warning'

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
const fields = ['employeeId','OTHrs', 'OTDayRate', 'createdAt','reviewstatusId']


const Tables = () => {

  const [listData, setListData] = useState({ lists: [] });
  const token = localStorage.getItem("Token")
  const empId = localStorage.getItem("id")


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
      setListData({ lists: result.data.data.empOTDetails});
      console.log(result.data)
    };

    fetchData();
  }, []);


  return (

    <>


      <CRow>
        <CCol>
          <CCard>
            <CCardHeader>
              My Over Times
            </CCardHeader>
            <CCardBody>
              <CDataTable
                items={listData.lists}
                fields={fields}
                hover
                striped
                bordered
                size="sm"
                itemsPerPage={10}
                pagination
                scopedSlots={{
                  'status':
                    (item) => (
                      <td>
                        <CBadge color={getBadge(item.status)}>
                          {item.status}
                        </CBadge>
                      </td>
                    ),
                  'reviewstatusId':
                    (item) => (
                      <td>
                        <CBadge color={getBadge(item.reviewstatusId)}>
                          {changestatus(item.reviewstatusId)}
                        </CBadge>
                      </td>
                    ),
                  'createdAt':
                    (item) => (
                      <td> {moment(item.createdAt).format("MMM Do YY")} </td>
                    )

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
