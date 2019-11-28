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

// The start point of Content
const Content = styled.div`
    padding : 20px;
`;

const RegisterForm = styled.div`
`;

const FormSpan = styled.span`
    margin : 0 20px 0 350px;
`;

const IdDiv = styled.div`
    padding : 10px 0;
`;

const IdInput = styled.input`
    font-size : 150%;
    margin : 0 44px;
    &:focus {
            background : #e5f0f9;
            border : 0;
        }
`;

const IdCheck = styled.input`
    font-size : 150%;
    background : #22b8cf;
    border : 0;
    border-radius : 5px;
    color : #ffffff;
`;

const PasswdDiv = styled.div`
    padding : 10px 0;
`;

const PasswdInput = styled.input`
    font-size : 150%;
    margin : 0 28px;
    &:focus {
            background : #e5f0f9;
            border : 0;
        }
`;

const NameDiv = styled.div`
    padding : 10px 0;
`;

const NameInput = styled.input`
    font-size : 150%;
    margin : 0 60px;
    &:focus {
        background : #e5f0f9;
        border : 0;
    }
`;

const BirthDiv = styled.div`
    padding : 10px 0;
`;

const BirthInput = styled.input`
    font-size : 150%;
    margin : 0 30px;
    &:focus {
        background : #e5f0f9;
        border : 0;
    }
`;

const PhoneDiv = styled.div`
    padding : 10px 0;
`;

const PhoneInput = styled.input`
    font-size : 150%;
    &:focus {
        background : #e5f0f9;
        border : 0;
    }
`;

const MailDiv = styled.div`
    padding : 10px 0;
`;

const MailInput = styled.input`
    font-size : 150%;
    margin : 0 49px;
    &:focus {
        background : #e5f0f9;
        border : 0;
    }
`;

const ButtonDiv = styled.div`
    padding : 20px 0;
`;

const RegisterInput1 = styled.input`
    font-size : 150%;
    margin : 0 100px 0 450px;
    background : #22b8cf;
    border : 0;
    border-radius : 5px;
    color : #ffffff;
`;

const RegisterInput2 = styled.input`
    font-size : 150%;
    background : #22b8cf;
    border : 0;
    border-radius : 5px;
    color : #ffffff;
`;
// The end point of Content

class MemberRegisterView extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
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
                <Content>
                    <section>
                        <article>
                            <h1 align="center">계정을 위한 정보를 입력해주세요</h1>
                            <RegisterForm>
                                <IdDiv>
                                    <FormSpan>아이디</FormSpan>
                                    <IdInput type="text" placeholder="" />
                                    <IdCheck type="button" value="중복확인" />
                                </IdDiv>
                                <PasswdDiv>
                                    <FormSpan>비밀번호</FormSpan>
                                    <PasswdInput type="password" placeholder="" />
                                </PasswdDiv>
                                <NameDiv>
                                    <FormSpan>이름</FormSpan>
                                    <NameInput type="text" placeholder="" />
                                </NameDiv>
                                <BirthDiv>
                                    <FormSpan>생년월일</FormSpan>
                                    <BirthInput type="text" placeholder="ex)2019.01.01" />
                                </BirthDiv>
                                <PhoneDiv>
                                    <FormSpan>휴대전화번호</FormSpan>
                                    <PhoneInput type="text" placeholder="ex)010-0000-0000" />
                                </PhoneDiv>
                                <MailDiv>
                                    <FormSpan>이메일</FormSpan>
                                    <MailInput type="email" placeholder="ex)mail@mail.com" />
                                </MailDiv>
                                <ButtonDiv>
                                    <RegisterInput1 type="submit" value="회원가입" />
                                    <Link href="/MemberRegisterView"><RegisterInput2 type="reset" value="취소" /></Link>
                                </ButtonDiv>
                            </RegisterForm>
                        </article>
                    </section>
                </Content>
                <footer align="center">
                    <h3>Copyright FridayHellParty. All rights reserved.</h3>
                </footer>
            </Container>
        );
    }
}

export default MemberRegisterView;