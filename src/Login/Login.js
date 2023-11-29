import { useForm } from "react-hook-form";
import styled from "styled-components";
import { LOGIN_URL } from "../components/Setcons";

const Wrap = styled.div``;
const Form = styled.form``;
const Container = styled.div``;
const TitleImg = styled.div`
  width: 300px;
  height: 300px;
  background-image: url(${LOGIN_URL});
`;
const Input = styled.div`
  width: 300px;
  height: 300px;
`;
const Button = styled.div``;

export const Login = () => {
  const { register, handleSubmit } = useForm({
    mode: "onSubmit",
  });

  const submitHandler = () => {};
  return (
    <Wrap>
      <Container>
        <TitleImg></TitleImg>
        <Form onSubmit={handleSubmit(submitHandler)}>
          <Input
            {...register("id", { required: "아이디를 입력해주세요" })}
            type="text"
            placeholder="ID"
          />
          <Input
            {...register("pw", { required: "비밀번호를 입력해주세요" })}
            type="password"
            placeholder="Password"
          />
        </Form>
        <Button></Button>
      </Container>
    </Wrap>
  );
};
