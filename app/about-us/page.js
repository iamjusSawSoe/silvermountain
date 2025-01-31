import Image from "next/image";

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
          width={1000}
          height={500}
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
    </div>
  );
};

export default AboutUs;
