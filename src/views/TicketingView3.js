import React, { Component } from 'react';
import styled, { css } from 'styled-components';
import * as axios from 'axios';

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
            concert:[],
            userId:JSON.parse(sessionStorage.getItem('plainUserId')),
            userData:[],
        }
    }

    componentWillMount = async () => {//데이터 베이스
        this.getConcertData();
        this.getUserData();
    }

    getConcertData=async()=>{
        const { match } = this.props;
        const request = axios({
            url: 'http://localhost:5000/getConcert/' + match.params.ShowId,
            method: 'get',
        });
        const { status, data } = await request;
        this.setState({
            concert:data,
        });
    }

    getUserData=async()=>{
        const request=axios({
            url:'http://localhost:5000/userinfo/'+this.state.userId,
            method:'get',
        });
        const {status,data}=await request;
        this.setState({
            userData:data,
        });
    }

    okBtnEventHandler=(event)=>{
        sessionStorage.removeItem('reservationInfo');
        alert('예매가 완료되었습니다.');
        window.location.replace('/');
    }

    cancelBtnEventHandler=(event)=>{
        sessionStorage.removeItem('reservationInfo');
        alert('예매가 취소되었습니다.');
        window.location.replace('/');
    }
    
    render() {
        const { match } = this.props;
        const { ShowId } = match.params;
        const { concert, userData } = this.state;

        return (
            <Container>
                <section>
                    <ReservedSection>
                        <section>
                            <label>이름</label><label>{userData.username}</label>
                        </section>
                        <section>
                            <label>생년월일</label>
                            <label>{userData.userbirthday}</label>
                        </section>
                        <section>
                            <label>휴대전화번호</label>
                            <label>{userData.usertel}</label>
                        </section>
                        <section>
                            <label>이메일</label>
                            <label>{userData.useremail}</label>
                        </section>
                        <section>
                            <label>결제 금액</label>
                            <label>{parseInt(concert.price)*this.state.ReservationInfo.length} 원</label>
                        </section>
                        <section>
                            <label>예약 정보</label>
                            {this.state.ReservationInfo.map(R=>{console.log(R.row, R.col); return <ReservationSeat>{R.row}열 {R.col} &nbsp;</ReservationSeat>})} 
                        </section>
                        <section>
                            <label>결제 방법</label>
                            <select name="payType">
                                <option value="creditCard">신용카드</option>
                                <option value="accountTransfer">계좌이체</option>
                                <option value="kakaoPay">카카오페이</option>
                            </select>
                        </section>
                        <section>
                            <button onClick={this.okBtnEventHandler}>확인</button>
                            <button onClick={this.cancelBtnEventHandler}>결제 취소</button>
                        </section>
                    </ReservedSection>
                </section>
            </Container>
        )
    }
}

export default TicketingView3;