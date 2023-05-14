import { useState } from "react"


function useTestCreation(data, defaultQuestionValue) {

    const [test, setTest] = useState(data)


    const setHeader = (header) => {
        setTest({ ...test, header: header })
    }

    const setHeaderItem = (key, value) => {
        const header = { ...test.header }
        header[key] = value
        setHeader(header)
    }
    const setQuestions = (questions) => {
        setTest({ ...test, questions: questions })
    }

    const setQuestion = (index, question) => {
        const questions = [...test.questions]
        questions[index] = question
        setQuestions(questions)
    }

    const deleteQuestion = (index) => {
        const questions = [...test.questions]
        setQuestions(questions.filter((itm, ind) => ind !== index))
    }

    const createQuestion = (index) => {
        setQuestions([...[...test.questions].splice(0, index + 1), defaultQuestionValue, ...[...test.questions].slice(index + 1)])
    }

    const copyQuestion = (index, question) => {
        setQuestions([...[...test.questions].splice(0, index), question, ...[...test.questions].slice(index)])
    }


    return [test, setTest, { setHeaderItem, setHeader }, { setQuestions, setQuestion, deleteQuestion, createQuestion, copyQuestion }]

}

export default useTestCreation
