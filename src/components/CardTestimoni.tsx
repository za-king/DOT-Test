import Image from "next/image";
const CardTestimoni = () => {
  return (
    <div className=" w-[364px]  flex gap-4">
      <div>
        <Image src="/icon/icon testi.png" width={72} height={36} alt="icon" />
      </div>
      <div>
        <div className="flex gap-1 items-center">
          <p className="text-base font-semibold">Budi Setiadi </p>
          <p className="text-[#C5C7D0]">|</p>
          <i>
            <Image
              src="/icon/icon star.png"
              width={24}
              height={24}
              alt="icon"
            />
          </i>
          <p className="text-[#666666] font-normal  text-sm">4.5</p>
        </div>
        <p className="text-[#666666] text-base  font-normal whitespace-normal">
          Desainnya sangat bagus dan pengiriman cepat Terima kasih Sobat Bangun
        </p>
      </div>
    </div>
  );
};

export default CardTestimoni;
