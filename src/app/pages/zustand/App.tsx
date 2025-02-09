import { Products } from "./Products";
import { Basket } from "./Basket";

export const App = () => {
  return (
    <div className="flex flex-col">
      <h1 className="my-3 text-lg">Products</h1>
      <Products />
      <h1 className="my-3 text-lg">Basket</h1>
      <Basket />
    </div>
  );
};
