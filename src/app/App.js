import React, {Suspense} from "react";
import {Provider} from "react-redux";
import {BrowserRouter} from "react-router-dom";
import {QueryClient, QueryClientProvider} from "react-query";
import JumboApp from "@jumbo/components/JumboApp";
import AppLayout from "./AppLayout";
import JumboTheme from "@jumbo/components/JumboTheme";
import AppRoutes from "./AppRoutes";
import configureStore, {history} from './redux/store';
import JumboDialog from "@jumbo/components/JumboDialog";
import JumboDialogProvider from "@jumbo/components/JumboDialog/JumboDialogProvider";
import {SnackbarProvider} from "notistack";
import "./services/apis";
import AppProvider from "./AppProvider";
import {config} from "./config/main";
import JumboRTL from "@jumbo/JumboRTL/JumboRTL";
import Div from "@jumbo/shared/Div";
import {CircularProgress} from "@mui/material";
import JumboAuthProvider from "../@jumbo/components/JumboAuthProvider/JumboAuthProvider";

import { Mainnet, DAppProvider, useEtherBalance, useEthers, Config, Goerli , Polygon} from '@usedapp/core'
import { formatEther } from '@ethersproject/units'
import { getDefaultProvider } from 'ethers'
import * as ethers from 'ethers';


const queryClient = new QueryClient({
    defaultOptions: {
        queries: {
            refetchOnWindowFocus: false,
        },
    },
});

const store = configureStore();


const configs = {
    readOnlyChainId: Polygon.chainId,
    readOnlyUrls: {
      [Polygon.chainId]: new ethers.providers.StaticJsonRpcProvider('https://rpc.ankr.com/polygon'),
    },
  };

  console.log(configs)


function App() {
    return (
  
        <DAppProvider config={configs}>
        <QueryClientProvider client={queryClient}>
            <Provider store={store}>
                <BrowserRouter history={history}>
                    <AppProvider>
                        <JumboApp activeLayout={config.defaultLayout}>
                            <JumboTheme init={config.theme}>
                                <JumboRTL>
                                    <JumboDialogProvider>
                                        <JumboDialog/>
                                        <SnackbarProvider
                                            anchorOrigin={{
                                                vertical: 'bottom',
                                                horizontal: 'right',
                                            }}
                                            maxSnack={3}>
                                            <JumboAuthProvider>
                                                <AppLayout>
                                                    <Suspense
                                                        fallback={
                                                            <Div
                                                                sx={{
                                                                    display: 'flex',
                                                                    minWidth: 0,
                                                                    alignItems: 'center',
                                                                    alignContent: 'center',
                                                                    height: '100%',
                                                                }}
                                                            >
                                                                <CircularProgress sx={{m: '-40px auto 0'}}/>
                                                            </Div>
                                                        }
                                                    >
                                                        <AppRoutes/>
                                                    </Suspense>
                                                </AppLayout>
                                            </JumboAuthProvider>
                                        </SnackbarProvider>
                                    </JumboDialogProvider>
                                </JumboRTL>
                            </JumboTheme>
                        </JumboApp>
                    </AppProvider>
                </BrowserRouter>
            </Provider>
        </QueryClientProvider>
        </DAppProvider>
    );
}

export default App;
