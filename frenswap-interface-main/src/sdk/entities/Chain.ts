import { ChainId } from '..'
import { NETWORK_ICON, NETWORK_LABEL } from '../../constants/networks'

export type Chain = {
  id: ChainId
  name?: string
  icon?: string
}

export const DEFAULT_CHAIN_FROM: Chain = {
  id: ChainId.MAINNET,
  icon: NETWORK_ICON[ChainId.MAINNET],
  name: NETWORK_LABEL[ChainId.MAINNET],
}

export const DEFAULT_CHAIN_TO: Chain = {
  id: ChainId.PEPECHAIN_SEPOLIA,
  icon: NETWORK_ICON[ChainId.PEPECHAIN_SEPOLIA],
  name: NETWORK_LABEL[ChainId.PEPECHAIN_SEPOLIA],
}
