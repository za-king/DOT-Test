import Image from "next/image";

const Footer = () => {
  return (
    <div className="bg-[#012846] w-full min-h-[583px] text-[#ffffff] ">
      <div className="container pt-[39px] grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-4 gap-[149px]">
        <div className="lg:col-span-2">
          <Image src="/images/logo B.png" width={169} height={47} alt="logo" />

          <p className="mt-6 font-normal leading-6 py-4">
            SobatBangun adalah platform digital dari SIG yang bergerak dengan
            misi mengembangkan proses pembangunan dan renovasi rumah secara
            lebih baik serta berkelanjutan.
          </p>

          <div className="flex items-center gap-2 pt-2">
            <i>
              <Image
                src="/icon/Message.png"
                width={20}
                height={16}
                alt="icon"
              />
            </i>
            <a href="#">sobat@sobatbangum.com</a>
          </div>

          <p className="py-4">Sosial Media :</p>
          <div className=" flex gap-[26px]">
            <div className="bg-[#2C373E] w-[50px] h-[50px] rounded-full flex justify-center items-center">
              <i>
                <Image
                  src="/icon/instagram 2.png"
                  width={15}
                  height={15}
                  alt="icon"
                />
              </i>
            </div>

            <div className="bg-[#ffffff] w-[50px] h-[50px] rounded-full flex justify-center items-center">
              <i>
                <Image
                  src="/icon/Shape.png"
                  width={15}
                  height={15}
                  alt="icon"
                />
              </i>
            </div>
            <div className="bg-[#ffffff] w-[50px] h-[50px] rounded-full flex justify-center items-center">
              <i>
                <Image
                  src="/icon/Youtube.png"
                  width={15}
                  height={15}
                  alt="icon"
                />
              </i>
            </div>
          </div>
        </div>
        <div>
          <p className="font-bold text-xl">Produk & Layanan</p>
          <ul className="font-normal text-base mt-6  flex flex-col gap-2">
            <li className="leading-9 ">Renovasi</li>
            <li className="leading-9">Bangun Rumah</li>
            <li className="leading-9">Layanan Desain</li>
            <li className="leading-9">Teknologi Tambahan</li>
            <li className="leading-9">Beli Material</li>
          </ul>
        </div>
        <div>
          <p className="font-bold text-xl">Tentang Kami</p>
          <ul className="font-normal text-base mt-6 flex flex-col gap-2">
            <li className="leading-9">Tentang SobatBangun</li>
            <li className="leading-9">Kebijakan Dan Privasi</li>
            <li className="leading-9">Syarat Dan Ketentuan</li>
            <li className="leading-9">FAQ</li>
            <li className="leading-9">Daftar Menjadi Mitra</li>
          </ul>
        </div>
      </div>
      <div className="container pt-[39px] grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-4">
        <div>
          <p className="font-semibold">Kredit Bangun Rumah</p>
          <div className="flex gap-6">
            <i>
              <Image
                src="/icon/image 70.png"
                width={56}
                height={56}
                alt="icon"
              />
            </i>
            <i>
              <Image
                src="/icon/image 71.png"
                width={56}
                height={56}
                alt="icon"
              />
            </i>
            <i>
              <Image
                src="/icon/image 72.png"
                width={56}
                height={56}
                alt="icon"
              />
            </i>
          </div>
        </div>
        <div>
          <p className="font-semibold">Tunai Via Bank Transfer</p>
          <div className="flex gap-6">
            <i>
              <Image
                src="/icon/image 70.png"
                width={56}
                height={56}
                alt="icon"
              />
            </i>
            <i>
              <Image
                src="/icon/image 71.png"
                width={56}
                height={56}
                alt="icon"
              />
            </i>
            <i>
              <Image
                src="/icon/image 72.png"
                width={56}
                height={56}
                alt="icon"
              />
            </i>
          </div>
        </div>
        <div>
          <p className="font-semibold">Kartu Kredit</p>
          <div className="flex gap-6">
            <i>
              <Image
                src="/icon/image 70.png"
                width={56}
                height={56}
                alt="icon"
              />
            </i>
            <i>
              <Image
                src="/icon/image 71.png"
                width={56}
                height={56}
                alt="icon"
              />
            </i>
            <i>
              <Image
                src="/icon/image 72.png"
                width={56}
                height={56}
                alt="icon"
              />
            </i>
          </div>
        </div>
        <div>
          <p className="font-semibold">Rekan Teknologi Tambahan</p>
          <div className="flex gap-6">
            <i>
              <Image
                src="/icon/image 70.png"
                width={56}
                height={56}
                alt="icon"
              />
            </i>
            <i>
              <Image
                src="/icon/image 71.png"
                width={56}
                height={56}
                alt="icon"
              />
            </i>
            <i>
              <Image
                src="/icon/image 72.png"
                width={56}
                height={56}
                alt="icon"
              />
            </i>
          </div>
        </div>
      </div>
      <div className="container pt-[39px] flex justify-between  items-center">
        <div className="flex items-center gap-2">
          <p className="text-sm">Power by:</p>
          <i>
            <Image
              src="/images/logo sig.png"
              width={56}
              height={56}
              alt="icon"
            />
          </i>
        </div>
        <div className="text-sm">
          Copyright © 2023 SobatBangun. All rights reserved.
        </div>
      </div>
    </div>
  );
};

export default Footer;
