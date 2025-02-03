import React, { useState, FormEvent } from "react";
import { LoginFormData } from "../../hooks/types/Login";
import styled from "styled-components";
import { Link } from "react-router-dom";
import MsgPopup from "../../components/popupBox/MsgPopup";
import { notNull, sensing } from "../../hooks/util/validation";

const Container = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    background-color: #f8f9fa;
`;

const Form = styled.div`
    background: #fff;
    padding: 40px;
    border-radius: 10px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
    width: 100%;
    max-width: 400px;
    box-sizing: border-box;
`;

const FormTitle = styled.h2`
    margin-bottom: 20px;
    text-align: center;
`;

const FormGroup = styled.div`
    margin-bottom: 20px;
`;

const Label = styled.label`
    display: block;
    margin-bottom: 5px;
    font-weight: bold;
`;

const Input = styled.input`
    width: 100%;
    padding: 10px;
    border: 1px solid #ccc;
    border-radius: 5px;
    font-size: 16px;
    box-sizing: border-box;
`;

const Button = styled.button`
    width: 100%;
    padding: 10px;
    background-color: #007bff;
    color: white;
    border: none;
    border-radius: 5px;
    font-size: 16px;
    cursor: pointer;
    transition: background-color 0.3s ease;

    &:hover {
        background-color: #0056b3;
    }
`;

const StyledLink = styled(Link)`
    display: inline-block;
    padding: 6px 10px;
    margin-top: 10px;
    font-weight: bold ;
    font-size: 14px;
    color: #007bff; // 링크의 기본 색상
    background-color: #fff;
    border: 2px solid #007bff; // 버튼의 테두리 색상
    border-radius: 5px;
    text-decoration: none;
    text-align: center;
    transition: background-color 0.3s ease, color 0.3s ease; // 천천히 변화

    &:hover {
        background-color: #007bff;
        color: #fff;
    }
`;

const ErrorMessage = styled.span`
    color: red;
    font-size: 14px;
    margin-top: 5px;
    display: block;
`;

const Login: React.FC = () => {

  const [msg, setMsg] = useState<string>(''); //popupBox Msg
  const [validMsg,setValidMsg] = useState<string>('');

  //FORM DATA STYLE
  const [formData,setFormData] = useState<LoginFormData>({
    name : '',
    password: '',
  });

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState, [name]: value.trim(),
    }));
  };

  const formDataValid = (formData:LoginFormData) => {
    if(notNull(formData.name) || notNull(formData.password)) return setValidMsg("입력을 다시 확인해주세요.");
    if(sensing(formData.name,'engB','num') || sensing(formData.password,'engB','num')) return setValidMsg("입력을 다시 확인해주세요.");
  }

  const login = async () => {
    // const validError = formDataValid(formData);
    // if(validError){
    //     setValid(validError);
    //     return;
    // }
    // const result = await login(formData.email,formData.memberPw);
    // if(result.success){
    //     navigate('/',{replace:true}); // 성공 후 메인 페이지로 이동
    // }else{
    //     setMsg(result.message);
    // }
  }

  return (
    <Container>
            <Form>
                <FormTitle>Login Page</FormTitle>
                <hr/>
                <br/>
                <FormGroup>
                    <Label>ID : </Label>
                    <Input type="text" name="name" value={formData.name} onChange={handleChange} />
                </FormGroup>
                <FormGroup>
                    <Label>Password: </Label>
                    <Input type="password" name="memberPw" value={formData.password} onChange={handleChange} />
                </FormGroup>

                {validMsg && <ErrorMessage>{validMsg}</ErrorMessage>}

                <Button onClick={login}>Login</Button>

                <StyledLink to="/login/signup">sign up</StyledLink>

                <MsgPopup msg={msg}/>
            </Form>
        </Container>
  );
};

export default React.memo(Login);
