import React from 'react';

const SupplierSection: React.FC = () => {
  return (
    <div className="card">
      <h2 className="form-section-header">Seção Fornecedor</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="flex flex-col">
          <label htmlFor="fornecedor" className="mb-2 font-semibold text-gray-700">Fornecedor</label>
          <input id="fornecedor" type="text" className="input" />
        </div>
        <div className="flex flex-col">
          <label htmlFor="razaoSocial" className="mb-2 font-semibold text-gray-700">Razão Social</label>
          <input id="razaoSocial" type="text" className="input" />
        </div>
        <div className="flex flex-col">
          <label htmlFor="codigoLoja" className="mb-2 font-semibold text-gray-700">Código/Loja</label>
          <input id="codigoLoja" type="text" className="input" />
        </div>
        <div className="flex flex-col">
          <label htmlFor="cnpj" className="mb-2 font-semibold text-gray-700">CNPJ</label>
          <input id="cnpj" type="text" className="input" />
        </div>
      </div>
    </div>
  );
};

export default SupplierSection;
