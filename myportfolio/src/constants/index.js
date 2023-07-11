import aws from "../images/tech/aws.png"
import C from "../images/tech/C.png"
import Csharp from "../images/tech/CSharp.png"
import CPP from "../images/tech/CPP.png"
import CSS from "../images/tech/CSS.png"
import Figma from "../images/tech/figma.png"
import firebase from "../images/tech/firebase.png"
import flutter from "../images/tech/flutter.png"
import git from "../images/tech/git.png"
import HTML from "../images/tech/HTML.png"
import JAVA from "../images/tech/JAVA.png"
import JS from "../images/tech/JS.png"
import MySQL from "../images/tech/MySQL.png"
import python from "../images/tech/python.png"
import React from "../images/tech/React.png"
import solidity from "../images/tech/solidity.png"
import tf from "../images/tech/tf.png"
import threejs from "../images/tech/threejs.png"
import ue from "../images/tech/ue.png"
import unity from "../images/tech/unity.png"

// const technologies = [{}];
const technologies = [
    {
        name: "C/C++",
        icon1: C,
        icon2: CPP,
    },
    {
        name: "HTML/CSS",
        icon1: HTML, 
        icon2: CSS,
    },
    {
        name: "Flutter/Firebase",
        icon1: flutter, 
        icon2: firebase
    },
//     {
//         name: "Flutter",
//         icon: flutter
//     },
//     {
//         name: "HTML",
//         icon: HTML
//     },

    {
        name: "JavaScript/Solidity",
        icon1: JS, 
        icon2 :solidity
    },
    {
        name: "Python/TensorFlow",
        icon1: python,
        icon2: tf
    },
    {
        name: "React/Three.js",
        icon1: React, 
        icon2: threejs
    },
//     {
//         name: "Solidity",
//         icon: solidity
//     },
//     {
//         name: "TensorFlow",
//         icon: tf
//     },
//     {
//         name: "Three.js",
//         icon: threejs
//     },
    {
        name: "Unreal Engine 5/Unity3D",
        icon1: ue, 
        icon2: unity
    },
//     {
//         name: "Unity3D",
//         icon: unity
//     },
        {
            name: "AWS/Git",
            icon1: aws,
            icon2: git
        },
//     {
//         name: "C",
//         icon: C
//     },
//     {
//         name: "C#",
//         icon: Csharp
//     },
];

const languages = [
    {
        name: "C++",
        icon: CPP
    },
    {
        name: "C",
        icon: C
    },
    {
        name: "C#",
        icon: Csharp
    },
    {
        name: "Solidity",
        icon: solidity
    },
    {
        name: "JavaScript",
        icon: JS
    },
];

const gameDev = [
    {
        name: "Unreal Engine 5",
        icon: ue
    },
    {
        name: "Unity3D",
        icon: unity
    },
]

const webDev = [
    {
        name: "HTML",
        icon: HTML
    },

    {
        name: "JavaScript",
        icon: JS
    },
    {
        name: "CSS",
        icon: CSS
    },
    {
        name: "React",
        icon: React
    },
    {
        name: "Three.js",
        icon: threejs
    },
]

export {technologies, languages, gameDev, webDev};