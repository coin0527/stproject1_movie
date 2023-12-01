import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import styled from "styled-components";

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
  opacity: ${(props) => (props.$isActive ? 1 : 0.5)};
  cursor: ${(props) => (props.$isActive ? "pointer" : "default")};
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
  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm({
    mode: "onChange",
  });

  console.log(errors?.username?.message);

  const loginHandler = (data) => {
    console.log(data);
  };
  return (
    <Wrap>
      <Form onSubmit={handleSubmit(loginHandler)}>
        <Title>Login</Title>

        <Input
          {...register("username", {
            required: "아이디는 필수 입니다.",
          })}
          type="text"
          placeholder="admin"
        />
        <Input
          {...register("password", {
            required: "패스워드는 필수입니다.",
            minLength: {
              value: 8,
              message: "비밀번호는 8자리 이상 작성해야합니다.",
            },
            pattern: /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/,
            message: "숫자 문자 같이 써야합니다.",
          })}
          type="password"
          placeholder="test123123"
        />
        <Button $isActive={isValid}>
          <Link to={"/"}>로그인</Link>
        </Button>

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
