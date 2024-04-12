import "./App.css"
import { DiscoverWalletProviders } from "./components/DiscoverWalletProviders";
import { GetWalletNfts } from "./components/GetWalletNfts";
import { DisplayNftData } from "./components/DisplayNftData";
// Global state management library
import { useSnapshot } from "valtio";
import state from "./store"

function App() {
    const snap = useSnapshot(state)
    
    return (
        <div className="flex flex-col justify-center items-center gap-2">
            <div className="flex flex-col w-fit">
                <div className="border border-gray-500 rounded-md p-2">
                    {/* Component to detect and connect existing wallets */}
                    <DiscoverWalletProviders/>
                </div>
                {/* Once wallet is verified (authentic owner) we can see what NFTs they own */}
                {snap.isConnected && <GetWalletNfts/>}
            </div>
            <div className="flex flex-row flex-wrap justify-center items-center">
                {/* Component to display the NFTs */}
                {snap.isNftData && <DisplayNftData/>}
            </div>
        </div>
    )
}

export default App
