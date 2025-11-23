import SelectorUI from "./SelectorUI";

export default function LanguageSelector() {
  const languageList = [
    {
      id: "Eng",
      name: "English",
    },

    {
      id: "AZ",
      name: "Azerbaijan",
    },

    {
      id: "RUS",
      name: "Russian",
    },
  ];

  const defaultLang = languageList[0].id
    
  return (
    <>
      <SelectorUI
       list={languageList}
       defaultItem = {defaultLang}
      />
    </>
  );
}
