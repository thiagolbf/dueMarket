import { CartProduct } from "./style";
import { MdClose } from "react-icons/md";
import { TbHeartMinus, TbHeartPlus } from "react-icons/tb"
import { Dispatch, SetStateAction, useContext, useState } from "react";
import { WhishListContext } from "../../providers/Wishlist";
import { UsersContext } from "../../providers/Users";
import { ModalConfirmationComponent } from "../ModalConfirmation";
interface CardProductComponentProps {
    img: string
    title: string
    date: string
    type: string
    previusValue: string
    newValue: string
    userType?: "mercado" | "cliente"
    idProduct?: number
    wishlist?: boolean
}
export const CardProductComponent = ({img, title, date, type, previusValue, idProduct, newValue, userType, wishlist}: CardProductComponentProps) => {
    
    const [modalConfirmation, setModalConfirmation] = useState(false)


    const { addProductWhishList, deletProductWhishlist } = useContext(WhishListContext)

    const { token, userId } = useContext(UsersContext)

    return <>
        <CartProduct>
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
                            deletProductWhishlist(idProduct, token, userId) 
                            : 
                            addProductWhishList(
                                userId,
                                token, 
                                {
                                    title, 
                                    category: type, 
                                    duedate: date, 
                                    oldvalue: previusValue, 
                                    newvalue: newValue, 
                                    image: img, 
                                    userId: userId})}>
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
        <ModalConfirmationComponent modalConfirmation={modalConfirmation} setModalConfirmation={setModalConfirmation} productId={idProduct} token={token}/>
    </>
}