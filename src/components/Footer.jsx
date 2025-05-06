import React from 'react'
import PropTypes from 'prop-types'

const Footer = (props) => (
    <footer id="footer" style={props.timeout ? {display: 'none'} : {}}>
        <span className="taglineFooter">Solving Problems, One code at a time</span>
        <p className="copyright">&copy;Divyangi Mahajan, 2025</p>
    </footer>
)

Footer.propTypes = {
    timeout: PropTypes.bool
}

export default Footer
