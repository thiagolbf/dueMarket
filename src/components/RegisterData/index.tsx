import { Dispatch, SetStateAction, useState } from "react"
import { RegisterData } from "./style"
import { FaPencilAlt } from 'react-icons/fa'
import { GrFormNext, GrFormClose } from 'react-icons/gr'

interface RegisterDataComponentProps {
    setActiveRD: Dispatch<SetStateAction<boolean>>
    activeRD: boolean
}

export const RegisterDataComponent = ({setActiveRD, activeRD}: RegisterDataComponentProps) => {
    const [edit, setEdit] = useState(false)
    return <RegisterData active={activeRD} edit={edit}>
        <div>
            <button onClick={()=>setActiveRD(false)}><GrFormNext/></button>
            <h2>Dados cadastrais</h2>
            <button onClick={()=>setEdit(!edit)}>
                {edit ? 
                    <GrFormClose/>
                :
                    <FaPencilAlt/>
                }
            </button>
        </div>
        <div>
            <p>Maria Joana</p>
            <p>maria@kenzie.com</p>
            <p>123.456.789-10</p>
            <p>
                Av. John Sanford,<br />
                Junco, Sobral - CE<br />
                62030-975<br />
            </p>
        </div>
        <div>
            <input type="text" placeholder="Maria Joana"/>
            <input type="email" placeholder="maria@kenzie.com"/>
            <input type="text" placeholder="123.456.789-10"/>
            <input type="text" placeholder="62030-975"/>
            <div>
                <button>Salvar</button>
                <button onClick={()=>setEdit(false)}>Cancelar</button>
            </div>
        </div>
    </RegisterData>
}