import React from 'react'

const Header = () => {
  return (
    <nav>
        <div id='header'>
            <div className='header-title'>Vymo Eats
            <div className='header-subtitle'>for merchants</div>            
            </div>
            <div className='header-space'></div>
            <div className='header-buttons'>
                <button className='header-login'>Log in</button>
                <button className='header-signin'>Sign in</button>
            </div>
        </div>
    </nav>
  )
}

export default Header