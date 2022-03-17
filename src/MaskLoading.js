import React from "react";
import styled from "styled-components";
import classnames from "classnames";
import { TwoCLoading } from "./LoadingContainer";

const MaskLoading = (props) => {
    const { loading, mask = false } = props;
    if (mask) {
        if (loading) {
            return <Wrap className="mask-loading-component">

                <div className={classnames("", { "wrapper-loading": loading })}>
                    {
                        loading ?
                            <div className="wrapper-loading__inner-mask">
                                <div className="wrapper-loading__inner-bg">
                                </div>
                                <TwoCLoading bollSize={20}></TwoCLoading>
                            </div>
                            : null
                    }
                </div>
            </Wrap>;
        }
    }

    return <Wrap className="mask-loading-component">

        <div className={classnames("", { "wrapper-loading wrapper-loading-bg": loading })}>
            {
                loading ?
                    <div className="wrapper-loading__inner">
                        <TwoCLoading bollSize={20}></TwoCLoading>
                    </div>
                    : null
            }
        </div>
    </Wrap>;
};

export default MaskLoading;

const Wrap = styled.div`
      position: relative;
      .wrapper-loading-bg {
        background: var(--white);
        display: inline-flex;
        align-items: center;
        justify-content: center;
      }
      .wrapper-loading {
        position: fixed;
        z-index: 999900;
        inset: 0px;
        width: 100vw;
        display: flex;
    }
    .wrapper-loading__inner-mask {
        display: inline-flex;
        align-items: center;
        justify-content: center;
        width: 100vw;
    }

    .wrapper-loading__inner-bg {
        background: var(--dark);
        opacity: 0.3;
        position: fixed;
        z-index: 999900;
        inset: 0px;
        width: 100vw;
    }

    .loader {
        font-size: 80px;
        text-indent: -9999em;
        overflow: hidden;
        width: 1em;
        height: 1em;
        border-radius: 50%;
        margin: auto;
        position: absolute;
        -webkit-animation: load6 1.7s infinite ease, round 1.7s infinite ease;
        animation: load6 1.7s infinite ease, round 1.7s infinite ease;
        -webkit-transform: translate(-50%, -50%);
        -ms-transform: translate(-50%, -50%);
        top: 40%;
        left: 45%;
        transform: translate(-50%, -50%);
        z-index: 999999;
    }
    @-webkit-keyframes load6 {
        0% {
            box-shadow: 0 -0.83em 0 -0.4em, 0 -0.83em 0 -0.42em, 0 -0.83em 0 -0.44em, 0 -0.83em 0 -0.46em,
                0 -0.83em 0 -0.477em;
        }
        5%,
        95% {
            box-shadow: 0 -0.83em 0 -0.4em, 0 -0.83em 0 -0.42em, 0 -0.83em 0 -0.44em, 0 -0.83em 0 -0.46em,
                0 -0.83em 0 -0.477em;
        }
        10%,
        59% {
            box-shadow: 0 -0.83em 0 -0.4em, -0.087em -0.825em 0 -0.42em, -0.173em -0.812em 0 -0.44em,
                -0.256em -0.789em 0 -0.46em, -0.297em -0.775em 0 -0.477em;
        }
        20% {
            box-shadow: 0 -0.83em 0 -0.4em, -0.338em -0.758em 0 -0.42em, -0.555em -0.617em 0 -0.44em,
                -0.671em -0.488em 0 -0.46em, -0.749em -0.34em 0 -0.477em;
        }
        38% {
            box-shadow: 0 -0.83em 0 -0.4em, -0.377em -0.74em 0 -0.42em, -0.645em -0.522em 0 -0.44em,
                -0.775em -0.297em 0 -0.46em, -0.82em -0.09em 0 -0.477em;
        }
        100% {
            box-shadow: 0 -0.83em 0 -0.4em, 0 -0.83em 0 -0.42em, 0 -0.83em 0 -0.44em, 0 -0.83em 0 -0.46em,
                0 -0.83em 0 -0.477em;
        }
    }
    @keyframes load6 {
        0% {
            box-shadow: 0 -0.83em 0 -0.4em, 0 -0.83em 0 -0.42em, 0 -0.83em 0 -0.44em, 0 -0.83em 0 -0.46em,
                0 -0.83em 0 -0.477em;
        }
        5%,
        95% {
            box-shadow: 0 -0.83em 0 -0.4em, 0 -0.83em 0 -0.42em, 0 -0.83em 0 -0.44em, 0 -0.83em 0 -0.46em,
                0 -0.83em 0 -0.477em;
        }
        10%,
        59% {
            box-shadow: 0 -0.83em 0 -0.4em, -0.087em -0.825em 0 -0.42em, -0.173em -0.812em 0 -0.44em,
                -0.256em -0.789em 0 -0.46em, -0.297em -0.775em 0 -0.477em;
        }
        20% {
            box-shadow: 0 -0.83em 0 -0.4em, -0.338em -0.758em 0 -0.42em, -0.555em -0.617em 0 -0.44em,
                -0.671em -0.488em 0 -0.46em, -0.749em -0.34em 0 -0.477em;
        }
        38% {
            box-shadow: 0 -0.83em 0 -0.4em, -0.377em -0.74em 0 -0.42em, -0.645em -0.522em 0 -0.44em,
                -0.775em -0.297em 0 -0.46em, -0.82em -0.09em 0 -0.477em;
        }
        100% {
            box-shadow: 0 -0.83em 0 -0.4em, 0 -0.83em 0 -0.42em, 0 -0.83em 0 -0.44em, 0 -0.83em 0 -0.46em,
                0 -0.83em 0 -0.477em;
        }
    }
    @-webkit-keyframes round {
        0% {
            -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
        }
        100% {
            -webkit-transform: rotate(360deg);
            transform: rotate(360deg);
        }
    }
    @keyframes round {
        0% {
            -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
        }
        100% {
            -webkit-transform: rotate(360deg);
            transform: rotate(360deg);
        }
    }
      `;