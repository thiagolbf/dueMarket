import { ModalCupom } from "./style"
import { RiAddFill } from "react-icons/ri"
import { CardCupomComponent } from "../CardCupom"
import { Dispatch, SetStateAction } from "react"
import { HeaderModalComponent } from "../HeaderModal"

interface ModalCupomComponentProps {
    modalCupom: boolean
    setModalCupom: Dispatch<SetStateAction<boolean>>
}

interface TargetProps extends EventTarget{
    id: string
}

export const ModalCupomComponent = ({modalCupom, setModalCupom}: ModalCupomComponentProps) => {
    
    const handleEvemt = (id: string) => {
        if(id === "modalCupom"){
            setModalCupom(false)
        }
    }

    return <ModalCupom 
        modalCupom={modalCupom}
        id="modalCupom"
        onClick={(e) => handleEvemt((e.target as TargetProps).id)}
    >
        <div>
            <HeaderModalComponent setState={setModalCupom}>Cupons</HeaderModalComponent>
            <div>
                <button><RiAddFill/></button>
            </div>
            <div>
                <CardCupomComponent/>
                <CardCupomComponent/>
                <CardCupomComponent/>
                <CardCupomComponent/>
                <CardCupomComponent/>
            </div>
        </div>
    </ModalCupom>
}