import React from 'react';
import styled from 'styled-components';

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
    &:hover {
        background:#00ff00;
        transition: all 0.5s;
    }
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
    &:hover {
        background:#00ff00;
        transition: all 0.5s;
    }
`;
/*예매하기 버튼*/


const TicketingView1 = () => (
    <Container>
        <header>
            <InforA href="/"><Logo>LOGO</Logo></InforA>
            <InforD>
                <InforA href="/LoginView">로그인 </InforA>&nbsp;<InforA href="/MemberRegisterView">회원가입</InforA>
            </InforD>
        </header>
        <fieldset  >
            <div align="center">
                <InfoConsert>
                        <img src={"http://ticketimage.interpark.com/Play/image/large/19/19016399_p.gif"}/>
                        <br/>
                    
                </InfoConsert>
                <InfoCon2 >
                    <Con2_P>공연 날짜</Con2_P> 2019-10-31-19:00
                </InfoCon2><br/>
                <InfoCon2>
                    <Con2_P>가격</Con2_P> 15000 원
                </InfoCon2>
                <InfoCon2>
                    <Con2_P>관람 시간</Con2_P> 70분
                </InfoCon2>
                <InfoCon2>
                    <Con2_P>장소</Con2_P> 서울 종합운동장
                </InfoCon2>
                <InfoCon2>
                    <Con2_P>관람 등급</Con2_P> 12세 이상 관람가
                </InfoCon2>
            </div>
            
       <Button href = "/TicketingView2">
                 <Button2>예매하기</Button2>
            </Button>
        </fieldset>
    </Container>
);

export default TicketingView1;