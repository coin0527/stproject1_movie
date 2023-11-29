import {
  faBars,
  faMagnifyingGlass,
  faUser,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useForm } from "react-hook-form";
import styled from "styled-components";

const Wrap = styled.div`
  padding: 25px 5%;
  display: flex;
  justify-content: space-between;
  line-height: 30px;
`;

const SearchWrap = styled.ul`
  display: flex;
`;
const Logo = styled.div`
  font-size: 30px;
  font-weight: 700;
`;
const Form = styled.form``;
const Input = styled.input`
  width: 500px;
  height: 30px;
  text-align: center;
  border-radius: 10px;
  margin-right: 30px;
`;
const User = styled.div`
  display: flex;
  position: absolute;
  top: 33px;
  right: 200px;
  h3 {
    margin-left: 10px;
    line-height: 30px;
    cursor: pointer;
  }
`;

export const Header = () => {
  const { register, handleSubmit } = useForm({
    mode: "onSubmit",
  });

  const searchHandler = () => {};
  return (
    <Wrap>
      <Logo> Logo </Logo>
      <SearchWrap>
        <Form onSubmit={handleSubmit(searchHandler)}>
          <Input
            {...register("search", {
              required: "검색 내용을 입력해주세요.",
            })}
            type="text"
            placeholder="내용을 입력해주세요."
          />
        </Form>
        <FontAwesomeIcon
          icon={faMagnifyingGlass}
          style={{ cursor: "pointer", fontSize: "30px" }}
        />
      </SearchWrap>
      <User>
        <FontAwesomeIcon
          icon={faUser}
          style={{ cursor: "pointer", fontSize: "24px" }}
        />
        <h3>Manager</h3>
      </User>

      <FontAwesomeIcon
        icon={faBars}
        style={{ cursor: "pointer", fontSize: "40px" }}
      />
    </Wrap>
  );
};
