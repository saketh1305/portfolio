import {
    SiPython,
    SiPostgresql,
    SiMicrosoftsqlserver,
    SiDocker,
    SiMicrosoftazure,
    SiRedis,
    SiReact,
    SiJavascript,
    SiCss3,
    SiHtml5,
    SiWindowsterminal,
    SiSnowflake,
    SiApacheairflow,
    SiApachekafka,
    SiTableau,
    SiJinja
} from "react-icons/si";
import {GiArtificialIntelligence, GiPipes} from "react-icons/gi";
import {GrMysql, GrHadoop} from "react-icons/gr";
import {FaGitAlt, FaAws, FaWarehouse} from "react-icons/fa";
import {DiSpark} from "react-icons/di";
import {BsFillTerminalFill} from "react-icons/bs";
import {TbPrompt} from "react-icons/tb";
import {BiTransferAlt, BiLogoGoLang, BiLogoDjango} from "react-icons/bi";
import {AiTwotoneApi} from "react-icons/ai";

import React from "react";

const skillsConfig = {
    mainSkills: [
        {
            id: "skills-0",
            className: "skill-icon",
            icon: <SiPython size={50}/>,
            text: "Python"
        },
        {
            id: "skills-1",
            className: "skill-icon",
            icon: <GrMysql size={50}/>,
            text: "MYSQL"
        },
        {
            id: "skills-2",
            className: "skill-icon",
            icon: <DiSpark size={50}/>,
            text: "Pyspark"
        },
        {
            id: "skills-3",
            className: "skill-icon",
            icon: <BsFillTerminalFill size={50}/>,
            text: "R"
        },
        {
            id: "skills-4",
            className: "skill-icon",
            icon: <SiDocker size={50}/>,
            text: "Docker"
        },
        {
            id: "skills-5",
            className: "skill-icon",
            icon: <FaAws size={50}/>,
            text: "AWS"
        },
        {
            id: "skills-6",
            className: "skill-icon",
            icon: <FaGitAlt size={50}/>,
            text: "Git"
        },
        
    ],
    complementarySkills: [
        {
            id: "skills-7",
            className: "skill-icon",
            icon: <TbPrompt size={50}/>,
            text: "Prompt Engineering"
        },
        {
            id: "skills-8",
            className: "skill-icon",
            icon: <SiSnowflake size={50}/>,
            text: "Snowflake"
        },
        {
            id: "skills-9",
            className: "skill-icon",
            icon: <GiArtificialIntelligence size={50}/>,
            text: "Generative AI"
        },
        {
            id: "skills-10",
            className: "skill-icon",
            icon: <SiWindowsterminal size={50}/>,
            text: "Bash"
        },
        {
            id: "skills-11",
            className: "skill-icon",
            icon: <BiLogoGoLang size={50}/>,
            text: "GoLang"
        },
        {
            id: "skills-12",
            className: "skill-icon",
            icon: <BiTransferAlt size={50}/>,
            text: "gRPC"
        },
        {
            id: "skills-13",
            className: "skill-icon",
            icon: <GrHadoop size={50}/>,
            text: "HDFS"
        },
        {
            id: "skills-14",
            className: "skill-icon",
            icon: <FaWarehouse size={50}/>,
            text: "Data Warehousing"
        },
        {
            id: "skills-15",
            className: "skill-icon",
            icon: <GiPipes size={50}/>,
            text: "Data Pipelines"
        },
        {
            id: "skills-16",
            className: "skill-icon",
            icon: <SiHtml5 size={50}/>,
            text: "HTML 5"
        },
        {
            id: "skills-17",
            className: "skill-icon",
            icon: <SiReact size={50}/>,
            text: "React"
        },
        {
            id: "skills-18",
            className: "skill-icon",
            icon: <AiTwotoneApi size={50}/>,
            text: "Web Services API"
        },
        {
            id: "skills-19",
            className: "skill-icon",
            icon: <SiJinja size={50}/>,
            text: "Jinja"
        },
        {
            id: "skills-20",
            className: "skill-icon",
            icon: <BiLogoDjango size={50}/>,
            text: "Django"
        },
        {
            id: "skills-21",
            className: "skill-icon",
            icon: <SiTableau size={50}/>,
            text: "Tableau"
        }
    ]
}

export default skillsConfig
