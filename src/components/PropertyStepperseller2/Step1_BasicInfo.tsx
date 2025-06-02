export default function Step1_BasicInfo() {
  return (
    <div className="space-y-4">
      <div>
        <label className="block mb-1 font-semibold">عنوان آگهی:</label>
        <input
          type="text"
          className="border p-2 rounded w-full"
          placeholder="مثلاً: فروش آپارتمان لوکس"
        />
      </div>
      <div>
        <label className="block mb-1 font-semibold">توضیحات:</label>
        <textarea
          className="border p-2 rounded w-full"
          placeholder="توضیحات کامل"
        />
      </div>
    </div>
  );
}