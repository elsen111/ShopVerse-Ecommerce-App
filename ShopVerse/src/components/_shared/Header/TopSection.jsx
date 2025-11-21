import { FaTruck } from "react-icons/fa6";

const TopSection = () => {
  return (
    <section className="h-[50px] bg-amber-300">
        <div>
        <FaTruck />
        <span className="text-primary-1"> Free shipping on orders over $50! </span>
        </div>
    </section>
  )
}

export default TopSection