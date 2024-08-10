// SPDX-License-Identifier: GPL-3.0
pragma solidity =0.6.12;

import './interfaces/IFrenFactory.sol';
import './FrenPair.sol';

contract FrenFactory is IFrenFactory {
    bytes32 public constant INIT_CODE_PAIR_HASH = keccak256(abi.encodePacked(type(FrenPair).creationCode));

    address public override feeTo;
    address public override feeToSetter;
    address public override migrator;
    address public override auro;

    mapping(address => mapping(address => address)) public override getPair;
    address[] public override allPairs;

    event PairCreated(address indexed token0, address indexed token1, address pair, uint);

    constructor(address _feeToSetter) public {
        feeToSetter = _feeToSetter;
    }

    function allPairsLength() external override view returns (uint) {
        return allPairs.length;
    }

    function createPair(address tokenA, address tokenB) external override returns (address pair) {
        require(tokenA != tokenB, 'FrenSwap: IDENTICAL_ADDRESSES');
        (address token0, address token1) = tokenA < tokenB ? (tokenA, tokenB) : (tokenB, tokenA);
        require(token0 != address(0), 'FrenSwap: ZERO_ADDRESS');
        require(getPair[token0][token1] == address(0), 'FrenSwap: PAIR_EXISTS'); // single check is sufficient
        bytes memory bytecode = type(FrenPair).creationCode;
        bytes32 salt = keccak256(abi.encodePacked(token0, token1));
        assembly {
            pair := create2(0, add(bytecode, 32), mload(bytecode), salt)
        }
        FrenPair(pair).initialize(token0, token1);
        getPair[token0][token1] = pair;
        getPair[token1][token0] = pair; // populate mapping in the reverse direction
        allPairs.push(pair);
        emit PairCreated(token0, token1, pair, allPairs.length);
    }

    function setFeeTo(address _feeTo) external override {
        require(msg.sender == feeToSetter, 'FrenSwap: FORBIDDEN');
        feeTo = _feeTo;
    }

    function setMigrator(address _migrator) external override {
        require(msg.sender == feeToSetter, 'FrenSwap: FORBIDDEN');
        migrator = _migrator;
    }

    function setFeeToSetter(address _feeToSetter) external override {
        require(msg.sender == feeToSetter, 'FrenSwap: FORBIDDEN');
        feeToSetter = _feeToSetter;
    }

    
    function setAuroAddress(address _auro) external override {
        require(msg.sender == feeToSetter, 'FrenSwap: FORBIDDEN');
        require(_auro != address(0), 'FrenSwap: INVALID_ADDRESS');
        auro = _auro;
    }



    function enableMetaTxnsPair(address pairAddress) external {
        require(msg.sender == feeToSetter, 'FrenSwap: FORBIDDEN');
        require(pairAddress != address(0), 'FrenSwap: PAIR_NOT_EXISTS');

        FrenPair pair = FrenPair(pairAddress);

        require(!pair.metaTxnsEnabled(), 'FrenSwap: META_TXNS_ALREADY_ENABLED');

        pair.enableMetaTxns();
    }

    function disableMetaTxnsPair(address pairAddress) external {
        require(msg.sender == feeToSetter, 'FrenSwap: FORBIDDEN');
        require(pairAddress != address(0), 'FrenSwap: PAIR_NOT_EXISTS');

        FrenPair pair = FrenPair(pairAddress);

        require(pair.metaTxnsEnabled(), 'FrenSwap: META_TXNS_ALREADY_DISABLED');

        pair.disableMetaTxns();
    }

}
