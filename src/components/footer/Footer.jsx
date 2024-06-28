import styled from "styled-components";
import { Container } from "../../styles/styles";
import { footerData, socialLinksData } from "../../data/data";
import { Link } from "react-router-dom";
import { staticImages } from "../../utils/myImageData";
import { defaultTheme } from "../../styles/themes/default";


const Footer = () => {
  return (
    <FooterWrapper className="bg-outerspace">
      <Container className="container">
        <div className="footer-top grid">
          {footerData?.map((footer) => {
            return (
              <div className="footer-item" key={footer.id}>
                <h4 className="text-white text-lg footer-item-title">
                  {footer.title}
                </h4>
                {footer.links && (
                  <ul className="ftr-links">
                    {footer.links?.map((link, index) => (
                      <li className="ftr-link-item" key={index}>
                        <Link to={link.url} className="text-base">
                          {link.text}
                        </Link>
                      </li>
                    ))}
                  </ul>
                )}
                {footer.lists && (
                  <ul className="ftr-links">
                    {footer.lists?.map((link, index) => (
                      <li
                        className="ftr-link-item text-white text-base"
                        key={index}
                      >
                        {link.text}
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            );
          })}
        </div>
        <div className="footer-middle grid">
          <div className="ftr-social-links flex items-center">
            {socialLinksData?.map((socialLinksData) => {
              return (
                <Link
                  to={socialLinksData.site_url}
                  key={socialLinksData.id}
                  className="ftr-social-link bg-white flex items-center justify-center"
                >
                  <img src={socialLinksData.site_icon}/>
                </Link>
              );
            })}
          </div>


          <div className="ftr-app-links">
            <p className="app-links-title text-white text-xl font-semibold text-lg">
              Donwload the App
            </p>
            <div className="app-links-group flex items-center">
              <Link to="/">
                <img src={staticImages.google_play} />
              </Link>
              <Link to="/">
                <img src={staticImages.app_store} alt="" />
              </Link>
            </div>
          </div>
        </div>


        <div className="footer-bottom text-center">
          <p className="text-base text-white">
            Copyright &copy; 2023 &nbsp;
            <Link to="/" className="text-white">
              Raha Enterprise
            </Link>
            &nbsp;. All rights reserved .
          </p>
        </div>
      </Container>
    </FooterWrapper>
  )
}

export default Footer;

const FooterWrapper = styled.footer`
    padding-top: 60px;
    padding-bottom: 32px;

    .footer-top{
      grid-template-columns: repeat(4, 1fr);
      gap: 20px;
    }

    .footer-item{
      &-title{
        margin-bottom: 8px;
      }
    }

    .ftr-links{
      .ftr-link-item{
        margin-bottom: 8px;

        a{
          color: ${defaultTheme.color_whitesmoke};

          &:hover{
            color: ${defaultTheme.color_yellow};
          }
        }
      }
    }

    .footer-middle{
      padding: 20px 0 32px 0;
      grid-template-columns: repeat(2, 1fr);
      gap: 20px;
    }

    .ftr-social-links{
      column-gap: 18px;
      img{
        width: 28px;
      }

      .ftr-social-link{
        width: 25px;
        height: 25px;
        border-radius: 4px;
      }
    }

    .ftr-app-links{
      .app-links-title{
        margin-bottom: 12px;
      }

      .app-links-group{
        column-gap: 6px;
      }

      a{
        img{
          width: 120px;
        }
      }
    }

    .footer-bottom{
      padding-top: 36px;
      border-top: 1px solid rgba(190, 188, 189, 0.4);
    }

`;