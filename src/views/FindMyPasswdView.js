import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
    width : 80%;
    margin : 0 auto;
    align:center;
   
`;
const IDiv = styled.div`
    position:relative;
    display:inline-block;
    line-height: .5em;
   text-align:left;
   padding:10px;
   width:50%;
   
`;

const Minput = styled.input`
    width:100%;
    padding : 1.5em 0em 1.5em 0em;
    
`;
const Minput2 = styled.input`
    width:50%;
    background: #07E228;
    cursor:pointer;
    border:none;
    padding: .8em;
    font-size: 150%;
    font-weight:600;
    color:#F0F0F0;
    text-shadow: .5px .5px .5px white;
`;
const Logo = styled.div`
    position:relative;
    background: #F0F0F0;
    width:50%;
    height:50px;
    left:25%;
    text-align:center;
    font-size:200%;
`;
const InforD = styled.div`
    position:absolute;
    display:inline-block;
    right:5px;
    

`;
const InforA = styled.a`text-decoration:none;`;
const InforH3 = styled.h3` display:inline-block`;
const InforP = styled.p` display:inline-block`;
const FindMyPasswdView = () => (
    <Container>
        <Logo>Logo</Logo>
        <form align="center">
            
            <IDiv>
                <InforH3>비밀번호 찾기</InforH3>
                <InforD>
                    <InforP><InforA href="/LoginView">로그인 </InforA>&nbsp;<InforA href="/MemberRegisterView">회원가입</InforA></InforP>
                </InforD>
                <Minput type="text" placeholder="아이디 " /><br /><br />
                <Minput type="text" placeholder="이름 " /><br /><br />
                <Minput type="text" placeholder="휴대폰 번호 -없이" />
                 <br /><br />
            </IDiv>
            <br /><br />
            
            <Minput2 type="submit" value="확인"  /><br /><br />
                
            
        </form>
    </Container>
);

export default FindMyPasswdView;