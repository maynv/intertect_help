import styled from "styled-components";
import Input from "antd/es/input";
import { useState } from "react";
import { useCallback } from "react";
import get from "lodash/get";
import Switch from "antd/es/switch";
import axios from "axios";
import Button from "antd/es/button";
import bg from "./assets/bg.jpg";
import MaskLoading from "./MaskLoading";
const { TextArea } = Input;
const App = () => {
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState({
    useLocal: true,
    userName: "",
    password: "",
    url: "",
    token: "",
    port: "3000"
  });

  const handleChange = (e, key) => {
    if (!e) return;
    setData(pre => {
      return {
        ...pre,
        [key]: e.target.value
      }
    })
  }

  const handleChangeSwitch = (e, key) => {
    setData(pre => {
      return {
        ...pre,
        [key]: e
      }
    })
  }

  const handleTake = () => {
    const formData = new FormData();
    formData.append("userName", data.userName);
    formData.append("password", data.password);
    setLoading(true);
    setData(pre => {
      return {
        ...pre,
        token: ""
      }
    })
    axios.post("https://etransuatfnd.mohap.gov.ae:4443/api/Registration/UserLogin", formData)
      .then(response => {
        const token = get(response, "data.Data.Token");
        if (token) {
          setData(pre => {
            return {
              ...pre,
              token
            }
          });
        }
      }).finally(() => {
        setLoading(false);
      })
  }



  const disabledTake = useCallback(() => {
    return !data.userName || !data.password;
  }, [data])();

  const result = useCallback(() => {
    if (!data.url) return "";
    try {
      const location = new URL(data.url);
      const key = "sys_MOH_vn";
      if (data.token) {
        if (data.useLocal) {
          location.protocol = "http://"
          location.host = `localhost:${data.port || "3000"}`;
        }
        location.searchParams.set(key, data.token);
        return location.toString();
      }

    } catch (e) {
      return "";
    }
    return "";
  }, [data])();

  const handleCopy = () => {
    if (navigator) {
      navigator.clipboard.writeText(result);
    }
  }

  return <Wrap bg={bg}>
    <MaskLoading loading={loading}></MaskLoading>
    <div className="container">
      <div className="w-100 mt-2 ">
        <TextArea className="url" value={data.url} onChange={(e) => handleChange(e, "url")} placeholder="url"></TextArea>
      </div>
      <div className="w-100 mt-2 row-inline ">
        <div className="w-50 mr-2">
          <form>
            <div className="mt-1">
              <Input name="userName" autoComplete={true} onChange={(e) => handleChange(e, "userName")} value={data.userName} placeholder="User name"></Input>
            </div>
            <div className="mt-1">
              <Input name="password" autoComplete={true} onChange={(e) => handleChange(e, "password")} value={data.password} placeholder="Password"></Input>
            </div>
          </form>
          <div className="mt-1">
            <Button disabled={disabledTake} onClick={handleTake} type="primary">Take token</Button>
          </div>
        </div>
        <TextArea className="token w-50 ml-2" onChange={(e) => handleChange(e, "token")} value={data.token} placeholder="token"></TextArea>
      </div>
      {result && <div className="mt-2 result">
        <div className="row-inline w-100 justify-content-between">
          <div className="row-inline w-80">
            Using localhost
            <Switch className="ml-2" checked={data.useLocal} onChange={(e) => handleChangeSwitch(e, "useLocal")} />
            {data.useLocal && <div className="ml-2">
              <Input name="port" onChange={(e) => handleChange(e, "port")} value={data.port} placeholder={data.port}></Input>
            </div>}
          </div>
          <div onClick={handleCopy} className="copy is-pointer bg-white">
            copy
          </div>
        </div>
        <div className="result__box mt-2 bg-white">
          {result}
        </div>
      </div>}
    </div>
  </Wrap>
}

export default App;

const Wrap = styled.div`
    width: 100vw;
    height: 100vh;
    font-size: 14px; 
    overflow: hidden;
    background-image: url(${props => props.bg});
    background-repeat: round;
    background-size: cover;
    .container{
      margin: 0 auto;
      margin-top: 200px;
      width: 50vw;
      textarea {
        width: 100%;
        &.url{
          height: 200px;
        }
        &.token{
          height: 100px;
        }
      }
    }

    .bg-white {
      background-color: #fff;
      border-radius: 2px;
    }

    .result{
      word-break: break-all;
      .result__box{
        padding: 2px;
        border: 1px dashed #ccc;
        border-radius: 6px;
      }
    }

    .copy{
      border: 1px dashed #ccc;
      padding:2px 12px;
      border-radius: 6px;
    }
`
