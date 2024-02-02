import React, {useEffect , useState, useRef } from 'react';
import {Grid} from "@mui/material";
import BitcoinPrice from "./components/BitcoinPrice";
import RipplePrice from "./components/RipplePrice";
import EthereumPrice from "./components/EthereumPrice";
import LitecoinPrice from "./components/LitecoinPrice";
import PortfolioBalance from "../../../shared/metrics/PortfolioBalance";
import EarningExpenses from "../../../shared/metrics/EarningExpenses";
import WordOfTheDay1 from "../../../shared/widgets/WordOfTheDay1";
import EarnRewardCard from "../../../shared/widgets/EarnRewardCard";
import CurrencyCalculator from "../../../shared/widgets/CurrencyCalculator";
import LatestPosts from "../../../shared/widgets/LatestPosts";
import MarketingCampaign from "../../../shared/widgets/MarketingCampaign";
import CryptoNews from "../../../shared/widgets/CryptoNews";

import { Mainnet, DAppProvider, useEtherBalance, useEthers, useTokenBalance , useSigner,  Polygon, useContractFunction} from '@usedapp/core'
import boxes from "../../../../images/boxes.svg"

import BundleToken from "../contracts/BundleToken.json"
import VaultABI from "../contracts/VaultABI.json"
import { formatUnits } from '@ethersproject/units'
import { Contract } from '@ethersproject/contracts';
import {ethers} from "ethers"

import Stack from '@mui/material/Stack';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button'; 
import axios from "axios"
import Typography from '@mui/material/Typography';
import PropTypes from 'prop-types';
import SwipeableViews from 'react-swipeable-views';
import { useTheme } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import {  useSendTransaction} from '@usedapp/core'
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';




function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`full-width-tabpanel-${index}`}
      aria-labelledby={`full-width-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};


function a11yProps(index) {
  return {
    id: `full-width-tab-${index}`,
    'aria-controls': `full-width-tabpanel-${index}`,
  };
}

const CryptoDashboard = () => {

  const theme = useTheme();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const handleChangeIndex = (index) => {
    setValue(index);
  };
    
    const [lpPrice, setLPPrice] = useState(0);
    const [lpPriceNative, setLPPriceNative] = useState(0);
    
const [lpPriceData, setLPPriceData] = useState(0);

const [amountInEther, setAmountInEther] = useState('0')
const [receiptStatus, setReceiptStatus] = useState(false)

const { account, deactivate, activateBrowserWallet, library } = useEthers()
const approvedRef = useRef(false);

    
    useEffect(() => {
      const fetchLPPriceData = async () => {
        const url = `https://api.dexscreener.com/latest/dex/pairs/polygon/0x9677EBFc82d1cd10220129579fd5436434CA5811`;
  
        try {
          const response = await axios.get(url);
        //   console.log(response)
          const priceData = response.data.pairs[0].priceUsd;
          const  second = response.data.pairs
          setLPPriceData(second)
              const test = response.data.pairs[0].priceChange.h24
              setLPPriceData(test)
              console.log(test)
          const priceNative = response.data.pairs[0].volume.h24;
          console.log(priceData)
          setLPPrice(priceData);
          setLPPriceNative(priceNative)
        } catch (error) {
          console.error(error);
        }
      };
  
      fetchLPPriceData();
      
    }, []);

    const today = new Date();
    const day = today.getDate();
    const month = today.getMonth() + 1;

 //  const data = [
 //     { name: `${day}/${month}`, value: lpPrice},

 //   ];

 const data = [
     {
       name: `${day}/${month}`,
       uv: 0,
    
  
     },
     {
         name: `${day}/${month}`,
         uv: lpPrice,
        
    
       },

       {
         name: `${day}/${month}`,
         uv: lpPrice,
        
    
       },
       
 
   ];

   const { sendTransaction } = useSendTransaction()

   const fromTokenContract = new Contract("0x4987131473ccC84FEdbf22Ab383b6188D206cc9C", BundleToken)
   const { state, send: sendApprove } = useContractFunction(fromTokenContract, 'approve',  { transactionName: 'approve' });
   
   const vaultAddress = '0xf6f6928cac8e59b2b12216282a3f2cd5a2b366c0'

