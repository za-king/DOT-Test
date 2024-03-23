import Image from "next/image";
const CardSmall = () => {
  return (
    <div className="w-[293.33px] h-[310px] border-2 border-[#E6E6E6] rounded-lg flex flex-col justify-center items-center">
      <div>
        <Image
          src="/images/image card small 1.png"
          width={261}
          height={201}
          alt="icon"
        />
      </div>
      <div className="text-start w-[261px] h-[53px] flex flex-col gap-2 mt-6">
        <p className="text-[#1A202C] font-bold text-xl ">Ruang Keluarga</p>
        <p className="text-sm font-normal">2.0 x 2.9</p>
      </div>
    </div>
  );
};

export default CardSmall;
