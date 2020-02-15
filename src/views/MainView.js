import React, { Component } from 'react';
import styled, { css } from 'styled-components';
import TicketingView1 from './TicketingView1';
import {
    BrowserRouter as Router,
    Route,
    Link,
    Redirect,
    withRouter
  } from 'react-router-dom';
import axios from 'axios';
// The start of initialize Style
const Container = styled.div`
    width : 80%;
    margin : 0 auto;
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
const Input = styled.input`
    width : 20%; height : 20px;
    font-size : 110%;
    margin : 1% 0;
    &:focus {
        background : #e5f0f9;
        border : 0;
    }
`;
const LoginButton = styled.button`
    width : 20%;
    height : 30px;
    font-size : 120%;
    background : #22b8cf;
    border : 0;
    margin : 1% 0 2% 0;
`;
const Logindiv = styled.div`
width : 20%;
left: 15%;
    position:relative;
    display:inline;
    right:5px;
`;
// The end point of header
const fakeAuth = {
    isAuthenticated: JSON.parse(sessionStorage.getItem('userid'))?true:false,
    authenticate(cb) {
      this.isAuthenticated = true
      setTimeout(cb, 100)
    },
    signout(cb) {
      this.isAuthenticated = false
      sessionStorage.removeItem('userid');
      setTimeout(cb, 100)
      window.location.replace('/');
    }
  }
  const Public = () => <h3>Public</h3>
  const Protected = () => <h3>Protected</h3>
class MainView extends React.Component {
    state = {
        redirectToReferrer: JSON.parse(sessionStorage.getItem('userid'))?true:false
      }
      constructor(props) {
        super(props);
        this.state = {
          userinfo:[],
          userid:"",
          userpassword:"",
          
        }
      }
      inputUserid =(e)=>{
        this.setState({
          userid:e.target.value,
        });
      }
      inputUserpasswd =(e)=>{
        this.setState({
          userpassword:e.target.value,
        });
      }
      login = async() => {
        if(this.state.userid.length < 1 || this.state.userpassword < 1){
          alert("모든항목을 입력해주세요");
        }
        else{
          const request = axios.post('http://localhost:5000/forlogin/'+this.state.userid, {
              id: this.state.userid,
              password: this.state.userpassword,
          });
          const {status, data} = await request;
          if(data === this.state.userid){
            alert("로그인 성공");
            sessionStorage.setItem('userid', JSON.stringify(data));
            this.login2();
            window.location.replace('/');
          }
          else if(data === "-fail-"){
            alert("아이디 또는 비밀번호가 일치하지 않습니다.");
            window.location.replace('/');
          }
          console.log(data);
        }
      }
      login2 =()=>{
        fakeAuth.authenticate(() => {
            this.setState(() => ({
              redirectToReferrer: true
            }))
          })
      }
    

    render(){ 
        //const { from } = this.props.location.state || { from: { pathname: '/' } }
        const { redirectToReferrer } = this.state
        var dd = redirectToReferrer
        console.log(dd)
        
        // if (redirectToReferrer === true) {
        //   return <Redirect to={from} />
        // }
        
        return(<div>
            <Input type="text" placeholder="아이디" onChange={this.inputUserid}/><br/>
            <Input type="password" placeholder="비밀번호" onChange={this.inputUserpasswd}/><br/>
            <LoginButton onClick={this.login}>로그인</LoginButton>
            <NavUl>
                         <NavLi><Link1 href="/FindMyIdView">아이디 찾기</Link1></NavLi>
                         <NavLi><Link1 href="/FindMyPasswdView">비밀번호 찾기</Link1></NavLi>
                            <NavLi><Link1 href="/MemberRegisterView">회원가입</Link1></NavLi>
                        </NavUl>
          </div>)
    }
}
const PrivateRoute = ({ component: Component, ...rest }) => (
    <Route {...rest} render={(props) => (
      fakeAuth.isAuthenticated === true
        ? <Component {...props} />
        : <Redirect to={{
            pathname: '/',
            state: { from: props.location }
          }} />
    )} />
  )

  const AuthButton = withRouter(({ history }) => (
    fakeAuth.isAuthenticated ? (
      <p>
        {JSON.parse(sessionStorage.getItem('userid'))}님 <button onClick={() => {
          fakeAuth.signout(() => history.push('/'))
        }}>로그아웃</button>
      </p>
    ) : (
      <MainView/>
    )
  ))
export default function AuthExample () {
    return (
      <div>
  <Container>
                <header>
                 <Logo>
                       <Link1 href="/">로고</Link1>
                    </Logo>
                    <Box>
                        <Lgnb>
                        <Router>
                            <Logindiv>
                                <AuthButton/>
                            </Logindiv>
                        </Router>
                        </Lgnb>
                     
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
      
      </div>
    )
  }