import React from "react";
import Hero from "./Hero";
import LeftImg from "./LeftImg";
import RightImg from "./RightImg";
import Universe from "./Universe";

function ProductPage() {
  return (
    <>
      <Hero />
      <LeftImg
        imgUrl="media/images/kite.png"
        productName="Kite"
        description="Our ultra-fast flagship trading platform with streaming market data, advanced charts, an elegant UI, and more. Enjoy the Kite experience seamlessly on your Android and iOS devices."
        typeDemoLink="#"
        learnMoreLink="#"
        googlePlayImg="media/images/googlePlayBadge.svg"
        appStoreImg="media/images/appstoreBadge.svg"
      />
      <RightImg
        imgUrl="media/images/console.png"
        productName="Console"
        description="The central dashboard for your Zerodha account. Gain insights into your trades and investments with in-depth reports and visualisations."
        link="#"
        linkName="Learn more"
      />
      <LeftImg
        imgUrl="media/images/coin.png"
        productName="Coin"
        description="Buy direct mutual funds online, commission-free, delivered directly to your Demat account. Enjoy the investment experience on your Android and iOS devices.s"
        typeDemoLink="#"
        learnMoreLink="#"
        googlePlayImg="media/images/googlePlayBadge.svg"
        appStoreImg="media/images/appstoreBadge.svg"
      />
      <RightImg
        imgUrl="media/images/kiteconnect.png"
        productName="Kite Connect API"
        description="Build powerful trading platforms and experiences with our super simple HTTP/JSON APIs. If you are a startup, build your investment app and showcase it to our clientbase."
        link="#"
        linkName="Kite connect"
      />
      <LeftImg
        imgUrl="media/images/varsity.png"
        productName="Varsity mobile"
        description="An easy to grasp, collection of stock market lessons with in-depth coverage and illustrations. Content is broken down into bite-size cards to help you learn on the go."
        typeDemoLink="#"
        learnMoreLink="#"
        googlePlayImg="media/images/googlePlayBadge.svg"
        appStoreImg="media/images/appstoreBadge.svg"
      />

      <Universe />
    </>
  );
}

export default ProductPage;
