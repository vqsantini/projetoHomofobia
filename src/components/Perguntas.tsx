import { useState } from "react";
import { Link } from "react-router-dom";

export function Perguntas({ onVoltar }: { onVoltar: () => void }) {
  const perguntas = [
    "Você acredita que a homofobia ainda é um problema sério na sociedade hoje?",
    "Você já presenciou ou soube de algum caso de homofobia em sua escola, trabalho ou comunidade?",
    "Na sua opinião, o que mais contribui para a homofobia?",
    "Você considera importante ter leis e políticas públicas para combater a homofobia?",
    "Você se sentiria à vontade em denunciar um ato de homofobia que presenciasse?",
    "Você já sofreu homofobia diretamente?",
    "Como você reagiria se visse alguém sofrendo homofobia?",
    "Você acha que a escola/faculdade/trabalho faz o suficiente para conscientizar sobre homofobia?",
    "Na sua opinião, como combater a homofobia de forma mais eficaz?",
    "Você acredita que as pessoas LGBTQIAP+ têm os mesmos direitos respeitados que os demais cidadãos?"
  ];

  const alternativas = [
    {
      q1: "Sim", q2: "Não", q3: "Não sei"
    }, {
      q1: "Sim", q2: "Não",
    }, {
      q1: "Falta de informação/educação", q2: "Influência da família ou religião", q3: "Cultura e mídia", q4: "Outros"
    }, {
      q1: "Sim", q2: "Não", q3: "Não sei"
    }, {
      q1: "Sim", q2: "Não", q3: "Talvez"
    }, {
      q1: "Sim", q2: "Não", q3: "Prefiro não responder"
    }, {
      q1: "Intervir e ajudar a vítima", q2: "Chamaria ajuda/autoridades", q3: "Ficaria sem saber o que fazer", q4: "Não fazer nada"
    }, {
      q1: "Sim", q2: "Não", q3: "Parcialmente"
    }, {
      q1: "Educação e conscientização", q2: "Conversas e diálogo aberto", q3: "Leis mais rigorosas", q4: "Outra"
    }, {
      q1: "Sim", q2: "Não", q3: "Em parte"
    }
  ]

  const [index, setIndex] = useState(0);
  const [resposta, setResposta] = useState("");
  const [error, setError] = useState("");

  const voltar = () => {
    if (index >= 1) {
      setIndex((index) => index - 1)
    } else {
      onVoltar();
    }

  }

  const [respostas, setRespostas] = useState({});

  const avancar = () => {
    if (!resposta) {
      setError("Por favor, selecione uma alternativa para continuar.");
      return;
    } else {
      setRespostas((prev) => ({
        ...prev,
        [index]: resposta
      }));
      setError("");
      setResposta("");

      setIndex((index) => index + 1);
      console.log(index)
      console.log(perguntas[index])
      console.log(resposta)
    }
  }

  return (

    <div className="w-[850px] h-full border-white border-[2px] rounded-lg flex flex-col items-center p-20 gap-6 text-white font-bebas-neue">
      <div className="h-full w-full flex flex-col justify-start gap-10">
        <p className="text-2xl w-full">{perguntas[index]}</p>
        <span className="w-full text-red-500 font-inter">{error}</span>
        <div className="flex flex-col gap-3 w-full">
          {alternativas[index] &&
            Object.entries(alternativas[index]).map(([key, value]) => (

              <label key={key} className="flex items-center gap-2 text-xl text-[#B5B5B5] radio">
                <input type="radio" value={value} name={`pergunta-${index}`} onChange={(e) => setResposta(e.target.value)} />{value}
              </label>
            ))
          }
        </div>
      </div>
      <div className="flex w-full justify-between mt-32 h-auto">
        <button className="bg-red-600 hover:bg-red-700 px-4 py-2 rounded font-inter font-bold text-lg" onClick={voltar}>VOLTAR</button>
        {(index < 9) && (
          <button className="bg-green-600 hover:bg-green-700 px-4 py-2 rounded font-inter font-bold text-lg" onClick={avancar}>AVANÇAR</button>
        )}{(index === 9) && (
          <Link to='/finalizada' className="bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded font-inter font-bold text-lg">FINALIZAR</Link>
        )
        }
      </div>
    </div>
  )
}

