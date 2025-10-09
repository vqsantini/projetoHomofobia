import { useState } from "react";

export function InfoUsuario({ onAvancar }: { onAvancar: () => void }) {
  const alternativas = [
    {
      q1: "5 - 12", q2: "13 - 18", q3: "19 - 35", q4: "36+"
    }
  ]
  const [idade, setIdade] = useState("");
  const [name, setName] = useState("");
  const [error, setError] = useState("");

  const finallyRegister = () => {
    if (!name || !idade) {
      if (!name && !idade) setError("Por favor, preencha seu nome e selecione sua faixa etária.");
      else if (!name) setError("Por favor, preencha seu nome.");
      else setError("Por favor, selecione sua faixa etária.");
      return;  
    }
      setError("");
      console.log(name, idade);
      onAvancar();
    
  }
  return (
    <div className="w-[850px] h-full border-white border-[2px] rounded-lg flex flex-col items-center justify-start pt-12 px-20 gap-10 text-white">
      <p className="font-bebas-neue max-w-[500px] text-center text-2xl">Antes de começar a pesquisa, preencha algumas informações <br /> para ajudar na análise das respostas</p>
      <div className="w-full flex flex-col">
        <span className="text-red-500">{error}</span>
        <div className="flex flex-col font-inter text-[#B5B5B5] gap-6">
          <input type="text" placeholder="Nome" onChange={(e) => setName(e.target.value)} className="text-white bg-black border-b-[1px] border-white py-2 focus:outline-none" />

          <p>Faixa Etária:</p>
          <div className="flex flex-col gap-3 text-xl ">
            {
              Object.entries(alternativas[0]).map(([key, value]) => (
                <label key={key} className="flex items-center gap-2 text-xl text-[#B5B5B5] radio">
                  <input type="radio" value={value} name={`pergunta-${key}`} onChange={(e) => setIdade(e.target.value)} />{value}
                </label>
              ))
            }
          </div>

          <div className="flex flex-col items-center mt-6 gap-4 ">

            <button className="bg-green-600 hover:bg-green-700 px-4 py-2 rounded font-inter font-bold text-lg" onClick={finallyRegister}> AVANÇAR </button>
          </div>
        </div>
      </div>
    </div>
  )
}