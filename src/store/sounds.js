import { createContext } from "react"

const bleh = `${process.env.PUBLIC_URL}/assets/bleh.mp3`
const vumito = `${process.env.PUBLIC_URL}/assets/vumito.mp3`

const soundsContext = createContext([
	{
		id: "bleh",
		path: bleh
	},
	{
		id: "vumito",
		path: vumito
	}
])

export default soundsContext
