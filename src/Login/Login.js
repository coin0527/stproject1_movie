import { Link, useNavigate } from "react-router-dom";
import styled from "styled-components";
import { useState } from "react";

const Wrap = styled.div`
  height: 100vh;
  display: flex;
  justify-content: center;
`;
const Form = styled.form`
  max-width: 450px;
  width: 100%;
  height: 550px;
  border: 1px solid #dbdbdb;
  margin-top: 18vh;
  border-radius: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding: 30px;
`;
const Title = styled.div`
  font-size: 50px;
  font-weight: 700;
  letter-spacing: -2px;
  margin-bottom: 30px;
`;
const Input = styled.input`
  all: unset;
  box-sizing: border-box;
  width: 100%;
  height: 50px;
  border: 1px solid #dbdbdb;
  padding: 0 15px;
  margin-top: 10px;
  text-align: center;
  border-top: none;
  border-left: none;
  border-right: none;
`;
const Button = styled.button`
  all: unset;
  width: 100%;
  height: 50px;
  background-color: salmon;
  text-align: center;
  margin-top: 20px;
  border-radius: 10px;
  font-size: 18px;
  font-weight: 600;
  color: white;
  opacity: 0.7;
  cursor: pointer;
`;

const Separ = styled.div`
  width: 80%;
  margin: 30px 0;
  display: flex;
  justify-content: space-between;
  span {
    display: block;
    width: 40%;
    height: 1px;
    background-color: #dbdbdb;
  }
  b {
    font-weight: 600;
    color: #555;
    line-height: 3px;
  }
`;

const Signupq = styled.div`
  display: flex;
  opacity: 0.8;
  h4 {
    margin-left: 50px;
    font-weight: 800;
    cursor: pointer;
  }
`;

export const Login = () => {
  const [formData, setFormData] = useState({ username: "", password: "" });
  const allowedId = ["admin", "user"];
  const history = useNavigate();

  const loginHandler = () => {
    const { username, password } = formData;

    if (allowedId.includes(username) && password === "test123123") {
      history("/");
    } else {
      alert("아이디 or 패스워드가 올바르지 않습니다.");
    }
  };

  console.log(formData);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  return (
    <Wrap>
      <Form>
        <Title>Login</Title>

        <Input
          type="text"
          name="username"
          value={formData.username}
          placeholder="아이디"
          onChange={handleChange}
        />
        <Input
          type="password"
          name="password"
          value={formData.password}
          placeholder="패스워드"
          onChange={handleChange}
        />

        <Button onClick={loginHandler}>로그인</Button>

        <Separ>
          <span></span>
          <b>or</b>
          <span></span>
        </Separ>

        <Signupq>
          <h3>아이디가 없으신가요?</h3>
          <Link to={"/signup"}>
            <h4> 회원가입 </h4>
          </Link>
        </Signupq>
      </Form>
    </Wrap>
  );
};
