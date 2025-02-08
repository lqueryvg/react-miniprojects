import { DemoPage } from "~/app/_components/DemoPage";
import { Products } from "./Products";
import { Basket } from "./Basket";
import Notes from "./notes.mdx";

const Shop = () => {
  return (
    <div className="flex flex-col">
      <h1 className="my-3 text-lg">Products</h1>
      <Products />
      <h1 className="my-3 text-lg">Basket</h1>
      <Basket />
    </div>
  );
};

export default function Wrapper() {
  return (
    <DemoPage href="/pages/zustand" notelist={<Notes />}>
      <Shop />
    </DemoPage>
  );
}
