import React from "react";

import { Container } from "./styles";
import Skeleton from "../../Skeleton";

const LoadingTrendingPanel: React.FC = () => {
  return (
    <Container>
      <Skeleton className="square-skeleton white" />
      <span>
        <Skeleton className="row-skeleton white" />
        <Skeleton className="row-skeleton white" />
      </span>
    </Container>
  );
};

export default LoadingTrendingPanel;
