import StatCard from "./Card";
const LeftHeroSection = () => {
  return (
    <div className="h-[43.3125rem] hidden md:block w-full text-black dark:text-white ">
      <h4 className="md:text-6xl pr-8 pt-6 font-yekan font-black text-4xl">
        خانه ای که میخوای،
        <br />
        جایی که میخوای
      </h4>
      <p className="text-[#767676] md:text-lg text-sm pr-8 pt-4">
        {" "}
        رزرو ، رهن ، اجاره و حتی خرید و فروش ملک مورد نظرتون
        <br />
        مثل آب خوردن فقط در دلتا
      </p>

      <div >
        <StatCard />
      </div>
    </div>
  );
};

export default LeftHeroSection;
