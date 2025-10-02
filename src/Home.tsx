import { Header } from "./components/Header";
import { HomeContent } from "./components/HomeContent";

export function Home() {


    return (
        <div className="h-screen w-full overflow-x-hidden bg-black">
            <div className="h-screen screen bg-home">
                <Header />
                <HomeContent />
            </div>
        </div>
    )
}