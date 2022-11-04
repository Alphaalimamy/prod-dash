import React from 'react'
import Cards from '../cards/Cards'
import ProductTable from '../table/Table'




const Dashboard = () => {
  return (
    <div className='dashboard'>
      <Cards/>
      <ProductTable/>
    </div>
  )
}

export default Dashboard