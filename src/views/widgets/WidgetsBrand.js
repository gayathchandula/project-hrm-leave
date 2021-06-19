import React from 'react';
import PropTypes from 'prop-types';
import { CRow } from '@coreui/react';


const WidgetsBrand = ({withCharts})=>{

  // render

  return withCharts ?
  <CRow>

  </CRow> :

  <CRow>

  </CRow>
}

WidgetsBrand.propTypes = {
  withCharts: PropTypes.bool
}

export default WidgetsBrand
