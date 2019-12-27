import React, { Component } from 'react';
import styled, { css } from 'styled-components';
import TicketingView1 from './TicketingView1';

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

class MainView extends React.Component {
    constructor(props){
        super(props);
        this.state = {
          ShowInfoList:[
              {id:1, img:"http://ticketimage.interpark.com/Play/image/large/19/19016399_p.gif", date:"2019-10-31-19:00",
            price:15000, time:70, Place:"서울 종합운동장", Rank:"12세 이상 관람가" },
            {id:2, img:"http://ticketimage.interpark.com/Play/image/large/19/19011808_p.gif", date:"2020-01-05-16:00",
            price:25000, time:90, Place:"서울 종합운동장", Rank:"전체이용가" },
            {id:3, img:"http://ticketimage.interpark.com/Play/image/large/19/19011716_p.gif", date:"2020-01-10-20:00",
            price:35000, time:120, Place:"서울 종합운동장", Rank:"15세 이용가" },
            {id:4, img:"http://ticketimage.interpark.com/TCMS3.0/CO/HOT/1910/191030034415_19016188.gif", date:"2020-01-01-17:00",
            price:20000, time:100, Place:"서울 종합운동장", Rank:"12세 이용가" },
            {id:5, img:"http://ticketimage.interpark.com/TCMS3.0/CO/HOT/1910/191014115354_19014994.gif", date:"2020-01-10-20:00",
            price:35000, time:150, Place:"서울 종합운동장", Rank:"15세 이용가" },
            
          ]
        }
    }

    render(){ 
      
        return(
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
                     <a href="/TicketingView1/1">
                            <img src={"http://ticketimage.interpark.com/Play/image/large/19/19016399_p.gif"} alt={"이미지가 없어요"} />
                     </a>
                        <a href="/TicketingView1/2">
                         <img src={"http://ticketimage.interpark.com/Play/image/large/19/19011808_p.gif"} alt={"이미지가 없어요"} />
                     </a>
                        <a href="/TicketingView1/3">
                            <img src={"http://ticketimage.interpark.com/Play/image/large/19/19011716_p.gif"} alt={"이미지가 없어요"} />
                     </a>
                        <br />
                        <a href="/TicketingView1/4">
                            <img src={"http://ticketimage.interpark.com/TCMS3.0/CO/HOT/1910/191030034415_19016188.gif"} alt={"이미지가 없어요"} />
                     </a>
                        <a href="/TicketingView1/5">
                           <img src={"http://ticketimage.interpark.com/TCMS3.0/CO/HOT/1910/191014115354_19014994.gif"} alt={"이미지가 없어요"} />
                        </a>
                        <a href="/TicketingView1/6">
                            <img src={"http://ticketimage.interpark.com/TCMS3.0/CO/HOT/1910/191031112636_19016101.gif"} alt={"이미지가 없어요"} />
                     </a>
                    </div>
                </section>
                <footer align="center">
                    <h3>Copyright FridayHellParty. All rights reserved.</h3>
                </footer>
            </Container>
        );
    }
}

export default MainView;