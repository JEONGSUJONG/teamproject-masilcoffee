import React from "react";
import { FooterText, Footers, textBox } from "./Footer.style";

function Footer() {
  return (
    <div>
      <Footers>
        <textBox>
          <FooterText>상호: 마실커피</FooterText>
          <FooterText>
            서울사무소 : 서울 성동구 아차산로17길 48 성수낙낙 2층 엘리스랩
            성수점
          </FooterText>
          <FooterText>TEL : 00 - 0000 - 0000</FooterText>
          <FooterText>
            사업자등록번호 : 000 - 00 - 0000 | 통신판매업신고증 : 제 0000 - 서울
            - 0000 | 대표 엘리
          </FooterText>
        </textBox>
      </Footers>
    </div>
  );
}

export default Footer;
