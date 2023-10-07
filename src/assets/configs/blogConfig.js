import React from 'react'
import {AiFillGithub} from "react-icons/ai";
import {SiMedium, SiIeee} from "react-icons/si";
import {BsFillJournalBookmarkFill} from "react-icons/bs";
import fastapiSklearn from "../images/fastapi_sklearn.png";
import phobia from "../images/phobia.png";
import medismart from "../images/medismart.png";
import std from "../images/std.png";
import r_std from "../images/r_std.jpg";
import baby_cry from "../images/baby_cry.png";
import cbot from "../images/cbot.png";


const blogConfig = [
    {
        id: "blog-8",
        title: "Towards An Interactive Application For Detection And Treatment Of Phobias Using Machine Learning",
        links: [
            {
                name: "article",
                url: "https://ieeexplore.ieee.org/document/10093580",
                icon: <BsFillJournalBookmarkFill/>
            }
        ],
        image: phobia,
        description: "2022 International Conference on Recent Trends in Microelectronics, Automation, Computing and Communications Systems (ICMACC) | Apr 17, 2023",
        target: "_blank"
    },
    {
        id: "blog-7",
        title: "Medismart- An NLP driven Intelligent Medical Assisstant",
        links: [
            {
                name: "article",
                url: "https://sciencescholar.us/journal/index.php/ijhs/article/view/8051",
                icon: <BsFillJournalBookmarkFill/>
            }
        ],
        image: medismart,
        description: "International Journal of Health Sciences | May 28, 2022",
        target: "_blank"
    },
    {
        id: "blog-6",
        title: "An Integrated Approach for Suicidal Tendency Detection",
        links: [
            {
                name: "article",
                url: "https://ieeexplore.ieee.org/document/10074359",
                icon: <BsFillJournalBookmarkFill/>
            }
        ],
        image: std,
        description: "2022 4th International Conference on Advances in Computing, Communication Control and Networking (ICAC3N) | Mar 29, 2023",
        target: "_blank"
    },
    {
        id: "blog-2",
        title: "A Novel Approach To Predict The Reason For Baby Cry Using Machine Learning",
        links: [
            {
                name: "article",
                url: "https://www.academia.edu/80295141/_IJCST_V10I3P20_Sahithi_Vesangi_Saketh_Reddy_Regatte_Baby_V_Chalumuru_Suresh",
                icon: <BsFillJournalBookmarkFill/>
            }
        ],
        image: baby_cry,
        description: "International Journal of Computer Science Trends and Technology | May 1, 2022",
        target: "_blank"
    },
    {
        id: "blog-0",
        title: "An Amazon Lex based Interactive Virtual Assistant for C Progrmming",
        links: [
            {
                name: "article",
                url: "https://www.ijert.org/research/an-amazon-lex-based-interactive-virtual-assistant-for-c-programming-IJERTV11IS050172.pdf",
                icon: <BsFillJournalBookmarkFill/>
            }
        ],
        image: cbot,
        description: "International Journal of Engineering Research & Technology (IJERT) | May 2022",
        target: "_blank"
    },
    {
        id: "blog-0",
        title: "Various Approaches For Suicidal Tendency Detection: A Literature Review",
        links: [
            {
                name: "article",
                url: "https://ijrti.org/papers/IJRTI2205048.pdf",
                icon: <BsFillJournalBookmarkFill/>
            }
        ],
        image: r_std,
        description: "International Journal of Research Trends and Innovation | May 15, 2022",
        target: "_blank"
    }
]

export default blogConfig