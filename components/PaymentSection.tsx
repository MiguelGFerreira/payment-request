import React from 'react';

const PaymentSection: React.FC = () => {
  return (
    <div className="card">
      <h2 className="form-section-header">Seção Pagamento</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="flex flex-col">
          <label htmlFor="vencimento" className="mb-2 font-semibold text-gray-700">Vencimento</label>
          <input id="vencimento" type="date" className="input" />
        </div>
        <div className="flex flex-col">
          <label htmlFor="valor" className="mb-2 font-semibold text-gray-700">Valor</label>
          <input id="valor" type="number" className="input" />
        </div>
        <div className="flex flex-col">
          <label htmlFor="parcela" className="mb-2 font-semibold text-gray-700">Parcela</label>
          <input id="parcela" type="number" className="input" />
        </div>
        <div className="flex flex-col">
          <label htmlFor="codBarras" className="mb-2 font-semibold text-gray-700">Cód. Barras</label>
          <input id="codBarras" type="text" className="input" />
        </div>
        <div className="flex flex-col">
          <label htmlFor="banco" className="mb-2 font-semibold text-gray-700">Banco</label>
          <input id="banco" type="text" className="input" />
        </div>
        <div className="flex flex-col">
          <label htmlFor="contaBancaria" className="mb-2 font-semibold text-gray-700">Conta Bancária</label>
          <input id="contaBancaria" type="text" className="input" />
        </div>
        <div className="flex flex-col">
          <label htmlFor="conta" className="mb-2 font-semibold text-gray-700">Conta</label>
          <input id="conta" type="text" className="input" />
        </div>
        <div className="flex flex-col">
          <label htmlFor="agencia" className="mb-2 font-semibold text-gray-700">Agência</label>
          <input id="agencia" type="text" className="input" />
        </div>
        <div className="flex flex-col">
          <label htmlFor="ddaCompensacao" className="mb-2 font-semibold text-gray-700">DDA/Compensação</label>
          <select id="ddaCompensacao" className="input">
            <option>Não</option>
            <option>DDA</option>
            <option>Compensação</option>
          </select>
        </div>
        <div className="flex flex-col">
          <label htmlFor="tipoConta" className="mb-2 font-semibold text-gray-700">Tipo de Conta</label>
          <select id="tipoConta" className="input">
            <option>Corrente</option>
            <option>Poupança</option>
          </select>
        </div>
        <div className="flex flex-col">
          <label htmlFor="descTed" className="mb-2 font-semibold text-gray-700">Desc. TED</label>
          <select id="descTed" className="input">
            <option>Sim</option>
            <option>Não</option>
          </select>
        </div>
        <div className="flex flex-col">
          <label htmlFor="pagtoLocal" className="mb-2 font-semibold text-gray-700">Pagto Local</label>
          <select id="pagtoLocal" className="input">
            <option>Sim</option>
            <option>Não</option>
          </select>
        </div>
      </div>
    </div>
  );
};

export default PaymentSection;
