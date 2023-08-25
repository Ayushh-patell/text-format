import React, { useState } from 'react'

export default function Text_form(props) {
  const [output, setoutput] = useState("");
    function handleClick_up(e) {
        e.preventDefault();
        let modified_text = props.text.toUpperCase();
        setoutput(modified_text)
      }
      function handleClick_lo(e) {
        e.preventDefault();
        let modified_text = props.text.toLowerCase();
        setoutput(modified_text)
      }
      function handleClick_cap(e) {
        e.preventDefault();
        let modified_text = props.text;
        modified_text =
          modified_text.charAt(0).toUpperCase() + modified_text.slice(1);
          setoutput(modified_text)
      }
      function handleClick_space(e) {
        e.preventDefault();
        let modified_text = props.text.split(" ").filter((element)=>{return element!==""})
        setoutput(modified_text.join(" "));
      }
      function handleClick_copy(e) {
        e.preventDefault();
        let copyText = document.getElementById("output_content");
        copyText.select();
        copyText.setSelectionRange(0, 99999); // For mobile devices
        navigator.clipboard.writeText(copyText.value);
        window.getSelection().removeAllRanges()
      }
      function handleClick_clear(e) {
        e.preventDefault();
        props.set_text("");
        setoutput("")
        document.getElementById("language-name").innerText = ""
      }

       async function translate_text(e) {
        document.getElementById("spinner_load").style.display="inline-block"
        props.set_alert("Your text is being translated...")
        props.showToast(document.getElementById("toast"))
        e.preventDefault();  
        const url = 'https://text-translator2.p.rapidapi.com/translate';
        const options = {
          method: 'POST',
          headers: {
            'content-type': 'application/x-www-form-urlencoded',
            'X-RapidAPI-Key': '663a25310cmsh520b625fafe418ap111010jsn29fd44f37160',
            'X-RapidAPI-Host': 'text-translator2.p.rapidapi.com'
          },
          body: new URLSearchParams({
            source_language: 'auto',
            target_language: e.target.getAttribute("value"),
            text: props.text
          })
        };

        try {
          const response = await fetch(url, options);
          const result = await response.json();
          setoutput(result.data.translatedText);

        } catch (error) {
          console.error(error);
        }
        document.getElementById("spinner_load").style.display="none"
        document.getElementById("language-name").innerText = " - "+e.target.innerText
      }
  return (
    <>
        <div className="mb-3 row">
         <div className="col-md">
         <label htmlFor="text_content" className="form-label">
            Write/Copy your text here
          </label>
          <textarea
          title='Text area to add your text'
            value={props.text}
            onInput={(e) => {
              props.set_text(e.target.value);
            }}
            placeholder="text here..."
            className={`form-control clr-mode`}
            id="text_content"
            rows="8"
          ></textarea>
         </div>

          <div className="col-md">
          <label htmlFor="output_content" className="form-label">
            Output
          </label> 
          <div id='spinner_load' className="spinner-border text-primary ms-2 spinner-border-sm" role="status">
            <span className="visually-hidden">Loading...</span>
          </div>
          <span id='language-name'></span>

          <textarea readOnly
          title='Output for your text'
            value={output}
            placeholder="Your output will be here..."
            className={`form-control clr-mode`}
            id="output_content"
            rows="8"
          ></textarea>
          </div>
          <div className="row mt-3">
          <div className="btn-group dropend">
            <button type="button" className="btn btn-secondary dropdown-toggle translate-select" title='Translate your text' data-bs-toggle="dropdown" aria-expanded="false">
              Translate
            </button>
            <ul className="dropdown-menu">
              <li><a className="dropdown-item" value="af" onClick={translate_text}>Afrikaans</a></li>
              <li><a className="dropdown-item" value="sq" onClick={translate_text}>Albanian</a></li>
              <li><a className="dropdown-item" value="am" onClick={translate_text}>Amharic</a></li>
              <li><a className="dropdown-item" value="ar" onClick={translate_text}>Arabic</a></li>
              <li><a className="dropdown-item" value="hy" onClick={translate_text}>Armenian</a></li>
              <li><a className="dropdown-item" value="az" onClick={translate_text}>Azerbaijani</a></li>
              <li><a className="dropdown-item" value="eu" onClick={translate_text}>Basque</a></li>
              <li><a className="dropdown-item" value="be" onClick={translate_text}>Belarusian</a></li>
              <li><a className="dropdown-item" value="bn" onClick={translate_text}>Bengali</a></li>
              <li><a className="dropdown-item" value="bs" onClick={translate_text}>Bosnian</a></li>
              <li><a className="dropdown-item" value="bg" onClick={translate_text}>Bulgarian</a></li>
              <li><a className="dropdown-item" value="ca" onClick={translate_text}>Catalan</a></li>
              <li><a className="dropdown-item" value="ceb" onClick={translate_text}>Cebuano </a></li>
              <li><a className="dropdown-item" value="ny" onClick={translate_text}>Chichewa</a></li>
              <li><a className="dropdown-item" value="zh-CN" onClick={translate_text}>Chinese (Simplified)</a></li>
              <li><a className="dropdown-item" value="zh-TW" onClick={translate_text}>Chinese (Traditional)</a></li>
              <li><a className="dropdown-item" value="co" onClick={translate_text}>Corsican</a></li>
              <li><a className="dropdown-item" value="hr" onClick={translate_text}>Croatian</a></li>
              <li><a className="dropdown-item" value="cs" onClick={translate_text}>Czech</a></li>
              <li><a className="dropdown-item" value="da" onClick={translate_text}>Danish</a></li>
              <li><a className="dropdown-item" value="nl" onClick={translate_text}>Dutch</a></li>
              <li><a className="dropdown-item" value="en" onClick={translate_text}>English</a></li>
              <li><a className="dropdown-item" value="eo" onClick={translate_text}>Esperanto</a></li>
              <li><a className="dropdown-item" value="et" onClick={translate_text}>Estonian</a></li>
              <li><a className="dropdown-item" value="tl" onClick={translate_text}>Filipino</a></li>
              <li><a className="dropdown-item" value="fi" onClick={translate_text}>Finnish</a></li>
              <li><a className="dropdown-item" value="fr" onClick={translate_text}>French</a></li>
              <li><a className="dropdown-item" value="fy" onClick={translate_text}>Frisian</a></li>
              <li><a className="dropdown-item" value="gl" onClick={translate_text}>Galician</a></li>
              <li><a className="dropdown-item" value="ka" onClick={translate_text}>Georgian</a></li>
              <li><a className="dropdown-item" value="de" onClick={translate_text}>German</a></li>
              <li><a className="dropdown-item" value="el" onClick={translate_text}>Greek</a></li>
              <li><a className="dropdown-item" value="gu" onClick={translate_text}>Gujarati</a></li>
              <li><a className="dropdown-item" value="ht" onClick={translate_text}>Haitian Creole</a></li>
              <li><a className="dropdown-item" value="ha" onClick={translate_text}>Hausa</a></li>
              <li><a className="dropdown-item" value="haw" onClick={translate_text}>Hawaiian </a></li>
              <li><a className="dropdown-item" value="iw" onClick={translate_text}>Hebrew</a></li>
              <li><a className="dropdown-item" value="hi" onClick={translate_text}>Hindi</a></li>
              <li><a className="dropdown-item" value="hmn" onClick={translate_text}>Hmong </a></li>
              <li><a className="dropdown-item" value="hu" onClick={translate_text}>Hungarian</a></li>
              <li><a className="dropdown-item" value="is" onClick={translate_text}>Icelandic</a></li>
              <li><a className="dropdown-item" value="ig" onClick={translate_text}>Igbo</a></li>
              <li><a className="dropdown-item" value="id" onClick={translate_text}>Indonesian</a></li>
              <li><a className="dropdown-item" value="ga" onClick={translate_text}>Irish</a></li>
              <li><a className="dropdown-item" value="it" onClick={translate_text}>Italian</a></li>
              <li><a className="dropdown-item" value="ja" onClick={translate_text}>Japanese</a></li>
              <li><a className="dropdown-item" value="jw" onClick={translate_text}>Javanese</a></li>
              <li><a className="dropdown-item" value="kn" onClick={translate_text}>Kannada</a></li>
              <li><a className="dropdown-item" value="kk" onClick={translate_text}>Kazakh</a></li>
              <li><a className="dropdown-item" value="km" onClick={translate_text}>Khmer</a></li>
              <li><a className="dropdown-item" value="rw" onClick={translate_text}>Kinyarwanda</a></li>
              <li><a className="dropdown-item" value="ko" onClick={translate_text}>Korean</a></li>
              <li><a className="dropdown-item" value="ku" onClick={translate_text}>Kurdish (Kurmanji)</a></li>
              <li><a className="dropdown-item" value="ky" onClick={translate_text}>Kyrgyz</a></li>
              <li><a className="dropdown-item" value="lo" onClick={translate_text}>Lao</a></li>
              <li><a className="dropdown-item" value="la" onClick={translate_text}>Latin</a></li>
              <li><a className="dropdown-item" value="lv" onClick={translate_text}>Latvian</a></li>
              <li><a className="dropdown-item" value="lt" onClick={translate_text}>Lithuanian</a></li>
              <li><a className="dropdown-item" value="lb" onClick={translate_text}>Luxembourgish</a></li>
              <li><a className="dropdown-item" value="mk" onClick={translate_text}>Macedonian</a></li>
              <li><a className="dropdown-item" value="mg" onClick={translate_text}>Malagasy</a></li>
              <li><a className="dropdown-item" value="ms" onClick={translate_text}>Malay</a></li>
              <li><a className="dropdown-item" value="ml" onClick={translate_text}>Malayalam</a></li>
              <li><a className="dropdown-item" value="mt" onClick={translate_text}>Maltese</a></li>
              <li><a className="dropdown-item" value="mi" onClick={translate_text}>Maori</a></li>
              <li><a className="dropdown-item" value="mr" onClick={translate_text}>Marathi</a></li>
              <li><a className="dropdown-item" value="mn" onClick={translate_text}>Mongolian</a></li>
              <li><a className="dropdown-item" value="my" onClick={translate_text}>Myanmar (Burmese)</a></li>
              <li><a className="dropdown-item" value="ne" onClick={translate_text}>Nepali</a></li>
              <li><a className="dropdown-item" value="no" onClick={translate_text}>Norwegian</a></li>
              <li><a className="dropdown-item" value="or" onClick={translate_text}>Odia (Oriya)</a></li>
              <li><a className="dropdown-item" value="ps" onClick={translate_text}>Pashto</a></li>
              <li><a className="dropdown-item" value="fa" onClick={translate_text}>Persian</a></li>
              <li><a className="dropdown-item" value="pl" onClick={translate_text}>Polish</a></li>
              <li><a className="dropdown-item" value="pt" onClick={translate_text}>Portuguese</a></li>
              <li><a className="dropdown-item" value="pa" onClick={translate_text}>Punjabi</a></li>
              <li><a className="dropdown-item" value="ro" onClick={translate_text}>Romanian</a></li>
              <li><a className="dropdown-item" value="ru" onClick={translate_text}>Russian</a></li>
              <li><a className="dropdown-item" value="sm" onClick={translate_text}>Samoan</a></li>
              <li><a className="dropdown-item" value="gd" onClick={translate_text}>Scots Gaelic</a></li>
              <li><a className="dropdown-item" value="sr" onClick={translate_text}>Serbian</a></li>
              <li><a className="dropdown-item" value="st" onClick={translate_text}>Sesotho</a></li>
              <li><a className="dropdown-item" value="sn" onClick={translate_text}>Shona</a></li>
              <li><a className="dropdown-item" value="sd" onClick={translate_text}>Sindhi</a></li>
              <li><a className="dropdown-item" value="si" onClick={translate_text}>Sinhala</a></li>
              <li><a className="dropdown-item" value="sk" onClick={translate_text}>Slovak</a></li>
              <li><a className="dropdown-item" value="sl" onClick={translate_text}>Slovenian</a></li>
              <li><a className="dropdown-item" value="so" onClick={translate_text}>Somali</a></li>
              <li><a className="dropdown-item" value="es" onClick={translate_text}>Spanish</a></li>
              <li><a className="dropdown-item" value="su" onClick={translate_text}>Sundanese</a></li>
              <li><a className="dropdown-item" value="sw" onClick={translate_text}>Swahili</a></li>
              <li><a className="dropdown-item" value="sv" onClick={translate_text}>Swedish</a></li>
              <li><a className="dropdown-item" value="tg" onClick={translate_text}>Tajik</a></li>
              <li><a className="dropdown-item" value="ta" onClick={translate_text}>Tamil</a></li>
              <li><a className="dropdown-item" value="tt" onClick={translate_text}>Tatar</a></li>
              <li><a className="dropdown-item" value="te" onClick={translate_text}>Telugu</a></li>
              <li><a className="dropdown-item" value="th" onClick={translate_text}>Thai</a></li>
              <li><a className="dropdown-item" value="tr" onClick={translate_text}>Turkish</a></li>
              <li><a className="dropdown-item" value="tk" onClick={translate_text}>Turkmen</a></li>
              <li><a className="dropdown-item" value="uk" onClick={translate_text}>Ukrainian</a></li>
              <li><a className="dropdown-item" value="ur" onClick={translate_text}>Urdu</a></li>
              <li><a className="dropdown-item" value="ug" onClick={translate_text}>Uyghur</a></li>
              <li><a className="dropdown-item" value="uz" onClick={translate_text}>Uzbek</a></li>
              <li><a className="dropdown-item" value="vi" onClick={translate_text}>Vietnamese</a></li>
              <li><a className="dropdown-item" value="cy" onClick={translate_text}>Welsh</a></li>
              <li><a className="dropdown-item" value="xh" onClick={translate_text}>Xhosa</a></li>
              <li><a className="dropdown-item" value="yi" onClick={translate_text}>Yiddish</a></li>
              <li><a className="dropdown-item" value="yo" onClick={translate_text}>Yoruba</a></li>
              <li><a className="dropdown-item" value="zu" onClick={translate_text}>Zulu</a></li>
              <li><a className="dropdown-item" value="he" onClick={translate_text}>Hebrew</a></li>
              <li><a className="dropdown-item" value="zh" onClick={translate_text}>Chinese (Simplified)</a></li>
            </ul>
          </div> 
          


          </div>

          <div className="container my-2  row justify-content-between">
            <button className="format-btn btn btn-primary m-1" title='Convert text to Uppercase' onClick={handleClick_up}>
              UpperCase
            </button>
            <button className="format-btn btn btn-primary m-1" title='Convert text to Lowercase' onClick={handleClick_lo}>
              LowerCase
            </button>
            <button className="format-btn btn btn-primary m-1" title='Capitalise the first letter' onClick={handleClick_cap}>
              Capitalise
            </button>
            <button className="format-btn btn btn-primary m-1" title='Remove extra spaces' onClick={handleClick_space}>
              Space Format
            </button>
            <button className="format-btn btn btn-primary m-1" title='Copy your formatted text' onClick={handleClick_copy}>
              Copy Text
            </button>
            <button className="format-btn btn btn-danger m-1" title='Clear the text area' onClick={handleClick_clear}>
              Clear All
            </button>
          </div>
        </div>
    </>
  )
}
