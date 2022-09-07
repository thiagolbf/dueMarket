import { createContext, ReactNode, useEffect, useState } from "react";
import { dueMarketApi } from "../../services";

interface ProductsProviderData {
  products: Products[]
}

interface ProductsProviderProps {
  children: ReactNode
}

interface Products {
  title: string
  category: string
  duedate: string
  oldvalue: string
  newvalue: string
  image: string
  userId: number
  id: number
}

export const ProductsContext = createContext<ProductsProviderData>({} as ProductsProviderData)

export const ProductsProvider = ({ children }: ProductsProviderProps) => {
  const [products, setProducts] = useState<Products[]>([] as Products[])
  const [productsCategory, setProductsCategory] = useState<Products[]>([] as Products[])
  const [productsName, setProductsName] = useState<Products[]>([] as Products[])
  const [productsMarket, setProductsMarket] = useState<Products[]>([] as Products[])

  useEffect(()=>{
    getProduct()
  },[])

  const getProduct = () => {
    dueMarketApi.get('/products')
    .then((res)=>setProducts(res.data))
    .catch((error)=>console.log(error))
  }

  return <ProductsContext.Provider value={{products}}>
      {children}
    </ProductsContext.Provider>
};
