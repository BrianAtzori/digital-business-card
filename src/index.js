import "./styles/index.css"
import React from "react"
import ReactDOM from "react-dom"

import HeaderImage from "./components/header-image"
import HeaderTitles from "./components/header-titles"
import ContactButtons from "./components/contact-buttons"

function DigitalBusinessCard(){
    return(
        <div className="digital-business-card">
            <HeaderImage />
            <HeaderTitles />
            <ContactButtons />
        </div>
    )
}

ReactDOM.render(<DigitalBusinessCard />, document.getElementById("root"));