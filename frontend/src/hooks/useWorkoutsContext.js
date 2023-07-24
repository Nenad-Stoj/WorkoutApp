import {WorkoutContext} from '../context/WorkoutContext'
import {useContext} from 'react'


export const useWorkoutsContext = () => {
    const context = useContext(WorkoutContext)
    
    if(!context){
        throw Error('useWorkout context not used properly')
    }

    return context
}