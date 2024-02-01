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
        {/* <AlertStatus/> */}
      <Grid container>
       
        <Grid container  xs={12} md={6} lg={6} justifyContent="center" alignItems="center" >
         <Box>
         <img src="https://dex-jet.vercel.app/assets/LAPTOP.png"  style={{height:" 400px"}}/>
         </Box>
        </Grid>
        <Grid container  xs={12} md={6} lg={6}  direction="column" justifyContent="center" alignItems="center">
           <Typography variant="h4">
             Rewards
           </Typography>

           <Stack spacing={2} sx={{mt: 10, width: "80%"}} container>
             <Paper sx={{display: "flex", justifyContent: "space-between", alignItem: "center" , minWidth: "10%", p:1}}>
              <Box sx={{display: "flex", justifyContent: "center", alignItem: "center" }}>
              <img src='https://dex-jet.vercel.app/assets/wallet.png' style={{height: "70px"}}/>
              <Typography variant="h6" sx={{mt:3}}>
                   Derphi Balance
             </Typography>
              </Box>
              <Box >
                 {/* {daiBalance ?  <Typography variant="h6" sx={{mt:3}}>{formatUnits(daiBalance, 18)} DFI </Typography> :
                  <Typography variant="h6" sx={{mt:3}}>0 DFI </Typography>
                 
                 } */}
              
                
            

              </Box>
             </Paper>
             

             <Paper sx={{display: "flex", justifyContent: "space-between", alignItem: "center" ,  minWidth: "10%", p:1}}>
              <Box sx={{display: "flex", justifyContent: "center", alignItem: "center" }}>
              <img src='https://dex-jet.vercel.app/assets/wallet.png' style={{height: "70px"}}/>
              <Typography variant="h6" sx={{mt:3}}>
                 Locked rewards
             </Typography>
              </Box>
              <Box>
           

              </Box>
             </Paper>
            

             <Paper sx={{display: "flex", justifyContent: "space-between", alignItem: "center" ,   minWidth: "10%", p:1}}>
              <Box sx={{display: "flex", justifyContent: "center", alignItem: "center" }}>
              <img src='https://dex-jet.vercel.app/assets/wallet.png' style={{height: "70px"}}/>
              <Typography variant="h6" sx={{mt:3}}>
                  Unlocked rewards
             </Typography>
              </Box>
              <Box>
         

              </Box>
             </Paper>
            </Stack>
          </Grid>
     </Grid>

     <Grid  direction="column" alignItems="center" sx={{mt: 5}}>
       <Box>
         <Typography variant='h3'>
         Available Staking Options
          </Typography>
       </Box>
       <Box sx={{mt: 5,  p:5}}>
         <Paper  sx={{p: 2}} elevation={3}>
              <Grid>
              <Typography variant='h5'>
                 DFI Vault
                  </Typography>
              </Grid>
              <Grid container justifyContent="center" alignItems="center" sx={{mt: 5}}>
                  <Grid xs={12} sm={12} md={3}  lg={3}>
                    <Stack spacing={2}>
                    <Typography variant='h5'>
                  Available: 
                  </Typography>
               
                 <TextField  size="small"     
        //              value={amountInEther}
        // onChange={(e) => setAmountInEther(e.target.value)}
/>
              
                    </Stack>
                  </Grid>
                  <Grid xs={12} sm={12} md={3} lg={3} container direction="column" justifyContent="center" alignItems="center">
                  <Typography variant='h5'>
                 DFI Vault
                  </Typography>
                  <Button variant='contained' sx={{mt: 2, width: "80%"}}  
                  //  onClick={() => {
                             
                  //            if (approvedRef) {
                  //                handleDeposit()
                  //            } else{
                  //                handleApprove()
                  //            }
                  //        }}
                         >
                 
                  {/* {approvedRef? 'Deposit' : 'Approve'} */}
                  </Button>
                 </Grid>
                 <Grid xs={12} sm={12} md={3}  lg={3}>
                 <Stack spacing={2}>
                    <Typography variant='h5'>
                  Available: 
                  </Typography>
               
                 <TextField  size="small"/>
              
                    </Stack>
                 </Grid>
                 <Grid xs={12} sm={12} md={3} lg={3} container direction="column" justifyContent="center" alignItems="center">
                  <Typography variant='h5'>
                 DFI Vault
                  </Typography>
                  <Button variant='contained' sx={{mt: 2, width: "80%"}} 
                  // onClick={handleWithdraw}
                  >
                 Withdraw
                  </Button>
                 </Grid>
              </Grid>
         </Paper>
      </Box>
     </Grid>
     </>
    );
};

export default ListingDashboard;
