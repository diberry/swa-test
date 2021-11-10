import React, { useState, useEffect } from "react"


export const AnimalFactsList = (props) => {
  const [animalFacts, setAnimalFacts] = useState([])
  useEffect(() => {
    fetch(
      "https://cat-fact.herokuapp.com/facts/random?animal_type=cat&amount=5"
    )
      .then(response => response.json())
      .then(response => setAnimalFacts(response))
  })
  const facts = animalFacts.map(fact => <p key={fact._id}>{fact.text}</p>)
  return <div>{facts}</div>
}

export const Hello = (props) => {
  const [hellostate, setHellostate] = useState([])
  useEffect(() => {
    fetch(
      "https://diberry-fn-hello.azurewebsites.net/api/hello?name=dina"
    )
      .then(response => response.json())
      .then(response => setHellostate(response))
  })
  
  return <div>{hellostate}</div>
}