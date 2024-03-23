import Image from "next/image";
const CardPay = () => {
  return (
    <div className="w-[294px] lg:min-w-[364px]   min-h-[458px] p-6 rounded-2xl border-2  border-[#E6E6E6]">
      <h4 className="font-semibold text-xl mb-2">Omah Apik 3</h4>
      <div className="font-normal text-sm mb-4 flex gap-1">
        <i>
          <Image src="/icon/icon pay1.png" width={20} height={20} alt="icon" />
        </i>
        Studio SAe
      </div>

      <div className=" grid grid-cols-2 mb-4">
        <p className="text-sm  font-normal text-[#4D4D4D]">Jenis Rumah</p>
        <p className="text-sm  font-normal">Scandinavian</p>
        <p className="text-sm  font-normal text-[#4D4D4D]">Tipe Desain</p>
        <div className="text-sm  font-normal text-[#F5333F] flex gap-1 items-center">
          <i>
            <Image
              src="/icon/icon pay2.png"
              width={10}
              height={10}
              alt="icon"
            />
          </i>
          Dapat Dimodifikasi
        </div>
      </div>
      <hr className="mb-4  h-px bg-gray-200 border-0" />
      <div className=" grid grid-cols-2 lg:grid-cols-4  gap-x-6 mb-4 text-center">
        <div className="flex flex-col justify-center items-center ">
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
        <div className="flex flex-col justify-center items-center  ">
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
        <div className="flex flex-col justify-center items-center ">
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
        <div className="flex flex-col justify-center items-center ">
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
        <h3 className="font-semibold text-3xl">Rp. 32.500.000</h3>
        <p className="text-sm  font-normal text-[#808080]">
          Harga konstruksi mulai dari Rp 560.000.000
        </p>
      </div>
      <button className="w-full py-[14px] px-4 text-center bg-[#F5333F] text-white rounded-md">
        Konsultasi Sekarang
      </button>
    </div>
  );
};

export default CardPay;
