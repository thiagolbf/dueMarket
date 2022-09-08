import { CartProduct } from "./style";
import { MdClose } from "react-icons/md";
import { TbHeartPlus } from "react-icons/tb"

interface CardProductComponentProps {
    img: string
    title: string
    date: string
    type: string
    previusValue: string
    newValue: string
}

export const CardProductComponent = ({img, title, date, type, previusValue, newValue}: CardProductComponentProps) => {
    return <CartProduct>
        <figure>
            <button>
                <MdClose/>
            </button>
            <img src={img} alt={title} />
        </figure>
        <div>
            <div>
                <h2>{title}</h2>
                <button>
                    <TbHeartPlus/>
                </button>
            </div>
            <h3>Data de vencimento: {date}</h3>
            <h3>{type}</h3>
            <h4>De R$ {previusValue}</h4>
            <h4>Por R$ {newValue}</h4>
        </div>
    </CartProduct>
}