import React from 'react'
import { NavLink, Outlet, useSearchParams } from 'react-router-dom'
import {getInvoices} from '../data'


const Invoices = () => {
  const Invoices = getInvoices();
  const [searchParams, setsearchParams] = useSearchParams();
  return (
    <div>
      <h1>Invoices</h1>
      <input type="search" value={searchParams.get("filter") || ""}  onChange={(e) => {
        let filter = e.target.value;
        if(filter){
          setsearchParams({filter});
        }else{
          setsearchParams({});
        }
          
      }}/>

      {
        Invoices.filter(invoice => {
          let filter = searchParams.get("filter");
          if(!filter) return true;
            return invoice.name.toLowerCase().startsWith(filter.toLowerCase())
        }).map(invoice => {
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