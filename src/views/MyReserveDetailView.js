import React from 'react';
import styled from 'styled-components';
import * as axios from 'axios';

const Container = styled.div`
    width : 800px;
    margin : 0 auto;
    text-align : left;
`;

const Table = styled.table`
    border-collapse: collapse;
    text-align: center;
    width: 800px;
    height: 150px;
`;

const TableHeader = styled.th`
    text-align : center;
    border: 0;
    background-color: gray;
`;

class MyReserveDetailView extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            concertName:"2020 이문세 콘서트",
            userName:"twins",
            concertDate:"2020-03-13",
            concertPlace:"예술의 전당",
            reservationSeat:"A열 1번 B열 2번",
            reservaitonDate:"2020-03-13 16:15",
            payType:"카카오페이",
            price:"300,000",
        }
    }

    render(){
        return(
            <Container>
                <label>예매정보</label>
                <Table>
                    <tr>
                        <TableHeader>공연명</TableHeader>
                        <td>{this.state.concertName}</td>
                        <TableHeader>예매자</TableHeader>
                        <td>{this.state.userName}</td>
                    </tr>
                    <tr>
                        <TableHeader>공연날짜</TableHeader>
                        <td>{this.state.concertDate}</td>
                        <TableHeader>공연장</TableHeader>
                        <td>{this.state.concertPlace}</td>
                    </tr>
                    <tr>
                        <TableHeader>좌석</TableHeader>
                        <td>{this.state.reservationSeat}</td>
                        <TableHeader>예매일</TableHeader>
                        <td>{this.state.reservationDate}}</td>
                    </tr>
                    <tr>
                        <TableHeader>결제방법</TableHeader>
                        <td>{this.state.payType}}</td>
                        <TableHeader>결제금액</TableHeader>
                        <td>{this.state.price}</td>
                    </tr>
                </Table>
            </Container>
        );
    }
}

export default MyReserveDetailView;