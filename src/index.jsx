import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {BrowserRouter, Routes, Route} from 'react-router-dom';

import Invoices from './components/Invoices';
import Expenses from './components/Expenses';
import Invoice from './components/Invoice';

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App/>}>
          <Route path="invoices" element={<Invoices/>} >
          <Route
              index
              element={
                <main style={{ padding: "1rem" }}>
                  <p>Select an invoice</p>
                </main>
              }
          />
            <Route path=":invoiceId" element={<Invoice/>} />
          </Route>
          <Route path="expenses" element={<Expenses/>} />
        </Route>
        <Route path="*" element={<div>Not Found!</div>} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

