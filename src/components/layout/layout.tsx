import {ReactNode} from "react";
import styled from "styled-components";
import Left from "./left";

const Box = styled.div`
    display: flex;
    align-items: stretch;
  height: 100vh;
`

const LeftBox = styled.div`
    width: 190px;
  box-shadow: 2px 0 5px rgb(0 0 0 / 20%);
  background: #1c1d22;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  padding: 15px 0;
`

const RhtBox = styled.div`
    flex-grow: 1;
  height: 100%;
  overflow-y: auto;
  display: flex;
  flex-direction: column;
`

const RhtHeader = styled.div`
    padding: 15px;
  display: flex;
  justify-content: flex-end;
`
const MainBox = styled.div`
  flex-grow: 1;
`

const Wallet = styled.div`
    display: flex;
  justify-content: center;
  align-items: center;
  background: #fcca00;
  color: #000000;
  padding: 0 20px;
  border-radius: 4px;
  font-family: "Lato-Light";
`

const SelectedBox = styled.div`
    margin-right: 20px;
  background: #21242a;
  border-radius: 4px;
  padding:10px 20px;
  min-width: 20%;
`



interface Props {
    children: ReactNode
}

export default function Layout(props:Props){
    const { children} = props;

    return <Box>
        <LeftBox>
            <Left />
        </LeftBox>
        <RhtBox>
            <RhtHeader>
                <SelectedBox>d</SelectedBox>
                <Wallet>Connect Wallet</Wallet>
            </RhtHeader>
            <MainBox>
                {
                    children
                }
            </MainBox>
        </RhtBox>
    </Box>
}