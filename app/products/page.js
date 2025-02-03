import Image from "next/image";

const Products = () => {
  return (
    <div>
      <div
        className="h-screen bg-cover bg-center"
        style={{ backgroundImage: "url('/assets/product/1.jpg')" }}
      >
        <div className="text-white font-bold w-[75%] mx-auto py-20">
          <div className="grid grid-cols-[63%_37%] gap-8">
            <div>
              <h2 className="text-5xl mb-4">Our Products</h2>
              <p className="text-lg mb-5 whitespace-pre-line">
                At Silver Mountain, we offer a premium selection of products
                sourced <span className="block mt-2"></span> from around the
                world to meet your business needs. Our portfolio includes:
              </p>
              <div className="pr-40 ">
                <h4 className="text-2xl mb-2">Oil and Its Products:</h4>
                <p className="text-sm mb-4 leading-loose">
                  From crude oil to refined derivatives, we provide high-quality
                  oil and energy products that fuel industries across the globe.
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
                  sustainably sourced, offering efficient heating options while
                  supporting greener energy alternatives.
                </p>
              </div>
            </div>
            <div></div>
          </div>
        </div>
      </div>

      <div className="w-[75%] mx-auto py-20">
        <section className="grid grid-cols-[40%_55%] gap-8 items-center justify-center">
          {/* Image Section */}
          <div className="w-full h-[500px] flex">
            <Image
              src="/assets/service/2.png"
              alt="silver mountain services"
              width={100}
              height={800}
              layout="responsive"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 30vw"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Text Section */}
          <div>
            <h1 className="text-5xl font-bold text-primary">Services</h1>
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
              We source our oil globally, ensuring strict adherence to industry
              standards and environmental guidelines.
            </p>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Products;
