import { ChainId } from '../sdk'

export type TokenInfo = {
  id: string
  name: string
  symbol: string
  decimals?: number
}

type PairInfo = {
  id: number
  token0: TokenInfo
  token1?: TokenInfo
  name?: string
  symbol?: string
}

type AddressMap = {
  [chainId: number]: {
    [address: string]: PairInfo
  }
}

export const POOLS: AddressMap = {
  [ChainId.PEPECHAIN_SEPOLIA]: {
    '0x7eDA899b3522683636746a2f3a7814e6fFca75e1': {
      id: 0,
      token0: {
        id: '0x6bD193Ee6D2104F14F94E2cA6efefae561A4334B',
        name: 'Frenswap',
        symbol: 'FREN',
        decimals: 18,
      },
      token1: {
        id: '0xe09B47411A03BA98C67A4768A365F28ba67A769E',
        name: 'Pepechain_Sepolia',
        symbol: 'PEPE',
        decimals: 18,
      },
      name: 'Frenswap LP',
      symbol: 'FLP',
    },
    '0x6bD193Ee6D2104F14F94E2cA6efefae561A4334B': {
      id: 1,
      token0: {
        id: '0x6bD193Ee6D2104F14F94E2cA6efefae561A4334B',
        name: 'Frenswap',
        symbol: 'FREN',
        decimals: 18,
      },
    },
    '0xe09B47411A03BA98C67A4768A365F28ba67A769E': {
      id: 2,
      token0: {
        id: '0xe09B47411A03BA98C67A4768A365F28ba67A769E',
        name: 'Wrapped Pepechain_Sepolia',
        symbol: 'WPEPE',
        decimals: 18,
      },
    },
    '0xf9b7495b833804e4d894fC5f7B39c10016e0a911': {
      id: 3,
      token0: {
        id: '0x6bD193Ee6D2104F14F94E2cA6efefae561A4334B',
        name: 'Frenswap',
        symbol: 'FREN',
        decimals: 18,
      },
      token1: {
        id: '0xbD90A6125a84E5C512129D622a75CDDE176aDE5E',
        name: 'RiverBoat',
        symbol: 'RIB',
        decimals: 18,
      },
      name: 'Frenswap LP',
      symbol: 'FLP',
    },
    '0x0acDB54E610dAbC82b8FA454b21AD425ae460DF9': {
      id: 4,
      token0: {
        id: '0xbD90A6125a84E5C512129D622a75CDDE176aDE5E',
        name: 'RiverBoat',
        symbol: 'RIB',
        decimals: 18,
      },
      token1: {
        id: '0xe09B47411A03BA98C67A4768A365F28ba67A769E',
        name: 'Pepechain_Sepolia',
        symbol: 'PEPE',
        decimals: 18,
      },
      name: 'Frenswap LP',
      symbol: 'FLP',
    },
    '0xbD90A6125a84E5C512129D622a75CDDE176aDE5E': {
      id: 5,
      token0: {
        id: '0xbD90A6125a84E5C512129D622a75CDDE176aDE5E',
        name: 'RiverBoat',
        symbol: 'RIB',
        decimals: 18,
      },
    },
    '0xe537f70a8b62204832B8Ba91940B77d3f79AEb81': {
      id: 6,
      token0: {
        id: '0xE3F5a90F9cb311505cd691a46596599aA1A0AD7D',
        name: 'USDC Coin',
        symbol: 'USDC',
        decimals: 6,
      },
      token1: {
        id: '0xe09B47411A03BA98C67A4768A365F28ba67A769E',
        name: 'Pepechain_Sepolia',
        symbol: 'PEPE',
        decimals: 18,
      },
      name: 'Frenswap LP',
      symbol: 'FLP',
    },
    '0xdb66BE1005f5Fe1d2f486E75cE3C50B52535F886': {
      id: 7,
      token0: {
        id: '0x6bD193Ee6D2104F14F94E2cA6efefae561A4334B',
        name: 'Frenswap',
        symbol: 'FREN',
        decimals: 18,
      },
      token1: {
        id: '0xE3F5a90F9cb311505cd691a46596599aA1A0AD7D',
        name: 'USDC Coin',
        symbol: 'USDC',
        decimals: 6,
      },
      name: 'Frenswap LP',
      symbol: 'FLP',
    },
    '0xFE1b71BDAEE495dCA331D28F5779E87bd32FbE53': {
      id: 8,
      token0: {
        id: '0x80A16016cC4A2E6a2CACA8a4a498b1699fF0f844',
        name: 'Dai Stablecoin',
        symbol: 'DAI',
        decimals: 18,
      },
      token1: {
        id: '0xE3F5a90F9cb311505cd691a46596599aA1A0AD7D',
        name: 'USDC Coin',
        symbol: 'USDC',
        decimals: 6,
      },
      name: 'Frenswap LP',
      symbol: 'FLP',
    },
    '0x384704557F73fBFAE6e9297FD1E6075FC340dbe5': {
      id: 9,
      token0: {
        id: '0x5D9ab5522c64E1F6ef5e3627ECCc093f56167818',
        name: 'Binance-Peg BUSD Token',
        symbol: 'BUSD',
        decimals: 18,
      },
      token1: {
        id: '0xE3F5a90F9cb311505cd691a46596599aA1A0AD7D',
        name: 'USDC Coin',
        symbol: 'USDC',
        decimals: 6,
      },
      name: 'Frenswap LP',
      symbol: 'FLP',
    },
    '0xA0D8DFB2CC9dFe6905eDd5B71c56BA92AD09A3dC': {
      id: 10,
      token0: {
        id: '0x639A647fbe20b6c8ac19E48E2de44ea792c62c5C',
        name: 'Ethereum',
        symbol: 'ETH',
        decimals: 18,
      },
      token1: {
        id: '0xE3F5a90F9cb311505cd691a46596599aA1A0AD7D',
        name: 'USDC Coin',
        symbol: 'USDC',
        decimals: 6,
      },
      name: 'Frenswap LP',
      symbol: 'FLP',
    },
    '0xfb1d0D6141Fc3305C63f189E39Cc2f2F7E58f4c2': {
      id: 11,
      token0: {
        id: '0x2bF9b864cdc97b08B6D79ad4663e71B8aB65c45c',
        name: 'Binance Coin',
        symbol: 'BNB',
        decimals: 18,
      },
      token1: {
        id: '0x5D9ab5522c64E1F6ef5e3627ECCc093f56167818',
        name: 'Binance-Peg BUSD Token',
        symbol: 'BUSD',
        decimals: 18,
      },
      name: 'Frenswap LP',
      symbol: 'FLP',
    },
    '0x83d7a3fc841038E8c8F46e6192BBcCA8b19Ee4e7': {
      id: 12,
      token0: {
        id: '0x6aB6d61428fde76768D7b45D8BFeec19c6eF91A8',
        name: 'Wrapped Bitcoin',
        symbol: 'WBTC',
        decimals: 8,
      },
      token1: {
        id: '0xE3F5a90F9cb311505cd691a46596599aA1A0AD7D',
        name: 'USDC Coin',
        symbol: 'USDC',
        decimals: 6,
      },
      name: 'Frenswap LP',
      symbol: 'FLP',
    },
    '0x2a44696DDc050f14429bd8a4A05c750C6582bF3b': {
      id: 13,
      token0: {
        id: '0xB44a9B6905aF7c801311e8F4E76932ee959c663C',
        name: 'Tether USD',
        symbol: 'USDT',
        decimals: 6,
      },
      token1: {
        id: '0xE3F5a90F9cb311505cd691a46596599aA1A0AD7D',
        name: 'USDC Coin',
        symbol: 'USDC',
        decimals: 6,
      },
      name: 'Frenswap LP',
      symbol: 'FLP',
    },
  },
}
