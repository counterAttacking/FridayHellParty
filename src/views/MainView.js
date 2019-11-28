import React, { Component } from 'react';
import styled, { css } from 'styled-components';

// The start of initialize Style
const Container = styled.div`
    width : 80%;
    margin : 0 auto;
`;

const Link = styled.a`
    text-decoration : none;
    color : black;
    &:hover {
        text-decoration : none;
        color : black;
    }
    &:link {
        text-decoration : none;
        color : black;
    }
    &:visited {
        text-decoration : none;
        color : black;
    }
    &:active {
        text-decoration : none;
        color : black;
    }
`;
// The end of initialize Style

// The start of header
const Logo = styled.span`
    float : left;
    display : inline-block;
    font-size : 200%;
`;

const Box = styled.div`
    overflow : hidden;
`;

const Lgnb = styled.div`
    position : relative;
    left : 60%; top : 0;
`;

const LoginInput = styled.input`
    width : 40%;
    color : white;
    font-size : 150%;
    padding : 10px 20px;
    border-radius : 10px;
    background : #22b8cf;
    border : #22b8cf;
`;

const NavUl = styled.ul`
    float : right;
    padding : 5px 10px;
    display : inline-block;
`;

const NavLi = styled.li`
    list-style : none;
    float : left;
    margin-right : 10px;
    font-size : 120%;
`;
// The end point of header

const MainView = () => (
    <Container>
        <header>
            <Logo>
                <Link href="/">로고</Link>
            </Logo>
            <Box>
                <Lgnb><Link href="/LoginView"><LoginInput type="button" value="로그인" /></Link></Lgnb>
                <NavUl>
                    <NavLi><Link href="/FindMyIdView">아이디 찾기</Link></NavLi>
                    <NavLi><Link href="/FindMyPasswdView">비밀번호 찾기</Link></NavLi>
                    <NavLi><Link href="/MemberRegisterView">회원가입</Link></NavLi>
                </NavUl>
            </Box>
        </header>
        <section>
            <div>
                <img src={"http://ticketimage.interpark.com/TCMS4/Main/201910/MainVisual_69bcde11-f7b3-4cd2-90d5-a79dc6c4e353.jpg"} alt={"메인 배너"} width="100%" />  {/* 이미지가 실시간으로 변경 */}
            </div>
            <div>
                <br />
                <a href="/TicketingView1">
                    <img src={"http://ticketimage.interpark.com/Play/image/large/19/19016399_p.gif"} alt={"이미지가 없어요"} />
                </a>
                <a href="/TicketingView1">
                    <img src={"http://ticketimage.interpark.com/Play/image/large/19/19011808_p.gif"} alt={"이미지가 없어요"} />
                </a>
                <a href="/TicketingView1">
                    <img src={"http://ticketimage.interpark.com/Play/image/large/19/19011716_p.gif"} alt={"이미지가 없어요"} />
                </a>
                <br />
                <a href="/TicketingView1">
                    <img src={"http://ticketimage.interpark.com/TCMS3.0/CO/HOT/1910/191030034415_19016188.gif"} alt={"이미지가 없어요"} />
                </a>
                <a href={"http://ticket.interpark.com/Ticket/Goods/GoodsInfo.asp?GoodsCode=19014994"}>
                    <img src={"http://ticketimage.interpark.com/TCMS3.0/CO/HOT/1910/191014115354_19014994.gif"} alt={"이미지가 없어요"} />
                </a>
                <a href={"http://ticket.interpark.com/Ticket/Goods/GoodsInfo.asp?GoodsCode=19016101"}>
                    <img src={"http://ticketimage.interpark.com/TCMS3.0/CO/HOT/1910/191031112636_19016101.gif"} alt={"이미지가 없어요"} />
                </a>
            </div>
        </section>
        <footer align="center">
            <h3>Copyright FridayHellParty. All rights reserved.</h3>
        </footer>
  </Container>
);

export default MainView;