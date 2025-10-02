import { Header } from "./components/Header";

export function Pesquisa() {

    return (
        <div className="h-screen w-full overflow-x-hidden bg-black">
            <div className="h-screen bg-pesquisa">
                <Header />
                <div className="h-[calc(70vh-112px)] flex justify-center items-center">
                    <div className="flex flex-col text-center max-w-[825px] gap-10 pt-32">
                        <p className="text-white text-5xl font-inter font-extrabold uppercase">a simplicidade do amor</p>
                        <p className="text-[#D3D3D3]">Esta pesquisa não é sobre política ou ideologia. É sobre o direito de existir. Sobre poder andar na rua, trabalhar, estudar e amar sem medo. É sobre garantir a todos a mesma dignidade que você deseja para si. Agradecemos por dedicar seu tempo a esta causa.</p>
                    </div>
                </div>
                <div className="flex items-end h-[30vh]"> <img src="./Transiction.svg" className="w-screen" /></div>
            </div>
            <div className="h-screen flex">

            </div>
        </div>
    )
}