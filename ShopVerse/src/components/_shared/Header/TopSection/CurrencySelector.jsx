import SelectorUI from "./SelectorUI";

export default function CurrencySelector() {
  const currencyList = [
    {
      id: "USD",
      name: "USD",
    },

    {
      id: "AZN",
      name: "AZN",
    },

    {
      id: "RUB",
      name: "RUB",
    },
  ];

  const defaultCurrency = currencyList[0].id
    
  return (
    <>
      <SelectorUI
       list={currencyList}
       defaultItem = {defaultCurrency}
      />
    </>
  );
}
