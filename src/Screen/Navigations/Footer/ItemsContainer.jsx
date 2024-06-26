import Item from "./Item";
import { PRODUCTS, RESOURCES, COMPANY } from "./Menus";
const ItemsContainer = () => {
  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-3 gap-6 sm:px-8 px-5 py-16 ">
      <Item Links={PRODUCTS} title="PRODUCTS" />
      <Item Links={RESOURCES} title="RESOURCES" />
      <Item Links={COMPANY} title="COMPANY" />
    </div>
  );
};

export default ItemsContainer;
