import { Dispatch, SetStateAction, useContext, useState } from "react"
import { RegisterData } from "./style"
import { FaPencilAlt } from 'react-icons/fa'
import { GrFormNext, GrFormClose } from 'react-icons/gr'
import { Button } from "../Button"
import { UsersContext } from "../../providers/Users"
import * as yup from 'yup'
import { yupResolver } from "@hookform/resolvers/yup"
import { useForm } from "react-hook-form"

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

interface NewUser {
    name: string,
    email: string,
    cep: string,
    cpf?: string,
    cnpj?: string,
    image?: string
}

export const RegisterDataComponent = ({setActiveRD, activeRD, cnpj, cpf, name, email, street, city, district, state, cep, userType, image}: RegisterDataComponentProps) => {
    const [edit, setEdit] = useState(false)
    const { patchUser, token, userId } = useContext(UsersContext)

    const userSchema = yup.object().shape({
        name: yup.string().transform((value)=>value ? value : name),
        cpf: yup
            .string()
            .transform((value)=>value ? value : cpf)
            .min(11, "Minimo de 11 números")
            .max(11, "Colocar apenas 11 números"),
        cep: yup
            .string()
            .transform((value)=>value ? value : cep)
            .min(8, "Minimo de 8 números")
            .max(8, "Colocar apenas 8 números"),
        email: yup.string().transform((value)=>value ? value : name).email("Email invalido"),
    });

    const marketSchema = yup.object().shape({
        name: yup.string()
        .transform((value)=>value ? value : name),
        cnpj: yup
            .string()
            .transform((value)=>value ? value : cnpj)
            .min(14, "Minimo de 14 números")
            .max(14, "Colocar apenas 14 números"),
        cep: yup
            .string()
            .transform((value)=>value ? value : cpf)
            .min(8, "Colocar apenas 8 números")
            .max(8, "Colocar apenas 8 números"),
        email: yup.string()
        .transform((value)=>value ? value : cpf)
        .email("Email invalido"),
        image: yup.string()
        .transform((value)=>value ? value : cpf)
    });

    const {
        register,
        handleSubmit,
        formState: { errors },
        reset
    } = useForm<NewUser>({ resolver: yupResolver(userType === "cliente" ? userSchema : marketSchema) });

    const handleEvent = (data: NewUser) => {
        patchUser(data, token, userId)
        setEdit(false)
        reset({
            email: "",
            name: "",
            cpf: "",
            cep: "",
            image: "",
            cnpj: ""
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
        <form onSubmit={handleSubmit(handleEvent)}>
            <input 
                type="text" 
                placeholder={name}
                {...register("name")}
            />
            <input 
                type="email" 
                placeholder={email}
                {...register("email")}
            />
            <input 
                type="text" 
                placeholder={cep}
                {...register("cep")}
            />
            <input 
                type="text" 
                placeholder={userType === 'cliente' ? cpf : cnpj}
                {...register(userType === "cliente" ? "cpf" : "cnpj")}
            />
            {userType === "mercado" && <input 
                type='text' 
                placeholder={image}
                {...register("image")}
            />}
            <div>
                <Button dataBlue type="submit" onSubmit={handleSubmit(handleEvent)}>
                    Salvar
                </Button>
                <Button dataGrey onClick={()=>setEdit(false)}>
                    Cancelar
                </Button>
            </div>
        </form>
    </RegisterData>
}