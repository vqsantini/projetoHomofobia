import { Link } from "react-router-dom";

export function Header() {
    return(
        <div className="flex justify-around items-center h-28 ">
            <div className="basis-3/5 flex justify-start pl-20">
                <p className="text-white font-rubik-glitch text-3xl cursor-default">#HomofobiaÉCrime</p>
            </div>
            <div className="text-white flex gap-14 font-bebas-neue text-2xl basis-2/5 justify-center items-center gap-14">
                <Link to='/'>INÍCIO</Link>
                <Link to='/'>PESQUISA</Link>
                <button className="py-2 px-5 bg-red-500 rounded hover:bg-red-600">DENUNCIA? DISQUE 100!</button>
            </div>
        </div>
    )
}