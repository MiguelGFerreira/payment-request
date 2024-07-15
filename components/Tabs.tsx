"use client"

import React, { useState } from 'react';
import InvoiceSection from './InvoiceSection';
import SupplierSection from './SupplierSection';
import AccountingSection from './AccountingSection';
import PaymentSection from './PaymentSection';

const Tabs: React.FC = () => {
  const [activeTab, setActiveTab] = useState('invoice');

  const renderTabContent = () => {
    switch (activeTab) {
      case 'invoice':
        return <InvoiceSection />;
      case 'supplier':
        return <SupplierSection />;
      case 'accounting':
        return <AccountingSection />;
      case 'payment':
        return <PaymentSection />;
      default:
        return null;
    }
  };

  return (
    <div>
      <div className="flex border-b mb-4">
        <button className={`tab ${activeTab === 'invoice' ? 'tab-active' : ''}`} onClick={() => setActiveTab('invoice')}>
          Nota Fiscal
        </button>
        <button className={`tab ${activeTab === 'supplier' ? 'tab-active' : ''}`} onClick={() => setActiveTab('supplier')}>
          Fornecedor
        </button>
        <button className={`tab ${activeTab === 'accounting' ? 'tab-active' : ''}`} onClick={() => setActiveTab('accounting')}>
          Contábeis
        </button>
        <button className={`tab ${activeTab === 'payment' ? 'tab-active' : ''}`} onClick={() => setActiveTab('payment')}>
          Pagamento
        </button>
      </div>
      <div>{renderTabContent()}</div>
    </div>
  );
};

export default Tabs;

