import { proxy } from 'valtio';

const state = proxy({
  userAccount: '',
  chainId: '',
})

export default state;