import { DemoPage } from "~/app/_components/DemoPage";
import { Products } from "./Products";
import { Basket } from "./Basket";
import { TextLink } from "~/app/_components/TextLink";

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
  const notelist = (
    <>
      <li>
        <code>{"<Products>"}</code>
        and <code>{"<Basket>"}</code> are child siblings of
        <code>{"<Shop>"}</code>
      </li>
      <li>
        only <code>{"<Basket>"}</code> re-renders when the basket changes
        <ul>
          <li>
            to see this, enable{" "}
            <em>{"Highlight updates when components render"}</em> in{" "}
            <TextLink
              url="https://react.dev/learn/react-developer-tools"
              text="React Dev Tools"
            />
          </li>
        </ul>
      </li>
      <li>
        both access Zustand state called <code>{"BasketStore"}</code>{" "}
      </li>
      <li>
        <code>{"<Products>"}</code> adds items,
        <code>{"<Basket>"}</code> reads and removes items
      </li>
      <li>
        <code>{"<Shop>"}</code> has no access to the store
      </li>
      <li>
        <code>{"<Products>"}</code> avoids unnecessary renders by only
        subscribing to the specific part of the store that it needs, i.e.
        <pre>
          {`const addToBasket = useBasketStore((state) => state.addToBasket);`}
        </pre>
      </li>
    </>
  );

  return (
    <DemoPage href="/pages/zustand" notelist={notelist}>
      <Shop />
    </DemoPage>
  );
}
