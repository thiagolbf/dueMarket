import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { UsersContext } from "../../providers/Users";
import { HeaderFix, Header, Mobile, Nav } from "./style";

export const HeaderComponent = () => {
  const [navMobile, setNavMobile] = useState(true);
  const nav = useNavigate()
  const { token, logout } = useContext(UsersContext)
  const isLogged = !!token

  return (
    <>
      <HeaderFix />
      <Header>
        <h1 onClick={()=>nav('/')}>dueMarket</h1>
        <Mobile onClick={() => setNavMobile(!navMobile)} active={navMobile}>
          <span />
          <span />
          <span />
        </Mobile>
        <Nav active={navMobile}>
          <div>
            {isLogged ? <>
              <button onClick={()=>nav('/user')}>Usuário</button>
            </>
            :
            <button onClick={()=>nav('/login')}>Login</button> 
          }
          </div>
          <div>
            <button onClick={()=>nav('/markets')}>Mercados Parceiros</button>
          </div>
          <div>
            <button onClick={()=>nav('/aboutus')}>Sobre Nós</button>
          </div>
          {
            isLogged &&
            <div>
              <button onClick={logout}>Sair</button>
            </div>
          }
        </Nav>
      </Header>
    </>
  );
};
