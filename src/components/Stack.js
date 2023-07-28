import styled from "styled-components";
import React from "react";
import { MdCreate, MdClose } from "react-icons/md";

const Background = styled.div`
  width: 100%;
`;

const StackBox = styled.div`
  width: 100%;
`;

function Stack({ list }) {
  return (
    <Background>
      <StackBox>
        {list.map((v, index) => (
          <div key={index}>
            <h3>
              <MdCreate /> {v.name}
            </h3>
            <p>{v.desc}</p>
          </div>
        ))}
      </StackBox>
    </Background>
  );
}

export default React.memo(Stack);
