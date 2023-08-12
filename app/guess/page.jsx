"use client"
import React, { useEffect, useState } from "react"
import "./Guess.css" // Import the CSS file
import { useRouter } from "next/navigation"

const Guess = () => {
  const [secretNumber, setSecretNumber] = useState(generateRandomNumber())
  const [score, setScore] = useState(20)
  const router = useRouter()
  const [highscore, setHighscore] = useState(0)
  const [message, setMessage] = useState("Start guessing...")
  const [userGuess, setUserGuess] = useState("")
  useEffect(() => {
    if (!localStorage.getItem("data")) {
      router.push("/")
    }
  }, [])
  function generateRandomNumber() {
    return Math.trunc(Math.random() * 20) + 1
  }

  function displayMessage(message) {
    setMessage(message)
  }

  function checkGuess() {
    const guess = Number(userGuess)

    if (!guess) {
      displayMessage("⛔️ No number!")
    } else if (guess === secretNumber) {
      displayMessage("🎉 Correct Number!")
      setSecretNumber(generateRandomNumber())
      setScore(20)
      if (score > highscore) {
        setHighscore(score)
      }
    } else if (guess !== secretNumber) {
      if (score > 1) {
        displayMessage(guess > secretNumber ? "📈 Too high!" : "📉 Too low!")
        setScore(score - 1)
      } else {
        displayMessage("💥 You lost the game!")
        setScore(0)
      }
    }
  }

  function restartGame() {
    setSecretNumber(generateRandomNumber())
    setScore(20)
    displayMessage("Start guessing...")
    setUserGuess("")
  }

  return (
    <div className="App">
      <header className="header_guess">
        <h1 className="h1_guess"> Guess My Number!</h1>
        <p className="between">(Between 1 and 20)</p>
        <button className="btn again" onClick={restartGame}>
          Again!
        </button>
        <div className="number">{secretNumber}</div>
      </header>
      <main className="main_guess">
        <section className="left">
          <input
            type="number"
            className="guess"
            value={userGuess}
            onChange={(e) => setUserGuess(e.target.value)}
          />
          <button className="btn check" onClick={checkGuess}>
            Check!
          </button>
        </section>
        <section className="right">
          <p className="message">{message}</p>
          <p className="label-score">
            💯 Score: <span className="score">{score}</span>
          </p>
          <p className="label-highscore">
            🥇 Highscore: <span className="highscore">{highscore}</span>
          </p>
        </section>
      </main>
    </div>
  )
}

export default Guess
