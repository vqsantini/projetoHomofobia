import { Header } from "./components/Header";
import { HomeContent } from "./components/HomeContent";

export function Home() {


    return (
        <div className="h-screen w-screen bg-black">
            <div className="h-screen w-screen bg-home">
                <Header />
                <HomeContent />
            </div>
        </div>
    )
}