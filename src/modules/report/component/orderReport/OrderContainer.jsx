import React from 'react'
import OrderChart from './OrderChart'
import OrderPagination from './OrderPagination'
import OrderTable from './OrderTable'

const OrderContainer = () => {
  return (
    <div className="box-wrapper">
    <div className="row">
      <div className="col-12 mb-5 report-card">
        <OrderChart/>
      </div>
 
    <div className="col-12">
    <OrderTable/>
     <OrderPagination/> 
    </div>
    </div>
  </div>
  )
}

export default OrderContainer