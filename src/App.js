import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { Container, Button,  Image } from "react-bootstrap";
import { BrowserRouter, Routes, Route, NavLink } from "react-router-dom";
import Contact from "./Contact";


export function Layout() {
  return (
    <nav className="bg-warning p-2 md-3">
  <img src="tesla.png" class="rounded-circle" alt="Cinque Terre" width="25" height="25"></img>
  <NavLink
    to="/"
    className="link px-2"
    style={({ isActive }) => {
      return {
        textDecoration: isActive ? "none" : "underline",
      };
    }}
  >
    หน้าเเรก
      </NavLink>
      <NavLink
        to="/product"
        className="link px-1"
        style={({ isActive }) => {
          return {
            textDecoration: isActive ? "none" : "underline",
          };
        }}
      >
      </NavLink>
      <NavLink
        to="/contact"
        className="link px-1"
        style={({ isActive }) => {
          return {
            textDecoration: isActive ? "none" : "underline",
          };
        }}
      >
        ผู้จัดทํา
      </NavLink>
    </nav>
  );
}

function Foodlist(props) {
  return (
    <div className="column text-center">
      <Image clessName=""src={props.img} width="50%" />
      <h4 className="mitr">{props.name}</h4>
      <p className="Itim">{props.desc}</p>
      <Button className="md-3 itim bg-secondary">ดูวิธีทำ</Button>
    </div>
  );
}


function Footer() {
  return (
    <div className="text-Left bg-warning link sarabun">
      2023 @ Developed Paramee K.
    </div>
  );
}

function Index() {
  return (
    <>
     <Layout />
     <h4 className="text-decoration-underline text-center mt-3">
        วิธีทำอาหารญี่ปุ่นยอดฮิต
      </h4>
      <div class="container mt-5">
  <div class="row">
    <div class="col-sm-4">
      <img src="3-3.pngw3.webp" width="180" height="150"
      class="mx-auto d-block" ></img>
    <Foodlist        
          name="ซูชิหน้าปลาแซลม่อน"
          desc="ซูชิหน้าปลาดิบ เมนูอาหารญี่ปุ่นยอดฮิต ที่ถือเป็นอาหารประจำชาติอีกหนึ่งเมนู โดยเฉพาะ ซูชิหน้าปลาแซลม่อน ซึ่งเป็นซูชิหน้าปลาดิบที่คนไทยชอบรับประทานมากๆ วิธีการทำก็ไม่ยาก เพียงแค่หุงข้าว และ ปรุงข้าวญี่ปุ่น ให้พร้อมปั้นเป็นข้าวซูชิ แล่เนื้อปลาแซลม่อนใว้ด้านบน เพียงเท่านี้ ก็พร้อมคีบเข้าปาก ทานได้แล้ว"
        />
    </div>
    <div class="col-sm-4">
      <img src="5-3.pngw3.webp" class="rounded-circle" alt="Cinque Terre" width="180" height="150"
      class="mx-auto d-block"></img>
    <Foodlist
          name="ปลาซาบะย่างซอสเทอริยากิ"
          desc="ใครอยากทาน ปลาซาบะราดซอสเทริยากิ แบบดั้งเดิม แนะนำให้ลองทำตามสูตรนี้เลย
          เพราะนี่คือสูตรจาก เชฟโฌ เชฟชาวญี่ปุ่นที่มาอาศัยอยู่ในประเทศไทย
          รับรองว่าไม่ต้องไปทานถึงร้านอาหารญี่ปุ่น ก็จะได้ลิ้มรสชาติที่อร่อย
          ตามแบบฉบับชาวญี่ปุ่นแน่นอน"
        />
    </div>
    <div class="col-sm-4">
      <img src="1-34.jpgw3.webp" class="rounded-circle" alt="Cinque Terre" width="180" height="150"
      class="mx-auto d-block"></img>
    <Foodlist
          name="เกี๊ยวซ่า"
          desc="ถือว่าเป็น เมนูอาหารญี่ปุ่น ที่เหมาะกับเป็นของว่างมาก ๆ สำหรับ เกี๊ยวซ่า ด้วยรสสัมผัสจากแป้งเกี๊ยวที่กรุบกรอบและไส้หมู ผักต่าง ๆ ที่สอดไส้อยู่ด้านใน พอจิ้มกับซอสโชยุที่ให้รสเปรี้ยว ก็จะทำให้ได้ความกรอบนอกนุ่มใน พร้อมรสชาติเปรี้ยวจี๊ดที่ช่วยให้อร่อยมากขึ้น ซึ่งเมนู เกี๊ยวซ่า นั้นถือว่าเป็นเมนูเกี๊ยวทอดที่ฮิตมากในประเทศญี่ปุ่น ก่อนที่จะได้รับความนิยมอย่างมากในประเทศไทย โดยสูตรและส่วนผสมต่าง ๆ มาจาก Youtuber ช่อง daddy cooking"
        />
    </div>
  </div>
</div>
      <Footer />
    </>
  );
}

function App() {
  return (
    <BrowserRouter>
      <Container className="p- my-4 bg-light">
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/main" element={<Index />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </Container>
    </BrowserRouter>
  );
}







export default App;