import { useState } from 'react'
import { HeaderFix, Header, Mobile, Nav } from "./style"

export const HeaderComponent = () => {
    const [navMobile, setNavMobile] = useState(true)
    return <>
        <HeaderFix/>
        <Header>
            <h1>dueMarket</h1>
            <Mobile 
                onClick={()=>setNavMobile(!navMobile)}
                active={navMobile}
            >
                <span />
                <span />
                <span />
            </Mobile>
            <Nav active={navMobile}>
                <div>
                    <button>Usuário</button>
                </div>
                <div>
                    <button>Mercados Parceiros</button>
                </div>
                <div>
                    <button>Sobre Nós</button>
                </div>
            </Nav>
        </Header>
    </>
}