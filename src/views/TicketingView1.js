import React from 'react';
import styled from 'styled-components';
import queryParser from './queryParser';
import * as axios from 'axios';

const Container = styled.div`
    align : center;
    width:640px;
    margin : 0 auto;
`;
/*header: LOGO, 로그인 회원가입*/
const Logo = styled.div`
    position:relative;
    margin-bottom:10px;
    background: #22b8cf;
    width:50%;
    height:50px;
    text-align:center;
    font-size:200%;
    cursor:pointer;
    
`;
const InforD = styled.div`
    position:relative;
    display:inline-block;
    top:-30px;
    left:80%;
`;
const InforA = styled.a`text-decoration:none; &:visited{color:black;} `;
const InforP = styled.p` display:inline-block`;
/*LOGO, 로그인 회원가입*/


const Div1 = styled.div`
    border: 2px 0px 0px 0px solid black;
`;
const InfoConsert = styled.div`
    padding: 15px;
    aligin:left;
    dlsplay:inline-block;
    float:left;
`;
const InfoCon2 = styled.div`
    width:230px;
    padding: 10px;
    text-align:right;
    align:left;
    display:inline-block;
    
`;
const Con2_P = styled.span`  
    float:left;
    font-weight:bold;
`;

/*예매하기 버튼*/
const Button = styled.a`&:visited{color:black;} text-decoration:none;`;
const Button2 = styled.div`
    position:relative;
    background: #22b8cf;
    display:inline-block;
    width:250px;
    height:50px;
    left:10%;
    top:30px;
    text-align:center;
    font-size:200%;
    cursor:pointer;
  
`;
/*예매하기 버튼*/


class TicketingView1 extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            concert: [],
        }
    }

    componentWillMount = async () => {//데이터 베이스
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

    render() {
        const { match } = this.props;
        const { ShowId } = match.params;
        const { concert } = this.state;
        return (
            <Container>
                <header>
                    <InforA href="/"><Logo>LOGO</Logo></InforA>
                    <InforD>
                        <InforA href="/Login">내정보 </InforA>&nbsp;<InforA href="/MemberRegister">예약확인</InforA>
                    </InforD>
                </header>
                <fieldset>
                    <div align="center">
                        <InfoConsert>
                            <img src={concert.imgUrl} width="100%" />
                        </InfoConsert>
                        <InfoCon2 >
                            <Con2_P>공연 이름</Con2_P>{concert.name}
                        </InfoCon2>
                        <InfoCon2 >
                            <Con2_P>공연 날짜</Con2_P>{concert.date}
                        </InfoCon2>
                        <InfoCon2>
                            <Con2_P>가격 (1인 기준)</Con2_P> {concert.price} 원
                        </InfoCon2>
                        <InfoCon2>
                            <Con2_P>관람 시간</Con2_P> {concert.time}분
                        </InfoCon2>
                        <InfoCon2>
                            <Con2_P>장소</Con2_P> {concert.concertPlace}
                        </InfoCon2>
                        <InfoCon2>
                            <Con2_P>관람 등급</Con2_P> {concert.rank}
                        </InfoCon2>
                    </div>
                    <Button href={"/Ticketing2/" + ShowId}>
                        <Button2>예매하기</Button2>
                    </Button>
                </fieldset>
                {this.props.List}
            </Container>
        );
    }
}

export default TicketingView1;
