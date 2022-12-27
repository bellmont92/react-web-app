import React, { useState, useRef, useEffect} from "react";
import ExerciseList from "./ExerciseList";
import { v4 as uuidv4 } from 'uuid';

const LOCAL_STORAGE_KEY = 'exerciseApp.exercises'

function App() {
  const [exercises, setExercises] =  useState([])
  const exerciseNameRef = useRef()

  useEffect(() => {
    const storedExercises = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY))
    if (storedExercises) setExercises(storedExercises)
  }, [])

  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(exercises))
  }, [exercises])

  function toggleExercise(id) {
    const newExercises = [...exercises]
    const exercise = newExercises.find(exercise => exercise.id === id)
    exercise.complete = !exercise.complete
    setExercises(newExercises)
  }

  function handleAddExercise(e) {
    const name = exerciseNameRef.current.value
    if (name === '') return
    setExercises(prevEvents => {
      return [...prevEvents, { id: uuidv4(), name: name, complete: false}]
    })
    exerciseNameRef.current.value = null
  }

  function handleClearExercises() {
    const newExercises = exercises.filter(exercise => !exercise.complete)
    setExercises(newExercises)
  }

  return (
    <>
      <ExerciseList exercises = {exercises} toggleExercise={toggleExercise}/>
      <input ref={exerciseNameRef} type="text" />
      <button onClick={handleAddExercise}> Add Exercise</button>
      <button onClick={handleClearExercises} >Clear Complete</button>
      <div>{exercises.filter(exercise => !exercise.complete).length} left</div>
    </>
  )
}

export default App;
