import React from 'react'
import TicketChart from './TicketChart'
import TicketPagination from './TicketPagination'
import TicketTable from './TicketTable'

const TicketContainer = () => {
  return (
    <div className="box-wrapper">
      <div className="row">
        <div className="col-12 mb-5 report-card">
          <TicketChart/>
        </div>
      
      <div className="col-12  ">
      <TicketTable/>
       <TicketPagination/> 
      </div>
      </div>
    </div>
  )
}

export default TicketContainer