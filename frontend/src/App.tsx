import '@rainbow-me/rainbowkit/styles.css';
import { getDefaultConfig, RainbowKitProvider } from '@rainbow-me/rainbowkit';
import { WagmiProvider } from 'wagmi';
import { mainnet,linea } from 'wagmi/chains';
import { QueryClientProvider, QueryClient} from "@tanstack/react-query";
import { ConnectButton } from '@rainbow-me/rainbowkit';

const config = getDefaultConfig({
  appName: 'PoC',
  projectId: 'YOUR_PROJECT_ID',
  chains: [mainnet, linea],
  ssr: false,
});

const queryClient = new QueryClient();

const App = () => {
  return (
    <WagmiProvider config={config}>
      <QueryClientProvider client={queryClient}>
        <RainbowKitProvider>
          <ConnectButton/>
        </RainbowKitProvider>
      </QueryClientProvider>
    </WagmiProvider>
  );
};

export default App