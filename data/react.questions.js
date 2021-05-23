const reactQuiz = {
    name:"react",
    playingtime:"10 min",
    questions:[
        {
            question:"React is mainly used for building ___.",
            marks:2,
            options:[
                {
                    answer:"database",
                    isRight:false
                },
                {
                    answer:"connectivity",
                    isRight:false
                },
                {
                    answer:"user interface",
                    isRight:true
                },
                {
                    answer:"design platform",
                    isRight:false
                }
            ]
        },
        {
            question:"Which is the right way of accessing a function fetch() from an h1 element in JSX?",
            marks:1,
            options:[
                {
                    answer:'<h1>${fetch}</h1>',
                    isRight:false
                },
                {
                    answer:'<h1>{fetch}</h1>',
                    isRight:false
                },
                {
                    answer:'<h1>${fetch()}</h1>',
                    isRight:false
                },
                {
                    answer:'<h1>{fetch()}</h1>',
                    isRight:true
                }
            ]
        },
        {
            question:" To achieve dynamic UI updates. Which of the following needs to be updated ?",
            marks:1,
            options:[
                {
                    answer:'props',
                    isRight:false
                },
                {
                    answer:'state',
                    isRight:true
                },
                {
                    answer:'renderComponent',
                    isRight:false
                },
                {
                    answer:'render',
                    isRight:false
                }
            ]
        },
        {
            question:"Life cycle methods of a components fall under following categories?",
            marks:1,
            options:[
                {
                    answer:'mounting,updating,unmounting',
                    isRight:true
                },
                {
                    answer:'mounting,unmounting',
                    isRight:false
                },
                {
                    answer:'Mounting, Updating',
                    isRight:false
                },
                {
                    answer:'None of these',
                    isRight:false
                }
            ]
        },
        {
            question:"Who Develop React.js?",
            marks:1,
            options:[
                {
                    answer:'Google',
                    isRight:false
                },
                {
                    answer:'Facebook',
                    isRight:true
                },
                {
                    answer:'Microsoft',
                    isRight:false
                },
                {
                    answer:'Twitter',
                    isRight:false
                }
            ]
        },
        {
            question:"Everything in a react is a",
            marks:1,
            options:[
                {
                    answer:'Component',
                    isRight:true
                },
                {
                    answer:'class',
                    isRight:false
                },
                {
                    answer:'package',
                    isRight:false
                },
                {
                    answer:'module',
                    isRight:false
                }
            ]
        },
        {
            question:"Keys are given to list of elements in react,These keys should be -",
            marks:1,
            options:[
                {
                    answer:'Do not requires to be unique',
                    isRight:false
                },
                {
                    answer:'Unique in the DOM',
                    isRight:false
                },
                {
                    answer:'Unique among the siblings only',
                    isRight:true
                },
                {
                    answer:'All of the above',
                    isRight:false
                }
            ]
        },
        {
            question:"Which is used to pass the data from parent to child?",
            marks:1,
            options:[
                {
                    answer:'state',
                    isRight:false
                },
                {
                    answer:'component',
                    isRight:false
                },
                {
                    answer:'render',
                    isRight:false
                },
                {
                    answer:'props',
                    isRight:true
                }
            ]
        },
        {
            question:"How do you write an inline style which specifies the font-size:12px and color:red; in JSX?",
            marks:1,
            options:[
                {
                    answer:"style={{font-size:12,color:'red'}}",
                    isRight:false
                },
                {
                    answer:"style={{font-size:'12px',color:'red'}}",
                    isRight:true
                },
                {
                    answer:"style={{font-size:12px,color:'red'}}",
                    isRight:false
                },
                {
                    answer:"style={font-size:12,color:'red'}",
                    isRight:false
                }
            ]
        },
        {
            question:"ReactJS uses ____ to increase performance",
            marks:1,
            options:[
                {
                    answer:'origial dom',
                    isRight:false
                },
                {
                    answer:'virtual dom',
                    isRight:true
                },
                {
                    answer:'Both 1 & 2',
                    isRight:false
                },
                {
                    answer:'None of these',
                    isRight:false
                }
            ]
        }
        
    ]

}
module.exports = reactQuiz