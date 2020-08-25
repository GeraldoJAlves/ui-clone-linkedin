import React from "react";

import {
  Container,
  Wrapper,
  LinkendInIcon,
  SearchInput,
  HomeIcon,
  NotificationIcon,
  ProfileCircle,
  CareDownIcon,
} from "./styles";

const DesktopHeader: React.FC = () => {
  return (
    <Container>
      <Wrapper>
        <div className="left">
          <LinkendInIcon />
          <SearchInput placeholder="Pesquisar" />
        </div>
        <div className="right">
          <nav>
            <button className="active">
              <HomeIcon />
              <span>Início</span>
            </button>
            <button>
              <NotificationIcon />
              <span>Notificações</span>
            </button>
            <button>
              <ProfileCircle src="https://avatars1.githubusercontent.com/u/11468921?s=460&v=4" />
              <span>
                Eu <CareDownIcon />
              </span>
            </button>
          </nav>
        </div>
      </Wrapper>
    </Container>
  );
};

export default DesktopHeader;
