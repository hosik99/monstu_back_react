import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { StyledTextarea, StyledButton } from "../styledCSS/PostCreatePageCSS";

const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
`;

const ModalContent = styled.div`
  background: white;
  padding: 30px;
  border-radius: 10px;
  width: 600px;
  max-height: 80vh;
  text-align: center;
  box-shadow: 0 6px 12px rgba(0, 0, 0, 0.15);
  overflow-y: auto;
  animation: fadeIn 0.3s ease-out;

  @keyframes fadeIn {
    from {
      opacity: 0;
      transform: translateY(-20px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }
`;

const CloseButton = styled.button`
  margin-top: 20px;
  padding: 10px 20px;
  background-color: #ff6b6b;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;

  &:hover {
    background-color: #ff5252;
  }
`;

const InspectionModal = ({ closeModal, target, setTargetForm }) => {

  const [content,setContent] = useState();

  const createPatten = (data) => {
    if(data[0].includes('::')) return data.map((item) => `${item}`).join("\n\n");
    return data.map((item) => `${item} ::`).join("\n\n");
  };

  const handleChange = (e) => {
    setContent(e.target.value);
  };

  const parse = () => {
    const oriTarget = [];
    const transTarget = [];

    content.split("\n").forEach((line) => {
      const parts = line.split(" :: ");
      const data = parts[0]?.trim() || "";
      const tranData = parts[1]?.trim() || "";

      if (data) {
        oriTarget.push(data);
        transTarget.push(tranData); // 번역이 없어도 빈 문자열로 저장
      }
    });
    console.log('oriTarget: '+oriTarget)
    setTargetForm({
      ori: oriTarget,
      tran: transTarget,
    });
  };

  useEffect(()=>{
    setContent( () => createPatten(target))
  },[])

  return (
    <ModalOverlay onClick={closeModal}>
      <ModalContent onClick={(e) => e.stopPropagation()}>
        <StyledTextarea
          style={{ height: "160px" }}
          value={content}
          onChange={handleChange}
        />
        <StyledButton onClick={parse}>Parse</StyledButton>
        <CloseButton onClick={closeModal}>Close</CloseButton>
      </ModalContent>
    </ModalOverlay>
  );
};

export default InspectionModal;
