import { CardCupom } from "./style"

interface CardCupomComponentProps {
    value: string
    category: string
}   

export const CardCupomComponent = ({value, category}: CardCupomComponentProps) => {
    return <CardCupom>
        <p>Cupom</p>
        <p>{value}</p>
        <p>{category.toUpperCase()}</p>
    </CardCupom>
}