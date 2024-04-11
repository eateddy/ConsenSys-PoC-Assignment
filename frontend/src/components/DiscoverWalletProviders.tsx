import { useState } from "react"
import { useSyncProviders } from "../hooks/useSyncProviders"
import { formatAddress } from "../utils"

export const DiscoverWalletProviders = () => {
    const [selectedWallet, setSelectedWallet] = useState<EIP6963ProviderDetail>()
    const [userAccount, setUserAccount] = useState<string>("")
    const providers = useSyncProviders()

    // Connect to the selected provider using eth_requestAccounts.
    const handleConnect = async (providerWithInfo: EIP6963ProviderDetail) => {
        try {
            const accounts = await providerWithInfo.provider.request({ 
                method: "eth_requestAccounts"
            })

            setSelectedWallet(providerWithInfo)
            setUserAccount(accounts?.[0])
        } catch (error) {
            console.error(error)
        }
    }

    // Display detected providers as connect buttons.
    return (
        <>
            {userAccount ?
                <div>
                    {userAccount &&
                        <div>
                            <div className="flex flex-col">
                                <div className="flex flex-row gap-2 justify-center font-extrabold">
                                    <img src={selectedWallet.info.icon} alt={selectedWallet.info.name} />
                                    <div className="flex items-center ">{selectedWallet.info.name}</div>
                                </div>
                                <div><span className="font-bold mr-2">Address:</span>({formatAddress(userAccount)})</div>
                                <div><span className="font-bold mr-2">Chain ID:</span>{selectedWallet.provider.chainId}</div>
                            </div>
                        </div>
                    }
                </div>
            :
                <div>
                    <h2>Wallets Detected:</h2>
                    <div>
                        {
                            providers.length > 0 ? providers?.map((provider: EIP6963ProviderDetail) => (
                                <button key={provider.info.uuid} onClick={() => handleConnect(provider)} >
                                <img src={provider.info.icon} alt={provider.info.name} />
                                <div>{provider.info.name}</div>
                                </button>
                            )) :
                                <div>
                                    No Wallet Detected. Please download MetaMask at:
                                    <br/>
                                    <a href="https://www.metamask.io" target="_blank" rel="noopener noreferrer">
                                        www.metamask.io
                                    </a>
                                </div>
                        }
                    </div>
                    <hr />
                    <h2>{userAccount ? "" : "No "}Wallet Selected</h2>
                </div>
            }
        </>
    )
}