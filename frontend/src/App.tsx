import "./App.css"
import { DiscoverWalletProviders } from "./components/DiscoverWalletProviders"
import { GetWalletNfts } from "./components/GetWalletNfts"

function App() {
    return (
        <>
            <div className="bg-pink-500 rounded-md p-2">
                <DiscoverWalletProviders/>
            </div>
            <div>
                <GetWalletNfts/>
            </div>
        </>
    )
}

export default App
