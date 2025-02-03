import Image from "next/image";
import { FaCircle } from "react-icons/fa";

const AboutUs = () => {
  return (
    <div className="w-[70%] mx-auto my-14">
      {/* Start of Company interview */}
      <div className="flex justify-center items-center w-full gap-10">
        <div>
          <h1 className="text-5xl font-bold text-primary">Company Overview</h1>
          <p className="mt-8 font-bold text-xl leading-10">
            With over 15 years of experience in the wholesale trading industry,
            we bring premium Oil and its Products, Natural Rubber, and Wood
            Pellets to business worldwide. With a global network and a steadfast
            commitment to quality, we ensure every delivery is reliable and on
            time.
          </p>
          <p className="font-bold text-xl leading-10 mt-10">
            When you partner with Silver Moutain, you're not just reaching the
            summit of the service; you're building a path to unshakable growth.
            Let us be the cornerstone of your success as we climb to the top
            together.
          </p>
        </div>
        <div className="">
          <Image
            src={"/assets/about_us/3.jpg"}
            alt="silver mountain about us"
            width={2000}
            height={500}
            className=""
          />
        </div>
      </div>

      {/* start of mission and vision */}
      <div className="flex justify-center items-center w-full gap-20 mt-16">
        <Image
          src={"/assets/about_us/1.jpg"}
          alt="silver mountain about us"
          width={400}
          height={400}
          className=""
        />
        <div>
          <h1 className="text-5xl font-bold text-primary">MISSION</h1>
          <p className="mt-8 font-bold text-xl leading-10">
            At Silver Mountain, our mission is to elevate business worldwide by
            providing premium-quality and it's Products, Nataural Rubber, and
            Wood Pellets, through dependable logistics and competitve pricing.
          </p>

          <h1 className="text-5xl font-bold text-primary mt-6">VISION</h1>
          <p className="mt-8 font-bold text-xl leading-10">
            To be the principle of excellence in wholesale trading, scaling new
            heights in reliablity, innovation, and customer satisfaction. At
            Silver Mountain, we envision a world where our solutions help every
            partner reach new heights of success.
          </p>
        </div>
      </div>

      {/* start of core values */}
      <div>
        <h1 className="text-5xl font-bold text-primary mt-16">
          Core Values (R.I.S.E)
        </h1>
        <div className="grid grid-cols-[65%_35%] gap-6 mt-6 w-full items-center tracking-tight">
          {/* Text Content (70%) */}
          <div className="space-y-2">
            <div className="flex gap-2">
              <div className="w-6 mt-[0.6rem]">
                <FaCircle fontSize={12} className="text-primary" />
              </div>
              <span className="mt-[3px] font-bold text-lg">
                <span className="text-primary">Resilience: </span>
                At Silver Mountain, resilience is the bedrock of everything we
                do. Just like a mountain stands firm against the elements, we
                remain steadfast in overcoming challenges and adapting to market
                volatility.
              </span>
            </div>
            <div className="flex gap-2">
              <div className="w-6 mt-[0.6rem]">
                <FaCircle fontSize={12} className="text-primary" />
              </div>
              <span className="mt-[3px] font-bold text-lg">
                <span className="text-primary">Integrity: </span>
                Integrity is the foundation of everything we do. We believe in
                honest, transparent business practices and building trust with
                our clients and partners. Upholding ethical standards is crucial
                to maintaining long-term, meaningful relationships.
              </span>
            </div>
            <div className="flex gap-2">
              <div className="w-6 mt-[0.6rem]">
                <FaCircle fontSize={12} className="text-primary" />
              </div>
              <span className="mt-[3px] font-bold text-lg">
                <span className="text-primary">Sustainability: </span>
                At Silver Mountain, we are committed to protecting the planet
                while driving global commerce. Sustainability is at the heart of
                our operations, from sourcing responsibly to optimizing
                eco-friendly logistics.
              </span>
            </div>
            <div className="flex gap-2">
              <div className="w-6 mt-[0.6rem]">
                <FaCircle fontSize={12} className="text-primary" />
              </div>
              <span className="mt-[3px] font-bold text-lg">
                <span className="text-primary">Excellence: </span>
                We strive for excellence in all that we do. Whether it's the
                quality of our products, the efficiency of our services, or the
                strength of our customer relationships, we aim to exceed
                expectations.
              </span>
            </div>
          </div>

          {/* Image (30%) */}
          <div className="w-full">
            <Image
              src="/assets/about_us/2.jpg"
              alt="silver mountain about us"
              width={800}
              height={400}
              layout="responsive"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 30vw"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
