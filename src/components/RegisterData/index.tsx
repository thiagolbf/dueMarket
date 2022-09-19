import { Dispatch, SetStateAction, useContext, useState } from "react"
import { RegisterData } from "./style"
import { FaPencilAlt } from 'react-icons/fa'
import { GrFormNext, GrFormClose } from 'react-icons/gr'
import { Button } from "../Button"
import { UsersContext } from "../../providers/Users"
import * as yup from 'yup'
import { yupResolver } from "@hookform/resolvers/yup"
import { useForm } from "react-hook-form"
import { InputForm } from "../InputForm"
import { CepContext } from "../../providers/Cep"
import { toast } from "react-toastify"

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
    street: string;
    district: string;
    city: string;
    state: string;
    cpf?: string,
    cnpj?: string,
    img?: string
}

export const RegisterDataComponent = ({setActiveRD, activeRD, cnpj, cpf, name, email, street, city, district, state, cep, userType, image}: RegisterDataComponentProps) => {
    const [edit, setEdit] = useState(false)
    const { patchUser, token, userId } = useContext(UsersContext)
    const { getCep } = useContext(CepContext)

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
        email: yup.string().transform((value)=>value ? value : email).email("Email invalido"),
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
        img: yup.string()
        .transform((value)=>value ? value : cpf)
    });

    const {
        register,
        handleSubmit,
        formState: { errors },
        reset
    } = useForm<NewUser>({ resolver: yupResolver(userType === "cliente" ? userSchema : marketSchema) });

    const handleEvent = async (data: NewUser) => {
        const cepData = await getCep(data.cep);
    
        const objectData = {
            street: cepData.logradouro,
            district: cepData.bairro,
            city: cepData.localidade,
            state: cepData.uf,
        };

        console.log(objectData)

        if (cepData.logradouro) {
            reset({
                email: "",
                name: "",
                cnpj: "",
                cep: "",
                cpf: "",
                img: "",
            });
            patchUser({...data, ...objectData}, token, userId);
        } else {
            toast.error("CEP invalido");
            reset({
                email,
                name,
                cnpj,
                cpf,
                cep: "",
                img: data.img,
            });
        }
    };

    return <RegisterData active={activeRD} edit={edit}>
        <div>
            <button onClick={()=>setActiveRD(false)}><GrFormNext/></button>
            <h2>{edit ? "Editar dados" : "Dados cadastrais"}</h2>
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
            {userType === "mercado" && <figure>
                <img src={image} alt={name} />
            </figure>}
        </div>
        <form onSubmit={handleSubmit(handleEvent)}>
            <div>
                <InputForm
                    label="Nome"
                    type="text" 
                    error={!!errors.name}
                    {...register("name")}
                />
                {!!errors.name && <p>{errors.name?.message}</p>}
            </div>
            <div>
                <InputForm
                    type="text" 
                    label="E-mail"
                    error={!!errors.email}
                    {...register("email")}
                />
                {!!errors.email && <p>{errors.email?.message}</p>}
            </div>
            <div>
                <InputForm
                    label="CEP"
                    error={!!errors.cep}
                    type="text" 
                    {...register("cep")}
                />
                {!!errors.cep && <p>{errors.cep?.message}</p>}
            </div>
            <div>
                <InputForm
                    label={userType === 'cliente' ? "CPF" : "CNPJ"}
                    type="text" 
                    error={userType === 'cliente' ? !!errors.cpf : !!errors.cnpj}
                    {...register(userType === "cliente" ? "cpf" : "cnpj")}
                    />
                {userType === 'cliente' ? 
                errors.cpf && <p>{errors.cpf?.message}</p>
                : 
                errors.cnpj && <p>{errors.cnpj?.message}</p>}
            </div>
            <div>
                {userType === "mercado" && <>
                    <InputForm 
                        type='text' 
                        label="Imagem"
                        error={!!errors.img}
                        {...register("img")}
                    />
                    {!!errors.img && <p>{errors.img?.message}</p>}
                </> 
                }
            </div>
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