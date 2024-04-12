import { proxy } from 'valtio';

const state = proxy({
  isConnected: false,
  userAccount: '',
  chainId: '',
  isNftData: false,
  nftData: {}
})

export default state;