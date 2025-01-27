import Image from "next/image";
import Link from "next/link";

const Header = () => {
  return (
    <div className="grid grid-cols-[35%_65%] items-center bg-primary text-white px-20 h-[7.5rem]">
      <Image
        src="/assets/logo.png"
        className="justify-self-start align-self-center mb-4"
        alt="logo"
        width={95}
        height={95}
        priority
      />
      <div className="flex gap-10  justify-between items-center text-bold text-lg text-[22px] mr-20">
        <Link
          className="mx-2 cursor-pointer bg-white rounded-full text-primary px-6 py-2  pb-3 flex items-center justify-center "
          href="/"
        >
          Home
        </Link>
        <Link className="mx-2 cursor-pointer" href="/about-us">
          About Us
        </Link>
        <Link className="mx-2 cursor-pointer" href="/products">
          Products
        </Link>
        <Link className="mx-2 cursor-pointer" href="/services">
          Services
        </Link>
        <Link className="mx-2 cursor-pointer" href="/contact-us">
          Contact Us
        </Link>
      </div>
    </div>
  );
};

export default Header;
