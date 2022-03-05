import React from "react";
import styled from "styled-components";

const CopyrightFooter = styled.div`
  .footer {
    text-align: center;

    font-weight: 300;
    color: #000;
    font-size: 16px;
    line-height: 1.2;

    position: relative;
    display: block;
    flex-direction: column;
  }
`;

function Footer() {
  const year = new Date().getFullYear();
  return (
    <CopyrightFooter>
      <div className="footer">
        <p>Kathleen Valdez © {year}</p>
      </div>
    </CopyrightFooter>
  );
}

export default Footer;
