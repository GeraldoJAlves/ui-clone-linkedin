import styled from "styled-components";

export const Container = styled.div`

  > div {
    display: flex;
    flex-direction: column;
    padding: 40px 40px 40px 12px;

    > .row-skeleton {
      height: 12px;

      &:first-child {
        width: 100%;
        margin-bottom: 20px;
      }
      &:last-child {
        width: 90%;
      }
    }
  }
`;
