import React from "react";
import { Link } from "react-router-dom";
import Mammoth from "mammoth";
import { useState, useEffect } from "react";
// import Navbar from "./components/Navbar";
import Navbar_info from "../components/Nav_info";
import ScrollToTop from "../components/ScrollToTop";
import Footer from "../components/FooterTH";
import { Underline } from "lucide-react";



function InfoTH() {

  return (
    <div className="LINESeed">

      <Navbar_info />
      <ScrollToTop />
      <div>
        <img src="/images/ODOS Website_Detail_Section 1.jpg" alt="" />
      </div>
      {/* รายละเอียด */}
      <div>
        <div className="id= คุณสมบัติ">
          <div className="h-screen flex flex-col  ">
            <br></br>
            <h1 className="text-5xl  font-bold mb-6 items-center text-center ">คุณสมบัติของผู้สมัครเข้าร่วมโครงการ</h1>
            <p className="px-4">ณ วันที่ 24 มีนาคม 2568 ผู้สมัครต้องมีคุณสมบัติ ดังต่อไปนี้</p>
            <ul className="คุณสมบัติ px-6">
              <li><label htmlFor="#">1.1	มีสัญชาติไทย</label></li>
              <li><label htmlFor="#">1.2	อายุไม่เกิน 19 ปี</label></li>
              <li><label htmlFor="#">1.3	มีที่อยู่ตามทะเบียนบ้านอยู่ในอำเภอใดอำเภอหนึ่งของประเทศไทย ต่อเนื่องเป็นระยะเวลาไม่น้อยกว่า 1 ปี กรณีย้ายที่อยู่ไม่ถึง 1 ปี ให้ยึดที่อยู่เดิมก่อนหน้าที่อาศัยต่อเนื่องเป็นระยะเวลาไม่น้อยกว่า 1 ปี </label></li>
              <li><label htmlFor="#">1.4	เป็นนักเรียน นิสิต หรือนักศึกษา ที่ศึกษาอยู่ในสถานศึกษาภายในประเทศ ในปีการศึกษา 2567 ระดับมัธยมศึกษาตอนปลาย ประกาศนียบัตรวิชาชีพ ประกาศนียบัตรวิชาชีพชั้นสูง ชั้นปีที่ 1 หรือระดับปริญญาตรี ชั้นปีที่ 1 หรือเทียบเท่า </label></li>
              <li><label htmlFor="#">1.5	คะแนนเฉลี่ยสะสมรวม 2 ภาคการศึกษาล่าสุด ไม่ต่ำกว่า 2.50 (ในระบบการวัดผลที่คิดคะแนนให้ A=4, B=3, C=2, D=1, E หรือ F=0) หรือร้อยละ 62.5</label></li>
              <li><label htmlFor="#">1.6	คะแนนเฉลี่ยสะสมวิชาภาษาอังกฤษ 2 ภาคการศึกษาล่าสุด ไม่ต่ำกว่า 3.00 (ในระบบการวัดผลที่คิดคะแนนให้ A=4, B=3, C=2, D=1, E หรือ F=0) หรือร้อยละ 75</label></li>
              <li><label htmlFor="#">1.7	มีความประพฤติดี โดยมีหนังสือรับรองจากสถานศึกษาหรืออาจารย์ที่ปรึกษา หรือครูประจำชั้น </label></li>
              <li><label htmlFor="#">1.8  มีสุขภาพแข็งแรงทั้งร่างกายและจิตใจ ไม่เป็นโรคอันอาจเป็นอุปสรรคต่อการศึกษา หรือเป็นโรคติดต่อที่เป็นอุปสรรคต่อการปฏิบัติงาน และไม่เป็นคนไร้ความสามารถ </label></li>

            </ul>
            <br />
            <h1 className="text-5xl font-bold mb-6 items-center text-center ">เอกสารประกอบการพิจารณาคัดเลือกผู้สมัครเข้าร่วมโครงการ</h1>
            <ul className="เอกสาร px-6">
              <li><label htmlFor="">2.1	รูปถ่ายหน้าตรง ไม่สวมหมวก ไม่สวมแว่นตา พื้นหลังไม่มีลวดลาย ถ่ายไว้ไม่เกิน 1 ปีนับถึงวันเปิดรับสมัคร</label></li>
              <li><label htmlFor="">2.2	สำเนาบัตรประชาชนและทะเบียนบ้านของผู้สมัคร</label></li>
              <li><label htmlFor="">2.3	สำเนาบัตรประชาชนและทะเบียนบ้านของบิดามารดา หรือผู้ปกครองที่ให้การอุปการะเลี้ยงดู </label></li>
              <li><label htmlFor="">2.4	หนังสือยินยอมจากบิดามารดา หรือผู้ปกครองที่ให้การอุปการะเลี้ยงดู&nbsp;&nbsp;</label><a className="underline" href="/pdf/GuardianConsentForm.pdf" >(ดาวน์โหลด)</a></li>
              <li><label htmlFor="">2.5	สำเนาระเบียนแสดงผลการเรียน 2 ภาคการศึกษาล่าสุด</label></li>
              <li><label htmlFor="">2.6	หนังสือรับรองสถานภาพการเป็นนักเรียน นิสิต นักศึกษา หรือหนังสือรับรองการจบการศึกษา</label></li>
              <li><label htmlFor="">2.7	หนังสือรับรองความประพฤติจากสถานศึกษา อาจารย์ที่ปรึกษา หรือครูประจำชั้น</label></li>
              <li><label htmlFor="">2.8	ประกาศนียบัตรหรือเอกสารแสดงถึงความสำเร็จในกิจกรรมที่เกี่ยวข้องกับเทคโนโลยีดิจิทัล (ถ้ามี)</label></li>
              <li><label htmlFor="">2.9	วีดีโอแนะนำตัวเอง เล่าประสบการณ์ ความรู้ความสามารถ เป้าหมาย และความคาดหวังในการเข้าร่วมโครงการ เป็นภาษาอังกฤษ ความยาวไม่เกิน 2 นาที ได้ยินเสียงพูดชัดเจน ไม่มีเสียงรบกวน และเห็นใบหน้าผู้สมัครชัดเจน</label></li>
              <li><label htmlFor="">2.10	เอกสารอื่น ๆ (ถ้ามี) เช่น สำเนาหลักฐานการเปลี่ยนชื่อ - นามสกุล ผลการทดสอบภาษาอังกฤษหรือภาษาต่างประเทศอื่น ๆ</label></li>
            </ul>
            <br />
            <h1 className="text-5xl font-bold mb-6 items-center text-center ">หลักเกณฑ์การพิจารณา</h1>



            <div style={{ width: "80%", margin: "0px", padding: "20px", textAlign: "left" }}>
              <ul style={{ listStyleType: "none", padding: "0", width: "100%" }}>
                <li><label>3.1 การพิจารณาสำหรับการประกาศผลรอบที่ 1:</label></li>
                <li style={{ display: "flex", alignItems: "center", padding: "8px 0" }}>
                  <span style={{ flex: "1" }}>1) คะแนนเฉลี่ยสะสม</span>
                  <span style={{ width: "80px", textAlign: "right", fontWeight: "bold" }}>10%</span>
                </li>
                <li style={{ display: "flex", alignItems: "center", padding: "8px 0" }}>
                  <span style={{ flex: "1" }}>2) คะแนนเฉลี่ยสะสมวิชาภาษาอังกฤษ</span>
                  <span style={{ width: "80px", textAlign: "right", fontWeight: "bold" }}>20%</span>
                </li>
                <li style={{ display: "flex", alignItems: "center", padding: "8px 0" }}>
                  <span style={{ flex: "1" }}>3) ประสบการณ์และความสำเร็จด้านดิจิทัล</span>
                  <span style={{ width: "80px", textAlign: "right", fontWeight: "bold" }}>30%</span>
                </li>
                <li style={{ display: "flex", alignItems: "center", padding: "8px 0" }}>
                  <span style={{ flex: "1" }}>4) การนำเสนอทักษะและทัศนคติผ่านสื่อวีดีโอ</span>
                  <span style={{ width: "80px", textAlign: "right", fontWeight: "bold" }}>40%</span>
                </li>

                <li><label>3.2 การพิจารณาสำหรับการประกาศผลรอบที่ 2:</label></li>
                <li style={{ display: "flex", alignItems: "center", padding: "8px 0" }}>
                  <span style={{ flex: "1" }}>1) ผลสอบภาษาอังกฤษ</span>
                  <span style={{ width: "80px", textAlign: "right", fontWeight: "bold" }}>50%</span>
                </li>
                <li style={{ display: "flex", alignItems: "center", padding: "8px 0" }}>
                  <span style={{ flex: "1" }}>2) ผลสอบทักษะด้านดิจิทัลระดับพื้นฐาน</span>
                  <span style={{ width: "80px", textAlign: "right", fontWeight: "bold" }}>50%</span>
                </li>

                <li><label>3.3 การพิจารณาสำหรับการประกาศผลรอบที่ 3:</label></li>
                <li style={{ display: "flex", alignItems: "center", padding: "8px 0" }}>
                  <span style={{ flex: "1" }}>1) ผลสอบทักษะด้านดิจิทัลระดับกลาง</span>
                  <span style={{ width: "80px", textAlign: "right", fontWeight: "bold" }}>100%</span>
                </li>

                <li><label>3.4 การพิจารณาประกาศผลผู้ได้รับการคัดเลือกผ่านการสัมภาษณ์:</label></li>
                <li style={{ display: "flex", alignItems: "center", padding: "8px 0" }}>
                  <span style={{ flex: "1" }}>1) ทัศนคติ</span>
                  <span style={{ width: "80px", textAlign: "right", fontWeight: "bold" }}>20%</span>
                </li>
                <li style={{ display: "flex", alignItems: "center", padding: "8px 0" }}>
                  <span style={{ flex: "1" }}>2) ปฏิภาณไหวพริบในการแก้ไขปัญหา</span>
                  <span style={{ width: "80px", textAlign: "right", fontWeight: "bold" }}>20%</span>
                </li>
                <li style={{ display: "flex", alignItems: "center", padding: "8px 0" }}>
                  <span style={{ flex: "1" }}>3) การสื่อสาร</span>
                  <span style={{ width: "80px", textAlign: "right", fontWeight: "bold" }}>20%</span>
                </li>
                <li style={{ display: "flex", alignItems: "center", padding: "8px 0" }}>
                  <span style={{ flex: "1" }}>4) ความคิดเชิงวิเคราะห์</span>
                  <span style={{ width: "80px", textAlign: "right", fontWeight: "bold" }}>20%</span>
                </li>
                <li style={{ display: "flex", alignItems: "center", padding: "8px 0" }}>
                  <span style={{ flex: "1" }}>5) บุคลิกภาพ</span>
                  <span style={{ width: "80px", textAlign: "right", fontWeight: "bold" }}>20%</span>
                </li>
              </ul>
            </div>

            <br />
            <h1 className="text-5xl font-bold mb-6 items-center text-center ">แนวทางการคัดเลือกผู้สมัครเข้าร่วมโครงการ</h1>
            <ul className="คัดเลือก px-6">
              <li><label htmlFor="">4.1	ผู้สมัครเข้าร่วมโครงการต้องมีคุณสมบัติครบถ้วนตามประกาศนี้ โดยคณะกรรมการฯ จะพิจารณาประกาศผลผู้ผ่านการคัดเลือกในรอบที่ 1 จากเอกสารประกอบการพิจารณาและวีดีโอแนะนำตัว</label></li>
              <li><label htmlFor="">4.2	ผู้สมัครเข้าร่วมโครงการที่ได้รับการประกาศรายชื่อเป็นผู้ผ่านการคัดเลือกในรอบที่ 1 จะต้องดำเนินการสอบภาษาอังกฤษและทักษะดิจิทัลระดับพื้นฐานผ่านแพลตฟอร์มที่คณะกรรมการฯ กำหนด โดยผู้สมัครเข้าร่วมโครงการที่ได้คะแนนสูงสุดในรอบนี้สามอันดับของแต่ละอำเภอ/เขตจะได้รับการประกาศรายชื่อเป็นผู้ผ่านการคัดเลือกในรอบที่ 2</label></li>
              <li><label htmlFor="">4.3	ผู้สมัครเข้าร่วมโครงการที่ผ่านการคัดเลือกในรอบที่ 2 จะต้องดำเนินการสอบวัดระดับทักษะดิจิทัลระดับกลางผ่านแพลตฟอร์มที่คณะกรรมการฯ กำหนด โดยผู้สมัครเข้าร่วมโครงการที่ได้คะแนนสูงสุดในรอบนี้ของแต่ละอำเภอ/เขตจะได้รับการประกาศรายชื่อเป็นผู้ผ่านการคัดเลือกในรอบที่ 3 โดยผู้สมัครเข้าร่วมโครงการที่ได้คะแนนสูงสุดในลำดับที่สองและสามจะได้รับการประกาศรายชื่อเป็นตัวแทนสำรองของอำเภอ/เขตตามลำดับ</label></li>
              <li><label htmlFor="">4.4	ผู้สมัครเข้าร่วมโครงการที่ผ่านการคัดเลือกในรอบที่ 3 จะต้องเข้าสู่กระบวนการกำหนดประเทศ/พื้นที่ ด้วยวิธีการจับสลากในวัน เวลาและสถานที่ที่คณะกรรมการฯ กำหนด</label></li>
              <li><label htmlFor="">4.5	ผู้สมัครเข้าร่วมโครงการจะต้องเข้ารับการคัดเลือกด้วยวิธีการสัมภาษณ์ กับคณะกรรมการคัดเลือกด้วยวิธีการสัมภาษณ์รายประเทศ/พื้นที่ตามที่ได้ทำการจับสลากไป และในกรณีที่ประเทศ/พื้นที่ใดมีหลายหลักสูตร คณะกรรมการคัดเลือกฯ จะเป็นผู้กำหนดหลักสูตรตามความเหมาะสมของผู้สมัครเข้าร่วมโครงการ</label></li>
              <li><label htmlFor="">4.6	ในกรณีมีผู้สละสิทธิหรือไม่ผ่านการคัดเลือกด้วยวิธีการสัมภาษณ์ จะให้สิทธิในการรับการคัดเลือกแก่ตัวแทนสำรองของอำเภอ/เขตตามลำดับ</label></li>
              <li><label htmlFor="">4.7	ในกรณีที่ไม่มีผู้สมัครเข้าร่วมโครงการในอำเภอ/เขตใด จะให้สิทธิในการรับการคัดเลือกแก่ตัวแทนสำรองของอำเภอ/เขตอื่น ตามลำดับคะแนนการสอบวัดระดับทักษะในข้อ 4.3</label></li>
              <li><label htmlFor="">4.8	ในกรณีที่พบว่าในกระบวนการจัดลำดับคะแนนของผู้สมัครเข้าร่วมโครงการมีคะแนนเท่ากันตั้งแต่สองคนขึ้นไป หรือกรณีอื่นใดนอกเหนือจากประกาศนี้ ให้คณะกรรมการฯ กำหนดแนวทางการคัดเลือกเพิ่มเติม เพื่อให้เกิดการพิจารณาที่โปร่งใสและเป็นธรรม และการพิจารณาของคณะกรรมการฯ ถือเป็นที่สิ้นสุด </label></li>
              <br />
              <li>&nbsp;&nbsp;&nbsp;&nbsp;<a className="underline" href="/pdf/odos_consent_form.pdf">เอกสารแจ้งการประมวลผลข้อมูลส่วนบุคคล (Privacy Notice)</a></li>
            </ul>
            <br />
            <h1 className="text-5xl font-bold mb-6 items-center text-center "><h1 className="text-5xl font-bold mb-6 items-center text-center ">เงื่อนไขและข้อผูกพันของผู้เข้าร่วมโครงการ</h1></h1>
            <ul className="เงื่อนไข px-6">
              <li><label htmlFor="">5.1	ผู้เข้าร่วมโครงการจะต้องทำสัญญาเพื่อเป็นพนักงานกลุ่มเยาวชนของสำนักงานฯ ตลอดระยะเวลาโครงการ </label></li>
              <li><label htmlFor="">5.2	ผู้เข้าร่วมโครงการจะได้รับการสนับสนุนเพื่อร่วมกิจกรรมของโครงการในแต่ละประเทศ/พื้นที่ที่กำหนดโดยไม่มีค่าใช้จ่าย และจะได้รับการสนับสนุน รวมถึงค่าใช้จ่ายอื่นที่จำเป็นสำหรับการดำรงชีวิตอยู่ในต่างประเทศ</label></li>
              <li><label htmlFor="">5.3	ผู้เข้าร่วมโครงการต้องปฏิบัติตามเงื่อนไขหรือข้อผูกพันในการเข้าร่วมโครงการตามที่สำนักงานฯ กำหนดไว้เป็นการเฉพาะ</label></li>
              <li><label htmlFor="">5.4	หากตรวจสอบว่าผู้เข้าร่วมโครงการไม่ปฏิบัติตามเงื่อนไขหรือข้อผูกพันในการเข้าร่วมโครงการคณะกรรมการฯ มีสิทธิระงับหรือยุติสถานะผู้เข้าร่วมโครงการ</label></li>
            </ul>
            <br />
            <h1 className="text-5xl font-bold mb-6 items-center text-center ">ข้อปฏิบัติในการเข้าร่วมโครงการ</h1>
            <ul className="ปฎิบัติ px-6">
              <li><label htmlFor="">6.1	ผู้เข้าร่วมโครงการต้องปฏิบัติตนให้เหมาะสมในฐานะตัวแทนของประเทศไทย และรักษาชื่อเสียงของประเทศ</label></li>
              <li><label htmlFor="">6.2	ผู้เข้าร่วมโครงการต้องไม่แสดงความคิดเห็นหรือกระทำการใด ๆ ที่อาจก่อให้เกิดความเสียหายต่อโครงการ สำนักงานฯ หรือความสัมพันธ์ระหว่างประเทศ</label></li>
              <li><label htmlFor="">6.3	ผู้เข้าร่วมโครงการต้องเข้าร่วมกิจกรรมตลอดระยะเวลาโครงการ และปฏิบัติตามกฎระเบียบข้อบังคับของสำนักงานฯ และสถานศึกษา</label></li>
              <li><label htmlFor="">6.4	ผู้เข้าร่วมโครงการต้องจัดทำผลการเข้าร่วมกิจกรรมต่าง ๆ ภายในโครงการในรูปแบบคลิปวีดีโอ ตามรายละเอียดและระยะเวลาที่คณะกรรมการฯ ประกาศกำหนด เพื่อรายงานต่อคณะกรรมการฯ</label></li>
              <li><label htmlFor="">6.5	ผู้เข้าร่วมโครงการต้องเผยแพร่คลิปวีดีโอผลการเข้าร่วมกิจกรรม ตามรายละเอียดในข้อ 6.4 เพื่อสื่อสารและสร้างแรงบันดาลใจแก่เยาวชนและประชาชน ในการยกระดับหรือเพิ่มพูนทักษะ</label></li>
            </ul>
            <br />
            <h1 className="text-5xl font-bold mb-6 items-center text-center ">การระงับหรือยุติสถานะผู้เข้าร่วมโครงการ</h1>
            <ul className="การระงับ px-6">
              <li><label htmlFor="">ผู้เข้าร่วมโครงการจะถูกระงับหรือยุติสถานะผู้เข้าร่วมโครงการในกรณีดังต่อไปนี้</label></li>
              <li><label htmlFor="">7.1	ได้รับการลงโทษเนื่องจากกระทำผิดกฎระเบียบของสถานศึกษาหรือกฎหมาย </label></li>
              <li><label htmlFor="">7.2	มีความประพฤติไม่เหมาะสมกับการเป็นผู้ได้รับคัดเลือกเข้าร่วมโครงการ เช่น ไม่ปฏิบัติตนอยู่ในกรอบของศีลธรรมและวัฒนธรรมอันดีงามของสังคมไทย ทั้งก่อนหรือระหว่างการเข้าร่วมโครงการ</label></li>
              <li><label htmlFor="">7.3	ไม่ปฏิบัติตามเงื่อนไขในการเข้าร่วมโครงการ</label></li>
              <li><label htmlFor="">7.4	หลีกเลี่ยง ละเลยการรายงานตัว การปฐมนิเทศ การอบรม และการทำสัญญาตามที่สำนักงานฯ กำหนด</label></li>
              <li><label htmlFor="">7.5	ขาดการติดต่อกับพี่เลี้ยงในระหว่างเข้ารับการพัฒนาทักษะในหลักสูตรเกิน 1 วัน หรือตามที่สำนักงานฯ กำหนด</label></li>
              <li><label htmlFor="">7.6	พบว่าให้ข้อมูลประกอบ หลักฐานเอกสารอันเป็นเท็จ ทั้งก่อนหรือระหว่างการเข้าร่วมโครงการ</label></li>
              <li className="pl-10 px"><label htmlFor="">คณะกรรมการฯ สามารถวินิจฉัยให้ระงับหรือยุติสถานะการเข้าร่วมโครงการ และตัดสิทธิ การเข้าร่วมโครงการในปีต่อ ๆ ไปได้</label></li>
            </ul>
            <br />
            <div className="flex flex-col">
              <Footer />
            </div>
          </div>
        </div>
      </div>


      {/* บังคับให้รูปไปอยู่ล่างสุด */}
      {/* <div className="mt-auto">
        <img src="/images/Partner.jpg" alt="" />
      </div> */}

      {/* <Footer /> */}

    </div>


  );
}

export default InfoTH;
