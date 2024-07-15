import { NextPage } from 'next';
import MainSection from '../components/MainSection';
import Tabs from '../components/Tabs';

const Home: NextPage = () => {
  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <div className="max-w-4xl mx-auto bg-white p-8 shadow-lg rounded-lg">
        <h1 className="text-3xl font-bold text-center mb-8 text-companyGreen">Cadastro de Solicitação de Pagamento</h1>
        <MainSection />
        <Tabs />
      </div>
    </div>
  );
};

export default Home;
