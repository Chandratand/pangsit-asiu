import Image from "next/image";

const Card = () => {
  return (
    <div className="w-full space-y-4 rounded-lg bg-white p-4 shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px] md:w-fit md:flex-1">
      <div className="flex items-center gap-4">
        <div className="relative h-[50px] w-[50px] md:h-[75px] md:w-[75px]">
          <Image src="/assets/dummy.png" alt="profile" fill />
        </div>
        <p className="title">Wiko Susilo</p>
      </div>
      <p className="body">
        Mie nya enak sekali, lembut dan rasanya kaya sekali. lorem ipsum dolor i
        adsd asd asjda sdj asd kask da.
      </p>
    </div>
  );
};

export default Card;
