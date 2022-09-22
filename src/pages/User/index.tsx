import { CardProductComponent } from "../../components/CardProducts";
import { HeaderComponent } from "../../components/Header";
import { UserMain } from "./style";
import { FaPencilAlt } from "react-icons/fa";
import { RegisterDataComponent } from "../../components/RegisterData";
import { useContext, useEffect, useState } from "react";
import { UsersContext } from "../../providers/Users";
import { useNavigate } from "react-router-dom";
import { ProductsContext } from "../../providers/Products";
import { WhishListContext } from "../../providers/Wishlist";
import { ModalCupomComponent } from "../../components/ModalCupom";
import { ModalCriarProduto } from "../../components/ModalCriarProduto";
import { toast } from "react-toastify";
import { ModalConfirmationComponent } from "../../components/ModalConfirmation";

export const UserPage = () => {
  const [activeRD, setActiveRD] = useState(false);
  const [modalCupom, setModalCupom] = useState(false);
  const [modalProduct, setModalProduct] = useState(false);
  const { user, token } = useContext(UsersContext);
  const { products, getProductByMarket } = useContext(ProductsContext);
  const { whishlist, getWhishListByUser } = useContext(WhishListContext);
  const nav = useNavigate();
  useEffect(() => {
    if (!localStorage.getItem("@dueMarket:token")) {
      nav("/login");
      toast.error("Faça login para acessar essa pagina");
    }
  }, []);
  useEffect(() => {
    if (user.type === "mercado") {
      getProductByMarket(Number(localStorage.getItem("@dueMarket:userId")));
    } else if (user.type === "cliente") {
      getWhishListByUser(
        Number(localStorage.getItem("@dueMarket:userId")),
        token
      );
    }
  }, [user]);
  return (
    <>
      <HeaderComponent />
      <UserMain>
        <div>
          <p>Mercados conscientes e consumidores atentos</p>
          <div>
            {user.type === "mercado" && (
              <>
                <button onClick={() => setModalCupom(true)}>Cupom</button>
                <button onClick={() => setModalProduct(true)}>
                  Cadastrar produto
                </button>
              </>
            )}
            <button onClick={() => setActiveRD(true)}>
              <FaPencilAlt />
            </button>
          </div>
        </div>
        <hr />
        <div>
          <h2>
            {user.type === undefined
              ? ""
              : user.type === "cliente"
              ? "Lista de desejos"
              : "Produtos Cadastrados"}
          </h2>
          <div>
            {user.type === undefined ? (
              ""
            ) : user.type === "mercado" ? (
              products.length < 0 ? (
                <h1></h1>
              ) : (
                products.map((product) => (
                  <CardProductComponent
                    userType="mercado"
                    date={product.duedate}
                    title={product.title}
                    img={product.image}
                    newValue={product.newvalue}
                    previusValue={product.oldvalue}
                    type={product.category}
                    key={product.id}
                    idProduct={product.id}
                  />
                ))
              )
            ) : (
              whishlist.map((product) => (
                <CardProductComponent
                  userType="cliente"
                  date={product.duedate}
                  title={product.title}
                  img={product.image}
                  newValue={product.newvalue}
                  previusValue={product.oldvalue}
                  type={product.category}
                  wishlist={true}
                  idProduct={product.id}
                  key={product.id}
                />
              ))
            )}
          </div>
          {user.name && (
            <RegisterDataComponent
              setActiveRD={setActiveRD}
              activeRD={activeRD}
              cpf={user.cpf ? user.cpf : undefined}
              cnpj={user.cnpj ? user.cnpj : undefined}
              cep={user.cep}
              city={user.city}
              district={user.district}
              email={user.email}
              name={user.name}
              state={user.state}
              street={user.street}
              userType={user.type}
              image={user.image ? user.image : undefined}
            />
          )}
        </div>
      </UserMain>
      <ModalCupomComponent
        modalCupom={modalCupom}
        setModalCupom={setModalCupom}
      ></ModalCupomComponent>
      <ModalCriarProduto
        modalProduto={modalProduct}
        setModalProduto={setModalProduct}
      ></ModalCriarProduto>
    </>
  );
};
