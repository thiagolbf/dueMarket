import { CardProductComponent } from "../../components/CardProducts"
import { HeaderComponent } from "../../components/Header"
import { UserMain } from "./style"
import { FaPencilAlt } from 'react-icons/fa'
import { RegisterDataComponent } from "../../components/RegisterData"
import { useContext, useEffect, useState } from "react"
import { UsersContext } from "../../providers/Users"
import { useNavigate } from "react-router-dom"
import { ProductsContext } from "../../providers/Products"
import { title } from "process"

export const UserPage = () => {
  const [activeRD, setActiveRD] = useState(false)
  const { user } = useContext(UsersContext)
  const { products, getProductByMarket } = useContext(ProductsContext)
  const nav = useNavigate()
  if(!localStorage.getItem('@dueMarket:token')){
    nav('/login')
  }
  useEffect(()=>{
    getProductByMarket(Number(localStorage.getItem('@dueMarket:userId')))
  },[])
  console.log(products)
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
          <h2>
            {
            user.type === undefined ?
            '' 
            :
            user.type === "user" ?
            "Lista de desejos" 
            :
            "Produtos Cadastrados"
            }
          </h2>
        <div>
        {
            user.type === undefined ?
            '' 
            :
            user.type === "mercado" ?
            products.map(product => <CardProductComponent
              user={user}
              date={product.duedate} 
              title={product.title} 
              img={product.image} 
              newValue={product.newvalue}
              previusValue={product.oldvalue}
              type={product.category}  
            />)
            :
            "Produtos Cadastrados"
            }
        </div>
        <RegisterDataComponent setActiveRD={setActiveRD} activeRD={activeRD}/>
      </div>
    </UserMain>
  </>
}