import styled from "styled-components";

export const Container = styled.div`
`

export const Paragrif = styled.div`
background: #ADC9A6;
height: 40px;
display: flex;
align-items: center;
justify-content: center;
h1{
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 35px;
    text-align: center;
    letter-spacing: 0.24px;
    color: #153C3C;
}
`

export const Star = styled.img`
`

export const Navbarcon = styled.div`
position: fixed;
background: #153C3C;
height: 100px;
width: 100%;
display: flex;
align-items: center;
justify-content: space-between;
padding-left: 100px;
padding-right: 100px;
top: 0px;
p{
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 400;
    font-size: 15px;
    line-height: 24px;
    letter-spacing: 0.32px;
    color: #DDE4E4;
    text-align: center;
    width: 80px;
    cursor: pointer;
    &:hover{
        color: #DDE4E4;
        background-color: #4b3e19;
        border-radius: 6px;
        width: 80px;
        text-align: center;
        box-shadow: 0px 1px 2px 5px #33ffff;

    }
}
button{
    width: 106px;
    height: 40px;
    border-radius: 4px;
    background: #84A17D;
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 400;
    font-size: 13px;
    line-height: 24px;
    letter-spacing: 0.14px;
    color: #FFFFFF;
    border: none;
    cursor: pointer;
    &:hover{
        background-color: #4b3e19;
        border-radius: 8px;
        box-shadow: 0px 1px 2px 5px #33ffff;
    }

}
`

export const Menu = styled.div`
display: flex;
align-items: center;
justify-content: space-between;
margin-right: 600px;
width: 280px;
`

export const Logo = styled.img`
&:hover{
    cursor: pointer;
}
`


export const Team = styled.div`
padding-top: 210px;
text-align: center;
display: grid;
align-items: center;
justify-content: center;
h2{
    background: #F3F7F2;
    height: 48px;
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 400;
    font-size: 18px;
    line-height: 32px;
    text-align: center;
    text-transform: uppercase;
    color: #153C3C;
    width: 285px;
    padding-top: 10px;
    margin-left: 150px;
}
h1{
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 400;
    font-size: 62px;
    line-height: 80px;
    text-align: center;
    letter-spacing: 2.88px;
    color: #172426;
}
span{
    border-bottom: 8px solid #ADC9A6;
}
`

export const Img = styled.img`
padding-top: 109px;
margin-left: 100px;
`