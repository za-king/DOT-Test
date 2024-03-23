import Image from "next/image";

const CardSmall = ({ items }: any) => {
  return (
    <div className="w-[293px]  h-[310px] border-2 border-[#E6E6E6] rounded-lg flex flex-col justify-center items-center">
      <div>
        <Image src={items?.img} width={261} height={201} alt="icon" />
      </div>
      <div className="text-start w-[261px] h-[53px] flex flex-col gap-2 mt-6">
        <p className="text-[#1A202C] font-bold text-xl ">{items?.title}</p>
        <p className="text-sm font-normal">{items?.size}</p>
      </div>
    </div>
  );
};

export default CardSmall;
