import React, { useState } from "react";

const ResultTable = ({ result }) => {
  const [showEnglishCode, setShowEnglishCode] = useState(false);
  const [showDigitalCode, setShowDigitalCode] = useState(false);

  if (!result) return null;

  // ฟังก์ชันแปลงสถานะเป็นภาษาไทย
  const getStatusText = (status) => {
    switch (status) {
      case "approved":
      case "ผ่านการคัดเลือกครั้งที่ 1":
        return "ผ่านการคัดเลือกครั้งที่ 1";
      case "rejected":
      case "ไม่ผ่าน":
        return "ไม่ผ่าน";
      case "pending":
      case "รอการพิจารณา":
        return "รอการพิจารณา";
      default:
        return status || "รอการพิจารณา";
    }
  };

  // ฟังก์ชันสร้าง Link component - แก้ไขเอาเส้นใต้ออก
  const LinkButton = ({ href, children, className = "" }) => (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={`text-blue-600 hover:text-blue-800 text-sm no-underline hover:no-underline ${className}`}
      style={{ textDecoration: 'none' }}
    >
      {children}
    </a>
  );

  // ฟังก์ชันดึงข้อมูลจากหลายฟิลด์ที่เป็นไปได้
  const getFieldValue = (obj, ...fieldNames) => {
    for (const fieldName of fieldNames) {
      if (
        obj[fieldName] !== undefined &&
        obj[fieldName] !== null &&
        obj[fieldName] !== ""
      ) {
        return obj[fieldName];
      }
    }
    return "";
  };

  // ดึงข้อมูลจากฟิลด์ต่าง ๆ
  const applicantId = getFieldValue(
    result,
    "Application_id",
    "ApplicantId",
    "id",
    "searchId"
  );
  const firstName = getFieldValue(
    result,
    "ชื่อ (ภาษาไทย)",
    "FirstName",
    "firstName",
    "name"
  );
  const lastName = getFieldValue(
    result,
    "นามสกุล (ภาษาไทย)",
    "LastName",
    "lastName",
    "surname"
  );
  const firstNameEn = getFieldValue(
    result,
    "ชื่อ (ภาษาอังกฤษ)",
    "FirstNameEn",
    "firstNameEn"
  );
  const lastNameEn = getFieldValue(
    result,
    "นามสกุล (ภาษาอังกฤษ)",
    "LastNameEn",
    "lastNameEn"
  );
  const status = getFieldValue(result, "Status", "status");
  const vdoLink = getFieldValue(
    result,
    "แนบ Link Youtube (เปิดแบบ unlisted)",
    "VDOLink",
    "vdoLink"
  );
  const docLink = getFieldValue(
    result,
    "เอกสารสำคัญ Google Drive Link (shared)",
    "DocLink",
    "docLink"
  );
  const email = getFieldValue(result, "อีเมล", "อีเมล1", "email");
  const phone = getFieldValue(result, "เบอร์โทรศัพท์", "phone");

  // ตรวจสอบว่าสถานะเป็น "ผ่าน" หรือไม่
  const isApproved = getStatusText(status) === "ผ่านการคัดเลือกครั้งที่ 1";

  // ฟังก์ชันสำหรับแสดง/ซ่อนรหัสเข้าสอบ
  const toggleEnglishCode = () => {
    setShowEnglishCode(!showEnglishCode);
  };

  const toggleDigitalCode = () => {
    setShowDigitalCode(!showDigitalCode);
  };

  // ฟังก์ชันซ่อนรหัสเป็นจุด
  const maskCode = (code) => {
    return code ? "•".repeat(code.length) : "••••";
  };

  return (
    <div className="mt-8 space-y-8">
      {/* ตารางสำหรับการสมัครในบัตร */}
      <div>
        <h3 className="text-xl font-semibold text-[#1a365d] mb-4 font-sukhumvit">
          1.ข้อมูลการสมัคร (24 มิ.ย. - 16 มิ.ย. 68)
        </h3>
        <div className="overflow-x-auto shadow-lg rounded-lg">
          <table className="w-full bg-white border border-gray-200">
            <thead className="bg-[#ffff00] text-black">
              <tr>
                <th className="px-4 py-3 text-center text-sm font-medium border-r border-gray-300">
                  รหัสผู้สมัคร
                </th>
                <th className="px-4 py-3 text-center text-sm font-medium border-r border-gray-300">
                  ชื่อ
                </th>
                <th className="px-4 py-3 text-center text-sm font-medium border-r border-gray-300">
                  นามสกุล
                </th>
                <th className="px-4 py-3 text-center text-sm font-medium border-r border-gray-300">
                  สถานะ
                </th>
                <th className="px-4 py-3 text-center text-sm font-medium border-r border-gray-300">
                  คลิปวีดีโอ
                </th>
                <th className="px-4 py-3 text-center text-sm font-medium">
                  เอกสาร
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              <tr className="hover:bg-gray-50">
                <td className="px-4 py-3 text-sm text-gray-900 text-center font-medium border-r border-gray-300">
                  {applicantId}
                </td>
                <td className="px-4 py-3 text-sm text-gray-900 text-center border-r border-gray-300">
                  {firstName}
                </td>
                <td className="px-4 py-3 text-sm text-gray-900 text-center border-r border-gray-300">
                  {lastName}
                </td>
                <td className="px-4 py-3 text-sm text-center border-r border-gray-300">
                  <span
                    className={`font-medium px-2 py-1 rounded-full text-xs ${
                      getStatusText(status) === "ผ่านการคัดเลือกครั้งที่ 1"
                        ? "bg-green-100 text-green-800"
                        : getStatusText(status) === "ไม่ผ่าน"
                        ? "bg-red-100 text-red-800"
                        : "bg-yellow-100 text-yellow-800"
                    }`}
                  >
                    {getStatusText(status)}
                  </span>
                </td>
                <td className="px-4 py-3 text-sm text-center border-r border-gray-300">
                  {vdoLink && vdoLink !== "#" ? (
                    <LinkButton href={vdoLink}>ดูวีดีโอ</LinkButton>
                  ) : (
                    <span className="text-gray-400 text-xs">ไม่มีลิงก์</span>
                  )}
                </td>
                <td className="px-4 py-3 text-center text-sm">
                  {docLink && docLink !== "#" ? (
                    <LinkButton href={docLink}>ดูเอกสาร</LinkButton>
                  ) : (
                    <span className="text-gray-400 text-xs">ไม่มีลิงก์</span>
                  )}
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      {/* ตารางสำหรับการสอบภาษาอังกฤษ - แสดงเฉพาะเมื่อสถานะเป็น "ผ่าน" */}
      {isApproved && (
        <div>
          <h3 className="text-xl font-semibold text-[#1a365d] mb-4 font-sukhumvit">
            ทดสอบครั้งที่ 1
          </h3>
          <h3 className="text-xl font-semibold text-[#1a365d] mb-4 font-sukhumvit">
            2.ข้อมูลสำหรับการสอบทักษะภาษาอังกฤษ (28 มิ.ย. - 6 ก.ค. 68)
          </h3>

          {/* ตารางภาษาอังกฤษ */}
          <div className="mb-6">
            <div className="overflow-x-auto shadow-lg rounded-lg">
              <table className="w-full bg-white border border-gray-200">
                <thead className="bg-[#ffba00] text-black">
                  <tr>
                    <th className="px-3 py-3 text-center text-sm font-medium border-r border-gray-300 w-[12%]">
                      รหัสผู้สมัคร
                    </th>
                    <th className="px-3 py-3 text-center text-sm font-medium border-r border-gray-300 w-[15%]">
                      รหัสเข้าสอบ
                    </th>
                    <th className="px-3 py-3 text-center text-sm font-medium border-r border-gray-300 w-[12%]">
                      คู่มือการสอบ
                    </th>
                    <th className="px-3 py-3 text-center text-sm font-medium border-r border-gray-300 w-[15%]">
                      Link ระบบทดลองสอบ
                    </th>
                    <th className="px-3 py-3 text-center text-sm font-medium w-[25%]">
                      Link ระบบสอบ
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  <tr className="hover:bg-gray-50">
                    <td className="px-3 py-3 text-sm text-center text-gray-900 font-medium border-r border-gray-300">
                      {applicantId}
                    </td>
                    <td className="px-3 py-3 text-sm text-center border-r border-gray-300">
                      <div className="flex items-center justify-center text-center">
                        <span className="text-gray-900 font-medium bg-blue-50 px-2 py-1 rounded">
                          {showEnglishCode
                            ? result.EnglishExamCode ||
                              result.englishExamCode ||
                              `english66`
                            : maskCode(
                                result.EnglishExamCode ||
                                  result.englishExamCode ||
                                  `english66`
                              )}
                        </span>
                        <button
                          onClick={toggleEnglishCode}
                          className="ml-2 text-gray-500 hover:text-gray-700 cursor-pointer transition-colors duration-200"
                          title={showEnglishCode ? "ซ่อนรหัส" : "แสดงรหัส"}
                        >
                          {showEnglishCode ? "🔒" : "👁"}
                        </button>
                      </div>
                    </td>

                    <td className="px-3 py-3 text-sm border-r border-gray-300">
                      <div className="text-center">
                        <LinkButton href="#" className="text-blue-600">
                          เอกสาร (PDF)
                        </LinkButton>
                        <div className="text-blue-600 text-sm mt-1">
                          คลิป (VDO)
                        </div>
                      </div>
                    </td>
                    <td className="px-3 py-3 text-sm border-r border-gray-300">
                      <div className="text-center">
                        <LinkButton
                          href={
                            result.EnglishExamLink ||
                            result.englishExamLink ||
                            "#"
                          }
                        >
                          Click ทดลองสอบ
                        </LinkButton>
                      </div>
                    </td>
                    <td className="px-3 py-3 text-sm">
                      <div className="flex flex-col items-center justify-center space-y-2">
                        <div className="text-left space-y-1 w-full max-w-[250px]">
                          <div className="flex justify-center mb-2">
                            <span className="bg-[#00ac47] text-white px-6 py-2 rounded text-sm font-medium">
                              Click สอบ
                            </span>
                          </div>
                          <div className="text-xs text-gray-500">
                            เข้าทดสอบได้ครั้งเดียวเท่านั้น
                          </div>
                          <div className="text-xs text-blue-600">
                            ช่องทางติดต่อสอบถาม/เมื่อมีปัญหาการเข้าสอบ:
                          </div>
                          <div className="text-xs text-blue-600">
                            Line ID: @globish-support
                          </div>
                        </div>
                      </div>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          {/* ตารางสำหรับการสอบดิจิทัล */}
          <div>
            <h3 className="text-xl font-semibold text-[#1a365d] mb-4 font-sukhumvit">
              3.ข้อมูลสำหรับการสอบทักษะดิจิทัลระดับพื้นฐาน (28 มิ.ย. - 6 ก.ค.
              68)
            </h3>
            <div className="overflow-x-auto shadow-lg rounded-lg">
              <table className="w-full bg-white border border-gray-200">
                <thead className="bg-[#4285f4] text-white">
                  <tr>
                    <th className="px-3 py-3 text-center text-sm font-medium border-r border-gray-300 w-[12%]">
                      รหัสผู้สมัคร
                    </th>
                    <th className="px-3 py-3 text-center text-sm font-medium border-r border-gray-300 w-[15%]">
                      รหัสเข้าสอบ
                    </th>
                    <th className="px-3 py-3 text-center text-sm font-medium border-r border-gray-300 w-[12%]">
                      คู่มือการสอบ
                    </th>
                    <th className="px-3 py-3 text-center text-sm font-medium border-r border-gray-300 w-[15%]">
                      Link ระบบทดลองสอบ
                    </th>
                    <th className="px-3 py-3 text-center text-sm font-medium w-[25%]">
                      Link ระบบสอบ
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  <tr className="hover:bg-gray-50">
                    <td className="px-3 py-3 text-sm text-center text-gray-900 font-medium border-r border-gray-300">
                      {applicantId}
                    </td>
                    <td className="px-3 py-3 text-sm text-center align-middle border-r border-gray-300">
                      <div className="flex items-center justify-center text-center">
                        <span className="text-gray-900 font-medium bg-green-50 px-2 py-1 rounded">
                          {showDigitalCode
                            ? result.DigitalExamCode ||
                              result.digitalExamCode ||
                              `digital55`
                            : maskCode(
                                result.DigitalExamCode ||
                                  result.digitalExamCode ||
                                  `digital55`
                              )}
                        </span>
                        <button
                          onClick={toggleDigitalCode}
                          className="ml-2 text-gray-500 hover:text-gray-700 cursor-pointer transition-colors duration-200"
                          title={showDigitalCode ? "ซ่อนรหัส" : "แสดงรหัส"}
                        >
                          {showDigitalCode ? "🔒" : "👁"}
                        </button>
                      </div>
                    </td>

                    <td className="px-3 py-3 text-sm border-r border-gray-300">
                      <div className="text-center">
                        <LinkButton href="#" className="text-blue-600">
                          เอกสาร (PDF)
                        </LinkButton>
                        <div className="text-blue-600 text-sm mt-1">
                          คลิป (VDO)
                        </div>
                      </div>
                    </td>
                    <td className="px-3 py-3 text-sm border-r border-gray-300">
                      <div className="text-center">
                        <LinkButton
                          href={
                            result.DigitalExamLink ||
                            result.digitalExamLink ||
                            "#"
                          }
                        >
                          Click ทดลองสอบ
                        </LinkButton>
                      </div>
                    </td>
                    <td className="px-3 py-3 text-sm">
                      <div className="flex flex-col items-center justify-center space-y-2">
                        <div className="text-left space-y-1 w-full max-w-[250px]">
                          <div className="flex justify-center mb-2">
                            <span className="bg-[#00ac47] text-white px-6 py-2 rounded text-sm font-medium">
                              Click สอบ
                            </span>
                          </div>
                          <div className="text-xs text-gray-500">
                            เข้าทดสอบได้ครั้งเดียวเท่านั้น
                          </div>
                          <div className="text-xs text-blue-600">
                            ช่องทางติดต่อสอบถาม/เมื่อมีปัญหาการเข้าสอบ:
                          </div>
                          <div className="text-xs text-blue-600">
                            Line ID: 
                          </div>
                        </div>
                      </div>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ResultTable;