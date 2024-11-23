import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { ConfigProvider } from "antd";
import AV from "leancloud-storage";

AV.init({
  appId: "ruwf8p4KGlcj4rU4GlMtOAMv-gzGzoHsz",
  appKey: "hlaHKV6j4Nw8Odk9GEIPtnom",
  serverURL: "https://ruwf8p4k.lc-cn-n1-shared.com",
});

// INIT
// 
// const arr: AV.Object[] = [];
// const m = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];
// for (let i = 0; i < 7; i++) {
//   const first = new AV.Object("ReadFirst");
//   first.set("token", m[i]);
//   first.set("ids", []);
//   arr.push(first);
// }
// AV.Object.saveAll(arr);

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <ConfigProvider>
      <App />
    </ConfigProvider>
  </React.StrictMode>
);
