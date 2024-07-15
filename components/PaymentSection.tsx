import React from 'react';

const PaymentSection: React.FC = () => {
  return (
    <div className="p-4 bg-white shadow rounded-lg">
      <h2 className="text-xl font-bold mb-4">Seção Pagamento</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <input type="date" placeholder="Vencimento" className="input" />
        <input type="text" placeholder="Valor" className="input" />
        <input type="text" placeholder="Parcela" className="input" />
        <input type="text" placeholder="Cód. Barras" className="input" />
        <input type="text" placeholder="Banco" className="input" />
        <input type="text" placeholder="Conta Bancária" className="input" />
        <input type="text" placeholder="Conta" className="input" />
        <input type="text" placeholder="Agência" className="input" />
        <select className="input">
          <option>Não</option>
          <option>DDA</option>
          <option>Compensação</option>
        </select>
        <select className="input">
          <option>Corrente</option>
          <option>Poupança</option>
        </select>
        <select className="input">
          <option>Sim</option>
          <option>Não</option>
        </select>
        <select className="input">
          <option>Sim</option>
          <option>Não</option>
        </select>
      </div>
    </div>
  );
};

export default PaymentSection;
