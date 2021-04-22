import React from 'react'

const Navbar = ({handleSubmit, handleChange}) =>{
    
    
    return (
        <nav className="navbar bg-sized">
            <span className="logo">Weather By Elroi</span>
            <div className="nav-search">
                <form onSubmit={handleSubmit} className="form">
                    <input type="text" 
                        onChange={handleChange} 
                        name="zip-search" 
                        placeholder="Search Weather By Zip Code" 
                        aria-label="Seach Weather By Zip Code"
                        className="search-input"
                        required={true}
                    />
                    <button type="submit" className="btn"><i className="fas fa-search"></i></button>
                </form>
            </div>
            
        </nav>
    )
}

export default Navbar
