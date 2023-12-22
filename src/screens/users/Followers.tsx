import { useOutletContext } from 'react-router-dom'

interface IFollowersContext {
	nameOfMyUser: string,
}

export default function Followers() {
	const {nameOfMyUser} = useOutletContext<IFollowersContext>();	// receive

	return (
		<h1>Here are {nameOfMyUser}`s followers</h1>
	)
}
