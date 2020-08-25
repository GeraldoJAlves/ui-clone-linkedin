import styled, {css} from 'styled-components';


import { GrLinkedin } from 'react-icons/gr';

import { AiFillHome, AiOutlineBell, AiFillCaretDown } from 'react-icons/ai';

export const Container = styled.div`
  display: flex;
  justify-content:center;
  align-items: center;
  background-color: var(--color-header);
  height: 48px;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
`;

export const Wrapper = styled.div`
  display: flex;
`;

export const SearchInput = styled.input`

`;

export const ProfileCircle = styled.img`
  width: 28px;
  height: 28px;
  border-radius: 50%;
  border: 1px solid var(--color-icons);
`;

const generalIconCSS = css`
  width: 24px;
  height: 24px;
`;

export const LinkendInIcon = styled(GrLinkedin)`
  ${generalIconCSS}
`;

export const HomeIcon = styled(AiFillHome)`
  ${generalIconCSS}
`;

export const CareDownIcon = styled(AiFillCaretDown)`
  ${generalIconCSS}
`;

export const NotificationIcon = styled(AiOutlineBell)`
  ${generalIconCSS}
`;

