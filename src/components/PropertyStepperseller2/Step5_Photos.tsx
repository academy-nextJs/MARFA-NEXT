export default function Step5_Photos() {
  return (
    <div className="space-y-4">
      <label className="block font-semibold">تصاویر ملک:</label>
      <input type="file" multiple className="border p-2 rounded w-full" />
      <div className="flex gap-4">
        <div className="w-24 h-24 bg-gray-200 flex items-center justify-center rounded">
          عکس ۱
        </div>
        <div className="w-24 h-24 bg-gray-200 flex items-center justify-center rounded">
          عکس ۲
        </div>
      </div>
    </div>
  );
}