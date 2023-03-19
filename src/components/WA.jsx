import Image from "next/image";
import Link from "next/link";
import React from "react";

const WA = () => {
  return (
    <Link
      href="https://wa.me/6281378878500?text=Hallo"
      className="block rounded-full border-2 border-primary bg-[#FFF5E5] px-4 py-2"
    >
      <div className="flex items-center gap-2">
        <Image
          src="/assets/icon/whatsapp.svg"
          alt="Whatsapp Number"
          width={26}
          height={26}
        />
        <p className="text-lg font-semibold text-primary">+62 8137 8878 500</p>
      </div>
    </Link>
  );
};

export default WA;
