const Web3 = require('web3')
const { default: axios } = require('axios')
import IUniswapV2PairABI from '../../constants/abis/uniswap-v2-pair.json'
const NETWORK_URL = 'https://rpc-sepolia.pepechain.co'
const web3 = new Web3(NETWORK_URL)

export default async function handler(req, res) {
  let pepeUSDCContract = new web3.eth.Contract(IUniswapV2PairABI, '0xe537f70a8b62204832B8Ba91940B77d3f79AEb81')
  const pepeUSDCReserves = await pepeUSDCContract.methods.getReserves().call()

  const pepeUSDCPrice = (Number(pepeUSDCReserves.reserve1) / Number(pepeUSDCReserves.reserve0) ) * 1e12

  let frenPepeContract = new web3.eth.Contract(IUniswapV2PairABI, '0x7eDA899b3522683636746a2f3a7814e6fFca75e1')
  const frenPepeReserves = await frenPepeContract.methods.getReserves().call()

  const frenPepePrice = Number(frenPepeReserves.reserve1) / Number(frenPepeReserves.reserve0)

  let ribPepeContract = new web3.eth.Contract(IUniswapV2PairABI, '0x0acDB54E610dAbC82b8FA454b21AD425ae460DF9')
  const ribPepeReserves = await ribPepeContract.methods.getReserves().call()

  const ribPepePrice = Number(ribPepeReserves.reserve0) / Number(ribPepeReserves.reserve1)

  let ret = {}
  ret['pepe'] = pepeUSDCPrice
  ret['fren'] = frenPepePrice * pepeUSDCPrice
  ret['rib'] = ribPepePrice * pepeUSDCPrice
  ret['usdc'] = 1

  res.status(200).json(ret)
}
