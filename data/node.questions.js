const nodeQuiz = {
    name:"Node",
    playTime:"10 min",
    questions:[
        {
            question:"Which of the following statement is valid to use a Node module http in a Node based application?",
            marks:2,
            options:[
                {
                    answer:'import http',
                    isRight:false
                },
                {
                    answer:'package http' ,
                    isRight:false
                },
                {
                    answer:'const http = require("http")',
                    isRight:true
                },
                {
                    answer:'const http = require(http)',
                    isRight:false
                }
            ]
        },
        {
            question:" Which of the following code print the name of operating system?",
            marks:1,
            options:[
                {
                    answer:'console.log(os.type())',
                    isRight:true
                },
                {
                    answer:'console.log(os.getType())',
                    isRight:false
                },
                {
                    answer:'console.log(os.type)',
                    isRight:false
                },
                {
                    answer:'None of these',
                    isRight:false
                }
            ]
        },
        {
            question:"What is the correct JavaScript syntax to change the content of the HTML element below?<p id='demo'>This is a demonstration.</p>",
            marks:1,
            options:[
                {
                    answer:'document.getElement("p").innerHTML="Hello World"',
                    isRight:false
                },
                {
                    answer:'document.getElementByName("p").innerHTML="Hello World"',
                    isRight:false
                },
                {
                    answer:'#demo.innerHTML="Hello World"',
                    isRight:false
                },
                {
                    answer:'document.getElementById("demo").innerHTML="Hello World"',
                    isRight:true
                }
            ]
        },
        {
            question:"Where is the correct place to insert a JavaScript?",
            marks:1,
            options:[
                {
                    answer:'The <head> section',
                    isRight:false
                },
                {
                    answer:'The <body> section',
                    isRight:false
                },
                {
                    answer:'Both the <head> and <body> section',
                    isRight:true
                },
                {
                    answer:'Inside <title></title> tag',
                    isRight:false
                }
            ]
        },
        {
            question:"How do you create a function in JavaScript?",
            marks:1,
            options:[
                {
                    answer:'function myFunction()',
                    isRight:true
                },
                {
                    answer:'function = myFunction()',
                    isRight:false
                },
                {
                    answer:'function:myFunction()',
                    isRight:false
                },
                {
                    answer:'function myFunction=()',
                    isRight:false
                }
            ]
        },
        {
            question:'How do you call a function named "myFunction"?',
            marks:1,
            options:[
                {
                    answer:'call function myFunction()',
                    isRight:false
                },
                {
                    answer:'call myFunction()',
                    isRight:false
                },
                {
                    answer:'myFunction()',
                    isRight:true
                },
                {
                    answer:'call= myFunction=()',
                    isRight:false
                }
            ]
        },
        {
            question:'How to write an IF statement in JavaScript?',
            marks:1,
            options:[
                {
                    answer:'if i = 5 then',
                    isRight:false
                },
                {
                    answer:'if(i==5)',
                    isRight:true
                },
                {
                    answer:'if i == 5 then',
                    isRight:false
                },
                {
                    answer:'if i = 5',
                    isRight:false
                }
            ]
        },
        {
            question:"Which one of the following is correct?",
            marks:1,
            options:[
                {
                    answer:'i += 1;',
                    isRight:true
                },
                {
                    answer:' i =+ 1;',
                    isRight:false
                },
                {
                    answer:'i = i++1;',
                    isRight:false
                },
                {
                    answer:'+i+;',
                    isRight:false
                }
            ]
        },
        {
            question:'On what engine was Node.js built?',
            marks:1,
            options:[
                {
                    answer:'V8',
                    isRight:true
                },
                {
                    answer:'V6',
                    isRight:false
                },
                {
                    answer:'V12',
                    isRight:false
                },
                {
                    answer:'None of these',
                    isRight:false
                }
            ]
        },
        {
            question:'How does a FOR loop start?',
            marks:1,
            options:[
                {
                    answer:'for(i=0;i<=5)',
                    isRight:false
                },
                {
                    answer:'for i=1 to 5 ',
                    isRight:false
                },
                {
                    answer:'for(i<=5;i++)',
                    isRight:false
                },
                {
                    answer:'for(i=0;i<=5;i++)',
                    isRight:true
                }
            ]
        }
    ]
}
module.exports=nodeQuiz;