// import React from 'react'
import * as api from '../api'

export const askQuestion = (questionData, navigate) => async (dispatch) => {
   try {
    const { data } = await api.postQuestion(questionData)
    dispatch({type: "POST_QUESTION", payload: data})
    dispatch(fetchAllQuestions())
    navigate('/')
   } catch (error) {
       console.log(error)
   }
}

export const fetchAllQuestions = () => async (dispatch) => {
    
    try {
        
        const { data } = await api.getAllQuestions()
        dispatch({ type: 'FETCH_ALL_QUESTIONS', payload: data})
    } catch (error) {
        console.log(error)
    }
}


export const deleteQuestion = (id, navigate) => async (dispatch) => {
    try {
        const { data } = api.deleteQuestion(id)
        dispatch(fetchAllQuestions())
        navigate('/')
    } catch (error) {
        console.log(error)
    }
}

export const voteQuestion = (id, value, userId) => async (dispatch) => {
    try {
        const { data } = await api.voteQuestion(id, value, userId)
        dispatch(fetchAllQuestions())
    } catch (error) {
        console.log(error)
        
    }
}

export const postAnswer = (answerData) => async (dispatch) => {
    try {
        const { id, noOfAnswers, answerBody, userAnswered, userId } = answerData
        const { data } = await api.postAnswer( id, noOfAnswers, answerBody, userAnswered, userId )
        dispatch({ type: 'POST_ANSWER', payload: data})
        dispatch(fetchAllQuestions()) 
    } catch (error) {
        console.log(error)
    }
    
}

export const deleteAnswer = (id, answerId, noOfAnswers) => async (dispatch) => {
    try {
        const { data } = await api.deleteAnswer(id, answerId, noOfAnswers)
        dispatch(fetchAllQuestions())
    } catch (error) {
        console.log(error)
    }
}
