import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  return (
    <div className="flex flex-col lg:flex-row bg-gradient-to-b from-gray-200 to-white shadow-[inset_0px_10px_30px_rgba(0,0,0,0.2)] items-center justify-evenly py-10 lg:py-16">
      <div className="flex flex-col mt-3 gap-3 mb-10">
        <Image
          src={"/assets/blue_logo.png"}
          alt="logo"
          width={100}
          height={100}
        />
        <h2 className="text-secondary text-lg font-bold">
          SILVER MOUNTAIN PTE LTD - RELIABLE
        </h2>
        <h2 className="text-secondary text-lg font-bold">
          WHOLESALE TRADING OF OIL,
        </h2>
        <h2 className="text-secondary text-lg font-bold">
          NATURAL RUBBER, AND WOOD PELLETS
        </h2>

        <div className="flex mt-8 flex-col sm:flex-row lg:hidden gap-6 justify-evenly sm:w-auto sm:gap-12">
          <div className="self-start mt-4">
            <h1 className="text-secondary text-2xl font-bold">Location</h1>
            <div className="flex flex-col mt-3">
              <span>7 Temasek Boulevard, #12-07</span>
              <span>Singapore 038987</span>
            </div>
          </div>
          <div className="self-start mt-4">
            <h1 className="text-secondary text-2xl font-bold">Contact</h1>
            <div className="flex flex-col mt-3">
              <span>
                Email - <b>admin@silvermountain.com</b>
              </span>
              <span>
                Website - <b>www.silvermountainpteltd.com</b>
              </span>
            </div>
          </div>
        </div>
      </div>

      <div className="hidden lg:block self-start mt-14">
        <h1 className="text-secondary text-2xl font-bold">Location</h1>
        <div className="flex flex-col mt-3">
          <span>7 Temasek Boulevard, #12-07</span>
          <span>Singapore 038987</span>
        </div>
      </div>

      <div className=" hidden lg:block self-start mt-14">
        <h1 className="text-secondary text-2xl font-bold">Quick Links</h1>
        <div className="flex flex-col mt-3">
          <Link href={"/"}>Home</Link>
          <Link href={"/about-us"}>About Us</Link>
          <Link href={"/product"}>Product</Link>
          <Link href={"/services"}>Services</Link>
          <Link href={"/contact-us"}>Contact Us</Link>
        </div>
      </div>

      <div className="hidden lg:block self-start mt-14">
        <h1 className="text-secondary text-2xl font-bold">Contact</h1>
        <div className="flex flex-col mt-3">
          <span>
            Email - <b>admin@silvermountain.com</b>
          </span>
          <span>
            Website - <b>www.silvermountain.com</b>
          </span>
        </div>
      </div>
    </div>
  );
};

export default Footer;
