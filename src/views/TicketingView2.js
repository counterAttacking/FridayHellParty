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

class TicketingView2 extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            ShowInfoList: [
                {
                    id: 1, img: "http://ticketimage.interpark.com/Play/image/large/19/19016399_p.gif", date: "2019-10-30-19:00",
                    price: 15000, time: 70, Place: "서울 종합운동장", Rank: "12세 이상 관람가"
                },
                {
                    id: 2, img: "http://ticketimage.interpark.com/Play/image/large/19/19011808_p.gif", date: "2020-01-05-16:00",
                    price: 25000, time: 90, Place: "서울 종합운동장", Rank: "전체이용가"
                },
                {
                    id: 3, img: "http://ticketimage.interpark.com/Play/image/large/19/19011716_p.gif", date: "2020-01-10-20:00",
                    price: 35000, time: 120, Place: "서울 종합운동장", Rank: "15세 이용가"
                },
                {
                    id: 4, img: "http://ticketimage.interpark.com/TCMS3.0/CO/HOT/1910/191030034415_19016188.gif", date: "2020-01-01-17:00",
                    price: 20000, time: 100, Place: "서울 종합운동장", Rank: "12세 이용가"
                },
                {
                    id: 5, img: "http://ticketimage.interpark.com/TCMS3.0/CO/HOT/1910/191014115354_19014994.gif", date: "2020-01-10-20:00",
                    price: 35000, time: 150, Place: "서울 종합운동장", Rank: "15세 이용가"
                },
            ]
        }
    }

    render() {
        const { match } = this.props;
        const { ShowId } = match.params;
        return (
            <Container>
                <ImgDiv>
                    <img src={this.state.ShowInfoList[ShowId-1].img} alt={"No"} align="center" />
                    <br />
                </ImgDiv>

                <div>
                    <CenterDiv><NavLi>좌석선택</NavLi><br /></CenterDiv>
                    <Seat /><br />
                </div>

                <NextPageDiv>
                    <Link href="/TicketingView3">
                        <NextPage type="button" value="예매하기" />
                    </Link>
                </NextPageDiv>
            </Container>
        )
    }
}

export default TicketingView2;