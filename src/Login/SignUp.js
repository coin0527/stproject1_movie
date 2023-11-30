import { useForm } from "react-hook-form";
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
  width: 80%;
  height: 50px;
  border: 1px solid #dbdbdb;
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

export const SignUp = () => {
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
        <Title>Sign Up</Title>

        <Input
          {...register("username", {
            required: "아이디는 필수 입니다.",
          })}
          type="text"
          placeholder="ID"
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
          placeholder="Password"
        />
        <Input
          {...register("nickname", {
            required: "아이디는 필수 입니다.",
          })}
          type="text"
          placeholder="Cover ID"
        />
        <Button $isActive={isValid}> 회원가입 </Button>

        <Separ>
          <span></span>
          <b>or</b>
          <span></span>
        </Separ>

        <Signupq>
          <h3> 아이디가 있으신가요? </h3>
          <h4> 로그인 </h4>
        </Signupq>
      </Form>
    </Wrap>
  );
};
