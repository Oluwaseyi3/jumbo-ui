import React from 'react';
import {Grid} from "@mui/material";
import SalesOverview from "../../../shared/metrics/SalesOverview";
import Documents1 from "../../../shared/widgets/Documents1";
import Ideas1 from "../../../shared/widgets/Ideas1";
import UserOrders from "../../../shared/metrics/UserOrders";
import UserSummary from "../../../shared/widgets/UserSummary";
import ScheduleCard from "../../../shared/widgets/ScheduleCard";
import UserProfileCard1 from "../../../shared/widgets/UserProfileCard1";
import NewConnections from "../../../shared/widgets/NewConnections";
import RecentActivities from "../../../shared/widgets/RecentActivities";
import LastMonthSales from "../../../shared/metrics/LastMonthSales";
import OnlineSignupsFilled from "../../../shared/metrics/OnlineSignupsFilled";
import NewVisitorsThisMonth from "../../../shared/metrics/NewVisitorsThisMonth";
import TotalRevenueThisYear from "../../../shared/metrics/TotalRevenueThisYear";
import UpgradePlan from "../../../shared/widgets/UpgradePlan";
import SalesReport1 from "../../../shared/metrics/SalesReport1";
import WordOfTheDay from "../../../shared/widgets/WordOfTheDay";
import OurOffice1 from "../../../shared/widgets/OurOffice1";
import UserProfileAction from "../../../shared/widgets/UserProfileAction";
import PopularProducts from "../../../shared/widgets/PopularProducts";
import ProjectsListCard from "../../../shared/widgets/ProjectsListCard";
import ProductImage from "../../../shared/widgets/ProductImage";
import ExplorePlaceCard from "../../../shared/widgets/ExplorePlaceCard";
import MarkerClusterer from "../../maps/MarkerClusterer";
import AppUsers from "../../../shared/metrics/AppUsers";
import CafeStore1 from "../../../shared/widgets/CafeStore1";
import LatestAlerts from "../../../shared/widgets/LatestAlerts";
import DailyFeed from "../../../shared/widgets/DailyFeed";
import Typography from '@mui/material/Typography';
import derpfi from "../../../../images/derpfi.png"
import staking_boxes from "../../../../images/staking_boxes.svg"
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import derpfismall from "../../../../images/derpfismall.png"
import polygon from "../../../../images/polygon.png"
import LAPTOP from "../../../../images/LAPTOP.png"
import Stack from '@mui/material/Stack';
import boxes from "../../../../images/boxes.svg"

const MiscDashboard = () => {
    return (
       <main>
          <Grid container spacing={2} sx={{minHeight: 350, height: "50%"}}> 
          <Grid item lg={6}  xs={12}  container direction="column"  justifyContent="start" alignItems="center">
           <Box sx={{mt: 3}}>
           <img src={boxes} style={{height:" 200px"}}/>
           <Typography variant="h4">
           Derpfi is redefining passive asset management. We're a community-governed project offering full exposure to crypto risk-management and the DeFi ecosystem through passively managed, non-custodial funds and indices.
           </Typography>
           </Box>
          </Grid>

          <Grid  item lg={6}  xs={12} container direction="row"  justifyContent="center" alignItems="start">
            <Box sx={{height: 400}}>
            <img src={derpfi} style={{height:"100%"}}/>
            </Box>
          </Grid>
          </Grid>



          <Grid container spacing={2}> 
          <Grid item lg={6}  xs={12}  container direction="column"  justifyContent="start" alignItems="start">
           <Box sx={{mt: 3}}>
           {/* <img src={staking_boxes} style={{height:" 150px"}}/> */}
           <Typography variant="h1">
           Earn rewards for active participation
           </Typography>

           <Typography variant="h7">
           At Derpfi, we decided to distribute governance tokens in return for active community participation. With no private investment, presale or ICO, all tokens are being distributed fairly and deterministically to individuals actively supporting our mission.
           </Typography>
           </Box>
          </Grid>

          
          <Grid item lg={6}  xs={12}   direction="column"  justifyContent="center" alignItems="center" >
           
          <Paper container elevation={8} sx={{width: "100%", maxWidth: 500, p: 3, maxHeight: 80, mt: 5}} square={false}>
               
             <Box sx={{display: "flex", justifyContent: "space-evenly", flexDirection: "row", alignItems: "start", }}>
                 <Box>
                <img src={derpfismall} style={{height: "40px"}}/>
                <img src={polygon} style={{height: "40px"}}/>
                </Box>
                
                 <Box sx={{display: "flex", justifyContent: "center", flexDirection: "column", alignItems: "start" }}>
                 <Typography variant="h3">
                    Derpfi
                   </Typography>  

                   <Typography variant="h7">
                   DFI-Matic
                   </Typography>  
                 </Box>

                 <Box>
                 <Typography variant="h4">
                    APY
                  </Typography>  
                 </Box>
              </Box>
             </Paper>

             <Paper container elevation={8} sx={{width: "100%", maxWidth: 500, p: 3, maxHeight: 80, mt: 5}} square={false}>
               
               <Box sx={{display: "flex", justifyContent: "space-evenly", flexDirection: "row", alignItems: "start", }}>
                   <Box>
                  <img src={derpfismall} style={{height: "40px"}}/>
                  <img src={polygon} style={{height: "40px"}}/>
                  </Box>
                  
                   <Box sx={{display: "flex", justifyContent: "center", flexDirection: "column", alignItems: "start" }}>
                   <Typography variant="h3">
                      bDerpfi Index
                     </Typography>  
  
                     <Typography variant="h7">
                     bDerpfi-Matic
                     </Typography>  
                   </Box>
  
                   <Box>
                   <Typography variant="h4">
                      APY
                    </Typography>  
                   </Box>
                </Box>
               </Paper>
  
              
             <Paper container elevation={8} sx={{width: "100%", maxWidth: 500, p: 3, maxHeight: 80, mt: 5}} square={false}>
               
               <Box sx={{display: "flex", justifyContent: "space-evenly", flexDirection: "row", alignItems: "start", }}>
                   <Box>
                  <img src={derpfismall} style={{height: "40px"}}/>
                  <img src={polygon} style={{height: "40px"}}/>
                  </Box>
                  
                   <Box sx={{display: "flex", justifyContent: "center", flexDirection: "column", alignItems: "start" }}>
                   <Typography variant="h3">
                      bChain Index
                     </Typography>  
  
                     <Typography variant="h7">
                     bChain-Matic
                     </Typography>  
                   </Box>
  
                   <Box>
                   <Typography variant="h4">
                      APY
                    </Typography>  
                   </Box>
                </Box>
               </Paper>
  

           </Grid>  
        
          </Grid>

          <Grid container spacing={2} sx={{mt: 4, mb: 4}}> 
          <Grid item lg={6}  xs={12}  container direction="column"  justifyContent="start" alignItems="start">
          <Box sx={{height: 300}}>
            <img src={LAPTOP} style={{height:"100%"}}/>
            </Box>
         </Grid>

         <Grid item lg={6}  xs={12}  container direction="row"  justifyContent="start" alignItems="center">
              <Box>
              <Typography variant="h1" sx={{p:4}}>
         A dao,<br/>
that comes in boxes
                    </Typography>  
              </Box>

                   <Box>
                   <img src={boxes} style={{height:"100%"}}/>
                   </Box>
         </Grid>
         </Grid>
       </main>
    );
};

export default MiscDashboard;
