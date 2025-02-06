"use client";

import Hero from "@/components/Hero";
import { motion } from "framer-motion";
import Image from "next/image";

export default function Home() {
  return (
    <div className="">
      <Hero />
      <div className="bg-secondary text-white p-10">
        <h1 className="text-center text-5xl font-bold mb-16 md:mb-10">
          Key Benefits of working with us
        </h1>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          <div className="grid w-full items-center justify-center grid-cols-1 xl:grid-cols-2 gap-x-10 gap-y-20">
            <div className="flex flex-col-reverse md:flex-row w-full gap-8 xl:gap-16 justify-center xl:justify-normal items-start md:items-center">
              <div className="flex flex-col gap-3">
                <h4 className="text-2xl font-bold">Unparalleled Service</h4>
                <p className="w-auto md:w-[26rem] font-semibold">
                  We don&apos;t just move goods—we move mountains to ensure your
                  needs are met with peak performance.
                </p>
              </div>
              <Image
                src={"/assets/Icon/1.png"}
                alt="silver mountain benefits"
                width={150}
                height={150}
              />
            </div>

            <div className="flex flex-col-reverse md:flex-row w-full gap-8 xl:gap-16 justify-center xl:justify-normal items-start md:items-center">
              <div className="flex flex-col gap-3">
                <h4 className="text-2xl font-bold">Competitive Pricing</h4>
                <p className="w-auto md:w-[26rem] font-semibold">
                  Our goal sourcing expertise and streamlined operations allow
                  us to offer competitve pricing without compromising on
                  quality.
                </p>
              </div>
              <Image
                src={"/assets/Icon/2.png"}
                alt="silver mountain benefits"
                width={150}
                height={150}
              />
            </div>

            <div className="flex flex-col-reverse md:flex-row w-full gap-8  xl:gap-16 justify-center xl:justify-normal items-start md:items-center">
              <div className="flex flex-col gap-3">
                <h4 className="text-2xl font-bold">Premium Quality</h4>
                <p className="w-auto md:w-[26rem] font-semibold">
                  We offer premium products that meet the highest global
                  standards. Sourced from trusted
                </p>
              </div>
              <Image
                src={"/assets/Icon/3.png"}
                alt="silver mountain benefits"
                width={150}
                height={150}
              />
            </div>

            <div className="flex flex-col-reverse md:flex-row w-full gap-8 xl:gap-16 justify-center xl:justify-normal items-start md:items-center">
              <div className="flex flex-col gap-3">
                <h4 className="text-2xl font-bold">Unparalleled Service</h4>
                <p className="w-auto md:w-[26rem] font-semibold">
                  We don&apos;t just move goods—we move mountains to ensure your
                  needs are met with peak performance.
                </p>
              </div>
              <Image
                src={"/assets/Icon/1.png"}
                alt="silver mountain benefits"
                width={150}
                height={150}
              />
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
