import { useState } from "react";
import { useForm } from "react-hook-form";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { MovireSearch } from "../api";
import { IMG_URL } from "../components/Setcons";

const Title = styled.h3`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0 0 15px 0;
  font-size: 30px;
  font-weight: 600;
`;

const Form = styled.form`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Input = styled.input`
  all: unset;
  box-sizing: border-box;
  width: 50%;
  margin: 30px 0 30px 0;
  border: 1px solid white;
  border-radius: 15px;
  height: 70px;
  font-size: 30px;
  font-weight: 600;
  letter-spacing: -1px;
  text-align: center;
`;
// --------------------------------- top
const ConWrap = styled.div`
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  column-gap: 30px;
  row-gap: 50px;
`;

const Con = styled.div``;

const Bg = styled.div`
  max-width: 300px;
  height: 300px;
  background: url(${IMG_URL}/w500/${(props) => props.$bgUrl}) no-repeat center /
    cover;
`;
const MovieTitle = styled.div`
  text-align: center;
  margin-top: 10px;
  font-weight: 500;
  font-size: 18px;
`;
const Box = styled.div``;
const Movieview = styled.div`
  text-align: center;
  margin-top: 5px;
`;
const BgWrap = styled.div``;

export const Search = () => {
  const { register, handleSubmit } = useForm({
    mode: "onSubmit",
  });
  const [term, setTerm] = useState();

  const searchHandler = async (data) => {
    const { search: keyword } = data;
    try {
      const { results } = await MovireSearch(keyword);
      setTerm(results);
    } catch (error) {
      console.log(error);
    }
  };

  console.log(term);
  return (
    <div>
      <Title style={{ marginTop: "200px" }}>찾으시는 영화가 있으신가요?</Title>

      <Form onSubmit={handleSubmit(searchHandler)}>
        <Input
          {...register("search", {
            required: "검색 내용을 입력해주세요.",
          })}
          type="text"
          placeholder="검색내용"
        />
      </Form>
      {term && (
        <ConWrap>
          {term.map((data) => (
            <Con key={data.id}>
              <BgWrap>
                <Link to={`/detail/${data.id}`}>
                  <Bg $bgUrl={data.backdrop_path} />
                </Link>
              </BgWrap>

              <Box>
                <MovieTitle>{data.title}</MovieTitle>
                <Movieview> ★{Math.round(data.vote_average)} </Movieview>
              </Box>
            </Con>
          ))}
        </ConWrap>
      )}
    </div>
  );
};
