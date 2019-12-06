import React, { useState } from "react"

const bleh = `${process.env.PUBLIC_URL}/assets/vumito.mp3`

function App() {
	const [sound] = useState(new Audio(bleh))
	const playSound = () => {
		if (!sound.paused) sound.pause()
		else sound.play()
	}

	return (
		<div className="App">
			<button onClick={playSound}>play</button>
		</div>
	)
}

export default App
