import { createContext, useState } from "react";
import {v4 as uuidv4} from 'uuid'



const FeedbackContext = createContext();

export const FeedbackProvider = ({ children }) => {
    const [feedback, setFeedback] = useState([
        {
            id: 1,
            text: "This is a great product",
            rating: 5,
        },
        {
            id: 2,
            text: "This is a great product",
            rating: 8,
        },
        {
            id: 3,
            text: "This is a great product",
            rating: 10,
        }
    ]);

    const [feedbackEdit, setFeedbackEdit] = useState({
        item:{},
        edit: false,
    });

    //add feedback
    const addFeedback = (newFeedback) => {
        newFeedback.id = uuidv4()
        setFeedback([newFeedback, ...feedback])
    }

    //delete feedback
    const deleteFeedback = (id) => {
        if (window.confirm('Are you sure you want to delete this feedback?')) {
        setFeedback(feedback.filter(item => item.id !== id))
        }
    }

    //update feedback
    const updateFeedback = (id, updatedFeedback) => {
        setFeedback(feedback.map(item => (item.id === id ? {...item, ...updatedFeedback} : item)))
    }

    //set item to be updated
    const editFeedback = (item) => {
        setFeedbackEdit({
            item: item,
            edit: true,
        })
    }


    return (
    <FeedbackContext.Provider 
    value={{feedback, deleteFeedback, addFeedback, editFeedback, feedbackEdit, updateFeedback}}>
    {children}
    
    
    </FeedbackContext.Provider>);

    
}

export default FeedbackContext;