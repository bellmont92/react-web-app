import React from 'react'

export default function Exercise({ exercise, toggleExercise }) {
  function handleExerciseClick() {
    toggleExercise(exercise.id)
  }
  return (
    <div>
        <label>
          <input type="checkbox" checked={exercise.complete} onChange=
          {handleExerciseClick}/>
          {exercise.name}
        </label>
    </div>
  )
}
