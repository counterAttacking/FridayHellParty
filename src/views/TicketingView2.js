import React from 'react';
import styled from 'styled-components';
import Seat from "./Seat"

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

const NextPageDiv = styled.div`
    position : relative;
    left : 30%; top : 0;
`;

const NextPage = styled.input`
    width : 40%;
    color : white;
    font-size : 150%;
    padding : 10px 20px;
    border-radius : 10px;
    background : #22b8cf;
    border : #22b8cf;
`;

const ImgDiv = styled.div`
    position: relative;
    left: 40%
`;

const NavLi = styled.li`
    list-style : none;
    float : left;
    margin-right : 10px;
    font-size : 120%;
`;

const CenterDiv = styled.div`
    position: relative;
    left: 50%
`;

const TicketingView2 = () => (
    <Container>

        <ImgDiv>
            <img src={"http://ticketimage.interpark.com/Play/image/large/19/19016399_p.gif"} alt={"No"} align="center" />
            <br/>
        </ImgDiv>

        <div>
            <CenterDiv><NavLi>좌석선택</NavLi><br/></CenterDiv>
            <Seat/><br/>
        </div>

        <NextPageDiv>
            <Link href="/TicketingView3">
                <NextPage type="button" value="예매하기" />
            </Link>
        </NextPageDiv>

    </Container>
);

export default TicketingView2;