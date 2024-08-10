require("dotenv/config");
require("@nomiclabs/hardhat-waffle");
require("@nomiclabs/hardhat-etherscan");
require("@nomiclabs/hardhat-ethers");
require("hardhat-deploy");
require("hardhat-deploy-ethers");
require("./tasks");

let accounts;

if (process.env.PRIVATE_KEY) {
    accounts = [process.env.PRIVATE_KEY];
} else {
    accounts = {
        mnemonic: process.env.MNEMONIC || "test test test test test test test test test test test junk",
    };
}

/**
 * @type import('hardhat/config').HardhatUserConfig
 */
module.exports = {
    defaultNetwork: "sepolia",
    namedAccounts: {
        deployer: {
            default: 0,
        },
        dev: {
            default: 1,
        },
    },
    etherscan: {
        apiKey: process.env.ETHERSCAN_API_KEY,
    },
    networks: {
        sepolia: {
            url: `https://sepolia.drpc.org`,
            chainId: 11155111,
            accounts,
            live: true,
            saveDeployments: true,
            tags: ["sepolia"],
            gasPrice: 50_000000000,
            gas: 8000000,
        },
        "pepechain-sepolia": {
            url: `https://sepolia-rpc.pepechain.biz`,
            chainId: 420693,
            accounts,
            live: true,
            saveDeployments: true,
            tags: ["pepechain-sepolia"],
            gasPrice: 5_000000000,
            gas: 8000000,
        },
    },
    solidity: {
        compilers: [
            {
                version: "0.4.18",
                settings: {
                    optimizer: {
                        enabled: true,
                        runs: 999999,
                    },
                },
            },
            {
                version: "0.6.12",
                settings: {
                    optimizer: {
                        enabled: true,
                        runs: 999999,
                    },
                },
            },
            {
                version: "0.8.2",
                settings: {
                    optimizer: {
                        enabled: true,
                        runs: 999999,
                    },
                },
            },
            {
                version: "0.8.17",
                settings: {
                    optimizer: {
                        enabled: true,
                        runs: 999999,
                    },
                },
            },
        ],
    },
};
