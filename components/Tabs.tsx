"use client"

import React, { useState } from 'react';
import InvoiceSection from './InvoiceSection';
import SupplierSection from './SupplierSection';
import AccountingSection from './AccountingSection';
import PaymentSection from './PaymentSection';

const Tabs: React.FC = () => {
  const [activeTab, setActiveTab] = useState('invoice');

  return (
    <div className="w-full">
      <div className="tabs">
        <button
          className={`tab ${activeTab === 'invoice' ? 'tab-active' : ''}`}
          onClick={() => setActiveTab('invoice')}
        >
          Seção Nota Fiscal
        </button>
        <button
          className={`tab ${activeTab === 'supplier' ? 'tab-active' : ''}`}
          onClick={() => setActiveTab('supplier')}
        >
          Seção Fornecedor
        </button>
        <button
          className={`tab ${activeTab === 'accounting' ? 'tab-active' : ''}`}
          onClick={() => setActiveTab('accounting')}
        >
          Seção Contábeis
        </button>
        <button
          className={`tab ${activeTab === 'payment' ? 'tab-active' : ''}`}
          onClick={() => setActiveTab('payment')}
        >
          Seção Pagamento
        </button>
      </div>
      <div className="tab-content">
        {activeTab === 'invoice' && <InvoiceSection />}
        {activeTab === 'supplier' && <SupplierSection />}
        {activeTab === 'accounting' && <AccountingSection />}
        {activeTab === 'payment' && <PaymentSection />}
      </div>
    </div>
  );
};

export default Tabs;
