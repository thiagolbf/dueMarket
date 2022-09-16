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

interface RegisterDataPros {
    name: string
    email: string
    cpf?: string
    cnpj?: string
    cep: string
    image: string
}

export const RegisterDataComponent = ({setActiveRD, activeRD, cnpj, cpf, name, email, street, city, district, state, cep, userType, image}: RegisterDataComponentProps) => {
    const [edit, setEdit] = useState(false)
    const [nameForm, setNameForm] = useState(name)
    const [cpfCnpjForm, setCpfCnpfForm] = useState(cpf ? cpf : cnpj)
    const [emailForm, setEmailForm] = useState(email)
    const [cepForm, setCepForm] = useState(cep)
    const [imageForm, setImageForm] = useState(image)
    const handleEvent = () => {
        const objComun = {
            name: nameForm,
            email: emailForm,
            cep: cepForm
        }
        const objUser = userType === "cliente" ? 
        {cpf: cpfCnpjForm} 
        : 
        {
            cnpj: cpfCnpjForm,
            image: imageForm
        }
        console.log({
            ...objComun,
            ...objUser
        })
    }

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
            <input 
                type="text" 
                placeholder={name}
                onChange={({target})=>setNameForm(target.value === "" ? name : target.value)}
            />
            <input 
                type="email" 
                placeholder={email}
                onChange={({target})=>setEmailForm(target.value === "" ? email : target.value)}
            />
            <input 
                type="text" 
                placeholder={cep}
                onChange={({target})=>setCepForm(target.value === "" ? name : target.value)}
            />
            <input 
                type="text" 
                placeholder={userType === 'cliente' ? cpf : cnpj}
                onChange={({target})=>setCpfCnpfForm(target.value === "" ? userType === 'cliente' ? cpf : cnpj : target.value)}
            />
            {userType === "mercado" && <input 
                type='text' 
                placeholder={image}
                onChange={({target})=>setImageForm(target.value === "" ? image : target.value)}
            />}
            <div>
                <Button dataBlue onClick={handleEvent}>
                    Salvar
                </Button>
                <Button dataGrey onClick={()=>setEdit(false)}>
                    Cancelar
                </Button>
            </div>
        </div>
    </RegisterData>
}