import "./App.css";
import NavBar from "./components/NavBar";
import SalesTrend from "./components/SalesTrend";
import SummaryCard from "./components/SummaryCard";
import Platform from "./components/Platform";
import Order from "./components/Order";
import NavDrawer from "./components/NavDrawer";

function App() {
    return (
        <div className="App bg-bgColor flex">
            <NavDrawer />
            <div className="flex-1">
                <NavBar />
                <div className="grid gap-4 p-4 grid-cols-[repeat(auto-fit,minmax(600px,1fr))] xl:grid-cols-5">
                {/* <div className="grid grid-cols-1 xl:grid-cols-2 gap-4 p-4"> */}
                    <SalesTrend className="xl:col-span-3"/>
                    <SummaryCard className="xl:col-span-2"/>
                    <Order className="xl:col-span-3"/>
                    <Platform className="xl:col-span-2"/>
                </div>
            </div>
        </div>
    );
}

export default App;
