import { ModalCupom } from "./style"
import { RiAddFill } from "react-icons/ri"
import { CardCupomComponent } from "../CardCupom"
import { Dispatch, SetStateAction } from "react"

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
            <div>
                <h3>Cupons</h3>
                <button><RiAddFill/></button>
            </div>
            <CardCupomComponent/>
            <CardCupomComponent/>
            <CardCupomComponent/>
            <CardCupomComponent/>
            <CardCupomComponent/>
        </div>
    </ModalCupom>
}