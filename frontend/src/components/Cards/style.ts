import styled from "styled-components";

export const CardComponent = styled.div`
  width: 140px;
  min-width: 140px;
  max-width: 140px;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0 0 1rem 0;
  align-self: flex-start;

  .card__img {
    width: 100%;
    margin-bottom: 1.2rem;

    img {
      width: 100%;
      border: 4px solid #000;
      box-shadow: 0px 0px 20px #f76f25dd;
    }
  }

  .card__body {
    width: 100%;

    span {
      svg {
        width: 12px;
        margin: 0 0.1rem;
      }
    }

    p {
      margin: 0.2rem 0 1.2rem;
      font-size: 1.2rem;
    }
  }

`
