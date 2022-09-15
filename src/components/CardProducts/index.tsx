import { CartProduct } from "./style";
import { MdClose } from "react-icons/md";
import { TbHeartMinus, TbHeartPlus } from "react-icons/tb"

interface CardProductComponentProps {
    img: string
    title: string
    date: string
    type: string
    previusValue: string
    newValue: string
    userType?: "mercado" | "cliente" 
    wishlist?: boolean
}

export const CardProductComponent = ({img, title, date, type, previusValue, newValue, userType, wishlist}: CardProductComponentProps) => {
    return <CartProduct>
        <figure>
            {userType === "mercado" && <button>
                <MdClose/>
            </button>
            }
            <img src={img} alt={title} />
        </figure>
        <div>
            <div>
                <h2>{title}</h2>
                {userType === 'cliente' && 
                    <button>
                        {wishlist ? 
                            <TbHeartMinus/>
                        : 
                            <TbHeartPlus/>
                        }
                    </button>
                }
            </div>
            <h3>Data de vencimento: {date}</h3>
            <h3>{type}</h3>
            <h4>De R$ {previusValue}</h4>
            <h4>Por R$ {newValue}</h4>
        </div>
    </CartProduct>
}