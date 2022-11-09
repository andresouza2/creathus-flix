import styled from "styled-components";

export const Style = styled.div`
  width: 100%;
  background-color: #03052F;
  color: #f76f25;

  .movie_add {
    width: 100%;
    padding: 50px 20px;
    display: flex;
    flex-direction: row;



    form {
      width: 100%;

      .group_primary {
        width: 100%;
        margin-bottom: 2rem;
        padding-bottom: 18rem;
        display: flex;
        border-bottom: 1px solid #f76f25;

        .img_group {
          display: flex;
          justify-content: center;
          margin: 0 auto;
          font-size: 24px;
          flex: 1;
        }

        .input_group {
          width: 100%;
          height: 100%;
          flex: 3;
          display: flex;
          flex-flow: column nowrap;
          justify-content: space-between;

          input, textarea {
            width: 100%;
            height: 60px;
            background-color: #03052F;
            border: 1px solid #f76f25;
            color: white;
            padding: 5px 20px;
          }

          textarea {
            height: 120px;
          }
        }
      }

      .group_second {
        width: 100%;
        display: flex;
        flex-flow: column nowrap;

        input {
          width: 100%;
          height: 60px;
          background-color: #03052F;
          border: 1px solid #f76f25;
          color: white;
          padding: 5px 20px;

          &[type="file"] {
            border: none;
            color: #f76f25
          }

        }

        .group_button {
          display: flex;
          justify-content: flex-start;

          input[type="submit"], input[type="reset"] {
            width: 180px;
            height: 45px;
            border: none;
            border-radius: 5px;
            font-family: 'Roboto', sans-serif;
            font-weight: 700;
            cursor: pointer;
          }

          input[type="submit"] {
            background-color: #FFFFFF;
            color: #03052F;
            transition: all 0.3s ease;

            &:hover {
              background-color: #FFFFFFAA;
            }
          }

          input[type="reset"] {
            background-color: #f76f25;
            color: #FFFFFF;
            transition: all 0.3s ease;
            margin-left: 0.5rem;

            &:hover {
              background-color: #f76f25AA;
            }
          }


        }
      }

    }
  }


`
