import Image from "next/image";
import { Layout } from "@/components/Layout";
import Bread from "@/components/Bread";
import Hero from "@/components/Hero";

import CardPay from "@/components/CardPay";

import Testimoni from "@/components/Testimoni";
import OtherDesign from "@/components/OtherDesign";
import HouseView from "@/components/HouseView";
export default function Home() {
  return (
    <>
      <Layout>
        <div className="container pt-2 pb-6">
          <Bread />
        </div>
        <Hero />

        <div className="container grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 py-12 ">
          <div className="lg:col-span-3 item-center">
            <HouseView />
          </div>

          <div className="flex flex-col gap-8">
            <CardPay /> <Testimoni />
          </div>
        </div>

        <div className="container">
          <OtherDesign />
        </div>
      </Layout>
    </>
  );
}
