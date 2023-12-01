import {
  faBars,
  faMagnifyingGlass,
  faUser,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { routes } from "../routes";
import { useState } from "react";
import { MovireSearch } from "../api";

const Wrap = styled.header`
  width: 100%;
  padding: 20px 5%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  a {
    color: white;
  }
  position: absolute;
  top: 0;
  left: 0;
  z-index: 10;
`;

const SearchWrap = styled.ul`
  display: flex;
`;
const Logo = styled.div`
  font-size: 30px;
  font-weight: 700;
`;
const Form = styled.form`
  margin: 0 10% 0 20%;
`;
const Input = styled.input`
  width: 500px;
  height: 30px;
  text-align: center;
  border-radius: 10px;
`;
const User = styled.div`
  font-size: 30px;
  margin-right: 30px;
`;
const Con = styled.div`
  display: flex;
  div {
  }
`;

export const Header = () => {
  const [mdata, setMdata] = useState();

  const { register, handleSubmit } = useForm({
    mode: "onSubmit",
  });

  const searchHandler = async (data) => {
    const { search: Keyword } = data;
    try {
      const { results } = await MovireSearch(Keyword);
      setMdata(results);
    } catch (error) {
      console.log(error);
    }
  };

  console.log(mdata);

  return (
    <Wrap>
      <Logo>
        <Link to={routes.home}>JMovie</Link>
      </Logo>
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
        <Link to={"/search"}>
          <FontAwesomeIcon
            icon={faMagnifyingGlass}
            style={{ cursor: "pointer", fontSize: "30px" }}
          />
        </Link>
      </SearchWrap>

      <Con>
        <Link to={"/login"}>
          <User>
            <FontAwesomeIcon
              icon={faUser}
              style={{
                cursor: "pointer",
                fontSize: "24px",
                lineHeight: "50px",
              }}
            />
          </User>
        </Link>

        <div>
          <FontAwesomeIcon
            icon={faBars}
            style={{ cursor: "pointer", fontSize: "40px" }}
          />
        </div>
      </Con>
    </Wrap>
  );
};
