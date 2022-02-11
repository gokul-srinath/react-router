import React from 'react'
import { Link, Outlet } from 'react-router-dom'
import {getInvoices} from '../data'

const Invoices = () => {
  const Invoices = getInvoices();
  return (
    <div>
      <h1>Invoices</h1>
      {
        Invoices.map(invoice => {
          return <div key={invoice.number}><Link to={`/invoices/${invoice.number}`}>{invoice.name}</Link></div>;
        })
      }
      <Outlet/>
    </div>
  )
}

export default Invoices