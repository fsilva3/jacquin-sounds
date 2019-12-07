import { createContext } from "react"

const sounds = [
	{
		id: "bleh"
	},
	{
		id: "vumito"
	},
	{
		id: "cagada"
	},
	{
		id: "pqp"
	},
	{
		id: "pegadinha"
	},
	{
		id: "melhor-do-mundo"
	},
	{
		id: "matar-gente"
	},
	{
		id: "nao-faz-nada"
	},
	{
		id: "vergonha"
	},
	{
		id: "desliga-freezer"
	},
	{
		id: "cala-boca"
	}
].map(item => {
	const path = `${process.env.PUBLIC_URL}/assets/${item.id}.mp3`
	return {
		...item,
		audio: new Audio(path)
	}
})

const soundsContext = createContext(sounds)

export default soundsContext
