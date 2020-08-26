import React from 'react';

import { Container } from './styles';

const AdBanner: React.FC<LoadingProps> = ({isLoading}) => {
  return (
    <Container className="ad-banner">
      {isLoading ? (
        ''
      ):(
        <>
        <span>Rocketseat - </span>
        Interface reproduzida em busca do próximo nível.
        </>
      )}
    </Container>
  );
};

export default AdBanner;
