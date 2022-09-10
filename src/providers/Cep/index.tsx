import { createContext, ReactNode, useState } from "react";
import { viaCepApi } from "../../services/index";
interface CepProviderData {
  state: string;
  city: string;
  district: string;
  street: string;
  getCep: (cep: string) => void;
  validCep: boolean;
}

interface CepProviderProps {
  children: ReactNode;
}

export const CepContext = createContext<CepProviderData>({} as CepProviderData);

export const CepProvider = ({ children }: CepProviderProps) => {
  const [state, setState] = useState("");
  const [city, setCity] = useState("");
  const [district, setDistrict] = useState("");
  const [street, setStreet] = useState("");
  const [validCep, setValidCep] = useState(false);

  const getCep = (cep: string) => {
    viaCepApi
      .get(`${cep}/json`)
      .then((res) => {
        setState(res.data.uf);
        setCity(res.data.localidade);
        setDistrict(res.data.bairro);
        setStreet(res.data.logradouro);
        setValidCep(true);
      })
      .catch((err) => {
        console.log(err);
        setValidCep(false);
      });
  };

  return (
    <CepContext.Provider
      value={{ state, city, district, street, getCep, validCep }}
    >
      {children}
    </CepContext.Provider>
  );
};
