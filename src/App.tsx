import { useReducer,useEffect } from "react";
import { Fragment } from "react";
import Header from "./components/Header";
import Guitar from "./components/Guitar";
import { cartReducer, initialState } from "./reducers/cart-reducer";
function App() {

  const [state,dispatch]=useReducer(cartReducer,initialState)

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(state.cart));
  }, [state.cart]);
 

  return (
    <Fragment>
      {/* El fragment no genera ningun codigo de HTML 
      esta es una de las formas de crearlo y la otra es asi <></>
      */}
      <Header
        cart={state.cart}
        dispatch={dispatch}
       
 
/>

      <main className="container-xl mt-5">
        <h2 className="text-center">Nuestra Colección</h2>

        <div className="row mt-5">
          {state.data.map((guitar) => (
            <Guitar
              //Le estamos pasando los props
              key={guitar.id}
              guitar={guitar}
              dispatch={dispatch}
            /> 
          ))}
        </div>
      </main>

      <footer className="bg-dark mt-5 py-5">
        <div className="container-xl">
          <p className="text-white text-center fs-4 mt-4 m-md-0">
            GuitarLA - Todos los derechos Reservados
          </p>
        </div>
      </footer>
    </Fragment>
  );
}

export default App;
