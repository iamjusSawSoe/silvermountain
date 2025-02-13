"use client";
import { motion } from "framer-motion";
import Image from "next/image";

const Services = () => {
  return (
    <div>
      <div
        className="h-auto bg-cover bg-center"
        style={{ backgroundImage: "url('/assets/service/1.jpg')" }}
      >
        <motion.div
          initial={{ opacity: 0, x: -100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.3, ease: "easeOut" }}
          className="flex flex-col lg:flex-row justify-center items-center w-full gap-10"
        >
          <div className="text-white font-bold w-[90%] xl:w-[75%] mx-auto  py-20 flex min-h-screen lg:h-screen">
            <div className="grid lg:grid-cols-[67%_33%] gap-8 items-center">
              <div>
                <h2 className="text-5xl mb-4">Our Services</h2>
                <p className="text-lg mb-5 whitespace-pre-line leading-loose tracking-[0.02rem]">
                  At Silver Mountain, we are dedicated to providing unparalleled
                  service that exceeds expectations at every turn. Whether
                  it&apos;s bulk trading, logistics, or tailored solutions, our
                  team ensures timely deliveries, precise operations, and clear
                  communication. When you choose Silver Mountain, you&apos;re
                  choosing a partner committed to delivering the highest
                  standards of service, every time.
                </p>
              </div>

              <div className="hidden lg:block"></div>
            </div>
          </div>
        </motion.div>
      </div>

      <div className="w-[90%] xl:w-[75%] mx-auto py-12 md:py-20">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          viewport={{ once: true, amount: 0.2 }}
        >
          <section className="grid grid-flow-dense lg:grid-cols-[45%_55%] gap-2 justify-center">
            {/* Text Section (First on mobile, second on large screens) */}
            <div className="mt-0 md:mt-10 order-1 lg:order-2">
              <h1 className="text-5xl font-bold text-primary">Services</h1>
              <ul className="mt-8 pl-5 pr-16 font-bold text-lg leading-9 list-disc">
                <li>
                  <span className="text-primary">Bulk Order Handling: </span>
                  We manage both small and large orders, offering flexibility
                  and competitive pricing to suit your needs.
                </li>
                <li>
                  <span className="text-primary">Logistics & Shipping: </span>
                  Our efficient logistics team ensures that your order reaches
                  you on time, no matter the distance.
                </li>
                <li>
                  <span className="text-primary">Consultation: </span>
                  We provide expert advice on product sourcing, quality checks,
                  and market trends to guide your purchasing decisions.
                </li>
                <li>
                  <span className="text-primary">Customized Solutions: </span>
                  Whether you need specialized products or unique delivery
                  terms, we offer flexible solutions that cater to your specific
                  business needs.
                </li>
              </ul>
            </div>

            {/* Image Section (Second on mobile, first on large screens) */}
            <div className=" mx-auto lg:mx-0 max-w-full mt-12 md:mt-0  h-auto lg:h-full flex order-2 lg:order-1">
              <Image
                src="/assets/service/2.png"
                alt="silver mountain services"
                width={800}
                height={800}
                layout="intrinsic"
                sizes="(max-width: 640px) 80vw, (max-width: 1024px) 50vw, 30vw"
                className="w-full h-auto object-cover"
              />
            </div>
          </section>
        </motion.div>
      </div>
    </div>
  );
};

export default Services;
