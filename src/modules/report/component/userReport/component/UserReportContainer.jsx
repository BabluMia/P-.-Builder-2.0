import React from 'react'
import UserreportChart from './UserreportChart'
import UserReportTable from './UserReportTable'
import '../../../component/Report.css'
import ReportPagination from './ReportPagination'
const UserReportContainer = () => {
  return (
    <>
    <div className="box-wrapper">
      <div className="row">
        <div className="col-12 mb-5 report-card">
          <UserreportChart/>
        </div>
    
      <div className="col-12 ">
      <UserReportTable/>
       <ReportPagination/> 
      </div>
      </div>
    </div>

    </>
  )
}

export default UserReportContainer