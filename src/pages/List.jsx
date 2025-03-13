import { Toaster, toast } from "react-hot-toast";
import { ArrowLeft, Copy } from "lucide-react";
import { Link } from "react-router-dom";
const List = () => {
  const applications = [
    { id: "S120006575", verifyCode: "1234567891", status: "รอการพิจารณา" },
    { id: "S120006622", verifyCode: "1234567891", status: "ผ่านการคัดเลือกครั้งที่ 1" },
    { id: "S110006432", verifyCode: "1234567891", status: "สอบทักษะภาษาอังกฤษ" },
    { id: "S100006833", verifyCode: "1234567891", status: "ผ่านการคัดเลือกครั้งที่ 2" },
    { id: "S120006966", verifyCode: "1234567891", status: "สอบทักษะด้านดิจิทัลระดับกลาง" },
    { id: "S120007063", verifyCode: "1234567891", status: "ผ่านการคัดเลือกครั้งที่ 3" },
    { id: "S120007168", verifyCode: "1234567891", status: "สอบสัมภาษณ์" },
    { id: "S520007262", verifyCode: "1234567891", status: "ผ่านสอบสัมภาษณ์" },
    { id: "S990007664", verifyCode: "1234567891", status: "ไม่ผ่าน" },
  ];

  const statusColors = {
    "รอการพิจารณา": "bg-orange-100 text-orange-800 hover:bg-orange-100",
    "สอบทักษะภาษาอังกฤษ": "bg-orange-100 text-orange-800 hover:bg-orange-100",
    "สอบทักษะด้านดิจิทัลระดับกลาง": "bg-orange-100 text-orange-800 hover:bg-orange-100",
    "สอบสัมภาษณ์": "bg-orange-100 text-orange-800 hover:bg-orange-100",
    "ผ่านการคัดเลือกครั้งที่ 1": "bg-green-100 text-green-800 hover:bg-green-100",
    "ผ่านการคัดเลือกครั้งที่ 2": "bg-green-100 text-green-800 hover:bg-green-100",
    "ผ่านการคัดเลือกครั้งที่ 3": "bg-green-100 text-green-800 hover:bg-green-100",
    "ผ่านสอบสัมภาษณ์": "bg-green-100 text-green-800 hover:bg-green-100",
    "ไม่ผ่าน": "bg-red-100 text-red-800 hover:bg-red-100",
  };

  const getStatusColor = (status) =>
    statusColors[status] || "bg-gray-100 text-gray-800 hover:bg-gray-100";

  const handleCopy = (text) => {
    navigator.clipboard.writeText(text);
    toast.success("คัดลอกข้อมูลเรียบร้อยแล้ว!");
  };

  return (
    <div className="min-h-10 bg-gradient-to-br from-blue-50 to-indigo-50 p-6">
      <Toaster />
      <div className="max-w-4xl mx-auto mt-10">
        <Link
          to="/check-status"
          className="inline-flex items-center text-blue-600 hover:text-blue-700 mb-8 group"
        >
          <ArrowLeft className="w-4 h-4 mr-2 transition-transform group-hover:-translate-x-1" />
          กลับไปยังหน้าเช็คสถานะ
        </Link>

        <h1 className="text-3xl font-bold text-gray-900 mb-8">สถานะการสมัคร</h1>

        <div className="grid gap-4">
  {applications.map((app) => (
    <div
      key={app.id}
    
    >
      {/* บล็อกสถานะ */}
      <div className="flex justify-end mb-4">
        <div
          className={`inline-flex items-center rounded-full px-2.5 py-0.5 text-ls font-semibold ${getStatusColor(
            app.status
          )}`}
        >
          {app.status}
        </div>
      </div>

      {/* บล็อกสำหรับรหัสผู้สมัครและรหัสยืนยัน */}
      <div className="flex gap-4">
        {/* บล็อกรหัสผู้สมัคร */}
        <div
          className="flex justify-between items-center p-4 border rounded-2xl bg-white flex-1 cursor-pointer"
          onClick={() => handleCopy(app.id)} // เพิ่มฟังก์ชันคัดลอกเมื่อคลิกทั้งกรอบ
        >
          <span className="text-lg font-semibold text-gray-700">
            รหัสผู้สมัคร: {app.id}
          </span>
          <button
            onClick={(e) => {
              e.stopPropagation(); // ป้องกันการคัดลอกซ้ำเมื่อกดปุ่ม
              handleCopy(app.id);
            }}
            className="p-2 hover:bg-gray-100 rounded-md transition-colors"
          >
            <Copy className="h-4 w-4" />
          </button>
        </div>

        {/* บล็อกรหัสยืนยัน */}
        <div
          className="flex justify-between items-center p-4 border rounded-2xl bg-white flex-1 cursor-pointer"
          onClick={() => handleCopy(app.verifyCode)} // เพิ่มฟังก์ชันคัดลอกเมื่อคลิกทั้งกรอบ
        >
          <span className="text-lg font-semibold text-gray-700">
            รหัสยืนยัน: {app.verifyCode}
          </span>
          <button
            onClick={(e) => {
              e.stopPropagation(); // ป้องกันการคัดลอกซ้ำเมื่อกดปุ่ม
              handleCopy(app.verifyCode);
            }}
            className="p-2 hover:bg-gray-100 rounded-md transition-colors"
          >
            <Copy className="h-4 w-4" />
          </button>
        </div>
      </div>
    </div>
  ))}
</div>


      </div>
    </div>
  );
};

export default List;