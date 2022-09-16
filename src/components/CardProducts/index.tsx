import { CartProduct } from "./style";
import { MdClose } from "react-icons/md";
import { TbHeartMinus, TbHeartPlus } from "react-icons/tb"
import { Dispatch, SetStateAction, useContext } from "react";
import { WhishListContext } from "../../providers/Wishlist";
import { UsersContext } from "../../providers/Users";
interface CardProductComponentProps {
    img: string
    title: string
    date: string
    type: string
    previusValue: string
    newValue: string
    userType?: "mercado" | "cliente"
    idProduct?: number
    userId?: number
    wishlist?: boolean
    setModalConfirmation?: Dispatch<SetStateAction<boolean>>
}
export const CardProductComponent = ({img, title, date, type, previusValue, idProduct, userId, newValue, userType, wishlist, setModalConfirmation}: CardProductComponentProps) => {
    
    const { addProductWhishList, deletProductWhishlist } = useContext(WhishListContext)

    const { token } = useContext(UsersContext)

    return <CartProduct>
        <figure>
            {userType === "mercado" && <button onClick={()=>setModalConfirmation?.(true)}>
                <MdClose/>
            </button>
            }
            <img src={img} alt={title} />
        </figure>
        <div>
            <div>
                <h2>
                    {title}
                </h2>
                {userType === 'cliente' &&
                    <button 
                        onClick={()=>wishlist ? 
                        deletProductWhishlist(idProduct, token) 
                        : 
                        addProductWhishList(
                            idProduct, 
                            token, 
                            {
                                title, 
                                category: type, 
                                duedate: date, 
                                oldvalue: previusValue, 
                                newvalue: newValue, 
                                image: img, 
                                userId: userId, id: idProduct})}>
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