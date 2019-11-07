import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
    width : 80%;
    margin : 0 auto;
`;

const TicketingView3 = () => (
    <Container>
        <form>
            <fieldset>
                <legend>예약자 확인</legend>
                이름 <input type="text" placeholder="김철수" readOnly /><br />
                생년월일 <input type="text" placeholder="91.01.01" readOnly /><br />
                휴대전화번호 <input type="tel" placeholder="010-1577-1577" readOnly /><br />
                이메일 <input type="email" placeholder="sample@sample.net" readOnly /><br />
                결제 금액 <input type="text" placeholder="15,000원" readOnly /><br />
                예약 정보 <input type="text" placeholder="2019년 10월 31일 19시 1열 10번" readOnly /><br />
                결제 금액
                <select name="pay">
                    <option value="creditCart">신용카드</option>
                    <option value="accountTransfer">계좌이체</option>
                    <option value="banklessDeposit">무통장 입금</option>
                    <option value="kakaoPay">카카오 페이</option>
                </select><br />
                <input type="button" value="결제하기" /> <input type="button" value="결제 취소" />
            </fieldset>
        </form>
    </Container>
);

export default TicketingView3;