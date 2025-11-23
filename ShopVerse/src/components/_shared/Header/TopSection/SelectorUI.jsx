import { useState } from "react";
import { IoIosArrowDown } from "react-icons/io";

export default function SelectorUI({ list, defaultItem }) {
    const [selectedItem, setSelectedItem] = useState(defaultItem)

  const [dropdownOpen, setDropDownOpen] = useState(false);

  const showDropDown = () => setDropDownOpen(true);

  const closeDropDown = () => setDropDownOpen(false);

  const selectItem = (e) => {
    const selectedItem = e.target.textContent;
    const item = list.filter(l => l.name === selectedItem)[0];
    const selectedItemId = item.id;
    setSelectedItem(selectedItemId)
  }

  return (
    <div
      className="cursor-pointer h-full"
      onMouseEnter={showDropDown}
      onMouseLeave={closeDropDown}
      onClick={showDropDown}
    >
      <div className="flex gap-px items-center text-primary-1">
        <span> {selectedItem} </span>
        <IoIosArrowDown
          className={`${dropdownOpen ? "rotate-180" : "rotate-0"}
            text-[16px] text-primary-1 transition-all duration-300`}
        />
      </div>

      <ul
        className={`${
          dropdownOpen ? "opacity-100 top-full" : "opacity-0 top-[150%]"
        }
        absolute transition-all flex flex-col duration-300 bg-white shadow-md text-[12px] text-gray-600`}
      >
        {list.map(item => <li
             key={item.id}
             onClick={selectItem}
             className="transition-all w-full duration-300 hover:bg-gray-300 px-2 py-1"
             > 
              {item.name} 
            </li>)}
      </ul>
    </div>
  );
}
