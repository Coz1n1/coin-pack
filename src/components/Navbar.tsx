import React from 'react'
import { Link } from 'react-router-dom'
import './Navbar.css'
import { DiscordLogo, TwitterLogo, GithubLogo } from '@phosphor-icons/react'

export const Navbar = () => {
  return (
    <div className='nav-container'>
        <div className='nav-company'>
            <span className='nav-company-header'>COINPACK</span>
        </div>
        <div className='nav-links-wrapper'>
            <Link to="/" className='nav-container-element'>Home</Link>
            <Link to="/" className='nav-container-element'>Join Community</Link>
            <Link to="/" className='nav-container-element'>About</Link>
            <Link to="/" className='nav-container-element'>Contact</Link>
        </div>
        <div className='nav-socials'>
            <span className='nav-socials-icon'><DiscordLogo size={40} color="#222325" /></span>
            <span className='nav-socials-icon'><TwitterLogo size={40} color="#222325" /></span>
            <span className='nav-socials-icon'><GithubLogo size={40} color="#222325" /></span>
        </div>
    </div>
  )
}
