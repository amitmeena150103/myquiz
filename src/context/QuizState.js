// import QuizContext from "./quizContext";
// import { useEffect, useState } from "react";
// import axios from "axios";


// const QuizState = (props) => {

//     const [questions, setQuestions] = useState([]);
//     const [score, setScore] = useState({ 'rightAnswers': 0, 'wrongAnswers': 0 });
//     const [next, setNext] = useState(0);
//     // const demoURL = 'https://opentdb.com/api.php?amount=4&category=&difficulty=&type=boolean'
//     const [url, setUrl] = useState('');
//     const [loading, setLoading] = useState(false);
//     const len = questions.length;
//     const [answerList, setAnswerList] = useState([])
//     const [user,setuser] = useState();

//     const fetchQuestions = async (api) => {
//         const response = await fetch(api);
//         const data = await response.json();
//         let results = data.results;
//         setQuestions(results);
//         setLoading(false);
//     };

//     useEffect(() => {
//         if(!user){
//             axios.get('/profile').then(({data})=>{
//                setuser(data)
//             }) 
//         }
//         fetchQuestions(url);
//     }, [url]);



//     return (
//         <QuizContext.Provider value={{ answerList, setAnswerList, len, questions, setQuestions, url, setUrl, fetchQuestions, loading, setLoading, score, setScore, next, setNext,user,setuser }}>
//             {props.children}
//         </QuizContext.Provider>
//     )
// }

// export default QuizState
import QuizContext from "./quizContext";
import { useEffect, useState } from "react";
import axios from "axios";


const QuizState = (props) => {

    const [questions, setQuestions] = useState([]);
    const [score, setScore] = useState({ 'rightAnswers': 0, 'wrongAnswers': 0 });
    const [next, setNext] = useState(0);
    // const demoURL = 'https://opentdb.com/api.php?amount=4&category=&difficulty=&type=boolean'
    const [url, setUrl] = useState('');
    const [loading, setLoading] = useState(false);
    const len = questions.length;
    const [answerList, setAnswerList] = useState([])
    const [user,setuser] = useState();
    const [category,setcategory] = useState();
    const [difficulty,setdifficulty] = useState();
    const [type,settype] = useState();

    const fetchQuestions = async (api) => {
        const response = await fetch(api);
        const data = await response.json();
        let results = data.results;
        setQuestions(results);
        setLoading(false);
    };

    useEffect(() => {
        if(!user){
            axios.get('/profile').then(({data})=>{
               setuser(data)
            }) 
        }
        fetchQuestions(url);
    }, [url]);



    return (
        <QuizContext.Provider value={{ answerList, setAnswerList, len, questions, setQuestions,
         url, setUrl, fetchQuestions, loading, setLoading, score, setScore, next, setNext,user,setuser,
         category,setcategory,difficulty,setdifficulty,type,settype }}>
            {props.children}
        </QuizContext.Provider>
    )
}

export default QuizState
