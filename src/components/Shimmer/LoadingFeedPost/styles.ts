import styled from "styled-components";

export const Container = styled.div`
  margin-top: 8px;

  @media (min-width: 1180px) {
    margin-top: 16px;
  }

  > div {
    padding: 15px 40px 50px 12px;
    > header {
      display: flex;

      > .avatar-skeleton {
        width: 48px;
        height: 48px;
        border-radius: 50%;
        flex-shrink: 0;
      }

      > .column {
        display: flex;
        flex-direction: column;
        justify-content: space-around;
        padding-left: 15px;
        flex: 1;
        .row-skeleton {
          height: 12px;
          &:first-child {
            width: 30%;
          }
          &:last-child {
            width: 55%;
          }
        }
      }
    }
    > span {
      margin-top: 30px;
      display: flex;
      flex-direction: column;
      .row-skeleton {
        height: 12px;

        &:first-child {
          width: 100%;
          margin-bottom: 10px;
        }
        &:last-child {
          width: 90%;
        }
      }
    }
  }
`;
