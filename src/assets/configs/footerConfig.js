import {AiFillGithub} from "react-icons/ai";
import {FaLinkedinIn} from "react-icons/fa";
import {GiArchiveResearch} from "react-icons/gi";
import React from "react";

const footerConfig = {
    icons: [
        {
            id: "footer-0",
            url: "https://github.com/saketh1305",
            className: "social-icon",
            target: "_blank",
            icon: <AiFillGithub size={50}/>
        },
        {
            id: "footer-1",
            url: "https://www.linkedin.com/in/sakethreddy1305/",
            className: "social-icon",
            target: "_blank",
            icon: <FaLinkedinIn size={50}/>
        },
        {
            id: "footer-2",
            url: "https://www.researchgate.net/profile/Saketh-Reddy-Regatte",
            className: "social-icon",
            target: "_blank",
            icon: <GiArchiveResearch size={50}/>
        }
    ]
}

export default footerConfig
