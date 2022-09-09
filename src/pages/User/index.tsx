import { CardProductComponent } from "../../components/CardProducts"
import { HeaderComponent } from "../../components/Header"
import { UserMain } from "./style"
import { FaPencilAlt } from 'react-icons/fa'
import { RegisterDataComponent } from "../../components/RegisterData"
import { useContext, useState } from "react"
import { ProductsContext } from "../../providers/Products"

export const UserPage = () => {
    const { products } = useContext(ProductsContext)
    const [activeRD, setActiveRD] = useState(false)
    return <>
        <HeaderComponent/>
        <UserMain>
            <div>
                <p>Lorem ipsum dolor sit amet.</p>
                <div>
                    <button>Cupom</button>
                    <button>Cadastrar produto</button>
                    <button onClick={()=>setActiveRD(true)}>
                        <FaPencilAlt/>
                    </button>
                </div>
            </div>
            <hr />
            <div>
                <h2>Produtos Cadastrados</h2>
                <div>
                    {products.map(product=> <CardProductComponent 
                        key={product.id}
                        img={product.image}
                        title={product.title}
                        date={product.duedate}
                        newValue={product.newvalue}
                        previusValue={product.oldvalue}
                        type={product.category}
                    />)}
                </div>
                <RegisterDataComponent setActiveRD={setActiveRD} activeRD={activeRD}/>
            </div>
        </UserMain>
    </>
}