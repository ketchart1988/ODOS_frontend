<<<<<<< HEAD

=======
>>>>>>> 9fe6f56 (Initial commit for 25-06-25-the-final-destination)
import { useState } from "react"; // ✅ ต้อง import useState
import Navbar from "../components/Navbar";
import SearchForm from "../components/SearchForm";
import ProgressSteps from "../components/ProgressSteps";
import ResultTable from "../components/ResultTable";

const Checkstatus = () => {
  const [searchId, setSearchId] = useState("");
  const [verifyCode, setVerifyCode] = useState(""); // ใช้ verifyCode แทน phone
  const [result, setResult] = useState(null);
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [hasSearched, setHasSearched] = useState(false);
<<<<<<< HEAD
=======
  const trimmedId = searchId.trim();
const trimmedVerifyCode = verifyCode.trim();
>>>>>>> 9fe6f56 (Initial commit for 25-06-25-the-final-destination)

  const handleSearch = async (e) => {
    e.preventDefault();

<<<<<<< HEAD
    if (!/^S\d+$/.test(searchId)) {
      setError("กรุณากรอกรหัสผู้สมัครที่ถูกต้อง (ตัว S ตามด้วยตัวเลข)");
      setResult(null);
      setHasSearched(true);
      setIsSubmitting(false);
      setIsLoading(false);
      return;
    }
    if (!/^\d{10}$/.test(verifyCode)) {
      setError("กรุณากรอกรหัสยืนยัน 10 หลักให้ถูกต้อง");
      setResult(null);
      setHasSearched(true);
      setIsSubmitting(false);
      setIsLoading(false);
      return;
    }
    
=======
    if (!/^S\d+$/.test(trimmedId)) {
  setError("กรุณากรอกรหัสผู้สมัครที่ถูกต้อง (ตัว S ตามด้วยตัวเลข)");
  setResult(null);
  setHasSearched(true);
  setIsSubmitting(false);
  setIsLoading(false);
  return;
}

if (!/^\d{10}$/.test(trimmedVerifyCode)) {
  setError("กรุณากรอกรหัสยืนยัน 10 หลักให้ถูกต้อง");
  setResult(null);
  setHasSearched(true);
  setIsSubmitting(false);
  setIsLoading(false);
  return;
}

>>>>>>> 9fe6f56 (Initial commit for 25-06-25-the-final-destination)
    // ถ้าข้อมูลถูกต้อง ค่อยเริ่มโหลด
    setIsLoading(true);
    setError("");
    setHasSearched(true);

    try {
      const response = await fetch(
<<<<<<< HEAD
        `https://odos.thaigov.go.th:3000/api/searchV?searchId=${searchId}&verifyCode=${verifyCode}` // Main Server 
=======
        `https://odos.thaigov.go.th:3000/api/searchV?searchId=${searchId}&verifyCode=${verifyCode}` // Main Server
>>>>>>> 9fe6f56 (Initial commit for 25-06-25-the-final-destination)
        // `/api/searchV?searchId=${searchId}&verifyCode=${verifyCode}` // Myserver
      );

      if (!response.ok) {
        throw new Error("ไม่พบข้อมูล หรือเกิดข้อผิดพลาด");
<<<<<<< HEAD
        
=======
>>>>>>> 9fe6f56 (Initial commit for 25-06-25-the-final-destination)
      }

      const data = await response.json();
      if (data.error) {
        setError(data.error);
        setResult(null);
      } else {
        setResult(data.length > 0 ? data[0] : null);
      }
    } catch (err) {
      setError("ข้อมูลที่ใส่ไม่ถูกต้อง โปรดตรวจสอบและลองใหม่อีกครั้ง");
      setResult(null);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="Sukhumvit">
      <Navbar hideLanguageTranslator={false} />
      <div className="container mx-auto py-8 px-4 text-[#003366] mb-4 font-sukhumvit">
        <h2 className="font-serif text-2xl font-sukhumvit">
          ระบบตรวจสอบสถานะการพิจารณาโครงการ ODOS
        </h2>
        <SearchForm
          searchId={searchId}
          setSearchId={setSearchId}
          verifyCode={verifyCode}
          setVerifyCode={setVerifyCode}
          handleSearch={handleSearch}
          isLoading={isLoading}
        />
        {error && <p className="mt-4 text-red-600 font-sukhumvit">{error}</p>}
<<<<<<< HEAD
        {isLoading && <p className="mt-4 text-gray-600 font-sukhumvit">กำลังโหลด...</p>}
=======
        {isLoading && (
          <p className="mt-4 text-gray-600 font-sukhumvit">กำลังโหลด...</p>
        )}
>>>>>>> 9fe6f56 (Initial commit for 25-06-25-the-final-destination)
        {hasSearched && !isLoading && result && (
          <>
            <ProgressSteps status={result.Status || "รอการพิจารณา"} />
            <ResultTable result={result} />
<<<<<<< HEAD
            <p className="mt-4 text-red-600 text-sm">
  กรุณาตรวจสอบความถูกต้อง หากท่านพบข้อผิดพลาด กรุณาสมัครใหม่ผ่านแอพพลิเคชชั่น "ทางรัฐ" ภายในวันที่ 16 มิถุนายน 2568
</p>
          </>
        )}
        {hasSearched && !isLoading && !result && (
          <p className="mt-4 text-gray-600 font-sukhumvit">ไม่พบข้อมูลที่ตรงกัน</p>
=======
            {/* <p className="mt-4 text-red-600 text-sm">
              กรุณาตรวจสอบความถูกต้อง หากท่านพบข้อผิดพลาด
              กรุณาสมัครใหม่ผ่านแอพพลิเคชชั่น "ทางรัฐ" 
            </p> */}
          </>
        )}
        {hasSearched && !isLoading && !result && (
          <p className="mt-4 text-gray-600 font-sukhumvit">
            ไม่พบข้อมูลที่ตรงกัน
          </p>
>>>>>>> 9fe6f56 (Initial commit for 25-06-25-the-final-destination)
        )}
      </div>
    </div>
  );
};

<<<<<<< HEAD
export default Checkstatus;
=======
export default Checkstatus;
>>>>>>> 9fe6f56 (Initial commit for 25-06-25-the-final-destination)
