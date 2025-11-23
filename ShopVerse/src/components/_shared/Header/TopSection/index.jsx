import { FaTruck } from "react-icons/fa6";
import LanguageSelector from "./LanguageSelector";
import CurrencySelector from "./CurrencySelector";

const TopSection = () => {
  return (
    <section className="h-[50px] bg-amber-300 px-5 sm:px-8 flex relative justify-between flex-wrap items-center">
      <div className="flex justify-start items-center gap-3">
        <FaTruck className="text-amber-950 text-[30px]" />
        <span className="text-amber-950 italic font-medium">
          Free shipping on all orders over $50! Shop now and enjoy incredible
          deals, limited-time offers, and exclusive discounts!
        </span>
      </div>

      <div className="flex gap-3">
        <LanguageSelector />
        <CurrencySelector />
      </div>
    </section>
  );
};

export default TopSection;
