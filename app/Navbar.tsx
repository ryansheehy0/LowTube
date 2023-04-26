'use client';

import NavbarCss from './Navbar.module.css'
import React from 'react'
import { useRouter } from 'next/navigation';

function Navbar() {
	const router = useRouter();
	return (
		<div className={NavbarCss.Navbar}>
			<button className={NavbarCss.Home}>Home</button>
			<button className={NavbarCss.Subs} onClick={() => router.push('/subs')}>Subs</button>
			<button className={NavbarCss.Libr} onClick={() => router.push('libr')}>Libr</button>
			<input className={NavbarCss.Search} type='text' placeholder='Search'/>
			<button className={NavbarCss.Acct}>Acct</button>
		</div>
	)
}

export default Navbar