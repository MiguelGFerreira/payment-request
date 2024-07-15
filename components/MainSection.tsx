import React from 'react';

const MainSection: React.FC = () => {
  return (
    <div className="card">
      <h2 className="form-section-header">Seção Principal</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="flex flex-col">
          <label htmlFor="dataAbertura" className="mb-2 font-semibold text-gray-700">Data de abertura da solicitação</label>
          <input id="dataAbertura" type="date" className="input" />
        </div>
        <div className="flex flex-col">
          <label htmlFor="solicitante" className="mb-2 font-semibold text-gray-700">Solicitante</label>
          <input id="solicitante" type="text" className="input" />
        </div>
        <div className="flex flex-col">
          <label htmlFor="emailSolicitante" className="mb-2 font-semibold text-gray-700">Email do solicitante</label>
          <input id="emailSolicitante" type="email" className="input" />
        </div>
        <div className="flex flex-col">
          <label htmlFor="matricula" className="mb-2 font-semibold text-gray-700">Matrícula</label>
          <input id="matricula" type="text" className="input" />
        </div>
        <div className="flex flex-col">
          <label htmlFor="empresaFilial" className="mb-2 font-semibold text-gray-700">Empresa/Filial</label>
          <input id="empresaFilial" type="text" className="input" />
        </div>
        <div className="flex flex-col">
          <label htmlFor="filial" className="mb-2 font-semibold text-gray-700">Filial</label>
          <input id="filial" type="text" className="input" />
        </div>
        <div className="flex flex-col">
          <label htmlFor="centroCusto" className="mb-2 font-semibold text-gray-700">Centro de Custo</label>
          <input id="centroCusto" type="text" className="input" />
        </div>
        <div className="flex flex-col">
          <label htmlFor="tipo" className="mb-2 font-semibold text-gray-700">Tipo</label>
          <select id="tipo" className="input">
            <option>NF-e/CT-e</option>
            <option>Serviço</option>
            <option>Adiantamento</option>
            <option>Outros</option>
          </select>
        </div>
        <div className="flex flex-col">
          <label htmlFor="servico" className="mb-2 font-semibold text-gray-700">Serviço</label>
          <input id="servico" type="text" className="input" />
        </div>
        <div className="flex flex-col">
          <label htmlFor="anexo" className="mb-2 font-semibold text-gray-700">Anexo</label>
          <input id="anexo" type="file" className="input" />
        </div>
      </div>
    </div>
  );
};

export default MainSection;