const signer = useSigner()   

   const tokenContract = new ethers.Contract(vaultAddress, VaultABI, signer)
   const handleApprove = () => {  
   
     const amountInWei = ethers.utils.parseEther(amountInEther); 
       sendApprove("0x4987131473ccC84FEdbf22Ab383b6188D206cc9C", amountInWei.toString())
      approvedRef.current = true;
      };

      const handleDeposit = async() => {

        try {     
     const amountInWei = ethers.utils.parseEther(amountInEther); 
    const txResponse = await tokenContract.mint(amountInWei);
        const receipt = await txResponse.wait()
        } catch (error) {
           console.log(error)
        }
      }

    return (
       <main>
         <Grid container spacing={5} sx={{mt: 5, p: 3}}>
        <Grid xs={12} md={8}>
          <Typography variant='h1'>DFI Chart</Typography>
        </Grid>

        <Grid xs={12} md={12} lg={4}>
          <Grid container sx={{mt: 5}}>
          <Grid xs={3}  container direction="column" justifyContent="center" alignItems="center" spacing={2}>
                 <Typography variant='h6'>Price</Typography>
                 <Typography variant='h1'>${lpPrice}</Typography>
        </Grid>

        <Grid xs={3}  container direction="column" justifyContent="center" alignItems="center" spacing={2}>
                 <Typography variant='h6'>24H</Typography>
                 <Typography variant='h1'>${lpPriceNative}</Typography>
        </Grid>

                  <Grid xs={3}  container direction="column" justifyContent="center" alignItems="center" spacing={2}>
                 <Typography variant='h6'>Market Cap</Typography>
                 <Typography variant='h1'>0.0</Typography>
        </Grid>
                 <Grid xs={3}  container direction="column" justifyContent="center" alignItems="center" spacing={2}>
                 <Typography variant='h6'>NAV</Typography>
                 <Typography variant='h1'>0.0</Typography>
        </Grid>
          </Grid>
           
       </Grid>
       
      </Grid>
      <Grid container spacing={5} sx={{mt: 5, p: 3}}>

      <Grid xs={12} md={6} lg={6}>
        <Box sx={{height: 400}}> 
        <ResponsiveContainer width="100%" height="100%">
        <AreaChart
          width={500}
          height={400}
          data={data}
          margin={{
            top: 10,
            right: 30,
            left: 0,
            bottom: 0,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Area type="monotone" dataKey="uv" stroke="#8884d8" fill="#8884d8" />
        </AreaChart>
      </ResponsiveContainer>
        </Box>
   
        </Grid>

        <Grid xs={12} md={6} lg={6}>
        <Box sx={{ bgcolor: 'background.paper', width: 500 , height: 300}}>
      <AppBar position="static">
        <Tabs
          value={value}
          onChange={handleChange}
          indicatorColor="secondary"
          textColor="inherit"
          variant="fullWidth"
          aria-label="full width tabs example"
        >
          <Tab label="Mint" {...a11yProps(0)} />
          <Tab label="Redeem" {...a11yProps(1)} />
          
        </Tabs>
      </AppBar>
      <SwipeableViews
        axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
        index={value}
        onChangeIndex={handleChangeIndex}
      >
        <TabPanel value={value} index={0} dir={theme.direction}>
         <Box sx={{width: "100%", height: "100%"}}>
         <Stack spacing={5}>
         {/* <Paper > */}
         <TextField sx={{height: 60, width: "100%"}}  id="outlined-basic" label="Amount" variant="outlined" />
         {/* </Paper> */}

          <Button variant="contained">
            Mint a maximum of 10 DFI tokens
          </Button>
      </Stack>
         </Box>
        </TabPanel>
        <TabPanel value={value} index={1} dir={theme.direction}>
        <Box sx={{width: "100%", height: "100%"}}>
         <Stack spacing={5}>
         {/* <Paper > */}
         <TextField sx={{height: 60, width: "100%"}}  id="outlined-basic" label="Amount" variant="outlined" 
                      value={amountInEther}
                      onChange={(e) => setAmountInEther(e.target.value)}
         />
         {/* </Paper> */}

          <Button variant="contained" 
            onClick={() => {
                             
              if (approvedRef) {
                  handleDeposit()
              } else{
                  handleApprove()
              }
          }}
          >
            Redeem Tokens
          </Button>
      </Stack>
         </Box>
        </TabPanel>
       
      </SwipeableViews>
    </Box>
        </Grid>
      </Grid>
       </main>
    );
};

export default CryptoDashboard;
