import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
    width : 80%;
    margin : 0 auto;
    text-align : center;
`;

const Logo = styled.section`
    padding-top : 10%;
    font-size : 300%;
`

const LoginBox = styled.section`
    padding : 5% 0;
`
const LoginButton = styled.button`
    width : 40%;
    height : 60px;
    font-size : 150%;
    background : #22b8cf;
    border : 0;
    margin : 1% 0 2% 0;
`
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

const LinkSpan = styled.span`
    font-size : 120%;
    margin-left : 15px;
    margin-right : 15px;
`;

const Input = styled.input`
    width : 40%; height : 50px;
    font-size : 150%;
    margin : 1% 0;
    &:focus {
        background : #e5f0f9;
        border : 0;
    }
`;
class LoginView extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {

        return (
            <Container>
                <header>
                    <Logo>
                        <Link href="/">LOGO</Link>
                    </Logo>
                </header>
                <section>
                    <LoginBox>
                        <article>
                            <div>
                                <Input type="text" placeholder="아이디" /><br />
                                <Input type="password" placeholder="비밀번호" />
                            </div>
                        </article>
                        <article>
                            <LoginButton>로그인</LoginButton>
                        </article>
                        <article>
                            <LinkSpan><Link href="/FindMyId">아이디찾기</Link></LinkSpan>
                            <LinkSpan><Link href="/FindMyPasswd">비밀번호찾기</Link></LinkSpan>
                            <LinkSpan><Link href="/MemberRegister">회원가입</Link></LinkSpan>
                        </article>
                    </LoginBox>
                </section>
            </Container>
        );
    }
}

export default LoginView;