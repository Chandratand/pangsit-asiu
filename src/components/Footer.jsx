import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="flex flex-col items-center justify-center gap-2 bg-primary p-4 text-center text-white md:flex-row">
      <h2 className="text-[22px] font-bold">PANGSIT ASIU</h2>
      <p className="">Jln. S. Parman, No 11. Tebing Tinggi, Sumatera Utara</p>
      <Link href="https://wa.me/6281378878500?text=Hallo">
        <Image src="/assets/icon/wa.svg" width={20} height={20} alt="wa" />
      </Link>
      <Link href="https://instagram.com/pangsitasiu.tbg/">
        <Image src="/assets/icon/ig.svg" width={20} height={20} alt="ig" />
      </Link>
    </footer>
  );
};

export default Footer;
