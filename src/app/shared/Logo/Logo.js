import React from 'react';
import Div from "@jumbo/shared/Div";
import Link from "@mui/material/Link";
import {ASSET_IMAGES} from "../../utils/constants/paths";
import derpfismall from "../../../images/derpfismall.png"


const Logo = ({mini, mode, sx}) => {
    return (
        <Div sx={{display: "inline-flex", ...sx}}>
            <Link href={'/dashboards/misc'}>
                {/* {
                    !mini ?
                        <img src={ mode === "light" ? `${ASSET_IMAGES}/logo.png` : `${ASSET_IMAGES}/logo-white.png`} alt="Jumbo React" />
                        :
                        <img src={mode === "light" ? `${ASSET_IMAGES}/logo-short.png` : `${ASSET_IMAGES}/logo-short-white.png`} alt="Jumbo React" />
                } */}
                <img src={derpfismall} alt="logo" style={{height: "100px"}}/>
            </Link>
        </Div>
    );
};

Logo.defaultProps = {
    mode: "light"
};

export default Logo;
