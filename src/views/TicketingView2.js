import React from 'react';
import styled from 'styled-components';
import queryParser from './queryParser';
import axios from 'axios';
const Container = styled.div`
    width : 80%;
    margin : 0 auto;
    align:center;
`;

const Link1 = styled.a`
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
    top : 0;
`;

const NextPage = styled.input`
    width : 40%;
    max-width:400px;
    color : white;
    font-size : 150%;
    padding : 10px 20px;
    border-radius : 10px;
    background : #22b8cf;
    border : #22b8cf;
`;

const ImgDiv = styled.div`
    display:inline;
    position: relative; 
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
const DDD = styled.div`

    min-width:1080px;
`;


const RL = styled.p` 
    position:relative;
    display:inline-block;
    margin:5px;
    bottom:15px;
    vertical-align:center;
    width: 30px;
    height: 30px;
    background-color: '#404fb3;'
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
            ],
            SeatColor:'#b34040',
            Seat_Reservation_False:[], //이미 예약되어있는 좌석좌표 서버에서 데이터를 얻어옴
            first:true, 
            count:0,
            map1:[], //좌석정보
            Reser:[],
        }
    }
    SeatClick=(row, col, SeatClick)=>{ //좌석 클릭했을때
        this.setState(this.state.map1[row][col] = {
            id: col,
            backG:{background : this.state.SeatColor, //색 바꿈
                //position:'static',
                display:'inline-block',
                padding: '5px',
                margin:'5px',
                cursor:'pointer',
                width: '20px',
                height: '20px'},
            Seat:this.state.map1[row][col].Seat, 
            SeatClick: !SeatClick, 
        });
    }
    //예약 되어있는 좌석 불러오기
    import_Reservation_Seat = async(concertN) => { 
        const request = axios({
            url:'http://localhost:5000/reservation/'+concertN,
            mathod:'get',
          });
          const {status, data} = await request;
          this.setState({
              Seat_Reservation_False: data
          })
      }

      ReservationButtonClick= ()=>{
        for(let i = 0;i<10;i++){
            for(let j = 0;j<20;j++){
                if(this.state.map1[i][j].SeatClick){
                    console.log(String.fromCharCode(i+65));
                    this.state.Reser.push({
                        row:String.fromCharCode(i+65),
                        col:j,
                    })
                }
            }
        }
        sessionStorage.setItem('reservationInfo', JSON.stringify(this.state.Reser));
        console.log(this.state.Reser);
      }
    render() {
        const { match } = this.props;
        const { ShowId } = match.params;
        const concertN = queryParser.parse(window.location.search).concertname;
        if(this.state.first){
            this.import_Reservation_Seat(concertN); //예약되있는 좌석 불러오기
            
            for(let i =0;i<10;i++){
                var col2 = [];
                for(let j=0;j<20;j++){
                    col2.push({id:j, //id: col
                    backG:{background:'#b34040', 
                   // position:'static',
                    display:'inline-block',
                    padding: '5px',
                    margin:'5px',
                    cursor:'pointer',
                    width: '20px',
                    height: '20px'},
                    Seat:true,  //에약가능한지 확인
                    SeatClick:false }); //선택되있는지 확인
                }
                this.state.map1.push(col2);
            }
            this.setState({
                first: false
            })
        }

        // DB에서 가져온 예약되어있는 자리 색 바꾸기
        for(let i =0;i<this.state.Seat_Reservation_False.length;i++){
            // var row = (this.state.Seat_Reservation_False[i].row.charCodeAt(0))-65;
            var row = parseInt(this.state.Seat_Reservation_False[i].row);
            var col = parseInt(this.state.Seat_Reservation_False[i].col);
            this.state.map1[row][col].Seat = false;
            this.state.map1[row][col].backG={background : "url('https://jihunsg.github.io/PROJECT/png/곱하기.png')",
                backgroundSize:'30px',
                //position:'static',
                display:'inline-block',
                padding: '5px',
                margin:'5px',
                cursor:'pointer',
                width: '20px',
                height: '20px'}
        }

       this.Seat=(row, col, SeatClick, Seat)=>{ 
           if(Seat){ //예약 가능한 자리인지 확인
               const c1 = !SeatClick ? '#00ff00': '#b34040';
               this.state.SeatColor = c1;
               this.SeatClick(row,col,SeatClick);
               if(!SeatClick){
                   this.setState({
                       count: this.state.count+1,
                    });
                }
                else{
                    this.setState({
                        count: this.state.count-1,
                     });
                }
            }
            else{
                alert("이미 예약된 좌석입니다.");
            }
       }
        return (
            <Container>
                <div align='center'>
                <ImgDiv>
                    <img src={this.state.ShowInfoList[2].img} alt={"No"} align="center" />
                    <br />
                    </ImgDiv>
                
                    <DDD>
                    <RL>A</RL>{this.state.map1[0].map((s) => {return <div  style={s.backG} onClick={()=>{this.Seat(0, s.id, s.SeatClick, s.Seat)}}/>})}<br/>
                    <RL>B</RL>{this.state.map1[1].map((s) => {return <div  style={s.backG} onClick={()=>{this.Seat(1, s.id, s.SeatClick, s.Seat)}}/>})}<br/>
                    <RL>C</RL>{this.state.map1[2].map((s) => {return <div  style={s.backG} onClick={()=>{this.Seat(2, s.id, s.SeatClick, s.Seat)}}/>})}<br/>
                    <RL>D</RL>{this.state.map1[3].map((s) => {return <div  style={s.backG} onClick={()=>{this.Seat(3, s.id, s.SeatClick, s.Seat)}}/>})}<br/>
                    <RL>E</RL>{this.state.map1[4].map((s) => {return <div  style={s.backG} onClick={()=>{this.Seat(4, s.id, s.SeatClick, s.Seat)}}/>})}<br/>
                    <RL>F</RL>{this.state.map1[5].map((s) => {return <div  style={s.backG} onClick={()=>{this.Seat(5, s.id, s.SeatClick, s.Seat)}}/>})}<br/>
                    <RL>G</RL>{this.state.map1[6].map((s) => {return <div  style={s.backG} onClick={()=>{this.Seat(6, s.id, s.SeatClick, s.Seat)}}/>})}<br/>
                    <RL>H</RL>{this.state.map1[7].map((s) => {return <div  style={s.backG} onClick={()=>{this.Seat(7, s.id, s.SeatClick, s.Seat)}}/>})}<br/>
                    <RL>I</RL>{this.state.map1[8].map((s) => {return <div  style={s.backG} onClick={()=>{this.Seat(8, s.id, s.SeatClick, s.Seat)}}/>})}<br/>
                    <RL>J</RL>{this.state.map1[9].map((s) => {return <div  style={s.backG} onClick={()=>{this.Seat(9, s.id, s.SeatClick, s.Seat)}}/>})}<br/>
                    </DDD>

                    <CenterDiv><NavLi>좌석선택</NavLi><br /></CenterDiv>
                    <NextPageDiv>

                    <Link1 href="/TicketingView3">
                        <NextPage type="button" value="예매하기" onClick={this.ReservationButtonClick}/>
                    </Link1>
                </NextPageDiv>
                </div>
                
                
            </Container>
        )
    }
}

export default TicketingView2;