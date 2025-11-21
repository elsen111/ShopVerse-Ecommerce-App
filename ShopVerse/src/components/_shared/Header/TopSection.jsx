import { FaTruck } from "react-icons/fa6";
import { IoIosArrowDown } from "react-icons/io";

const TopSection = () => {
  return (
    <section className="h-[50px] bg-amber-300 px-5 sm:px-8 flex justify-between flex-wrap items-center">
      <div className="flex justify-start items-center gap-3">
        <FaTruck className="text-amber-950 text-[30px]" />
        <span className="text-amber-950 italic font-medium">
          Free shipping on all orders over $50! Shop now and enjoy incredible
          deals, limited-time offers, and exclusive discounts!
        </span>
      </div>

      <div>
        {/* Language Selection */}
        {/* <div>
            <div className="flex cursor-pointer items-center gap-1">
                <span className="text-[16px]"> Eng </span>
                <IoIosArrowDown className="text-[15px]" />
            </div>
        </div> */}
      </div>
    </section>
  );
};

export default TopSection;
