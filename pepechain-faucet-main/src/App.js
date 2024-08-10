import { useEffect, useState } from "react";
import "./App.css";
import { ethers } from "ethers";
import faucetContract from "./ethereum/faucet";

// eslint-disable-next-line

import faucetImage from './images/faucet-drip-pixel.png';
import telegramPixel from './images/telegram.png';
import xTwitterPixel from './images/xtwitter.png';
import mailPixel from './images/outlook_express-4.png';
import docsPixel from './images/Windows98Scaled Icon 13-3.png';
import pepePixel from './images/pepe-pixel-256px.png';
import bridgePixel from './images/concrete-bridge-pixelated.png';

import { ReactComponent as MinimizeIcon } from './images/MinimizeIcon.svg';
import { ReactComponent as WindowIcon } from './images/WindowIcon.svg';
import { ReactComponent as CloseIcon } from './images/CloseIcon.svg';

import React, { Component } from 'react'











function App() {
  const [walletAddress, setWalletAddress] = useState("");
  const [signer, setSigner] = useState();
  const [fcContract, setFcContract] = useState();
  const [withdrawError, setWithdrawError] = useState("");
  const [withdrawSuccess, setWithdrawSuccess] = useState("");
  const [transactionData, setTransactionData] = useState("");
  const [isButtonHoveredtemp1, setIsButtonHoveredtemp1] = useState(false); 
  const [isButtonHoveredtemp2, setIsButtonHoveredtemp2] = useState(false); 

  useEffect(() => {
    getCurrentWalletConnected();
    addWalletListener();
  }, [walletAddress]);

  const connectWallet = async () => {
    // eslint-disable-next-line
    if (typeof window != "undefined" && typeof window.ethereum != "undefined") {
      try {
        /* get provider */
        const provider = new ethers.providers.Web3Provider(window.ethereum);
        /* get accounts */
        const accounts = await provider.send("eth_requestAccounts", []);
        /* get signer */
        setSigner(provider.getSigner());
        /* local contract instance */
        setFcContract(faucetContract(provider));
        /* set active wallet address */
        setWalletAddress(accounts[0]);

        navigator.clipboard.writeText(walletAddress)
        .then(() => {
          console.log(walletAddress);
        })
        .catch(err => {
          console.error('Failed to copy text:', err);
        });
      } catch (err) {
        console.error(err.message);
      }
    } else {
      /* MetaMask is not installed */
      console.log("Please install MetaMask");
    }
  };

  const getCurrentWalletConnected = async () => {
    // eslint-disable-next-line
    if (typeof window != "undefined" && typeof window.ethereum != "undefined") {
      try {
        /* get provider */
        const provider = new ethers.providers.Web3Provider(window.ethereum);
        /* get accounts */
        const accounts = await provider.send("eth_accounts", []);
        if (accounts.length > 0) {
          /* get signer */
          setSigner(provider.getSigner());
          /* local contract instance */
          setFcContract(faucetContract(provider));
          /* set active wallet address */
          setWalletAddress(accounts[0]);
        } else {
          console.log("Connect to MetaMask using the Connect Wallet button");
        }
      } catch (err) {
        console.error(err.message);
      }
    } else {
      /* MetaMask is not installed */
      console.log("Please install MetaMask");
    }
  };

  const addWalletListener = async () => {
    // eslint-disable-next-line
    if (typeof window != "undefined" && typeof window.ethereum != "undefined") {
      window.ethereum.on("accountsChanged", (accounts) => {
        setWalletAddress(accounts[0]);
      });
    } else {
      /* MetaMask is not installed */
      setWalletAddress("");
      console.log("Please install MetaMask");
    }
  };

  const getOCTHandler = async () => {
    setWithdrawError("");
    setWithdrawSuccess("");
    try {
      const fcContractWithSigner = fcContract.connect(signer);
      const resp = await fcContractWithSigner.requestTokens();
      setWithdrawSuccess("Enjoy your PEPE!");
      setTransactionData(resp.hash);
    } catch (err) {
      setWithdrawError(err.message);
    }
  };


  return (
    <div>
      {/* <nav className="navbar" style={{
        // border: '8px solid #069',
        // borderRadius: '20px',
        backgroundColor: '#069420',
        color: '#000',
        padding: '30px',
        marginBottom: '2px'
      }}>


      


        <div className="container">
          
          <div className="navbar-brand">
          </div>
          <div id="navbarMenu" className="navbar-menu">
            <div className="navbar-end is-align-items-center">

            </div>
          </div>
        </div>






        
      </nav> */}

<nav className="navbar" style={{
      textAlign: "center",
      // display: "flex", 
      flexDirection: "row", 
      justifyContent: "space-around",
      alignItems: "center",
      padding: "1rem"
      }}>
      <div style={{ 
          display: "flex", 
          flexDirection: "row", 
          alignItems: "center",
          justifyContent: "space-between",

        }}>
        <a href="https://twitter.com/pepechainbiz" target="_blank" rel="noopener noreferrer">
          <img src={xTwitterPixel} width={30} alt="twitter" />
          <p>X</p>
        </a>
        <a href="https://t.me/pepechainbiz" target="_blank" rel="noopener noreferrer">
          <img src={telegramPixel} width={30} alt="telegram" />
          <p>Telegram</p>
        </a>
        <a href="https://docs.pepechain.biz" target="_blank" rel="noopener noreferrer">
          <img src={docsPixel} width={30} alt="docs" />
          <p>Docs</p>
        </a>
        <a href="mailto:hello@pepechain.biz" target="_blank" rel="noopener noreferrer">
          <img src={mailPixel} width={30} alt="email" />
          <p>Mail</p>
        </a>
        <a href="https://pepechain-sepolia-ro3l07tj1p.testnets.rollbridge.app" target="_blank" rel="noopener noreferrer">
          <img src={bridgePixel} width={30} alt="bridge" />
          <p>Bridge</p>
        </a>
      
      </div>
      <div style={{ 
          display: "flex", 
          flexDirection: "row", 
          alignItems: "center",
          justifyContent: "space-between",
          // padding: "1rem" 
        }}>
        <a href="https://pepechain.biz" target="_blank" rel="noopener noreferrer">
          <img src={pepePixel} width={30} alt="website" />
          <p>Pepechain</p>
        </a>
      
      </div>
  </nav>

  <section className="hero is-fullheight" >
        <div className="faucet-hero-body">
          <div className="container has-text-centered main-content">
            <h1 className="title is-1">Pepechain Sepolia Faucet</h1>

            <div className="window-wrap">
              <div className="window-header">
                <div>Pepechain Faucet</div>
                <div className="windows-button-wrap">
                  <div className="window-button">
                    <MinimizeIcon className="button-icon"/>
                  </div>
                  <div className="window-button">
                    <WindowIcon className="button-icon"/>
                  </div>
                  <div className="window-button">
                    <CloseIcon className="button-icon"/>
                  </div>
                </div>
              </div>

              <div style={{
                "display": "flex",
                "flexDirection": "column", 
                "alignItems": "center"
              }}>

              <img src={faucetImage} alt="Logo" className="" style={{ width: '128px', height: '128px' }} />
              <button
              className={`button ${isButtonHoveredtemp2 ? 'button-hovered' : ''}`}  onClick={connectWallet}
                style={{
                  border: '0px solid',
                  background: 'hsla(0, 0%, 75.29%,1.00)',
                  borderRadius: '0px',
                  color: '#000',
                  // padding: '20px',
                  // marginBottom: '20px',
                  // transition: 'background-color 0.3s ease'
                }}
                onMouseEnter={() => setIsButtonHoveredtemp2(true)}
                onMouseLeave={() => setIsButtonHoveredtemp2(false)}
            >
              <span className="is-link has-text-weight-bold">
                {walletAddress && walletAddress.length > 0
                  ? `Connected: ${walletAddress.substring(0, 6)}...${walletAddress.substring(38)}`
                  : "Connect Wallet"}
              </span>
              </button>
              </div>

              <div className="">
                <div className="column">
                  <input
                    className=""
                    type="text"
                    placeholder="Enter your wallet address (0x...)"
                    defaultValue={walletAddress}
                  />
                </div>
                <div className="column">

                  <button style={{
                    border: '0px solid',
                    background: 'hsla(0, 0%, 75.29%,1.00)',
                    borderRadius: '0px',
                    color: '#000',
                    // padding: '20px',
                    // marginBottom: '20px',
                    // transition: 'background-color 0.3s ease'
                  }}
                    className={`button ${isButtonHoveredtemp1 ? 'button-hovered' : ''} `}
                    onClick={getOCTHandler}
                    disabled={walletAddress ? false : true}
                    onMouseEnter={() => setIsButtonHoveredtemp1(true)}
                    onMouseLeave={() => setIsButtonHoveredtemp1(false)}
                  > 

                    {walletAddress ? "Send Me PEPE" : "Your wallet is not connected"}

                  </button>

                 
                </div>
              </div>

              <p style={{
                "color": "black",
                "padding": "1rem",
                // "textAlign": "left"
              }}>
                Ensure you have at least .001 ETH on Mainnet
                <br/>
                <br/>
                Now get some testnet ETH
                <a
                href="https://www.alchemy.com/faucets/ethereum-sepolia"
                target="blank"> Here </a>
                <br/>
                <br/>
                Connect wallet to
                Receive 100 
                <a 
                 href="https://sepolia.etherscan.io/token/0x9cffe912528b1e55d8b6471d7ae483f44ed655fb"
                 target="blank"> Test Pepe </a>
                mirrored after PEPE on
                 <a 
                 href="https://etherscan.io/token/0x6982508145454ce325ddbe47a25d4ec3d2311933"
                 target="blank"> Ethereum Mainnet.</a>
                 <br/> 
                 <br/> 
                Must wait at least 60 Seconds before requesting again
                 <br/> 
                 <br/> 
                Click<a href="https://pepechain-sepolia-jdnu7s4bck-1524e08fc41c2292.testnets.rollbridge.app" target="blank"> Here </a>
                or the bridge to transfer to Pepechain Testnet.
                <br/>
                <a href="https://pepechain-sepolia-jdnu7s4bck-1524e08fc41c2292.testnets.rollbridge.app" target="blank">
                  <img src={bridgePixel} width={48} alt="bridge" />
                </a>
              </p>
              {/* <br /> */}

              <div className="m-2"> 
                {withdrawError && (
                  <div className="withdraw-error">{withdrawError}</div>
                )}
                {withdrawSuccess && (
                  <div className="withdraw-success">{withdrawSuccess}</div>
                )}
              </div>

              <div style={{
                "padding": "1rem"
              }}>

              <a href={transactionData ? `https://sepolia.etherscan.io/tx/${transactionData}`: ""} target="blank">
                    {transactionData
                      ? `Transaction hash: ${transactionData}`
                      : ""}
              </a>
              </div>


              {/* <article className="panel is-grey-darker" style={{
                  border: '4px solid #fff',
                  borderRadius: '20px',
                  color: '#333',
                  padding: '20px',
                  marginBottom: '20px',
                  transition: 'background-color 0.3s ease'
                }}>
                <p className="panel-heading" >Transaction Data</p>
                <div className="panel-block">
                  <a href={transactionData ? `https://sepolia.etherscan.io/tx/${transactionData}`: ""} target="blank">
                    {transactionData
                      ? `Transaction hash: https://sepolia.etherscan.io/tx/${transactionData}`
                      : "--"}
                  </a>
                </div>
              </article> */}
            </div>
          </div>
        </div>
      </section>

  <footer style={{
      textAlign: "center",
      marginTop: "50px",
      display: "flex", 
      flexDirection: "row", 
      justifyContent: "space-around",
      alignItems: "center",
      padding: "1rem"
      }}>
      {/* <div style={{ 
          display: "flex", 
          flexDirection: "row", 
          // alignItems: "center",
          justifyContent: "space-between",

        }}>
        <a href="https://twitter.com/pepechainbiz" target="_blank" rel="noopener noreferrer">
          <img src={xTwitterPixel} width={36} alt="twitter" />
        </a>
        <a href="https://t.me/pepechainbiz" target="_blank" rel="noopener noreferrer">
          <img src={telegramPixel} width={36} alt="telegram" />
        </a>
        <a href="https://docs.pepechain.biz" target="_blank" rel="noopener noreferrer">
          <img src={docsPixel} width={36} alt="docs" />
        </a>
        <a href="mailto:hello@pepechain.biz" target="_blank" rel="noopener noreferrer">
          <img src={mailPixel} width={36} alt="email" />
        </a>
      
      </div>
      <div style={{ 
          // display: "flex", 
          // flexDirection: "row", 
          // alignItems: "center",
          // justifyContent: "space-around",
          // padding: "1rem" 
        }}>
        <a href="https://pepechain.biz" target="_blank" rel="noopener noreferrer">
          <img src={pepePixel} width={36} alt="website" />
        </a>
      
      </div> */}
  </footer>

    </div>
  );
}

export default App;
