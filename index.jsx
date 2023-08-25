import React, { useState } from "react";
import { createRoot } from "react-dom/client";
import Summary from "./components/Summary";
import Text_form from "./components/Text_form";
import Toast from "./components/Toast";

let dark_btn = document.getElementById("dark_mode");

function toast_show(toast) {
  toast.style.opacity= "1"
      setTimeout(() => {
        toast.style.opacity= "0"
      }, 2000);
}

function Input() {
  const [text, setText] = useState("");
  const [dark, setdark] = useState(true);
  const [alert, setalert] = useState("");

  dark_btn.onclick = function dark_func() {
    const toast = document.getElementById("toast");
    if(dark) {
      setdark(false)
      dark_btn.innerText= "Light Mode"
      dark_btn.classList.remove("btn-dark")
      dark_btn.classList.add("btn-light")
      setalert("Dark Mode Enabled")
      toast_show(toast)
      document.documentElement.style.setProperty("--main-bg-clr", "black");
      document.documentElement.style.setProperty("--main-bg-clr2", "rgb(49, 49, 49)");
      document.documentElement.style.setProperty("--main-bg-clr3", "rgb(27, 27, 27)");
      document.documentElement.style.setProperty("--main-bg-clr4", "black");
      document.documentElement.style.setProperty("--main-text-clr", "white");
    }
    else {
      setdark(true)
      dark_btn.innerText= "Dark Mode"
      dark_btn.classList.remove("btn-light")
      dark_btn.classList.add("btn-dark")
      setalert("Light Mode Enabled")
      toast_show(toast)
      document.documentElement.style.setProperty("--main-bg-clr", "white");
      document.documentElement.style.setProperty("--main-bg-clr2", "white");
      document.documentElement.style.setProperty("--main-bg-clr3", "rgb(236, 236, 236)");
      document.documentElement.style.setProperty("--main-bg-clr4", "#f1f1f1");
      document.documentElement.style.setProperty("--main-text-clr", "black");
    }
  };

  return (
    <>
      <form id="text-form">
        <Text_form text={text} set_text ={setText} value={dark} set_alert ={setalert} showToast = {toast_show} />
      </form>
      <Summary texts={text} />
      <Toast alert={alert}/>
    </>
  );
}

const root = createRoot(document.getElementById("main_cont"));
root.render(<Input />);