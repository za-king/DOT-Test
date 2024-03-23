import Image from "next/image";
const CardLarge = () => {
  return (
    <div className="w-[316px] h-[564px] border-2 border-[#E6E6E6] rounded-lg p-4">
      <div>
        <Image
          src="/images/image cl1.png"
          width={284}
          height={201}
          alt="Picture of the author"
        />
      </div>

      <div className=" mt-2">
        <div className="flex gap-1">
          <h4 className="font-semibold text-xl mb-2">Omah Apik 3</h4>
          <p className="px-3 py-1 bg-[#F1F1F1] rounded-2xl font-normal text-base">
            Scandinavian
          </p>
        </div>
        <div className="font-normal text-sm mb-4 flex gap-1">
          <i>
            <Image
              src="/icon/icon pay1.png"
              width={20}
              height={20}
              alt="icon"
            />
          </i>
          Studio SAe
        </div>

        <div className=" flex justify-between gap-2 mb-4 text-center">
          <div className="flex flex-col justify-center items-center w-20 ">
            <i>
              <Image
                src="/icon/icon pay3.png"
                width={24}
                height={24}
                alt="icon"
              />
            </i>
            <p className="text-xs  font-normal text-[#808080]   text-nowrap">
              Dimensi Tanah
            </p>
            <p className="text-sm  font-normal">15 x 8m</p>
          </div>
          <div className="flex flex-col justify-center items-center w-24  ">
            <i>
              <Image
                src="/icon/icon pay4.png"
                width={24}
                height={24}
                alt="icon"
              />
            </i>
            <p className="text-xs  font-normal text-[#808080] text-nowrap w-[80px]">
              Luas Bangunan
            </p>
            <p className="text-sm  font-normal">112m2</p>
          </div>
          <div className="flex flex-col justify-center items-center w-10 ">
            <i>
              <Image
                src="/icon/icon pay5.png"
                width={24}
                height={24}
                alt="icon"
              />
            </i>
            <p className="text-xs  font-normal text-[#808080]">Lantai</p>
            <p className="text-sm  font-normal">2</p>
          </div>
          <div className="flex flex-col justify-center items-center w-20 ">
            <i>
              <Image
                src="/icon/icon pay6.png"
                width={24}
                height={24}
                alt="icon"
              />
            </i>
            <p className="text-xs  font-normal text-[#808080] text-nowrap">
              Kamar Tidur
            </p>
            <p className="text-sm  font-normal">4</p>
          </div>
        </div>
        <hr className="mb-4 h-px bg-gray-200 border-0" />
        <div className="mb-4 flex flex-col gap-1">
          <p className="text-sm  font-normal">Harga Desain</p>
          <h3 className="font-semibold text-2xl">Rp. 32.500.000</h3>
          <p className="text-sm  font-normal text-[#808080]">
            Harga konstruksi mulai dari Rp 560.000.000
          </p>
        </div>
        <button className="w-full py-[8px] px-4 text-center border border-[#F94355] text-[#F94355] rounded-md">
          Lihat Detail
        </button>
      </div>
    </div>
  );
};

export default CardLarge;
