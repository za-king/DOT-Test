import Image from "next/image";

const Header = () => {
  return (
    <div className=" w-full bg-[#fffff] h-[122px]">
      <div className="py-[40px] container flex justify-between items-center font-semibold text-base">
        <Image
          src="/images/logo.png"
          width={194}
          height={42}
          alt="Picture of the author"
        />

        <ul className=" sm:flex gap-8 hidden ">
          <li>
            <a href="#" className="flex items-center ">
              Tentang Kami
              <i>
                <Image src="/icon/VB B.png" width={20} height={20} alt="icon" />
              </i>
            </a>
          </li>
          <li>
            <a href="#" className="text-[#F5333F] flex items-center ">
              Produk & Layanan
              <i>
                <Image src="/icon/VR B.png" width={20} height={20} alt="icon" />
              </i>
            </a>
          </li>
          <li>
            <a href="#">Blog</a>
          </li>
          <li>
            <a href="#">FAQ</a>
          </li>
        </ul>

        <div className="flex gap-4">
          <button className=" py-[10px] px-[16px] rounded-[6px]">Daftar</button>
          <button className=" py-[10px] px-[16px] rounded-[6px] bg-[#F5333F] text-[#ffffff]">
            Masuk
          </button>
        </div>
      </div>
    </div>
  );
};

export default Header;
