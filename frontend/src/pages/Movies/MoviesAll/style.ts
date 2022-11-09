import styled from "styled-components";

export const Style = styled.div`
  width: 100%;
  min-width: 980px;
  height: 100%;
  display: flex;
  flex-direction: column;
  padding: 0 40px;
  background-color: #03052F;
  color: #F86F31;

  .movie_container {
    width: 100%;
    height: auto;
    display: flex;
    justify-content: space-between;

    .movie_container_titulos {
      h2 {
        font-size: 24px;
        margin: 25px auto 2.5rem;
      }

      p {
        font-family: 'Roboto Condensed', sans-serif;
        font-size: 1.5rem;
        margin: 1rem auto 2rem;
      }
    }

    .movie_container_button {
      button {
        width: 100px;
        height: 30px;
        margin: 50px 30px 0;
        background-color: #F86F31;
        color: white;
        font-size: .865rem;
        border: none;
        border-radius: 5px;
        cursor: pointer;
        transition: all 0.3s;

        &:hover {
          background-color: #b03d09;
        }
      }
    }
  }


  .group_card {
    width: 100%;
    height: 100%;
    display: flex;
    column-gap: 80px;
    flex-flow: row wrap;
    align-content: center;
    justify-content: flex-start;
  }
`
