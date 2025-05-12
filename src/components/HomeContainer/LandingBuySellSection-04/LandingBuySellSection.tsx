import { MyChip } from "@/components/common/Button/Chip-btn";
import { ClientButton } from "@/components/common/Button/common-btn";
// import api from "@/utils/service/api";

type landingProps={
  title:string;
  text1:string;
  text2:string;
}
export default async function LandingBuySellSection({ title, text1, text2 }:landingProps) {
  // const { data: offer }= await api.get("/houses?page=1&limit=8&sort=rate&order=DESC");
  // if (!data)
  //   throw new Error("Failed to fetch Hot Houses, Please try again later.");

  return (
    <div className="flex flex-col gap-6">
      <div className="flex flex-col gap-4">
        <MyChip
          size="lg"
          className="bg-transparent px-3 py-6 border border-[#7575FE] h-9 !font-black text-[#7575FE]"
        >
          {title}
        </MyChip>
        <div className="flex items-center ml-14 gap-2">
          <h1 className="font-bold text-3xl">
            {text1}
            <br />
            {text2}
          </h1>
          <ClientButton
            size="lg"
            className="inline-flex bg-[#7575FE] mr-auto py-6 text-white"
          >
            مشاهده همه
          </ClientButton>
        </div>
      </div>
      {/* <LandingCarousel data={data} /> */}
    </div>
  );
}
