import Image from "next/image";

const Services = () => {
  return (
    <div>
      <div
        className="h-screen bg-cover bg-center"
        style={{ backgroundImage: "url('/assets/service/1.jpg')" }}
      >
        <div className="text-white font-bold w-[75%] mx-auto h-full flex items-center">
          <div className="grid grid-cols-[63%_37%] gap-8 items-center">
            <div>
              <h2 className="text-5xl mb-4">Our Services</h2>
              <p className="text-lg mb-5 whitespace-pre-line leading-loose tracking-[0.02rem]">
                At Silver Mountain, we are dedicated to providing unparalleled
                service that exceeds expectations at every turn. Whether it's
                bulk trading, logistics, or tailored solutions, our team ensures
                timely deliveries, precise operations, and clear communication.
                When you choose Silver Mountain, you're choosing a partner
                committed to delivering the highest standards of service, every
                time.
              </p>
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
          </div>
        </section>
      </div>
    </div>
  );
};

export default Services;
