import Bottom from "./components/Bottom";
import Top from "./components/Top";

export default function App() {
    return (
        <main className="w-screen h-screen overflow-x-hidden flex flex-col">
            <Top />

            <Bottom />
        </main>
    );
}
