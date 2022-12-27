import React from 'react'
import Exercise from './Exercise'

export default function ExerciseList({ exercises, toggleExercise }) {
  return (
      exercises.map(exercise => {
        return <Exercise key={exercise.id} toggleExercise={toggleExercise} exercise={exercise} />
      })
  )
}