import { BsWhatsapp } from 'react-icons/bs';

export const App = () => {
  return (
    <div className="w-full overflow-x-hidden bg-map">
      <div className="bg-black">
        <h1 className="text-4xl text-center font-bold 2xl:text-8xl xl:text-8xl lg:text-6xl mt-10 text-yellow-300">
          Imóveis em Palhoça
        </h1>
        <h2 className="text-xl text-center 2xl:text-5xl xl:text-4xl lg:text-3xl 2xl:mt-8 xl:mt-8 lg:mt-8 mt-6 text-white">
          Encontre imobiliárias da cidade e bons negócios!
        </h2>
        <div className="grid grid-cols-12 gap-7 2xl:my-20 xl:my-20 lg:my-20 my-12">
        <div className="2xl:w-52 xl:w-52 lg:w-52 w-full h-52 2xl:col-span-3 xl:col-span-3 lg:col-span-6 col-span-12 bg-white flex justify-center items-center">
            <a href='https://imobiliariaedson.com.br/'
            target="_blank"
            className="bg-white text-black py-3 px-10 text-center mt-12 flex justify-center items-center gap-3 rounded-xl mb-12"
            >
              Imobiliária Edson Negócios Imobiliários
            </a>
            {/* Sua imobiliária aqui */}

          </div>
          <div className="2xl:w-52 xl:w-52 lg:w-52 w-full h-52 2xl:col-span-3 xl:col-span-3 lg:col-span-6 col-span-12 bg-white flex justify-center items-center">
            <a href='https://www.martendalimoveis.com.br/'
            target="_blank"
            className="bg-white text-black py-3 px-10 text-center mt-12 flex justify-center items-center gap-3 rounded-xl mb-12"
            >
              Imobiliária Martendal
            </a>
            {/* Sua imobiliária aqui */}

          </div>
          <div className="2xl:w-52 xl:w-52 lg:w-52 w-full h-52 2xl:col-span-3 xl:col-span-3 lg:col-span-6 col-span-12 bg-white flex justify-center items-center">
            <a href='https://imobiliariacosta.net/'
            target="_blank"
            className="bg-white text-black py-3 px-10 text-center mt-12 flex justify-center items-center gap-3 rounded-xl mb-12"
            >
              Imobiliária Costa
            </a>
            {/* Sua imobiliária aqui */}

          </div>
          <div className="2xl:w-52 xl:w-52 lg:w-52 w-full h-52 2xl:col-span-3 xl:col-span-3 lg:col-span-6 col-span-12 bg-white flex justify-center items-center">
            <a href='https://xpimobiliaria.com/'
            target="_blank"
            className="bg-white text-black py-3 px-10 text-center mt-12 flex justify-center items-center gap-3 rounded-xl mb-12"
            >
              Imobiliária XP
            </a>
            {/* Sua imobiliária aqui */}

          </div>
        </div>
        <h2 className="text-2xl text-center 2xl:text-4xl xl:text-4xl lg:text-2xl mb-8 text-yellow-300 px-12">
          Tem uma imobiliária e quer ver sua marca aqui?
        </h2>
        <div>
          <a href='https://wa.me/5519997468205' target='_blank' className="bg-green-700 text-white py-3 px-5 flex justify-center items-center gap-3 rounded-xl mb-12">
            <BsWhatsapp /> Fale conosco
          </a>
        </div>
        <footer className="text-white pb-6 text-sm mt-20">
          &copy; Copyright 2024 by Missura Networks
          <p className='text-center mb-0'>CNPJ: 53.447.302/0001-79</p>
        </footer>

      </div>
    </div>
  );
};
