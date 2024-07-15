import React from 'react';

const AccountingSection: React.FC = () => {
  return (
    <div className="card">
      <h2 className="form-section-header">Seção Contábeis</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="flex flex-col">
          <label htmlFor="conta" className="mb-2 font-semibold text-gray-700">Conta</label>
          <input id="conta" type="text" className="input" />
        </div>
        <div className="flex flex-col">
          <label htmlFor="item" className="mb-2 font-semibold text-gray-700">Item</label>
          <input id="item" type="text" className="input" />
        </div>
        <div className="flex flex-col">
          <label htmlFor="projeto" className="mb-2 font-semibold text-gray-700">Projeto</label>
          <input id="projeto" type="text" className="input" />
        </div>
      </div>
    </div>
  );
};

export default AccountingSection;
