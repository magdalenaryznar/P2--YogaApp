import React from "react";
import Boho from "../video/Boho.mp4";

const Settings = () => {
    return (
        <div>
            <video autoPlay loop muted
                style={{


                    width: "100%",

                    height: "100%",
                    objectFir: "cover",

                    zIndex: "-1",


                }}
            >


                <source src={Boho} type="video/mp4" />

            </video>
        </div>
    )
}


export default Settings