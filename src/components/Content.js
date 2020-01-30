import React, {useState} from 'react';

function Content() {

  const [message, setState] = useState('Thank for like')
  
  const alertFunc = () => {
    alert(message)
  }
  return (
    <div>
      <div className="top-space border-black p-3">
          <p><strong>อังคาร 21 / 01 / 2020</strong></p>
          <div className="ml-3">
              <p> เสียงนาฬิกาดัง ปลุกให้ตื่นตอน 9 โมงเช้า ฉันตื่นขึ้นมาพร้อมอาการงัวเงีย เพราะเมื่อคืนนอนดึกมาก 
                  หลังจากนั้น ก็นอนเล่นบนเตียงสักพัก และลุกขึ้นไปอาบน้ำ เพื่อที่จะเตรียมตัวไปเรียนในคาบบ่าย 
                  พออาบน้ำแต่งตัวเสร็จ ก็สั่งข้าวเที่ยงมากินที่ห้อง จากนั้นก็ออกไปเรียน วันนี้ฉันเรียน 2 วิชา จนถึง 6 โมงเย็น
                  หลังจากเลิกเรียน ฉันก็ไปร้านอาหารเพื่อนกินข้าว พอกินเสร็จ ฉันก็กลับห้อง นั่งเล่นสักพัก ฉันก็อาบน้ำและเข้านอน
                  วันนี้เหนื่อยมากๆ หวังว่าพรุ่งนี้คงไม่เหนื่อยเท่าวันนี้นะ 
              </p>
          </div>

          <p><strong>พุธ 22 / 01 / 2019</strong></p>
          <div className="ml-3">
              <p> วันนี้เป็นอีกหนึ่งวันที่ขี้เกียจตื่นไปเรียน อาจจะเพราะเรียนเช้า และเมื่อคืนก็นอนดึกมาก วันนี้เริ่มเรียน 9 โมง 
                  หลังจากเรียนเสร็จก็ไปกินข้าวและกลับห้อง พอถึงห้องก็อ่านหนังสือสอบ เพราะวันศุกร์นี้มีสอบวิชาแมคคา 
                  เป็นการสอบย่อย อ่านจนถึงดึก ก็ออกไปกินข้าวแล้วเข้านอน วันนี้เหนื่อยมากกกกกกกกก พรุ่งนี้ค่อยอ่านต่อนะ
                  
              </p>
          </div>

          <p><strong>วันที่ 23 มกราคม 2562</strong></p>
          <div className="ml-3">
              <p>
                  ..
              </p>
          </div>

          <div className="m-5 text-center">
            Life style <button class="btn btn-danger btn-sm" onclick="imgOpen()">คลิก</button>
          </div>
          <div className="mt-2" id="img-coffee">
            <center><img src="coffee.jpg" alt="Smiley face" height="50%" width="50%" /></center>
          </div>
          <div className="m-5 text-center">
              Like for me <button  onClick={alertFunc()} class="btn btn-sm btn-primary">Like <i className="fa fa-thumbs-up"></i></button>
            </div>
      </div>
    </div>
  );
}

export default Content;
