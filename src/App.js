import React, { useState, useContext } from "react"
import soundsContext from "store/sounds"

function App() {
	const items = useContext(soundsContext)

	const playSound = sound => {
		if (!sound.paused) sound.pause()
		else sound.play()
	}

	return (
		<div className="App">
			{items.map(item => {
				const sound = new Audio(item.path)
				return <button onPointerDown={() => playSound(sound)}>{item.id}</button>
			})}
		</div>
	)
}

export default App
