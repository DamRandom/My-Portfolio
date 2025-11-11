"use client";

import styled from "styled-components";
import { useCallback } from "react";

export default function BotonDescarga() {
  const handleDownload = useCallback(() => {
    const link = document.createElement("a");
    link.href = "/DamianBritoResumeEN.pdf";
    link.download = "DamianBritoResumeEN.pdf";
    document.body.appendChild(link);
    link.click();
    link.remove();
  }, []);

  return (
    <StyledWrapper>
      <div className="button" onClick={handleDownload}>
        <a>Descargar CV</a>
        <b className="top">click para descargar</b>
        <b className="bottom">176KB .pdf</b>
      </div>
    </StyledWrapper>
  );
}

const StyledWrapper = styled.div`
  position: fixed;
  bottom: 40px;
  right: 24px;
  z-index: 50;

  .button {
    position: relative;
    cursor: pointer;
    perspective: 600px;
  }

  .button a {
    display: block;
    height: 50px;
    width: 200px;
    background: #060629;
    color: #f5f5f5;
    font: 500 15px/50px "Lora", serif;
    text-align: center;
    letter-spacing: 1px;
    border-radius: 0;
    box-shadow: 0 10px 25px rgba(6, 6, 41, 0.3);
    transition: all 0.4s ease;
  }

  b {
    background: #fafafa;
    display: block;
    height: 40px;
    width: 180px;
    margin: -50px 0 0 10px;
    text-align: center;
    font: 500 12px/40px "Lora", serif;
    color: #060629;
    position: absolute;
    z-index: -1;
    border-radius: 0;
    box-shadow: 0 8px 20px rgba(6, 6, 41, 0.2);
    transition: all 0.4s ease;
  }

  .button:hover a {
    background: #fafafa;
    color: #060629;
    box-shadow: 0 12px 25px rgba(6, 6, 41, 0.35);
    transform: translateY(-2px);
  }

  .button:hover .top {
    margin: -85px 0 0 10px;
  }

  .button:hover .bottom {
    margin: -5px 0 0 10px;
  }

  .button:active a {
    transform: translateY(1px);
    box-shadow: 0 4px 10px rgba(6, 6, 41, 0.25);
  }
`;
