import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
    width : 80%;
    margin : 0 auto;
`;
const Input1 =styled.input`
    dispaly:inline;
`;
const Mli = styled.li`
    display:inline;
`;
const MSPan=styled.span`
    float:left;
`;
const MemberRegisterView = () => (
    <Container>
        <span>
            logo
        </span>
        <form>
        <div>
            <button formAction="/LoginView">로그인</button>
            <a href="/FindMyIdView">아이디 찾기 </a><a href="/FindMyPasswdView"> 비밀번호 찾기</a>
        </div>
        <fieldset>
            <ul><Mli>ID</Mli><br/><Mli>password</Mli></ul><span><Input1 id="ID" type="text" placeholder="아이디 입력"/></span>
            <button>중복확인</button><br/>
            <input id="password" type="password"  placeholder="비밀번호 입력"/><br/>
            <span>이름 </span><input id="name" type="text"  placeholder="이름 입력"/><br/>
            <span>생년월일 </span><input id="birth" type="text"  placeholder="생년월일"/><br/>
            <span>휴대전화번호 </span><input id="phoneNum" type="text"  placeholder="휴대폰 번호"/><br/>
            <span>이메일 </span><input id="Email" type="text"  placeholder="이메일"/><br/>
            <input type="submit" formAction="/" value="회원가입"></input>
            <input type="reset" value="취소"/>
            
        </fieldset></form>
    </Container>
);

export default MemberRegisterView;