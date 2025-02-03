import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  max-width: 800px;
  margin: 0 auto;
  padding: 20px;
  font-family: Arial, sans-serif;
`;

export const Title = styled.h1`
  text-align: center;
  margin-bottom: 20px;
  color: #333;
`;

export const FormGroup = styled.div`
  margin-bottom: 15px;

  label {
    display: block;
    margin-bottom: 5px;
    font-weight: bold;
    color: #555;
  }

  input,
  select,
  textarea {
    width: 100%;
    padding: 10px;
    border: 1px solid #ccc;
    border-radius: 5px;
    font-size: 16px;
  }
`;

export const ThumbnailPreview = styled.div`
  margin-top: 10px;

  img {
    width: 200px;
    height: 200px;
    object-fit: cover;
    border: 1px solid #ddd;
    border-radius: 5px;
  }
`;

export const StyledButton = styled.button`
  background-color: #4caf50;
  color: white;
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  font-size: 16px;
  cursor: pointer;

  &:hover {
    background-color: #45a049;
  }
`;

export const SelectCategory = styled.select`
  width: 100%;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
  font-size: 16px;
`;

export const StyledTextarea = styled.textarea`
  height: 160px;
  width: 100%;
  padding: 10px;
  font-size: 16px;
  font-family: Arial, sans-serif;
  border: 2px solid #ccc;
  border-radius: 8px;
  outline: none;
  resize: none; /* 크기 조절 비활성화 */
  background-color: #f9f9f9;
  box-shadow: inset 2px 2px 5px rgba(0, 0, 0, 0.1);
  line-height: 1.5;
  transition: border-color 0.3s, box-shadow 0.3s;

  /* 포커스 시 스타일 */
  &:focus {
    border-color: #007bff;
    box-shadow: 0 0 5px rgba(0, 123, 255, 0.5);
    background-color: #ffffff;
  }
`;