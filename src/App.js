import React, { useContext } from "react"
import soundsContext from "store/sounds"

function App() {
	const items = useContext(soundsContext)

	const playSound = sound => {
		sound.play()
	}

	return (
		<div className="App">
			{items.map(item => {
				return (
					<button key={item.id} className="audio-button" onClick={() => playSound(item.audio)}>
						{item.id}
					</button>
				)
			})}
		</div>
	)
}

export default App
