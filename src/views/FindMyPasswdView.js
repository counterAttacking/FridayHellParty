import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
    width : 80%;
    margin : 0 auto;
`;

const FindMyPasswdView = () => (
    <Container>
        <form>
            <h3>비밀번호 찾기</h3>
            <div>
                아이디 : <input type="text" placeholder="아이디 입력" /><br />
                성명 : <input type="text" placeholder="성명 입력" /><br />
                휴대전화번호 : <input type="text" placeholder="-없이 입력" />
            </div>
            <input type="button" value="찾기" /> <input type="button" value="취소하기" />
        </form>
    </Container>
);

export default FindMyPasswdView;