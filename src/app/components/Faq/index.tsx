import React from 'react';

const FaqSection: React.FC = () => {
  return (
    <div className="max-w-[85rem] mt-24 px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
      {/* Title */}
      <div className="max-w-2xl mx-auto text-center mb-10 lg:mb-14">
        <h2 className="text-2xl font-bold md:text-3xl md:leading-tight text-gray-800 dark:text-gray-200">
          Perguntas Frequentes
        </h2>
      </div>
      {/* End Title */}

      <div className="max-w-full gap-[900px] mx-auto">
        {/* Grid */}
        <div className="grid lg:gap-x-[100px] sm:grid-cols-2 gap-6 md:gap-12">
          <div>
            <h3 className="text-lg text-center font-semibold text-gray-800 dark:text-gray-200">
              Posso cancelar a qualquer momento?
            </h3>
            <p className="mt-2 text-gray-600 text-center dark:text-gray-400">
              Sim, você pode cancelar a qualquer momento, sem perguntas, mas apreciaríamos se você nos desse algum feedback.
            </p>
          </div>
          {/* End Col */}

          <div>
            <h3 className="text-lg font-semibold text-center text-gray-800 dark:text-gray-200">
              Minha equipe possui créditos. Como podemos usá-los?
            </h3>
            <p className="mt-2 text-center text-gray-600 dark:text-gray-400">
              Assim que sua equipe se inscrever em um plano de assinatura. É aqui que nos sentamos, pegamos uma xícara de café e ajustamos os detalhes.
            </p>
          </div>
          {/* End Col */}

          <div>
            <h3 className="text-lg font-semibold text-center text-gray-800 dark:text-gray-200">
              Como funciona a precificação da plataforma de inglês?
            </h3>
            <p className="mt-2 text-gray-600 text-center dark:text-gray-400">
              Nossas assinaturas são escalonadas. Compreender a tarefa em mãos e resolver os problemas é fundamental.
            </p>
          </div>
          {/* End Col */}

          <div>
            <h3 className="text-lg font-semibold text-center text-gray-800 dark:text-gray-200">
              Quão segura é a plataforma de inglês?
            </h3>
            <p className="mt-2 text-gray-600 text-center dark:text-gray-400">
              Proteger os dados que você confia à plataforma de inglês é nossa primeira prioridade. Esta parte é realmente crucial para manter o projeto em linha para conclusão.
            </p>
          </div>
          {/* End Col */}

          <div>
            <h3 className="text-lg font-semibold text-center text-gray-800 dark:text-gray-200">
              Vocês oferecem descontos?
            </h3>
            <p className="mt-2 text-gray-600 text-center dark:text-gray-400">
              Incorporamos descontos em cada nível para equipes. A hora chegou de dar vida a essas ideias e planos.
            </p>
          </div>
          {/* End Col */}

          <div>
            <h3 className="text-lg font-semibold text-center text-gray-800 dark:text-gray-200">
              Qual é a política de reembolso?
            </h3>
            <p className="mt-2 text-gray-600 text-center dark:text-gray-400">
              Oferecemos reembolsos. Nosso objetivo é construir relacionamentos sólidos com nossos clientes e comunidade.
            </p>
          </div>
          {/* End Col */}
        </div>
        {/* End Grid */}
      </div>
    </div>
  );
};

export default FaqSection;
