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
    constructor(props){
        super(props);
        this.state = {
          ShowInfoList:[
              {id:1, img:"http://ticketimage.interpark.com/Play/image/large/19/19016399_p.gif", date:"2019-10-30-19:00",
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
       
       const {match} = this.props;
       const {ShowId} = match.params;
    return(
    <Container>
        <header>
            <InforA href="/"><Logo>LOGO</Logo></InforA>
            <InforD>
                <InforA href="/LoginView">내정보 </InforA>&nbsp;<InforA href="/MemberRegisterView">예약확인</InforA>
            </InforD>
        </header>
        <fieldset  >
            <div align="center">
                <InfoConsert>
                        <img src={this.state.ShowInfoList[ShowId-1].img}/>
                        <br/>
                    
                </InfoConsert>
                <InfoCon2 >
                    <Con2_P>공연 날짜</Con2_P>{this.state.ShowInfoList[ShowId-1].date}
                </InfoCon2><br/>
                <InfoCon2>
                    <Con2_P>가격</Con2_P> {this.state.ShowInfoList[ShowId-1].price} 원
                </InfoCon2>
                <InfoCon2>
                    <Con2_P>관람 시간</Con2_P> {this.state.ShowInfoList[ShowId-1].time}분
                </InfoCon2>
                <InfoCon2>
                    <Con2_P>장소</Con2_P> {this.state.ShowInfoList[ShowId-1].Place}
                </InfoCon2>
                <InfoCon2>
                    <Con2_P>관람 등급</Con2_P> {this.state.ShowInfoList[ShowId-1].Rank}
                </InfoCon2>
            </div>
            
       <Button href = "/TicketingView2">
                 <Button2>예매하기</Button2>
            </Button>
        </fieldset>

        {this.props.List}
    </Container>
    );}
}

export default TicketingView1;