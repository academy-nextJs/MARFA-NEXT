export default function Step2_Location() {
  return (
    <div className="space-y-4">
      <div>
        <label className="block mb-1 font-semibold">آدرس:</label>
        <input
          type="text"
          className="border p-2 rounded w-full"
          placeholder="آدرس ملک"
        />
      </div>
      <div>
        <label className="block mb-1 font-semibold">نمایش روی نقشه (فرضی):</label>
        <div className="bg-gray-100 h-40 flex items-center justify-center rounded">
          نقشه فرضی
        </div>
      </div>
    </div>
  );
}