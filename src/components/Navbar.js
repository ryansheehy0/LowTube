import NavbarCss from '../styles/Navbar.module.css'
import React, {useState} from 'react'
/*
Todo:
- Auto select text when click into Search box
- State of double clicking a box
- Only selecting one at a time
*/

function Navbar() {

	const [toggleHome, setToggleHome] = useState(true)
	const [toggleSubs, setToggleSubs] = useState(false)
	const [toggleLibr, setToggleLibr] = useState(false)

	function homeClicked(){
		setToggleHome(true)
		setToggleSubs(false)
		setToggleLibr(false)
	}

	function subsClicked(){
		setToggleHome(false)
		setToggleSubs(true)
		setToggleLibr(false)
	}

	function librClicked(){
		setToggleHome(false)
		setToggleSubs(false)
		setToggleLibr(true)
	}

	return (
		<div className={NavbarCss.Navbar}>
			<button className={NavbarCss.Home} onClick={homeClicked} id={toggleHome ? 'clicked' : 'unclicked'}>Home</button>
			<button className={NavbarCss.Subs} onClick={subsClicked} id={toggleSubs ? 'clicked' : 'unclicked'}>Subs</button>
			<button className={NavbarCss.Libr} onClick={librClicked} id={toggleLibr ? 'clicked' : 'unclicked'}>Libr</button>
			<input className={NavbarCss.Search} type='text' placeholder='Search'/>
			<button className={NavbarCss.Acct}>Acct</button>
		</div>
	)
}

export default Navbar