import Header from "./components/Header";
import Card from "./components/Card";
import { productArray } from "./components/data";

function App() {
  const product = productArray.map((item) => {
    return <Card key={item.id} {...item} />;
  });

  return (
    <>
      <Header />
      <h1 className="text-3xl uppercase text-center font-semibold my-10">
        Hello
      </h1>
      <div className="cardContianer w-fit flex flex-col gap-3 p-2 flex-wrap m-auto md:flex-row">
        {product}
      </div>
    </>
  );
}

export default App;
