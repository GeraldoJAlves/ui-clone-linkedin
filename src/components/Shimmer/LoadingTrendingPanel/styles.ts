import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  margin-bottom: 23px;

  .square-skeleton {
    width: 48px;
    height: 48px;
    border-radius: 2px;
  }

  > span {
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    padding-left: 10px;
    flex: 1;

    .row-skeleton {
      height: 12px;

      &:first-child {
        width: 50%;
      }

      &:last-child {
        width: 100%;
      }
    }
  }
`;
