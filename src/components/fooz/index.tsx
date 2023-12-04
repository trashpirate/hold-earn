import React from "react";
import { BiBorderRadius } from "react-icons/bi";
import Iframe from "react-iframe";

type Props = {};

export default function Fooz({}: Props) {
  return (
    <div>
      <Iframe
        width="320"
        height="750"
        display="inline"
        styles={{ borderRadius: "15px", borderWidth: "0px" }}
        allow="clipboard-read *; clipboard-write *; web-share *; accelerometer *; autoplay *; camera *; gyroscope *; payment *; geolocation *"
        url="https://flooz.xyz/embed/trade?swapDisabled=false&swapToTokenAddress=0x0b61C4f33BCdEF83359ab97673Cb5961c6435F4E&swapLockToToken=false&onRampDisabled=false&onRampAsDefault=false&onRampTokenAddress=eth&stakeDisabled=true&network=eth&lightMode=false&primaryColor=%23ffa200&backgroundColor=transparent&roundedCorners=10&padding=20&refId=Q0blsH"
      ></Iframe>
    </div>
  );
}
