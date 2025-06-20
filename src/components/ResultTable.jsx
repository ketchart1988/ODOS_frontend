import React, { useState } from 'react';

const ResultTable = ({ result }) => {
  const [showEnglishCode, setShowEnglishCode] = useState(false);
  const [showDigitalCode, setShowDigitalCode] = useState(false);

  if (!result) return null;

  

  // ฟังก์ชันแปลงสถานะเป็นภาษาไทย
  const getStatusText = (status) => {
    switch (status) {
      case 'approved':
      case 'ผ่าน':
        return 'ผ่าน';
      case 'rejected':
      case 'ไม่ผ่าน':
        return 'ไม่ผ่าน';
      case 'pending':
      case 'รอการพิจารณา':
        return 'รอการพิจารณา';
      default:
        return status || 'รอการพิจารณา';
    }
  };

  // ฟังก์ชันสร้าง Link component
  const LinkButton = ({ href, children }) => (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="text-blue-600 hover:text-blue-800 underline text-sm"
    >
      {children}
    </a>
  );

  // ฟังก์ชันดึงข้อมูลจากหลายฟิลด์ที่เป็นไปได้
  const getFieldValue = (obj, ...fieldNames) => {
    for (const fieldName of fieldNames) {
      if (obj[fieldName] !== undefined && obj[fieldName] !== null && obj[fieldName] !== '') {
        return obj[fieldName];
      }
    }
    return '';
  };

  // ดึงข้อมูลจากฟิลด์ต่าง ๆ
  const applicantId = getFieldValue(result, 'Application_id', 'ApplicantId', 'id', 'searchId');
  const firstName = getFieldValue(result, 'ชื่อ (ภาษาไทย)', 'FirstName', 'firstName', 'name');
  const lastName = getFieldValue(result, 'นามสกุล (ภาษาไทย)', 'LastName', 'lastName', 'surname');
  const firstNameEn = getFieldValue(result, 'ชื่อ (ภาษาอังกฤษ)', 'FirstNameEn', 'firstNameEn');
  const lastNameEn = getFieldValue(result, 'นามสกุล (ภาษาอังกฤษ)', 'LastNameEn', 'lastNameEn');
  const status = getFieldValue(result, 'Status', 'status');
  const vdoLink = getFieldValue(result, 'แนบ Link Youtube (เปิดแบบ unlisted)', 'VDOLink', 'vdoLink');
  const docLink = getFieldValue(result, 'เอกสารสำคัญ Google Drive Link (shared)', 'DocLink', 'docLink');
  const email = getFieldValue(result, 'อีเมล', 'อีเมล1', 'email');
  const phone = getFieldValue(result, 'เบอร์โทรศัพท์', 'phone');

  // ตรวจสอบว่าสถานะเป็น "ผ่าน" หรือไม่
  const isApproved = getStatusText(status) === 'ผ่าน';

  // ฟังก์ชันสำหรับแสดง/ซ่อนรหัสเข้าสอบ
  const toggleEnglishCode = () => {
    setShowEnglishCode(!showEnglishCode);
  };

  const toggleDigitalCode = () => {
    setShowDigitalCode(!showDigitalCode);
  };

  // ฟังก์ชันซ่อนรหัสเป็นจุด
  const maskCode = (code) => {
    return code ? '•'.repeat(code.length) : '••••';
  };

  return (
    <div className="mt-8 space-y-8">
      {/* ตารางสำหรับการสมัครในบัตร */}
      <div>
        <h3 className="text-xl font-semibold text-[#003366] mb-4 font-sukhumvit">
          สำหรับการสมัครในบัตร (24 มิ.ย. - 16 มิ.ย. 68)
        </h3>
        <div className="overflow-x-auto shadow-lg rounded-lg">
          <table className="w-full bg-white border border-gray-200">
            <thead className="bg-[#1a365d] text-white">
              <tr>
                <th className="px-4 py-3 text-left text-sm font-medium">รหัสผู้สมัคร</th>
                <th className="px-4 py-3 text-left text-sm font-medium">ชื่อ</th>
                <th className="px-4 py-3 text-left text-sm font-medium">นามสกุล</th>
                <th className="px-4 py-3 text-left text-sm font-medium">สถานะ</th>
                <th className="px-4 py-3 text-left text-sm font-medium">คลิปวีดีโอ</th>
                <th className="px-4 py-3 text-left text-sm font-medium">เอกสาร</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              <tr className="hover:bg-gray-50">
                <td className="px-4 py-3 text-sm text-gray-900 font-medium">
                  {applicantId}
                </td>
                <td className="px-4 py-3 text-sm text-gray-900">
                  {firstName}
                </td>
                <td className="px-4 py-3 text-sm text-gray-900">
                  {lastName}
                </td>
                <td className="px-4 py-3 text-sm">
                  <span className={`font-medium px-2 py-1 rounded-full text-xs ${
                    getStatusText(status) === 'ผ่าน' ? 'bg-green-100 text-green-800' : 
                    getStatusText(status) === 'ไม่ผ่าน' ? 'bg-red-100 text-red-800' : 'bg-yellow-100 text-yellow-800'
                  }`}>
                    {getStatusText(status)}
                  </span>
                </td>
                <td className="px-4 py-3 text-sm">
                  {vdoLink && vdoLink !== '#' ? (
                    <LinkButton href={vdoLink}>ดูวีดีโอ</LinkButton>
                  ) : (
                    <span className="text-gray-400 text-xs">ไม่มีลิงก์</span>
                  )}
                </td>
                <td className="px-4 py-3 text-sm">
                  {docLink && docLink !== '#' ? (
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

      {/* ตารางสำหรับการสอบกึ่งกลางภาษาอังกฤษและดิจิทัลพื้นฐาน - แสดงเฉพาะเมื่อสถานะเป็น "ผ่าน" */}
      {isApproved && (
        <div>
          <h3 className="text-xl font-semibold text-[#003366] mb-4 font-sukhumvit">
            สำหรับการสอบกึ่งกลางภาษาอังกฤษและดิจิทัลพื้นฐาน (28 มิ.ย. - 6 ก.ค. 68)
          </h3>
          
          {/* ตารางภาษาอังกฤษ */}
          <div className="mb-6">
            <div className="overflow-x-auto shadow-lg rounded-lg">
              <table className="w-full bg-white border border-gray-200">
                <thead className="bg-[#1a365d] text-white">
                  <tr>
                    <th className="px-4 py-3 text-left text-sm font-medium">รหัสผู้สมัคร</th>
                    <th className="px-4 py-3 text-left text-sm font-medium">รหัสเข้าสอบ</th>
                    <th className="px-4 py-3 text-left text-sm font-medium">ชื่อ</th>
                    <th className="px-4 py-3 text-left text-sm font-medium">นามสกุล</th>
                    <th className="px-4 py-3 text-left text-sm font-medium">เข้าสอบภาษาอังกฤษ</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  <tr className="hover:bg-gray-50">
                    <td className="px-4 py-3 text-sm text-gray-900 font-medium">
                      {applicantId}
                    </td>
                    <td className="px-4 py-3 text-sm">
                      <div className="flex items-center">
                        <span className="text-gray-900 font-medium bg-blue-50 px-2 py-1 rounded">
                          {showEnglishCode 
                            ? (result.EnglishExamCode || result.englishExamCode || `eng${applicantId?.slice(-4) || '0000'}`)
                            : maskCode(result.EnglishExamCode || result.englishExamCode || `eng${applicantId?.slice(-4) || '0000'}`)
                          }
                        </span>
                        <button 
                          onClick={toggleEnglishCode}
                          className="ml-2 text-gray-500 hover:text-gray-700 cursor-pointer transition-colors duration-200"
                          title={showEnglishCode ? 'ซ่อนรหัส' : 'แสดงรหัส'}
                        >
                          {showEnglishCode ? '🙈' : '👁️'}
                        </button>
                      </div>
                    </td>
                    <td className="px-4 py-3 text-sm text-gray-900">
                      {firstName}
                    </td>
                    <td className="px-4 py-3 text-sm text-gray-900">
                      {lastName}
                    </td>
                    <td className="px-4 py-3 text-sm">
                      <div className="text-center">
                        <LinkButton href={result.EnglishExamLink || result.englishExamLink || "#"}>
                          เข้าสอบ
                        </LinkButton>
                        <div className="text-xs text-gray-500 mt-1">
                          <div>ระบบเปิดให้สอบอิสระ</div>
                          <div>ระหว่าง 9.00 - 21.00</div>
                        </div>
                      </div>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          {/* ตารางดิจิทัลพื้นฐาน */}
          <div>
            <div className="overflow-x-auto shadow-lg rounded-lg">
              <table className="w-full bg-white border border-gray-200">
                <thead className="bg-[#1a365d] text-white">
                  <tr>
                    <th className="px-4 py-3 text-left text-sm font-medium">รหัสผู้สมัคร</th>
                    <th className="px-4 py-3 text-left text-sm font-medium">รหัสเข้าสอบ</th>
                    <th className="px-4 py-3 text-left text-sm font-medium">ชื่อ</th>
                    <th className="px-4 py-3 text-left text-sm font-medium">นามสกุล</th>
                    <th className="px-4 py-3 text-left text-sm font-medium">เข้าสอบดิจิทัลพื้นฐาน</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  <tr className="hover:bg-gray-50">
                    <td className="px-4 py-3 text-sm text-gray-900 font-medium">
                      {applicantId}
                    </td>
                    <td className="px-4 py-3 text-sm">
                      <div className="flex items-center">
                        <span className="text-gray-900 font-medium bg-green-50 px-2 py-1 rounded">
                          {showDigitalCode 
                            ? (result.DigitalExamCode || result.digitalExamCode || `dig${applicantId?.slice(-4) || '0000'}`)
                            : maskCode(result.DigitalExamCode || result.digitalExamCode || `dig${applicantId?.slice(-4) || '0000'}`)
                          }
                        </span>
                        <button 
                          onClick={toggleDigitalCode}
                          className="ml-2 text-gray-500 hover:text-gray-700 cursor-pointer transition-colors duration-200"
                          title={showDigitalCode ? 'ซ่อนรหัส' : 'แสดงรหัส'}
                        >
                          {showDigitalCode ? '🙈' : '👁️'}
                        </button>
                      </div>
                    </td>
                    <td className="px-4 py-3 text-sm text-gray-900">
                      {firstName}
                    </td>
                    <td className="px-4 py-3 text-sm text-gray-900">
                      {lastName}
                    </td>
                    <td className="px-4 py-3 text-sm">
                      <div className="text-center">
                        <LinkButton href={result.DigitalExamLink || result.digitalExamLink || "#"}>
                          เข้าสอบ
                        </LinkButton>
                        <div className="text-xs text-gray-500 mt-1">
                          <div>ระบบเปิดให้สอบอิสระ</div>
                          <div>ระหว่าง 9.00 - 21.00</div>
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

      {/* หมายเหตุ */}
      <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4">
        <div className="flex">
          <div className="flex-shrink-0">
            <svg className="h-5 w-5 text-yellow-400" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
            </svg>
          </div>
          <div className="ml-3">
            <p className="text-sm text-yellow-700">
              <strong>หมายเหตุ:</strong> สถานะการสมัครและข้อมูลการสอบอาจมีการเปลี่ยนแปลง กรุณาตรวจสอบข้อมูลล่าสุดอีกครั้ง
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ResultTable;