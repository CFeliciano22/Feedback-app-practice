import { createContext, useState } from "react";
import {v4 as uuidv4} from 'uuid'


const FeedbackContext = createContext();

export const FeedbackProvider = ({ children }) => {
    const [feedback, setFeedback] = useState([
        {
            id: 1,
            text: "This is a feedback",
            rating: 5,
        },
    ]);

    const addFeedback = (newFeedback) => {
        newFeedback.id = uuidv4()
        setFeedback([newFeedback, ...feedback])
    }

    const deleteFeedback = (id) => {
        if (window.confirm('Are you sure you want to delete this feedback?')) {
        setFeedback(feedback.filter(item => item.id !== id))
        }
    }


    return (
    <FeedbackContext.Provider 
    value={{feedback, deleteFeedback, addFeedback}}>
    {children}
    
    
    </FeedbackContext.Provider>);

    
}

export default FeedbackContext;