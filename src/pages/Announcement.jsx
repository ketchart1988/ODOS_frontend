import ScrollToTop from "../components/ScrollToTop";
import Footer from "../components/Footer";
import NavbarDashboard from "../components/NavbarDashboard";

function Announcement() {
    return (
        <div className="LINESeed">
            <NavbarDashboard />
            <br />
            <br />
            <div>
                <label htmlFor="" className="flex justify-center text-3xl font-bold">ประกาศ</label>
                <br />
                <label htmlFor="" className="flex justify-center text-2xl font-bold">รายชื่อผู้ที่ผ่านการคัดเลือกครั้งที่ 1</label>
                <br />
                <label htmlFor="" className="flex justify-center font-medium">สำหรับผู้ที่ "ผ่านแบบมีเงื่อนไข" ขอให้ตรวจสอบรายละเอียดในระบบ Check Status</label>
                <br />
                <label htmlFor="" className="flex justify-center font-medium">แล้วดำเนินการให้แล้วเสร็จ ภายใน 6 กรกฎาคม</label>
            </div>
             <br />
            <br />
            <div className="h-screen flex items-center justify-center p-10">
                <iframe src="https://app.powerbi.com/view?r=eyJrIjoiMzhjNzA3NWEtZGQ3Yy00ZjU0LTgxYTItZmQ3YmQxMTBjNjI2IiwidCI6IjRhNGY3YjUyLTBlMDUtNDQxNS04NDU0LTc2ODliMDBhODdiMiIsImMiOjEwfQ%3D%3D"
                    width={1000}
                    height={660}

                />
            </div>
            <br />
            <ScrollToTop />
            <div className="flex flex-col">
                <Footer />
            </div>
        </div>
    );
}

export default Announcement;