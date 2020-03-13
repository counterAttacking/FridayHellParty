import React from 'react';
import styled from 'styled-components';
import * as axios from 'axios';

const Container = styled.div`
    width : 80%;
    margin : 0 auto;
    text-align : center;
`;

class MyReserveView extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            userId: JSON.parse(sessionStorage.getItem('plainUserId')),
            reserveData: [],
        }
    }

    componentWillMount = async () => {
        this.getMyReserveInfo();
    }

    getMyReserveInfo = async () => {
        const request = axios({
            url: 'http://localhost:5000/getMyReservation/' + this.state.userId,
            method: 'get',
        });
        const { status, data } = await request;
        this.setState({
            reserveData: data,
        });
    }

    render() {
        const { reserveData } = this.state;
        return (
            <Container>
                <section>
                    <label>예약 번호</label>
                    <label></label>
                </section>
                <section>
                    <label>공연명</label>
                    <label></label>
                </section>
                <section>
                    <label>공연 날짜</label>
                    <label></label>
                </section>
                <section>
                    <label>예매자</label>
                    <label></label>
                </section>
                <section>
                    <label>예약 시간</label>
                    <label></label>
                </section>
                <section>
                    <label>선택 좌석</label>
                    <label></label>
                </section>
                <section>
                    <label>가격</label>
                    <label></label>
                </section>
                <section>
                    <label>결제 방법</label>
                    <label></label>
                </section>
            </Container>
        );
    }
}

export default MyReserveView;