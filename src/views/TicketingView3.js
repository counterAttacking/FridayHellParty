import React, { Component } from 'react';
import styled, { css } from 'styled-components';
import axios from 'axios';
const Container = styled.div`
    width : 80%;
    margin : 0 auto;
    text-align : center;
`;

const ReservedSection = styled.section`
    & section {
        margin : 20px 0;
    }
    & label {
        width : 200px;
        display : inline-block;
        text-align : left;
        font-size : 120%;
    }

    & input {
        height : 45px;
        font-size : 120%;
        font-weight : bold;
    }
    & button {
        width : 200px; height : 55px;
        font-size : 200%;
        background : #22b8cf;
        border : 0;
        border-radius : 5px;
        color : #ffffff;
        margin : 20px 50px;
    }
`;
const ReservationSeat = styled.p`
    display:inline;

    height : 45px;
    font-size : 120%;
    font-weight : bold;
`;
class TicketingView3 extends Component {
    constructor(props) {
        super(props);
        this.state={
            ReservationInfo:JSON.parse(sessionStorage.getItem('reservationInfo')),
        }
    }
    
    render() {
        const { match } = this.props;
        const { ShowId } = match.params;
        console.log(this.state.ReservationInfo);
        return (
            <Container>
                <section>
                    <ReservedSection>
                        <section>
                            <label>이름</label><input type="text" placeholder="김철수" readOnly />
                        </section>
                        <section>
                            <label>생년월일</label><input type="text" placeholder="91.01.01" readOnly />
                        </section>
                        <section>
                            <label>휴대전화번호</label><input type="tel" placeholder="010-1577-1577" readOnly />
                        </section>
                        <section>
                            <label>이메일</label><input type="email" placeholder="sample@sample.net" readOnly />
                        </section>
                        <section>
                            <label>결제 금액</label><input type="text" placeholder="15,000원" readOnly />
                        </section>
                        <section>
                            <label>예약 정보</label>
                            {this.state.ReservationInfo.map(R=>{console.log(R.row, R.col); return <ReservationSeat>{R.row}열 {R.col} &nbsp;</ReservationSeat>})} 
                        </section>
                        <section>
                            <label>결제 금액</label><input type="text" placeholder="결제 방법을 선택하세요." />
                        </section>
                        <section>
                            <button>확인</button>
                            <button>결제 취소</button>
                        </section>
                    </ReservedSection>
                </section>
            </Container>
        )
    }
}

export default TicketingView3;