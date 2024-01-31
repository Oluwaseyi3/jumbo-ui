import React from 'react';
import {Grid} from "@mui/material";
import Properties from "../../../shared/metrics/Properties";
import Cities from "../../../shared/metrics/Cities";
import VisitsStatistics from "../../../shared/metrics/VisitsStatistics";
import QueriesStatistics from "../../../shared/metrics/QueriesStatistics";
import PopularAgents from "../../../shared/widgets/PopularAgents";
import CurrentPlan from "../../../shared/widgets/CurrentPlan";
import DealsAnalytics from "../../../shared/metrics/DealsAnalytics";
import PropertiesList from "../../../shared/widgets/PropertiesList";
import RecentActivities1 from "../../../shared/widgets/RecentActivities1";
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button'; 
import axios from "axios"
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';


const ListingDashboard = () => {
    return (
        <>
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
              <Typography variant="h6">
                   Derphi Balance
             </Typography>
              </Box>
              <Box>
              <Typography variant="h6"  sx={{display: "flex", justifyContent: "center", alignItem: "center" }}>
                 0DFI
             </Typography>

              </Box>
             </Paper>
             

             <Paper sx={{display: "flex", justifyContent: "space-between", alignItem: "center" ,  minWidth: "10%", p:1}}>
              <Box sx={{display: "flex", justifyContent: "center", alignItem: "center" }}>
              <img src='https://dex-jet.vercel.app/assets/wallet.png' style={{height: "70px"}}/>
              <Typography variant="h6">
                   Locked rewards
             </Typography>
              </Box>
              <Box>
              <Typography variant="h6">
                 
             </Typography>

              </Box>
             </Paper>
            

             <Paper sx={{display: "flex", justifyContent: "space-between", alignItem: "center" ,   minWidth: "10%", p:1}}>
              <Box sx={{display: "flex", justifyContent: "center", alignItem: "center" }}>
              <img src='https://dex-jet.vercel.app/assets/wallet.png' style={{height: "70px"}}/>
              <Typography variant="h6">
                  Unlocked rewards
             </Typography>
              </Box>
              <Box>
              <Typography variant="h6">
                   Rewards
             </Typography>

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
               
                 <TextField  size="small"/>
              
                    </Stack>
                  </Grid>
                  <Grid xs={12} sm={12} md={3} lg={3} container direction="column" justifyContent="center" alignItems="center">
                  <Typography variant='h5'>
                 DFI Vault
                  </Typography>
                  <Button variant='contained' sx={{mt: 2, width: "80%"}}>
                 Deposit
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
                  <Button variant='contained' sx={{mt: 2, width: "80%"}}>
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
