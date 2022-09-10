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
  const [filtredProducts, setFiltredProducts] = useState<Products[]>([] as Products[])

  const getProductByMarket = async (userId: number) => {
    return dueMarketApi.get(`/products?userId=${userId}`)
    .then((res)=> res.data)
    .catch((error)=>console.log(error))
  }

  const createProduct = (userId: number, token: string, data: Products) => {
    const product = {...data, userId}
    dueMarketApi.post(`/products`, product, {headers: {Authorization: `Bearer ${token}`}})
    .then((res)=>res.data)
    .catch((error)=>console.log(error))
  }

  getProductByMarket(1)
  console.log(getProductByMarket(1))
  return <ProductsContext.Provider value={{products}}>
      {children}
    </ProductsContext.Provider>
};
