import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
    width : 80%;
    margin : 0 auto;
    
`;


const TicketingView1 = () => (
    <Container>
        <form>

        <fieldset>
            공연날짜 <input type="none" value ="2019-10-31-19:00" readOnly/>
            가격 <input type="none" value ="15000" readOnly/>원
            <p align="center">공연정보</p>
            <div>
                <img src={"http://ticketimage.interpark.com/Play/image/large/19/19016399_p.gif"} align="center" />
            </div>
            <button formAction="/TicKetingView2" align="center" >예매하기</button>
        </fieldset>
        </form>
    </Container>
);

export default TicketingView1;