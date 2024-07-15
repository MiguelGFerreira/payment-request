import React from 'react';

const InvoiceSection: React.FC = () => {
  return (
    <div className="card">
      <h2 className="form-section-header">Seção Nota Fiscal</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="flex flex-col">
          <label htmlFor="buscarPela" className="mb-2 font-semibold text-gray-700">Buscar Pela (Chave XML ou Data/Protocolo)</label>
          <input id="buscarPela" type="text" className="input" />
        </div>
        <div className="flex flex-col">
          <label htmlFor="chaveXml" className="mb-2 font-semibold text-gray-700">Chave XML</label>
          <input id="chaveXml" type="text" className="input" />
        </div>
        <div className="flex flex-col">
          <label htmlFor="data" className="mb-2 font-semibold text-gray-700">Data</label>
          <input id="data" type="date" className="input" />
        </div>
        <div className="flex flex-col">
          <label htmlFor="notaFiscal" className="mb-2 font-semibold text-gray-700">Nota Fiscal</label>
          <input id="notaFiscal" type="text" className="input" />
        </div>
        <div className="flex flex-col">
          <label htmlFor="serie" className="mb-2 font-semibold text-gray-700">Série</label>
          <input id="serie" type="text" className="input" />
        </div>
        <div className="flex flex-col">
          <label htmlFor="numero" className="mb-2 font-semibold text-gray-700">Número</label>
          <input id="numero" type="text" className="input" />
        </div>
        <div className="flex flex-col">
          <label htmlFor="emissaoCompetencia" className="mb-2 font-semibold text-gray-700">Emissão/Competência</label>
          <input id="emissaoCompetencia" type="text" className="input" />
        </div>
        <div className="flex flex-col">
          <label htmlFor="pedidoIde" className="mb-2 font-semibold text-gray-700">Pedido/ide</label>
          <input id="pedidoIde" type="text" className="input" />
        </div>
      </div>
    </div>
  );
};

export default InvoiceSection;
