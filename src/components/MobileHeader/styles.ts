import styled from "styled-components";

import { FiMessageSquare } from "react-icons/fi";

export const Container = styled.div`
  display: flex;
  background: var(--color-link);
  justify-content: space-between;
  align-items: center;
  padding: 0 16px;
  height: 48px;

  z-index: 2;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;

  @media (min-width: 1180px) {
    display: none;
  }
`;

export const ProfileCircle = styled.img`
  width: 28px;
  height: 28px;
  border-radius: 50%;
  border: 1px solid var(--color-icons);
`;

export const SearchInput = styled.input`
  width: 100%;
  padding: 7.5px 8px;
  margin-left: 16px;
  background-color: var(--color-input);
  color: var(color-black);
  font-size: 14px;
  border: none;
  outline: 0;
  border-radius: 2px;

  &:focus, &:hover {
    background-color: var(--color-white);
  }
  
`;

export const MessageIcon = styled(FiMessageSquare)`
  width: 24px;
  height: 24px;
  color: var(--color-white);
  flex-shrink: 0;
  border-radius: 4px;
  margin-left: 17px;
`;
