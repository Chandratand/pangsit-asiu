import Link from "next/link";
import Image from "next/image";
import Navbar from "@/components/Navbar";
import Pangsit from "../../public/assets/Pangsit.png";
import PangsitAsiu from "../../public/assets/PangsitAsiu.png";
import Title from "@/components/Title";
import Card from "@/components/Card";
import WA from "@/components/WA";
import Location from "@/components/Location";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="scroll-smooth">
      <main className="relative">
        <header className="relative z-10">
          <Navbar />
        </header>
        <div className="absolute bottom-0 h-[30%] w-full bg-primary md:right-0 md:h-full md:w-[30%]" />

        <section className="relative" id="home">
          <div className="relative z-40 px-4 md:max-w-full lg:container">
            <div className="flex flex-wrap">
              {/* leftSide */}
              <div className="w-full space-y-4 py-10 pt-8 text-center md:w-1/2 md:pt-32 md:text-start">
                <h1 className="header">
                  WELCOME TO <br />
                  <span className="text-primary">MIE PANGSIT ASIU.</span>
                </h1>
                <p className="title mx-auto max-w-[350px] md:mx-0">
                  Nikmati Kelezatan Mie Pangsit Homemade di Tebing Tinggi
                </p>
                <Link
                  href="https://wa.me/6281378878500?text=Hallo"
                  className="body mx-auto block max-w-[200px] rounded-lg bg-primary p-3 text-center font-bold text-white md:mx-0"
                >
                  ORDER NOW
                </Link>
              </div>
              {/* end LeftSide */}

              {/* Right Side */}
              <div className="mt-10 w-full md:mt-0 md:w-1/2">
                <Image
                  src={Pangsit}
                  alt="profile"
                  width={686}
                  height={653}
                  className="mx-auto"
                  priority
                />
              </div>
              {/* End RightSide */}
            </div>
          </div>
        </section>
      </main>

      <section className="pb-20 pt-10" id="about">
        <div className="relative px-4 md:max-w-full lg:container">
          <div className="flex flex-wrap">
            {/* leftSide */}
            <div className="w-full space-y-4 pt-8 text-center md:order-2 md:w-1/2 md:p-10  md:pt-32 md:text-start">
              <Title title="Pangsit Asiu." />
              <div className="mx-auto md:mx-0 md:max-w-[320px]">
                <p className="body font-medium">
                  Mie Pangsit Asiu merupakan bakmie legend dari kota Tebing
                  Tinggi yang sudah ada sejak tahun 1960. Selutuh bahan yang
                  digunakan 100% Home Made!
                  <br /> <br />
                  Dapatkan Mie Homemade, Babi Kecap, Sayur-sayuran dan pangsit
                  dalam semangkok Pangsit ASIU!
                </p>
              </div>
            </div>
            {/* end LeftSide */}

            {/* Right Side */}
            <div className="mt-10 w-full md:order-1 md:mt-0 md:w-1/2">
              <div className="mx-auto h-[430px] w-[345px] md:py-10">
                <Image
                  src={PangsitAsiu}
                  alt="profile"
                  width={690}
                  height={860}
                />
              </div>
            </div>
            {/* End RightSide */}
          </div>
        </div>
      </section>

      <section className="py-10" id="testi">
        <div className="px-4 lg:container">
          <Title title="What They Say" />
          <div className="mt-8 flex flex-wrap gap-4">
            <Card />
            <Card />
            <Card />
          </div>
        </div>
      </section>
      <section className="py-10" id="order">
        <div className="px-4 lg:container">
          <div className="flex flex-col items-center">
            <Title title="Order Now" />
            <p className="body mt-5 mb-6 max-w-[550px] text-center">
              Dapatkan satu mangkok kelezatan Mie Pangsit Asiu dengan 100% Mie
              Homemade, Bakmie Kecap, Sayuran dan Pangsit hanya dengan{" "}
              <span className="font-bold text-primary">Rp20.000.</span>
              <br />
              Order Sekarang!
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <WA />
              <Location />
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
