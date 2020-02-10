import { customMedia } from "./../../../styles/globalStyle";
import styled from "styled-components";

export const HeroContainer = styled.div`
  .link {
    color: #323232;
    cursor: pointer;
    font-size: 14px;
    line-height: 40px;
    font-weight: 300;
    padding-right: 48px;
    margin-bottom: 30px;
  }

  .hero {
    visibility: hidden;
    height: 100vh;
    margin-top: 70px;
    ${customMedia.lessThan("laptop")`
      height: 90vh;
    `}
    ${customMedia.lessThan("tablet")`
      /* height: 640px; */
      /* margin-top: 70px; */
    `}
    ${customMedia.lessThan("mobile")`
      height: 750px;
      margin-top: 70px;
    `}
     @media only screen and (max-width: 814px) and (min-width: 810px) {
      height: 450px;
      margin-top: 160px;
    } 

    .container {
      width: 1440px;
      min-width: 1440px;
      margin: 0 auto;
      ${customMedia.lessThan("laptop")`
        width: 920px;
        min-width: 920px;
      `}
      ${customMedia.lessThan("tabletPro")`
        width: 750px;
        min-width: 750px;
      `}
      ${customMedia.lessThan("tablet")`
        width: 680px;
        min-width: 680px;
      `}
      ${customMedia.lessThan("tabletSmall")`
        width: 400px;
        min-width: 400px;
      `}
      ${customMedia.lessThan("mobile")`
        width: 326px;
        min-width: 326px;
      `}

      .hero-inner {
        display: flex;
        align-items: center;
        justify-content: space-between;
        margin: 0 24px;
        height: 100vh;
        ${customMedia.lessThan("laptop")`
          justify-content: center;
        `}
        ${customMedia.lessThan("tabletPro")`
          height: 80vh;
          margin: 0 10px;
        `}

        .hero-content {
          width: 50%;
          ${customMedia.lessThan("laptop")`
            width: 100%;
          `}

          .hero-content-inner {
            width: 400px;
            color: #323232;
            margin: 0 auto;
            ${customMedia.lessThan("mobile")`
                width: 326px;
                min-width: 326px;
              `}

            h1 {
              font-weight: 500;
              font-size: 32px;
              margin-bottom: 24px;
              ${customMedia.lessThan("mobile")`
                font-size: 28px;
                margin-right: 0;
              `}

              .hero-content-line {
                margin: 0;
                height: 44px;
                overflow: hidden;

                .hero-content-line-inner {
                }
              }
            }

            p {
              font-size: 14px;
              line-height: 24px;
              font-weight: 300;
              padding-right: 48px;
              margin-bottom: 30px;
              ${customMedia.lessThan("mobile")`
                padding-right:40px; ;
                /* font-size: 24px; */
                /* margin-right: 0; */
              `}
            }

            .btn-row {
              position: relative;
              ${customMedia.lessThan("laptop")`
                  padding-left: 50px;
                `}

              /* --- */
              &:before {
                position: absolute;
                content: "";
                width: 36px;
                height: 1px;
                background: #dfdfdf;
                top: 50%;
                left: -58px;
                ${customMedia.lessThan("laptop")`
                  left: 0px;
                `}
              }

              button {
                background: none;
                border: none;
                font-size: 12px;
                padding: 0;
                cursor: pointer;
                text-transform: uppercase;
                font-weight: 700;
                letter-spacing: 0.7px;
                display: flex;
                align-items: center;
                position: relative;

                &:focus {
                  outline: none;
                }

                .arrow-icon {
                  position: absolute;
                  display: flex;
                  align-items: center;
                  justify-content: center;
                  background: #007fff;
                  height: 48px;
                  width: 48px;
                  border-radius: 100px;
                  margin-left: 16px;
                  left: 64px;
                  transform-origin: center center;
                }
              }
            }
          }
        }

        .hero-images {
          width: 50%;
          height: 100vh;
          position: relative;
          ${customMedia.lessThan("laptop")`
            display: none;
          `}

          .hero-images-inner {
            .hero-image {
              position: absolute;
              overflow: hidden;

              &.girl {
                top: 0;
                right: 0px;
                width: 45%;
                height: 50%;
              }

              &.boy {
                bottom: 24px;
                left: 0px;
                width: 52%;
                height: 65%;
              }

              img {
                position: absolute;
                top: 0;
                left: 0;
                right: 0;
                bottom: 0;
                width: 100%;
              }
            }
          }
        }
      }
    }
  }
`;
