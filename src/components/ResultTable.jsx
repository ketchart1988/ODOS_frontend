import React from "react";

const ResultTable = ({ result }) => (
  <div className="mt-24 overflow-visible rounded-xl shadow-lg">
    <div className="w-full">
      <table className="table-auto w-full mt-6 bg-[#0B293B] text-xs sm:text-sm border rounded-xl font-sukhumvit">
        <thead>
          <tr className="text-white">
            <th className="px-2 sm:px-6 py-2 sm:py-4 text-left font-medium border-b border-gray-300">รหัสผู้สมัคร</th>
            <th className="px-2 sm:px-6 py-2 sm:py-4 text-left font-medium border-b border-gray-300">ชื่อ</th>
            <th className="px-2 sm:px-6 py-2 sm:py-4 text-left font-medium border-b border-gray-300">นามสกุล</th>
            <th className="px-2 sm:px-6 py-2 sm:py-4 text-left font-medium border-b border-gray-300">สถานะ</th>
            <th className="px-2 sm:px-6 py-2 sm:py-4 text-left font-medium border-b border-gray-300">คลิบวีดีโอ</th>
            <th className="px-2 sm:px-6 py-2 sm:py-4 text-left font-medium border-b border-gray-300">เอกสาร</th>
          </tr>
        </thead>
        <tbody>
          <tr className="even:bg-gray-50 odd:bg-white text-gray-800">
            <td className="border px-2 sm:px-6 py-2 sm:py-3">{result.Application_id || "ไม่ระบุ"}</td>
            <td className="border px-2 sm:px-6 py-2 sm:py-3">{result["ชื่อ (ภาษาไทย)"] || "ไม่ระบุ"}</td>
            <td className="border px-2 sm:px-6 py-2 sm:py-3">{result["นามสกุล (ภาษาไทย)"] || "ไม่ระบุ"}</td>
            <td className="border px-2 sm:px-6 py-2 sm:py-3">{result.Status || "ไม่ระบุ"}</td>
            <td className="border px-2 sm:px-6 py-2 sm:py-3">
  {result["แนบ Link Youtube (เปิดแบบ unlisted)"] ? (
    <a
      href={
        result["แนบ Link Youtube (เปิดแบบ unlisted)"].startsWith("http")
          ? result["แนบ Link Youtube (เปิดแบบ unlisted)"]
          : `https://${result["แนบ Link Youtube (เปิดแบบ unlisted)"]}`
      }
      target="_blank"
      rel="noopener noreferrer"
      className="text-blue-600 underline"
    >
      VDO Link
    </a>
  ) : (
    "ไม่ระบุ"
  )}
</td>
<td className="border px-2 sm:px-6 py-2 sm:py-3">
  {result["เอกสารสำคัญ Google Drive Link (shared)"] ? (
    <a
      href={
        result["เอกสารสำคัญ Google Drive Link (shared)"].startsWith("http")
          ? result["เอกสารสำคัญ Google Drive Link (shared)"]
          : `https://${result["เอกสารสำคัญ Google Drive Link (shared)"]}`
      }
      target="_blank"
      rel="noopener noreferrer"
      className="text-blue-600 underline"
    >
      Doc Link
    </a>
  ) : (
    "ไม่ระบุ"
  )}
</td>
            {/* <td className="border px-2 sm:px-6 py-2 sm:py-3">{result["เอกสารสำคัญ Google Drive Link (shared)"] || "ไม่ระบุ"}</td> */}
          </tr>
        </tbody>
      </table>
    </div>
  </div>
);

export default ResultTable;