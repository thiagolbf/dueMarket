import { createContext, ReactNode, useState } from "react";
import { viaCepApi } from "../../services/index";
interface CepProviderData {
  state: string;
  city: string;
  district: string;
  street: string;
  getCep: (cep: string) => Promise<GetCep>;
  validCep: boolean;
}

interface GetCep {
  bairro: string;
  cep: string;
  complemento: string;
  ddd: string;
  gia: string;
  ibge: string;
  localidade: string;
  logradouro: string;
  siafi: string;
  uf: string;
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

  const getCep = async (cep: string) => {
    const cepData = await viaCepApi.get(`${cep}/json`);

    // viaCepApi
    //   .get(`${cep}/json`)
    //   .then((res) => {
    //     // setState(res.data);
    //     // setCity(res.data.localidade);
    //     // setDistrict(res.data.bairro);
    //     // setStreet(res.data.logradouro);
    //     // setValidCep(true);

    //     cepData = res.data;
    //   })
    //   .catch((err) => {
    //     console.log(err);
    //     setValidCep(false);
    //   });
    return cepData.data;
  };

  return (
    <CepContext.Provider
      value={{ state, city, district, street, getCep, validCep }}
    >
      {children}
    </CepContext.Provider>
  );
};
