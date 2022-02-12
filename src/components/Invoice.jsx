import React from 'react'
import { useParams,useNavigate } from 'react-router-dom'
import { getInvoiceByNumber,deleteInvoiceByNumber } from '../data';

const Invoice = () => {
    const {invoiceId} = useParams('invoiceId');
    const invoice = getInvoiceByNumber(invoiceId|parseInt);
    const navigate = useNavigate();
    
  return (
    <div>
        <h2>Total Due: {invoice.amount}</h2>
      <p>
        {invoice.name}: {invoice.number}
      </p>
      <p>Due Date: {invoice.due}</p>
      <button onClick={() => {
          deleteInvoiceByNumber(invoice.number|parseInt);
          navigate("/invoices")
        }} >
        delete
      </button>
    </div>
  )
}

export default Invoice