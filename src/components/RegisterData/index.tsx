import { Dispatch, SetStateAction, useState } from "react"
import { RegisterData } from "./style"
import { FaPencilAlt } from 'react-icons/fa'
import { GrFormNext, GrFormClose } from 'react-icons/gr'
import { Button } from "../Button"

interface RegisterDataComponentProps {
    activeRD: boolean
    setActiveRD: Dispatch<SetStateAction<boolean>>
    cep: string
    city: string
    street: string
    name: string
    email: string
    cpf?: string
    cnpj?: string
    state: string
    district: string
    image?: string
    userType: string
}

export const RegisterDataComponent = ({setActiveRD, activeRD, cnpj, cpf, name, email, street, city, district, state, cep, userType, image}: RegisterDataComponentProps) => {
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
            <p>{name}</p>
            <p>{email}</p>
            <p>{userType === 'cliente' ? cpf : cnpj}</p>
            <p>
                {street},<br />
                {district}, {city} - {state}<br />
                {cep}<br />
            </p>
            {userType === "mercado" && <img src={image} alt={name} />}
        </div>
        <div>
            <input type="text" placeholder={name}/>
            <input type="email" placeholder={email}/>
            <input type="text" placeholder={cep}/>
            <input type="text" placeholder={userType === 'cliente' ? cpf : cnpj}/>
            {userType === "mercado" && <input type='text' placeholder={image}/>}
            <div>
                <Button dataBlue >Salvar</Button>
                <button onClick={()=>setEdit(false)}>Cancelar</button>
            </div>
        </div>
    </RegisterData>
}