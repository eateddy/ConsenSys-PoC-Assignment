import "./App.css"
import { DiscoverWalletProviders } from "./components/DiscoverWalletProviders";
import { GetWalletNfts } from "./components/GetWalletNfts";
import { DisplayNftData } from "./components/DisplayNftData";
import { useSnapshot } from "valtio";
import state from "./store"

function App() {
    const snap = useSnapshot(state)
    
    return (
        <>
            <div className="border border-gray-500 rounded-md p-2">
                <DiscoverWalletProviders/>
            </div>
            {snap.isConnected 
            && 
            <div>
                <GetWalletNfts/>
            </div>
            }
            {snap.isNftData
            && 
            <div>
                <DisplayNftData/>
            </div>
            }
        </>
    )
}

export default App
