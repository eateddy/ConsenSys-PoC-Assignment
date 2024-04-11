import { proxy } from 'valtio';

const state = proxy({
  isConnected: false,
  userAccount: '',
  chainId: '',
})

export default state;