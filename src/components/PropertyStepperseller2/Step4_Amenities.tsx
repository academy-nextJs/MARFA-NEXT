export default function Step4_Amenities() {
  return (
    <div className="space-y-2">
      <label className="block font-semibold mb-2">امکانات:</label>
      <div className="flex gap-4 flex-wrap">
        <label>
          <input type="checkbox" /> آسانسور
        </label>
        <label>
          <input type="checkbox" /> پارکینگ
        </label>
        <label>
          <input type="checkbox" /> انباری
        </label>
      </div>
    </div>
  );
}