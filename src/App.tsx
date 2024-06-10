import { HashRouter } from "react-router-dom";
import Bottom from "./components/Bottom";
import Top from "./components/Top";

export default function App() {
    return (
        <main className="w-screen h-screen overflow-x-hidden flex flex-col">
            <HashRouter>
                <Top />
            </HashRouter>

            <Bottom />
        </main>
    );
}
