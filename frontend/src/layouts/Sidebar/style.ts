import styled from "styled-components";

export const SidebarDiv = styled.div`
  width: 80px;
  height: 100%;
  background-color: #24142E;
  padding: 20px 10px 0;

  h1 {
    width: 100%;
    margin: 0px auto;
    img {
      width: 100%;
    }
  }

  nav {
    width: 100%;
    list-style: none;
    display: flex;
    flex-direction: column;
    margin: 20px auto 0;

    a {
      width: 100%;
      height: 60px;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      text-decoration: none;
      color: #F86F31;

      &:hover {
        background: linear-gradient(90deg, rgba(248,111,49) 45%, rgba(236,255,0,0) 100%);
        color: white;
      }

      svg {
        width: 100%;
        margin-bottom: 0.2rem;

        &:hover {
          color: white;
        }
      }
      span {
        font-size: 0.7rem;

        &:hover {
          color: white;
        }
      }
    }
  }

`
