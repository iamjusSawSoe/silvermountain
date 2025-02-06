"use client";
import { motion } from "framer-motion";
import Image from "next/image";

const Products = () => {
  return (
    <div>
      <div
        className="h-auto bg-cover bg-center"
        style={{ backgroundImage: "url('/assets/product/1.jpg')" }}
      >
        <motion.div
          initial={{ opacity: 0, x: -100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.3, ease: "easeOut" }}
          className="flex flex-col lg:flex-row justify-center   items-center w-full gap-10"
        >
          <div className=" text-white font-bold w-[90%] lg:w-[75%] mx-auto py-20">
            <div className="grid xl:grid-cols-[63%_37%] gap-8">
              <div className="w-full xl:w-auto">
                <h2 className="text-5xl mb-4">Our Products</h2>
                <p className="text-lg mb-5 whitespace-pre-line">
                  At Silver Mountain, we offer a premium selection of products
                  sourced <span className="hidden lg:block mt-2"></span> from
                  around the world to meet your business needs. Our portfolio
                  includes:
                </p>
                <div className=" sm:pr-40 ">
                  <h4 className="text-2xl mb-2">Oil and Its Products:</h4>
                  <p className="text-sm mb-4 leading-loose">
                    From crude oil to refined derivatives, we provide
                    high-quality oil and energy products that fuel industries
                    across the globe.
                  </p>
                  <h4 className="text-2xl mb-2">Natural Rubber:</h4>
                  <p className="text-sm mb-4 leading-loose">
                    Sourced from trusted suppliers, our natural rubber is known
                    for its durability and versatility, meeting the needs of
                    manufacturing, automotive, and more.
                  </p>
                  <h4 className="text-2xl mb-2">Wood Pellets:</h4>
                  <p className="text-sm mb-4 leading-loose">
                    An eco-friendly energy solution, our wood pellets are
                    sustainably sourced, offering efficient heating options
                    while supporting greener energy alternatives.
                  </p>
                </div>
              </div>
              <div className="hidden xl:block"></div>
            </div>
          </div>
        </motion.div>
      </div>

      <div className=" w-[90%] xl:w-[75%] mx-auto py-14 lg:py-20">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          viewport={{ once: true, amount: 0.1 }}
        >
          <section className="grid grid-flow-dense lg:grid-cols-[40%_55%] gap-8 items-center justify-center">
            {/* Image Section */}
            <div className="mx-auto lg:mx-0 max-w-full  h-auto mt-6 lg:mt-0 flex order-2 lg:order-1">
              <Image
                src="/assets/product/3.png"
                alt="silver mountain services"
                width={800}
                height={800}
                layout="intrinsic"
                sizes="(max-width: 640px) 80vw, (max-width: 1024px) 50vw, 30vw"
                className="w-full h-auto object-cover"
              />
            </div>
            {/* Text Section */}
            <div className=" order-1 lg:order-2">
              <h1 className="text-5xl font-bold text-primary">Types of Oil</h1>
              <ul className="mt-4 pl-6 font-bold text-lg leading-8 list-disc">
                <li>Engine Oil</li>
                <li>Cooking Oil</li>
                <li>High Speed Diesel</li>
                <li>Automotive Diesel (EN590)</li>
              </ul>
              <h1 className="text-4xl mt-6 font-bold text-primary">
                Applications
              </h1>
              <p className="mt-4 font-bold text-lg leading-8">
                Used across industries such as energy, food production, and
                manufacturing.
              </p>
              <h1 className="text-4xl mt-6 font-bold text-primary">
                Product Quality
              </h1>
              <p className="mt-4 font-bold text-lg leading-8">
                We source our oil globally, ensuring strict adherence to
                industry standards and environmental guidelines.
              </p>
            </div>
          </section>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          viewport={{ once: true, amount: 0.2 }}
        >
          <section className="grid grid-flow-dense lg:grid-cols-[40%_55%] gap-8 mt-20 items-center justify-center">
            {/* Image Section */}
            <div className="mx-auto lg:mx-0 max-w-full  h-auto mt-6 lg:mt-0 flex order-2 lg:order-1">
              <Image
                src="/assets/product/2.png"
                alt="silver mountain services"
                width={800}
                height={800}
                layout="intrinsic"
                sizes="(max-width: 640px) 80vw, (max-width: 1024px) 50vw, 30vw"
                className="w-full h-auto object-cover"
              />
            </div>
            {/* Text Section */}
            <div className=" order-1 lg:order-2">
              <h1 className="text-5xl font-bold text-primary">
                Natural Rubber
              </h1>
              <ul className="mt-4 pl-6 font-bold text-lg leading-8 list-disc">
                <li>RSS (Ribbed smoked sheet)</li>
                <li>TSR (Technically Specified)</li>
              </ul>
              <h1 className="text-4xl mt-6 font-bold text-primary">
                Applications
              </h1>
              <p className="mt-4 font-bold text-lg leading-8">
                Ideal for tire prodution, medical supplies, footwear, and other
                industial goods.
              </p>
              <h1 className="text-4xl mt-6 font-bold text-primary">
                Assurance
              </h1>
              <p className="mt-4 font-bold text-lg leading-8">
                We source natural rubber only from certified plantations,
                ensuring consistency and premium quality.
              </p>
            </div>
          </section>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          viewport={{ once: true, amount: 0.2 }}
        >
          <section className="grid grid-flow-dense lg:grid-cols-[40%_55%] gap-8 mt-20 items-center justify-center">
            {/* Image Section */}
            <div className="mx-auto lg:mx-0 max-w-full  h-auto mt-6 lg:mt-0 flex order-2 lg:order-1">
              <Image
                src="/assets/product/4.png"
                alt="silver mountain services"
                width={800}
                height={800}
                layout="intrinsic"
                sizes="(max-width: 640px) 80vw, (max-width: 1024px) 50vw, 30vw"
                className="w-full h-auto object-cover"
              />
            </div>
            {/* Text Section */}
            <div className=" order-1 lg:order-2 ">
              <h1 className="text-5xl font-bold text-primary">Wood Pellets</h1>
              <h1 className="text-4xl mt-6 font-bold text-primary">
                Specifications
              </h1>
              <p className="mt-4 font-bold text-lg leading-8">
                Made from premium quality wood sawdust, ensuring minimal
                moisture content and high energy efficiency
              </p>
              <h1 className="text-4xl mt-6 font-bold text-primary">
                Applications
              </h1>
              <p className="mt-4 font-bold text-lg leading-8">
                Perfect for biomass energy production, heating systems, and
                animal bedding.
              </p>
              <h1 className="text-4xl mt-6 font-bold text-primary">
                Sustainably
              </h1>
              <p className="mt-4 font-bold text-lg leading-8">
                As eco-friendly renewable fuel, our wood pellets contribute to
                reducing your carbon footprint.
              </p>
            </div>
          </section>
        </motion.div>
      </div>
    </div>
  );
};

export default Products;
