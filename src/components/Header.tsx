import { Link } from "react-router-dom";

export function Header() {
//     font-family: 'Rubik Glitch';
// font-style: normal;
// font-weight: 400;
// font-size: 32px;
// line-height: 38px;


    
    return(
        <div>
            <div>
                <p className="text-white font-">#HomofobiaÉCrime</p>
            </div>
            <div>
                <Link to='/'></Link>
                <Link to='/'></Link>
                <p>DENUNCIA? DISQUE 100</p>
            </div>
        </div>
    )
}