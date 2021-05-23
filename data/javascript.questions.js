const javascriptQuiz = {
    name:"javascript",
    playTime:"10 min",
    questions:[
        {
            question:"Inside which HTML element do we put the JavaScript?",
            marks:2,
            options:[
                {
                    answer:"<javascript>",
                    isRight:false
                },
                {
                    answer:"<script>",
                    isRight:true
                },
                {
                    answer:"<scripting>",
                    isRight:false
                },
                {
                    answer:"<js>",
                    isRight:false
                }
            ]
        },
        {
            question:"How do you write 'Hello World' in an alert box?",
            marks:1,
            options:[
                {
                    answer:'msg("hello world")',
                    isRight:false
                },
                {
                    answer:'msgBox("hello world")',
                    isRight:false
                },
                {
                    answer:'alertBox("hello world")',
                    isRight:false
                },
                {
                    answer:'alert("hello world")',
                    isRight:true
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
            question:'How to write an IF statement for executing some code if "i" is NOT equal to 5?',
            marks:1,
            options:[
                {
                    answer:'if(i!=5)',
                    isRight:true
                },
                {
                    answer:'if i <> 5',
                    isRight:false
                },
                {
                    answer:'if (i <> 5)',
                    isRight:false
                },
                {
                    answer:'if i =!5 then',
                    isRight:false
                }
            ]
        },
        {
            question:'How does a WHILE loop start?',
            marks:1,
            options:[
                {
                    answer:'while (i <= 10)',
                    isRight:true
                },
                {
                    answer:'while (i <= 10;i++)',
                    isRight:false
                },
                {
                    answer:'while i=1 to 10',
                    isRight:false
                },
                {
                    answer:'while i=1 to 10 then',
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
module.exports=javascriptQuiz;