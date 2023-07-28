import styled from "styled-components";
import { MdPadding } from "react-icons/md";
import { BiLink, BiLogoGithub } from "react-icons/bi";
import Stack from "./Stack";

const Background = styled.div`
  width: 100%;
  padding: 2rem 6rem;
  box-sizing: border-box;
  background: #fff;
  display: flex;
  flex-direction: column;

  a {
    text-decoration: none;
    color: inherit;
    transition: 0.2s;
  }
  a:hover {
    text-decoration: underline;
    opacity: 0.6;
  }
`;

const Title = styled.p`
  width: 100%;
  height: 50px;
  display: flex;
  align-items: center;
  font-size: 2rem;
  margin: 0 0 2rem 0;
`;

const ProjectBlock = styled.div`
  width: 100%;
  border-radius: 15px;
  padding: 1.5rem;
  box-sizing: border-box;
  transition: 0.4s;

  &:hover {
    box-shadow: 0px 0px 12px rgba(0, 0, 0, 0.8);
  }

  & .container {
    width: 100%;
    display: flex;
    flex-direction: row;
  }

  & .img-con {
    width: 20%;
    min-width: 20%;
    margin-right: 2rem;
    border-radius: 15px;
  }

  .img-con > img {
    max-width: 100%;
    border-radius: 15px;
  }

  h1 {
    margin: 0;
  }
  & + & {
    margin-top: 2rem;
  }

  ul {
    list-style: none;
    padding-left: 1rem;
  }
  li {
    padding-left: 0.5rem;
    box-sizing: border-box;
    margin-bottom: 0.5rem;
    border-left: 3px solid rgba(0, 0, 0, 0.6);
  }

  button {
    margin-top: 1rem;
    width: 27%;
    height: 40px;
    border: none;
    border-radius: 8px;
    background: #fff;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.6);
    font-size: 1.1rem;
    cursor: pointer;
  }

  button:hover {
    transform: scale(1.05);
  }

  button a:hover {
    text-decoration: none;
    opacity: 1;
  }

  button + button {
    margin-left: 1rem;
  }

  .github {
    background: #000;
    color: #fff;
  }
`;

const projects = [
  {
    name: "영화 DB",
    desc: "교육 과정의 최종 과제로써 TMDB 의 API를 활용한 영화, TV 시리즈의 정보 확인과 간단한 검색을 지원하는 페이지. 아직 미흡한 점도 많지만 차차 개선해나가볼 예정입니다.",
    api: "TMDB API",
    github_path: "https://github.com/song5789/next-movie",
    page_path: "https://next-movie-kumxmbm5c-song5789.vercel.app/",
    image_path: "/my_movie.png",
    tech: [
      {
        name: "Next.js",
        desc: "Next.js 를 처음사용해보았으나, 강력하고 편리한 라우팅기능으로 인해 페이지 이동을 구현하는것이 매우 쉬웠으며, SSR 의 기본 개념과 사용법에 대해 공부해볼 수 있던 작업물이었습니다. 기본 강의만 듣고 나머지는 찾아가면서 작업해서 아직 많이 미흡한 점은있지만 사용이 간편하기에 왜 요즘 Next.js 가 개발자들의 선택을 받는지 알 수 있었습니다.",
      },
      {
        name: "React",
        desc: "Next.js 가 React 의 프레임 워크인 만큼 같이 사용하게 되었습니다. 외부 API 에 연결을 직접 해보면서, JS 의 프라미스 및 async 등의 비동기 작업에 대해 더 알 수 있었습니다.",
      },
      {
        name: "styled-components",
        desc: "react-slick 라이브러리로 caroucel 일반적인 방법으론 스타일 적용이 되지않아 사용하게 되었습니다. 그 외 스타일링은 jsx 스타일로 내부 컴포넌트에 작성하여 구성하였습니다.",
      },
      {
        name: "react-slick",
        desc: "요소 나열, pagination 등을 간편하게 구현해보기위해 사용해본 라이브러리입니다.",
      },
    ],
  },
  {
    name: "소개 페이지",
    desc: "개인 소개페이지. React로 제작.",
    api: null,
    github_path: "https://github.com/song5789/my_intro",
    page_path: null,
    image_path: "/my_intro.png",
    tech: [
      {
        name: "React",
        desc: "페이지 전체 구성을 React 로 작성하였습니다.",
      },
      {
        name: "styled-components",
        desc: "대부분의 스타일링에 해당 라이브러리를 사용하였습니다.",
      },
      {
        name: "framer motion",
        desc: "scroll 이벤트를 위해 사용했습니다. React 친화적으로 만들어져있어 사용이 간편했습니다.",
      },
      {
        name: "anmiate.css",
        desc: "버튼 이벤트 등을 구현해보기위해 사용했습니다. 클래스 이름만으로 간편하게 사용가능하여 순수 JS 로 페이지를 구성할때도 편하게 쓰일 수 있을것 같았습니다.",
      },
    ],
  },
];

export default function Portfolio() {
  return (
    <>
      <Background>
        <a name="portfolio" href="#portfolio">
          <Title>
            <MdPadding />
            &nbsp;포트폴리오
            <BiLink />
          </Title>
        </a>
        {projects.map((v, index) => (
          <div key={index}>
            <ProjectBlock>
              <div className="container">
                <div className="img-con">
                  <img src={v.image_path} />
                </div>
                <div className="project-info">
                  <h1>{v.name}</h1>
                  <ul>
                    <li>{v.desc}</li>
                    <li>사용 API: {v.api || "사용 API 없음."}</li>
                  </ul>
                  <h2>사용한 기술들</h2>
                  <Stack list={v.tech} />
                  <div className="eng b-con">
                    <button className="github">
                      <a href={v.github_path} target="_blank" rel="noopener noreferrer">
                        <BiLogoGithub /> Github Source
                      </a>
                    </button>
                    {v.page_path ? (
                      <button>
                        <a href={v.page_path} target="_blank" rel="noopener noreferrer">
                          Visit Page
                        </a>
                      </button>
                    ) : (
                      <button className="thispage">
                        <a href="/">This page</a>
                      </button>
                    )}
                  </div>
                </div>
              </div>
            </ProjectBlock>
            <hr />
          </div>
        ))}
      </Background>
    </>
  );
}
