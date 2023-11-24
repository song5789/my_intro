import styled from "styled-components";
import { MdPadding } from "react-icons/md";
import { BiLink, BiLogoGithub } from "react-icons/bi";
import Stack from "./Stack";

const Background = styled.div`
  width: 100%;
  padding: 1rem 5%;
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
    box-shadow: 0 0 5px #000;
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
    min-width: 220px;
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

  @media screen and (max-width: 550px) {
    padding: 5% 3%;
    .img-con {
      width: 100%;
    }
    .container {
      flex-direction: column;
    }

    button {
      max-width: 150px;
      margin-top: 1rem;
    }
    button + button {
      margin-left: 0;
    }
    .b-con {
      display: flex;
      flex-direction: column;
      align-items: center;
    }
  }
`;

const projects = [
  {
    name: "영화 DB",
    desc: " API를 활용한 영화, TV 시리즈의 정보 확인과 간단한 검색을 지원하는 페이지. 개선예정.",
    github_path: "https://github.com/song5789/next-movie",
    page_path: "https://next-movie-kumxmbm5c-song5789.vercel.app/",
    image_path: "/my_movie.png",
    tech: [
      {
        name: "Next.js",
        desc: "",
      },
      {
        name: "React",
        desc: "",
      },
    ],
  },
  {
    name: "Todo-List",
    desc: "Todo List 만들기.",

    github_path: "https://github.com/song5789/local_todo/tree/main",
    page_path: "https://song5789.github.io/local_todo/",
    image_path: "/local_todolist.png",
    tech: [
      {
        name: "React",
        desc: "",
      },
      {
        name: "styled-components",
        desc: "",
      },
    ],
  },
  {
    name: "웹툰 앱",
    desc: "Flutter 기초 공부 후 제작.",

    github_path: "https://github.com/song5789/webtoon_flutter",
    page_path: null,
    image_path: "/flutter_webtoon.png",
    tech: [
      {
        name: "Flutter",
        desc: "",
      },
    ],
  },
  {
    name: "트위터 클론",
    desc: "Firebase + React 로 트윗 작성, 수정 등의 기능을 제공.",

    github_path: "https://github.com/song5789/twitter_clone",
    page_path: "https://x-reloaded-bf3ab.web.app/login",
    image_path: "/x-clone.png",
    tech: [
      {
        name: "React",
        desc: "",
      },
      {
        name: "Firebase",
        desc: "",
      },
      {
        name: "TypeScript",
        desc: "",
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
                  <img src={`https://song5789.github.io/my_intro${v.image_path}`} />
                </div>
                <div className="project-info">
                  <h1>{v.name}</h1>
                  <ul>
                    <li>{v.desc}</li>
                  </ul>
                  <h2>사용한 기술들</h2>
                  <Stack list={v.tech} />
                  <div className="eng b-con">
                    <button className="github">
                      <a href={v.github_path} target="_blank" rel="noopener noreferrer">
                        <BiLogoGithub /> Github Source
                      </a>
                    </button>
                    <button>
                      <a href={v.page_path || ""} target="_blank" rel="noopener noreferrer">
                        {v.page_path ? "페이지 이동" : "페이지 없음"}
                      </a>
                    </button>
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
