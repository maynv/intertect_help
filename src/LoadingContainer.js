import React from "react";
import classnames from "classnames";
import styled from "styled-components";

export const MiniLoading = (props) => {
  const { loadingClass = "", ...rest } = props;
  return <div className={classnames("mini-loading", [loadingClass])} {...rest}></div>;
};

export const TwoCLoading = (props) => {
  const colorStart = "#e55f00";
  const colorEnd = "#045288";
  const { loadingClass = "", bollSize = 12, justifyContent = "center", ...rest } = props;
  return <LoadingWrap justifyContent={justifyContent} className="two-c-loading">
    <TwoCLoadingWrap colorStart={colorStart} colorEnd={colorEnd} size={bollSize} className={classnames("", [loadingClass])} {...rest}>
      <div></div>
      <div></div>
      <div></div>
    </TwoCLoadingWrap>
  </LoadingWrap>;
};

const LoadingWrap = styled.div`
  width: 100%;
  height: 100%;
  display: inline-flex;
  align-items: center;
  justify-content: ${props => props.justifyContent};
`;

const TwoCLoadingWrap = styled.div`
  height: initial;
  width: ${props => props.size * 4}px;
  min-height:  ${props => props.size * 4}px;
  overflow: hidden;
  background: none;
  transform: translateZ(0) scale(1);
  backface-visibility: hidden;
  transform-origin: 0 0;
  @keyframes loading-icon-o {
    0%    { opacity: 1; transform: translate(0 0) };
    49.99% { opacity: 1; transform: translate(${props => props.size * 1.5}px,0) };
    50%    { opacity: 0; transform: translate(${props => props.size * 3}px,0) };
    100%    { opacity: 0; transform: translate(0,0) };
  }
  @keyframes loading-icon {
    0% { transform: translate(0,0) };
    50% { transform: translate(${props => props.size * 1.5}px,0) };
    100% { transform: translate(0,0) };
  }
  div:nth-child(1) {
    background: ${props => props.colorStart};
    animation: loading-icon 1s linear infinite;
    animation-delay: -0.5s;
  }
  div:nth-child(2) {
    background: ${props => props.colorEnd};
    animation: loading-icon 1s linear infinite;
    animation-delay: 0s;
  }
  div:nth-child(3) {
    background: ${props => props.colorStart};
    animation: loading-icon-o 1s linear infinite;
    animation-delay: -0.5s;
  }
  position: relative;
  div {
    width: ${props => props.size}px;
    height: ${props => props.size}px;
    position: absolute;
    border-radius: 50%;
    top: calc(50% - ${props => props.size / 2}px);
  }
`;

const LoadingContainer = (props) => {
  const { loading = false, twoCLoadingEnable = true, children, ...rest } = props;
  if (loading) {
    if (twoCLoadingEnable) {
      return <TwoCLoading {...rest} ></TwoCLoading>;
    }
    return <MiniLoading {...rest} ></MiniLoading>;
  }
  return <React.Fragment>
    {children}
  </React.Fragment>;
};

export default LoadingContainer;

