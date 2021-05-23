const htmlQuiz = {
    name:"HTML",
    playTime:"10 min",
    questions:[
        {
            question:"What does HTML stand for?",
            marks:2,
            options:[
                {
                    answer:"Home Tool Markup Language",
                    isRight:false
                },
                {
                    answer:"Hyper Text Markup Language",
                    isRight:true
                },
                {
                    answer:"Hyperlinks And Text Markup Language",
                    isRight:false
                },
                {
                    answer:"None of these",
                    isRight:false
                }
            ]
        },
        {
            question:"Choose the correct HTML element for the largest heading:",
            marks:1,
            options:[
                {
                    answer:'<h1>',
                    isRight:true
                },
                {
                    answer:'<heading>',
                    isRight:false
                },
                {
                    answer:'<h6>',
                    isRight:false
                },
                {
                    answer:'<head>',
                    isRight:false
                }
            ]
        },
        {
            question:"What is the correct HTML element for inserting a line break?",
            marks:1,
            options:[
                {
                    answer:'<break>',
                    isRight:false
                },
                {
                    answer:'<lb>',
                    isRight:false
                },
                {
                    answer:'<b>',
                    isRight:false
                },
                {
                    answer:'<br>',
                    isRight:true
                }
            ]
        },
        {
            question:"Choose the correct HTML element to define emphasized text",
            marks:1,
            options:[
                {
                    answer:'<i>',
                    isRight:false
                },
                {
                    answer:'<em>',
                    isRight:true
                },
                {
                    answer:'<italic>',
                    isRight:false
                },
                {
                    answer:'<strong>',
                    isRight:false
                }
            ]
        },
        {
            question:"Which character is used to indicate an end tag?",
            marks:1,
            options:[
                {
                    answer:'/',
                    isRight:true
                },
                {
                    answer:'*',
                    isRight:false
                },
                {
                    answer:'>',
                    isRight:false
                },
                {
                    answer:'<',
                    isRight:false
                }
            ]
        },
        {
            question:'How can you make a numbered list?',
            marks:1,
            options:[
                {
                    answer:'<dl>',
                    isRight:false
                },
                {
                    answer:'<ul>',
                    isRight:false
                },
                {
                    answer:'<ol>',
                    isRight:true
                },
                {
                    answer:'<list>',
                    isRight:false
                }
            ]
        },
        {
            question:'What is the correct HTML for making a checkbox?',
            marks:1,
            options:[
                {
                    answer:'<check>',
                    isRight:false
                },
                {
                    answer:'input type="check"',
                    isRight:false
                },
                {
                    answer:'<checkbox>',
                    isRight:false
                },
                {
                    answer:'<input type="checkbox">',
                    isRight:true
                }
            ]
        },
        {
            question:'Which HTML attribute specifies an alternate text for an image, if the image cannot be displayed?',
            marks:1,
            options:[
                {
                    answer:'alt',
                    isRight:true
                },
                {
                    answer:'title',
                    isRight:false
                },
                {
                    answer:'longdesc',
                    isRight:false
                },
                {
                    answer:'src',
                    isRight:false
                }
            ]
        },
        {
            question:'In HTML, onblur and onfocus are:',
            marks:1,
            options:[
                {
                    answer:'HTML elements',
                    isRight:false
                },
                {
                    answer:'event attributes',
                    isRight:true
                },
                {
                    answer:'style attributes',
                    isRight:false
                },
                {
                    answer:'none',
                    isRight:false
                }
            ]
        },
        {
            question:'The HTML <canvas> element is used to:',
            marks:1,
            options:[
                {
                    answer:'manipulate data in SQL',
                    isRight:false
                },
                {
                    answer:'create  draggable elements',
                    isRight:false
                },
                {
                    answer:'display database records',
                    isRight:false
                },
                {
                    answer:'draw graphics',
                    isRight:true
                }
            ]
        }
    ]
}
module.exports=htmlQuiz;