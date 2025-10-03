export function PesquisaFinalizada() {

  return (
    <div className="h-auto flex flex-col">
      <p className="text-white font-extrabold text-5xl font-inter text-center pt-32 pb-12">RESPONDA A PESQUISA</p>
      <div className="w-[850px] h-full border-white border-[2px] rounded-lg flex flex-col items-center justify-start pt-12 px-20 gap-10 text-white font-bebas-neue">
        <p className="text-3xl text-center">PESQUISA FINALIZADA COM SUCESSO!</p>
        <p className="text-xl text-[#ACACAC] text-center max-w-[450px]">AGRADECEMOS SUA CONTRIBUIÇÃO. À PARTIR DESSAS AÇÕES QUE PODEMOS COMEÇAR A CONSCIENTIZAR A SOCIEDADE</p>
        <img src="./Finish.svg" />
      </div>
    </div>
  )
}