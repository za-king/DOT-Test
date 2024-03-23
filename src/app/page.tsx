import Image from "next/image";
import { Layout } from "@/components/Layout";
import Bread from "@/components/Bread";
import Hero from "@/components/Hero";

import CardPay from "@/components/CardPay";

import Testimoni from "@/components/Testimoni";
import OtherDesign from "@/components/OtherDesign";
import HouseView from "@/components/HouseView";
export default function Home() {
  const dataHouseView = [
    {
      id: 0,
      img: "/images/image card small 1.png",
      title: "Ruang Keluarga",
      size: "2.0 x 2.9",
    },
    {
      id: 1,
      img: "/images/image card small 1.png",
      title: "Ruang Keluarga",
      size: "2.0 x 2.9",
    },
    {
      id: 2,
      img: "/images/image card small 1.png",
      title: "Ruang Keluarga",
      size: "2.0 x 2.9",
    },
    {
      id: 3,
      img: "/images/image card small 1.png",
      title: "Ruang Keluarga",
      size: "2.0 x 2.9",
    },
    {
      id: 4,
      img: "/images/image card small 1.png",
      title: "Ruang Keluarga",
      size: "2.0 x 2.9",
    },
  ];

  const dataOtherDesign = [
    {
      id: 0,
      img: "/images/image cl1.png",
      title: "Omah Apik 1",
      price: "Rp. 32.500.000",
    },
    {
      id: 1,
      img: "/images/image cl1.png",
      title: "Omah Apik 1",
      price: "Rp. 32.500.000",
    },
    {
      id: 2,
      img: "/images/image cl1.png",
      title: "Omah Apik 1",
      price: "Rp. 32.500.000",
    },
    {
      id: 3,
      img: "/images/image cl1.png",
      title: "Omah Apik 1",
      price: "Rp. 32.500.000",
    },
  ];
  return (
    <>
      <Layout>
        <div className="container pt-2 pb-6">
          <Bread />
        </div>
        <Hero />

        <div className="container grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 py-12 ">
          <div className="lg:col-span-3 item-center">
            <HouseView dataHouseView={dataHouseView} />
          </div>

          <div className="flex flex-col gap-8">
            <CardPay /> <Testimoni />
          </div>
        </div>

        <div className="container">
          <OtherDesign dataOtherDesign={dataOtherDesign} />
        </div>
      </Layout>
    </>
  );
}
