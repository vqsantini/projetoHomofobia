import { useState } from "react";

export function Perguntas() {



  return (
    ""
  )
}

export function InfoUsuário() {

  const [idade, setIdade] = useState("");
  const [name, setName] = useState("");
  const [error, setError] = useState("");
  const [info, setInfo] = useState("");

  const finallyRegister = () => {
    if (!name && !idade) {
      setError("Por favor, preencha seu nome e selecione sua faixa etária.");
      setInfo("");
    } else if (!name) {
      setError("Por favor, preencha seu nome.");
      setInfo("");
    } else if (!idade) {
      setError("Por favor, selecione sua faixa etária.");
      setInfo("");
    } else {
      setInfo(`${name} ${idade}`);
      setError("");
      setName("");
      setIdade("");
    }
    return ;

  }
  return (
    <div className="w-full h-full flex justify-center items-center">
      <div id="div-info-user" className="w-[850px] h-full border-white border-[2px] rounded-lg flex flex-col items-center justify-start pt-12 px-20 gap-10 text-white">
        <p className="text-lg font-bebas-neue max-w-[500px] text-center text-xl">Antes de começar a pesquisa, preencha algumas informações <br /> para ajudar na análise das respostas</p>
        <div className="w-full flex flex-col">
          <span className="text-red-500">{error}</span>
          <div className="flex flex-col font-inter text-[#B5B5B5] gap-6">
            <input type="text" placeholder="Nome" id="input-name" value={name} onChange={(e) => setName(e.target.value)} className="text-white bg-black border-b-[1px] border-white py-2 focus:outline-none" />

            <p>Faixa Etária: <span>{info}</span></p>
            <div className="flex flex-col gap-3">
              <label className="flex items-center gap-2">
                <input type="radio" name="idade" value="5-12" checked={idade === "5-12"} onChange={(e) => setIdade(e.target.value)} /> 5 - 12
              </label>
              <label className="flex items-center gap-2">
                <input type="radio" name="idade" value="13-17" checked={idade === "13-17"} onChange={(e) => setIdade(e.target.value)} /> 13 - 17
              </label>
              <label className="flex items-center gap-2">
                <input type="radio" name="idade" value="18-45" checked={idade === "18-45"} onChange={(e) => setIdade(e.target.value)} /> 18 - 45 </label>
              <label className="flex items-center gap-2">
                <input type="radio" name="idade" value="46+" checked={idade === "46+"} onChange={(e) => setIdade(e.target.value)} /> 46+
              </label>
            </div>

            <div className="flex flex-col items-center mt-6 gap-4 ">

              <button className="bg-green-600 hover:bg-green-700 px-4 py-2 rounded font-inter font-bold text-lg" onClick={finallyRegister}> AVANÇAR </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}