import React from 'react'
import { useParams } from 'react-router-dom'
import { getInvoiceByNumber } from '../data';

const Invoice = () => {
    const {invoiceId} = useParams('invoiceId');
    const invoice = getInvoiceByNumber(invoiceId|parseInt)
    
  return (
    <div>
        <h2>Total Due: {invoice.amount}</h2>
      <p>
        {invoice.name}: {invoice.number}
      </p>
      <p>Due Date: {invoice.due}</p>
    </div>
  )
}

export default Invoice