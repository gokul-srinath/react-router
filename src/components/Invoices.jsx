import React from 'react'
import { NavLink, Outlet } from 'react-router-dom'
import {getInvoices} from '../data'

const Invoices = () => {
  const Invoices = getInvoices();
  return (
    <div>
      <h1>Invoices</h1>
      {
        Invoices.map(invoice => {
          return <div key={invoice.number}><NavLink style={({isActive})=>{
            return {     
              textDecoration:"none",
              display: "block",
              margin: "1rem 0",
              color:isActive ? 'red' : 'blue'
            };
          }} to={`/invoices/${invoice.number}`}>{invoice.name}</NavLink></div>;
        })
      }
      <Outlet/>
    </div>
  )
}

export default Invoices