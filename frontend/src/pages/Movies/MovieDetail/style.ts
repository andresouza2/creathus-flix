import styled from "styled-components";

interface StyledProps {
  image: string
}

export const Style = styled.div<StyledProps>`
  width: 100%;
  height: 100%;
  background-color: #03052F;
  color: white;

  .movie_container {
    width: 100%;
    height: 100vh;

    .movie_logo_home {
      width: 100%;
      height: 50%;
      background-image: url(${({ image }) => image});
      background-repeat: no-repeat;
      background-size: 100%;
      background-position: top center;
      display: flex;
      justify-content: space-between;

      .movie_logo {
        width: 100%;
        height: 100%;
        display: flex;
        background: linear-gradient(rgba(3, 5, 47, 0) 20%,rgba(3, 5, 47, 0.3) 65%, rgba(3, 5, 47, 1) 100%);

        .hero {
          width: 100%;
          height: 100%;
          display: flex;
          flex-direction: column;
          margin: 20px;

          .hero_image {
            width: 100%;
            height: 100%;
            display: flex;

            img {
              width: 150px;
              height: 38px;
              margin-right: 50px;
            }

            a {
              text-decoration: none;
              font-weight: 700;
              color: rgba(3, 5, 47, 0.7);
            }
          }


          .c_show {
            width: 30%;
            display: flex;
            flex-direction: column;
            justify-content: flex-start;
            margin: 0 0 1.2rem 20px;

            .c_logo {
              width: auto;
              display: flex;
              align-items: center;
              margin-bottom: 2rem;

              img {
                width: 60px;
                margin-right: 20px;
              }

              p {
                font-size: 1.5rem;
                color: white;
              }
            }

            p {
              margin: 0 0 3rem;
              font-family: 'Roboto Condensed', sans-serif;
              font-size: 2.5rem;
              font-weight: 700;
              color: white;
            }

          }
        }

        .movie_icone {
          width: auto;
          margin: 20px;
          display: flex;

          span {
            width: 24px;
            margin: 0 10px;

            svg {
              color: white;
            }
          }
        }
      }
    }

    .movie_info_container {
      width: calc(100% - 80px);
      margin:-20px 40px 0;

      .btn_group {
        width: 100%;
        display: flex;

        button {
          width: auto;
          height: 45px;
          display: flex;
          align-items: center;
          border: none;
          border-radius: 5px;
          padding: 2px 10px;
          margin: 0 20px 4rem 0;
          background-color: #FFFFFFFF;
          cursor: pointer;
          transition: all .3s;

          &:hover {
            background-color: #FFFFFFCC;
          }

          span {
            font-family: 'Poppins', sans-serif;
            font-weight: 600;
            font-size: 0.8rem;
            color: #03052F;
          }

          svg {
            width: 12px;
            margin-right: 0.2rem;
          }

          &.btn_info {
            background-color: #FFFFFF55;
            color: #FFFFFF;

            &:hover {
              background-color: #FFFFFF44;
            }

            svg {
              width: 16px;
              margin-right: 0.2rem;
            }

            span {
              color: #FFFFFF;
            }
          }
        }
      }

      p {
        font-size: 1.2rem;

        &.sinopse {
          margin-bottom: 2rem;
        }
      }

    }
  }
`
