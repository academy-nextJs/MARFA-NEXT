// pages/index.js
import HotelTitleComponent from "./HotelTitleComponent";

export default function HotelHeaderHousePage() {
  return (
    <div className="space-y-4">
      {/* <h1 className="text-2xl font-semibold">لیست هتل‌ها</h1> */}

      {/* صدا زدن کامپوننت با پراپس */}
      <HotelTitleComponent
        name="هتل همایون فرکیشن ایران"
        address="گیلان، رشت، میدان آزادی، روبه‌روی پاساژ مال"
        location="https://via.placeholder.com/40"
      />

      {/* <HotelTitleComponent
        name="هتل آزادی تهران"
        address="تهران، بلوار کشاورز، خیابان فلسطین"
        location="https://via.placeholder.com/40"
      /> */}
    </div>
  );
}
