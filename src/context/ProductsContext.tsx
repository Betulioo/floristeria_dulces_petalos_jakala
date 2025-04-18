import { createContext, useReducer, useContext, useMemo, ReactNode  } from "react";
//interfaces para el reducer y el state
export interface Product {
    id: string;
    name: string;
    binomialName: string;
    price: number;
    imgUrl: string;
    wateringsPerWeek: number;
    fertilizerType: string;
    heightInCm: number;
 }
export interface ProductsState {
    products: Product[];
    filtered: Product[];
    search: string;
    loading: boolean;
    error: string | null;
}
// Acciones posibles del reducer
export type ProductsAction =
  | { type: "SET_PRODUCTS"; payload: Product[] }
  | { type: "SET_SEARCH"; payload: string }
  | { type: "SET_LOADING"; payload: boolean }
  | { type: "SET_ERROR"; payload: string | null };

const initialState:ProductsState = {
    products: [],
    filtered: [],
    search: "",
    loading: true,
    error: null,
}
// Reducer para manejar el estado de los productos
function productsReducer(state: ProductsState, action: ProductsAction): ProductsState {
    switch (action.type) {
        case "SET_PRODUCTS":{
            const all = action.payload;
            return {
                ...state,
                products: all,
                filtered: all,
                loading: false,
                error: null,
            }
        }
        case "SET_SEARCH": {
            const searchTerm = action.payload.toLowerCase();
            const filtered = state.products.filter((product) =>
                product.name.toLowerCase().includes(searchTerm) ||
                product.binomialName.toLowerCase().includes(searchTerm)
            );
            return {
                ...state,
                search: action.payload,
                filtered: filtered,
            }
        }    
        case "SET_LOADING": {
            return {
                ...state,
                loading: action.payload,
            }
        }
        case "SET_ERROR": {
            return {
                ...state,
                error: action.payload,
            }
        }
        default:
            return state;
    }
    
}

// Contexto
interface ProductsContextProps {
  state: ProductsState;
  dispatch: React.Dispatch<ProductsAction>;
}
const ProductsContext = createContext<ProductsContextProps | undefined>(undefined);
// Proveedor del contexto
interface ProductsProviderProps {
  children: ReactNode;
}

export const ProductsProvider: React.FC<ProductsProviderProps> = ({ children }) => {
  const [state, dispatch] = useReducer(productsReducer, initialState);

  const value = useMemo(() => ({ state, dispatch }), [state, dispatch]);

  return (
    <ProductsContext.Provider value={value}>
      {children}
    </ProductsContext.Provider>
  );
};

// Hook personalizado
export function useProducts(): ProductsContextProps {
  const context = useContext(ProductsContext);
  if (!context) {
    throw new Error("useProducts must be used within a ProductsProvider");
  }
  return context;
}