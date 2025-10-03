import { useState } from "react";
import { Link } from "react-router-dom";

export function Perguntas({onVoltar}: { onVoltar: () => void}) {
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

  const [pergunta, setPergunta] = useState(perguntas[0]);
  const [index, setIndex] = useState(1);
  // const [alternativa, setAlternativa] = useState(alternativas[0]);

  const voltar = () => {
    onVoltar();
  }

  const avancar = () => {
    setIndex((index) => index + 1);  

    if (index == 10) {
      
    }

    setPergunta(perguntas[index])
    console.log(index)
    console.log(perguntas[index])
    // setAlternativa(alternativas[i])
  }

  return (
    <div className="w-[850px] h-full border-white border-[2px] rounded-lg flex flex-col items-center justify-start pt-12 px-20 gap-10 text-white">
      <p>{pergunta}</p>
      <button className="bg-red-600 hover:bg-red-700 px-4 py-2 rounded font-inter font-bold text-lg" onClick={voltar}>VOLTAR</button>
      <button className="bg-green-600 hover:bg-green-700 px-4 py-2 rounded font-inter font-bold text-lg" onClick={avancar}> {index === 10 ? `<Link>FINALIZAR<Link/>`: "AVANÇAR"}  </button>
    </div>
  )
}

