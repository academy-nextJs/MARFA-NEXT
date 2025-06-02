export default function Step3_Details() {
  return (
    <div className="space-y-4">
      <div>
        <label className="block mb-1 font-semibold">قیمت:</label>
        <input
          type="number"
          className="border p-2 rounded w-full"
          placeholder="مثلاً ۵۰۰ میلیون"
        />
      </div>
      <div>
        <label className="block mb-1 font-semibold">متراژ:</label>
        <input
          type="number"
          className="border p-2 rounded w-full"
          placeholder="متراژ"
        />
      </div>
    </div>
  );
}