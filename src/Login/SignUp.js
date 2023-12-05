import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import styled from "styled-components";

const Wrap = styled.div`
  height: 100vh;
  display: flex;
  justify-content: center;
`;
const Form = styled.form`
  max-width: 550px;
  width: 100%;
  height: 650px;
  border: 1px solid #dbdbdb;
  margin-top: 18vh;
  border-radius: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding: 10px;
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
  width: 80%;
  height: 50px;
  border: 1px solid rgba(255, 255, 255, 0.3);
  padding: 0 15px;
  margin-top: 10px;
  margin-bottom: 10px;
  text-align: center;
  border-top: none;
  border-left: none;
  border-right: none;
`;
const Button = styled.button`
  all: unset;
  width: 80%;
  height: 50px;
  background-color: salmon;
  text-align: center;
  margin-top: 20px;
  border-radius: 10px;
  font-size: 18px;
  font-weight: 600;
  color: white;
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
    margin-left: 20px;
    font-weight: 800;
    cursor: pointer;
  }
  h4:hover {
    transition-duration: 0.8s;
    color: salmon;
  }
`;
const Span = styled.span`
  font-size: 14px;
  color: crimson;
  font-weight: 600;
  margin-top: 8px;
`;

export const SignUp = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const navigate = useNavigate();

  const onSubmit = (data) => {
    const { username, password } = data;

    if (username === "user" && password === "test123123") {
      navigate("/login");
    } else {
      console.log("아이디 혹은 비밀번호가 잘못됨");
    }
  };
  return (
    <Wrap>
      <Form onSubmit={handleSubmit(onSubmit)}>
        <Title>Sign Up</Title>

        <Input
          {...register("username", {
            required: "아이디는 필수 입니다.",
            validate: (value) =>
              value === "user" || "올바른 아이디를 입력하세요." || true,
          })}
          type="text"
          placeholder="ID"
        />
        <Span>{errors.username && errors.username.message}</Span>
        <Input
          {...register("password", {
            required: "패스워드는 필수입니다.",
            validate: (value) =>
              value === "test123123" || "올바른 비밀번호를 입력하세요." || true,
            minLength: {
              value: 8,
              message: "비밀번호는 8자리 이상 작성해야합니다.",
            },
            pattern: {
              pattern: /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/,
              message: "숫자 문자 같이 써야합니다.",
            },
          })}
          type="Password"
          placeholder="Password"
        />
        <Span>{errors.password && errors.password.message}</Span>

        <Input
          {...register("nickname", {
            required: "닉네임은 필수 입니다.",
          })}
          type="text"
          placeholder="Cover ID"
        />
        <Button type="submit"> 회원가입 </Button>

        <Separ>
          <span></span>
          <b>or</b>
          <span></span>
        </Separ>

        <Signupq>
          <h3> 아이디가 있으신가요? </h3>
          <Link to={"/login"}>
            <h4> 로그인 </h4>
          </Link>
        </Signupq>
      </Form>
    </Wrap>
  );
};
