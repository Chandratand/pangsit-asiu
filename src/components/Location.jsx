import Image from "next/image";
import Link from "next/link";

const Location = () => {
  return (
    <Link href="/" className="block rounded-full  px-4 py-2">
      <div className="flex items-center gap-2">
        <Image
          src="/assets/icon/location.svg"
          alt="Whatsapp Number"
          width={26}
          height={26}
        />
        <p className="text-lg font-semibold text-dark">Jln. S. Parman, No 11</p>
      </div>
    </Link>
  );
};

export default Location;
