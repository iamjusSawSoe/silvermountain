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
        <section className="grid grid-cols-[45%_55%] gap-2  justify-center">
          {/* Image Section */}
          <div className="w-full h-full flex">
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
          <div className="mt-10">
            <h1 className="text-5xl font-bold text-primary">Services</h1>
            <ul className="mt-8 pl-5 pr-16 font-bold text-lg leading-9 list-disc">
              <li>
                <span className="text-primary">Bulk Order Handling: </span>
                We manage both small and large orders, offering flexibility and
                competitive pricing to suit your needs.
              </li>
              <li>
                <span className="text-primary">Logistics & Shipping: </span>
                Our efficient logistics team ensures that your order reaches you
                on time, no matter the distance.
              </li>
              <li>
                <span className="text-primary">Consultation: </span>
                We provide expert advice on product sourcing, quality checks,
                and market trends to guide your purchasing decisions.
              </li>
              <li>
                <span className="text-primary">Customized Solutions: </span>
                Whether you need specialized products or unique delivery terms,
                we offer flexible solutions that cater to your specific business
                needs.
              </li>
            </ul>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Services;
