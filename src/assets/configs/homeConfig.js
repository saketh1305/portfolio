import React from 'react'
import {BsClipboardData} from "react-icons/bs";
import {GiMaterialsScience} from "react-icons/gi";
import {PiBooksFill} from "react-icons/pi";
import {MdOutlineEngineering} from "react-icons/md";

const homeConfig = {

    greeting:
        <h1 className="heading">
            Hi! I'm <strong className="main-name"> Saketh Reddy Regatte</strong>
        </h1>,
    titles: [
        "Masters at USC",
        "Applied Data Science",
        "Software Engineer",
        "Data Science Enthusiast",
    ],
    about: {
        start: "I've been working for over four years on data science projects. " +
            "I'm excited by learning new things, contributing to the data science community," +
            " and spreading the word of data!",
        exit: "I'm fluent at Python, SQL databases, and more, " +"with a deep interest in machine learning."
    },
    workTimeline: [
        {
            id: "work-3",
            title: "Software Engineer",
            company: "Experian",
            description: "Build AutoML models and make them available to non-technical " +
                "users from a graphical interface.",
            date: "Sep 2022 - December 2022",
            icon: <GiMaterialsScience/>,
            tags: ["gRPC", "Docker", "python", "GoLang", "AWS", "Machine Learning"]
        },
        {
            id: "work-2",
            title: "Software Engineer Trainee",
            company: "Experian",
            description: "Demonstrated proficiency in testing credit reporting models by utilizing GoLang tools for regression testing. " + 
            "Actively pursued learning opportunities in GoLang to effectively support and disseminate knowledge to the team. " + 
            "Utilized Docker programming to containerize existing GoLang applications.",
            date: "Nov 2021 - Sep 2022",
            icon: <MdOutlineEngineering/>,
            tags: ["Docker", "Quantitative Analytics", "SQL"]
        },
        {
            id: "work-1",
            title: "Undergraduate Research Assistant",
            company: "VNR Vignanajyothi Institute of Engineering & Technology",
            description: "As a Research Assistant, I conducted thorough research, contributing to several notable publications. " +
            "My responsibilities included data collection, analysis, and participation in academic writing. " +
            "This role enhanced my research proficiency and critical thinking skills, preparing me for future academic and professional endeavors.",
            date: "2020-2022",
            icon: <PiBooksFill/>,
            tags: ["Virtual Reality (VR)", "Artificial Intelligence (AI)", "Deep Learning (DL)"]
        },
        {
            id: "work-0",
            title: "CS Summer Intern",
            company: "International Institute of Information Technology Hyderabad",
            description: "Developed a Python bot which takes the structured data as input and generates the article based on Jinja template.Performed web-scrapping using beautiful soup for data collection. Used sweetviz library for Exploratory Data Analysis.",
            date: "May 2021 - June 2021",
            icon: <BsClipboardData/>,
            tags: ["python", "mssql", "jinja", "Wiki Development", "Beautiful Soup"]
        }
    ]
}


export default homeConfig