import React from 'react'
import LeftSidebar from '../../Components/LeftSidebar/LeftSidebar'
import TagsList from './TagsList'
import './Tags.css'

const Tags = () => {
    const tagsList = [{
        id: 1,
        tagName: "javascript",
        tagDesc: "For questions regarding programming in ECMAScript (JavaScript/35) and its various dialects/implementations (excluding ActionScript).Please include all relevant tags on your question;"
    },{
        id: 2,
        tagName: "python",
        tagDesc: "Python is a muti-paradigm, dynamically typed, multipurpose programming language. it is designed to be quick to learn, understand, and use, and enforces a clean and uniform syntax."
    },{
        id: 3,
        tagName: "c#",
        tagDesc: "C# (C-Sharp) is a programming language developed by Microsoft that runs on the .NET Framework. C# is used to develop web apps, desktop apps, mobile apps, games and much more."
    },{
        id: 4,
        tagName: "java",
        tagDesc: "Java is a widely used object-oriented programming language and software platform that runs on billions of devices, including notebook computers, mobile devices, gaming consoles, medical devices and many others. The rules and syntax of Java are based on the C and C++ languages."
    },{
        id: 5,
        tagName: "php",
        tagDesc: "A popular general-purpose scripting language that is especially suited to web development. Fast, flexible and pragmatic, PHP powers everything from your blog to the most popular websites in the world."
    },{
        id: 6,
        tagName: "html",
        tagDesc: "The HyperText Markup Language or HTML is the standard markup language for documents designed to be displayed in a web browser. It is frequently assisted by technologies such as Cascading Style Sheets (CSS) and scripting languages such as JavaScript."
    },{
        id: 7,
        tagName: "android",
        tagDesc: "Android is a mobile operating system based on a modified version of the Linux kernel and other open-source software, designed primarily for touchscreen mobile devices such as smartphones and tablets."
    },{
        id: 8,
        tagName: "css",
        tagDesc: "Cascading Style Sheets (CSS) is a style sheet language used for describing the presentation of a document written in a markup language such as HTML or XML (including XML dialects such as SVG, MathML or XHTML). CSS is a cornerstone technology of the World Wide Web, alongside HTML and JavaScript."
    },{
        id: 9,
        tagName: "React.js",
        tagDesc: "React (also known as React.js or ReactJS) is a free and open-source front-end JavaScript library for building user interfaces based on components. It is maintained by Meta (formerly Facebook) and a community of individual developers and companies"
    },{
        id: 10,
        tagName: "Node.js",
        tagDesc: "Node.js is a cross-platform, open-source server environment that can run on Windows, Linux, Unix, macOS, and more. Node.js is a back-end JavaScript runtime environment, runs on the V8 JavaScript Engine, and executes JavaScript code outside a web browser."
    }]
  return (
    <div className='home-container-1'>
        <LeftSidebar/>
        <div className='home-container-2'>
            <h1 className='tags-h1'>Tags</h1>
            <p className='tags-p'>A tag is a keyword or label that categorizes your question with other, similar questions.</p>
            <p className='tags-p'>Using the right tags makes it easier for others to find and answer your question.</p>
            <div className='tags-list-container'>
               {
                 tagsList.map((tag) => (
                    <TagsList tag={tag} key={tagsList.id}/>
                 ))
               } 
            </div>
        </div>
        
    </div>
  )
}

export default Tags