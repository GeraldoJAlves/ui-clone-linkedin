import React, { useState, useEffect } from "react";

import { Container } from "./styles";
import LeftColumn from "../LeftColumn";
import RightColumn from "../RightColumn";
import MiddleColumn from "../MiddleColumn";
import MobileHeader from "../MobileHeader";
import DesktopHeader from "../DesktopHeader";
import AdBanner from "../AdBanner";

const Layout: React.FC = () => {

  const [isLoading, setIsLoading] = useState(true);

  useEffect( () => {
    setTimeout( () => {
       setIsLoading(true);
    }, 2000);
  },[]);

  return (
    <Container>
      <MobileHeader />
      <DesktopHeader />
      <span>
        <AdBanner />
      </span>
      <main>
        <LeftColumn isLoading={isLoading} />
        <MiddleColumn isLoading={isLoading} />
        <RightColumn isLoading={isLoading} />
      </main>
    </Container>
  );
};

export default Layout;