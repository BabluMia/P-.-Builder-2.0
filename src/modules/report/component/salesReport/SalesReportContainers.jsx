import React from 'react'
import '../../component/Report.css'
import SalesPagination from './SalesPagination'
import SalesReportChart from './SalesReportChart'
import SalesreportTable from './SalesreportTable'
const SalesReportContainers = () => {
  return (
    <>
    <div className="box-wrapper">
      <div className="row">
        <div className="col-12 mb-5 report-card">
          <SalesReportChart/>
        </div>
    
      <div className="col-12 ">
      <SalesreportTable/>
       <SalesPagination/> 
      </div>
      </div>
    </div>

    </>
  )
}

export default SalesReportContainers