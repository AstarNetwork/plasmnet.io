import React from 'react';
import styled from 'styled-components';
import { Company, Products, Blogs, Community } from '../data/links';
import { customMedia } from '../styles/globalStyle';
import { theme } from '../styles/theme';

interface Props {

}

const Footer: React.FC<Props> = () => {
  const currentYear = new Date().getFullYear();
  return (
    <FooterContainer>
      <h1>Join the discussion</h1>
      <div className="footer-columns">
        <ul className="footer-column">
          <h3>Company</h3>
          {Company.map(company => (
            <li>
              <a href={company.link} rel="noopener noreferrer" target="_blank">{company.description}</a>
            </li>
          ))}
        </ul>

        <ul className="footer-column">
          <h3>Products</h3>
          {Products.map(product => (
            <li>
              <a href={product.link} rel="noopener noreferrer" target="_blank">{product.description}</a>
            </li>
          ))}
        </ul>

        <ul className="footer-column">
          <h3>Collaboration</h3>
          <li>
            <a rel="noopener noreferrer" target="_blank">Example</a>
          </li>
          <li>
            <a rel="noopener noreferrer" target="_blank">Example</a>
          </li>
          <li>
            <a rel="noopener noreferrer" target="_blank">Example</a>
          </li>
        </ul>

        <ul className="footer-column">
          <h3>Blog</h3>
          {Blogs.map(blog => (
            <li>
              <a href={blog.link} rel="noopener noreferrer" target="_blank">{blog.description}</a>
            </li>
          ))}
        </ul>
        <ul className="footer-column">
          <h3>Community</h3>
          {Community.map(community => (
            <li>
              <a href={community.link} rel="noopener noreferrer" target="_blank">{community.description}</a>
            </li>
          ))}
        </ul>
      </div>
      <footer>
        © 2019-{currentYear} Stake Technologies, Inc. All Rights Reserved.
      </footer>
    </FooterContainer>
  )
}

export default Footer

const FooterContainer = styled.div`
  footer {
    display: flex;
    justify-content: center;
    margin-top: 10px;
  }
  .footer-columns {
    width: 90%;
    margin: auto;
    font-size: 14px;
    overflow: auto;
    display: grid;
    grid-template-columns: repeat(5, 1fr);

    ${customMedia.lessThan("mobile")`
      grid-template-columns: repeat(2, 1fr);
    `}
    ul li {
      list-style: none;
      line-height: 2.5;
    }

    a {
      color: ${theme.colors.black};
      :hover {
        cursor: pointer;
      }
    }
  }
  .footer-column{
    text-align: center
  }
`