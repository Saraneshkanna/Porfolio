import Work1 from "../images/Me(1).jpg";

export const projectsData = [
    {
        id:1,
        image: Work1,
        title:"Video Chat with Sign Language Detection",
        category: ["Web", "Machine Learning"],
        link: "https://github.com/Saraneshkanna/SignLangWebChat",
        desc: "An integrated video chat that uses an ML model to translate sign language detected in the outgoing camera feed and broadcasts it to the other user.",
        stack: "Python, TensorFlow, ReactJS",
    },
    {
        id:2,
        image: Work1,
        title:"Tyre Pressure Monitor using Blockchain",
        category: ["Blockchain", "Web"],
        link: "https://github.com/Saraneshkanna/Tyre-Pressure-Manager",
        desc:"A simple simulation of a vehicle tyre pressure system that makes use of Blockchain technology to store and retrieve pressure.",
        stack: "Solidity, Ganache, ReactJS",
    },
    {
        id:3,
        image: Work1,
        title:"VClean App",
        category: ["Apps"],
        link: "https://github.com/Saraneshkanna/VClean",
        desc: "An app that enables students to request their hostel room to be cleaned with no hassle!",
        stack: "Flutter, Dart, Firebase",
    },
    {
        id:4,
        image: Work1,
        title:"Tamil <-> Braille Converter",
        category: ["Web", "Machine Learning"],
        link: "https://github.com/Saraneshkanna/Tamil-Braille-Converter",
        desc: "A website for converting Tamil Braille into Tamil Text and vice versa, along with features like Optical Character Recognition and Text-To-Speech! ",
        stack: "Python",
    },
    {
        id:5,
        image: Work1,
        title:"Martian Showdown",
        category: ["Games"],
        link: "https://youtu.be/zxeK_niq18A",
        desc: "A top-down shooter game with hordes of enemy AI that the player must survive against.",
        stack: "Unreal Engine 5",
    },
];

export const projectsNav = [ //Put all the categories from up above here
    {
        name:'All'
    },
    {
        name:"Web"
    },
    {
        name:"Blockchain"
    },
    {
        name:"Apps"
    },
    {
        name:"Machine Learning"
    },
    {
        name:"Games"
    },
];