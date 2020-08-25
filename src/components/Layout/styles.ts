import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 100%;

  .left-column,
  .right-column {
    display: none;
  }

  @media (min-width: 1180px) {
    > main {
      display: flex;
      margin: 0 30px;
      justify-content: center;
    }

    .left-column,
    .right-column {
      display: unset;
    }

    .middle-column {
      margin: 0px 25px 16px;
    }
  }
`;
