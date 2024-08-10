import { useEffect, useState } from "react";
import "./App.css";
import { ethers } from "ethers";

// eslint-disable-next-line

import faucetImage from './images/faucet-drip-pixel.png';
import telegramPixel from './images/telegram.png';
import xTwitterPixel from './images/xtwitter.png';
import mailPixel from './images/outlook_express-4.png';
import docsPixel from './images/Windows98Scaled Icon 13-3.png';
import pepePixel from './images/pepe-pixel-256px.png';
import bridgePixel from './images/concrete-bridge-pixelated.png';

import React, { Component } from 'react'











function App() {



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



    </div>
  );
}

export default App;
