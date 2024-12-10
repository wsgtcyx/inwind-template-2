'use client';
import { useEffect } from "react";

const AddToAnyShare = () => {
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://static.addtoany.com/menu/page.js";
    script.async = true;
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <div className="a2a_kit a2a_kit_size_32 a2a_default_style">
      <a className="a2a_dd" href="https://www.addtoany.com/share"></a>
      <a className="a2a_button_twitter"></a>
      <a className="a2a_button_facebook"></a>
      <a className="a2a_button_whatsapp"></a>
      <a className="a2a_button_telegram"></a>
      <a className="a2a_button_line"></a>
      <a className="a2a_button_wechat"></a>
      <a className="a2a_button_threads"></a>
      <a className="a2a_button_reddit"></a>
      <a className="a2a_button_pinterest"></a>
      <a className="a2a_button_copy_link"></a>
    </div>
  );
};

export default AddToAnyShare;
