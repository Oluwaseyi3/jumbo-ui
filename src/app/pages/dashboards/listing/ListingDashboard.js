import React, {useEffect , useState, useRef } from 'react';
import {Grid} from "@mui/material";
import Alert from "@mui/material/Alert"
import { Mainnet, DAppProvider, useEtherBalance, useEthers, useTokenBalance , useSigner,  Polygon, useContractFunction} from '@usedapp/core'


import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button'; 
import axios from "axios"
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';

import TokenMinterABI from "../contracts/TokenMinterABI.json"
import BundleToken from "../contracts/BundleToken.json"
import VaultABI from "../contracts/VaultABI.json"
import { formatUnits } from '@ethersproject/units'
import { Contract } from '@ethersproject/contracts';
import {ethers} from "ethers"


const ListingDashboard = () => {

//   const [amountInEther, setAmountInEther] = useState('0')
// const [receiptStatus, setReceiptStatus] = useState(false)
// const [receiptStake, setReceiptStake] = useState(false)
// const [appproval, setApproval] = useState(false)

// const { account, deactivate, activateBrowserWallet, library } = useEthers()
// const approvedRef = useRef(false);


// const vaultAddress = '0xf6f6928cac8e59b2b12216282a3f2cd5a2b366c0'

// const signer = useSigner()

// const DAI_ADDRESS = '0x4987131473ccC84FEdbf22Ab383b6188D206cc9C'
// const tokenContract = new ethers.Contract(vaultAddress, VaultABI, signer)

// const daiBalance = useTokenBalance(DAI_ADDRESS, account)
// const fromTokenContract = new Contract("0x4987131473ccC84FEdbf22Ab383b6188D206cc9C", BundleToken)

// const { state, send: sendApprove } = useContractFunction(fromTokenContract, 'approve',  { transactionName: 'approve' });


// const handleApprove = () => {  

//   const amountInWei = ethers.utils.parseEther(amountInEther); 
//       sendApprove("0x4987131473ccC84FEdbf22Ab383b6188D206cc9C", amountInWei.toString())
//     setApproval(true)
//    approvedRef.current = true;
//    };



//    const handleDeposit = async() => {

//     try {     
//  const amountInWei = ethers.utils.parseEther(amountInEther); 
// const txResponse = await tokenContract.deposit(amountInWei);
//     const receipt = await txResponse.wait()
//     } catch (error) {
//        console.log(error)
//     }
//   }


//   const handleWithdraw = async() => {

//     try {
         
//  const amountInWei = ethers.utils.parseEther(amountInEther); 
// const txResponse = await tokenContract.withdraw(amountInWei);
//     const receipt = await txResponse.wait()
//     if (receipt) {
//       setReceiptStatus(true)
//     }
//     } catch (error) {
//        console.log(error)
//     }
//   }

 
//   const AlertStatus = () => {
//     if (receiptStatus) {
//       return<Alert severity='success'>
//          Transaction Successful
//       </Alert>
//     }
//   }
 
    return (
        <>
        <AlertStatus/>
      <Grid container>
        hh
     </Grid>
     </>
    );
};

export default ListingDashboard;
