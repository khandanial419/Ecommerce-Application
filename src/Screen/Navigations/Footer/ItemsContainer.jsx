import Item from "./Item";
import { PRODUCTS, RESOURCES, COMPANY, Authenciation } from "./Menus";
const ItemsContainer = () => {
  return (
    <div className="grid grid-cols-2 sm:grid-cols-4  gap-6 sm:px-8 px-5 py-16 ">
      <Item Links={PRODUCTS} title="PRODUCTS" />
      <Item Links={RESOURCES} title="RESOURCES" />
      <Item Links={COMPANY} title="COMPANY" />
      <Item Links={Authenciation} title="Access Your Account" />
    </div>
  );
};

export default ItemsContainer;
