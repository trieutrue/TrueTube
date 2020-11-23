import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserCircle } from '@fortawesome/free-solid-svg-icons'
import { TiHome } from 'react-icons/ti'
import { ImFire } from 'react-icons/im'
import { RiVideoLine } from 'react-icons/ri'
import { AiFillLike } from 'react-icons/ai'
import { FaGithubSquare, FaLinkedin } from 'react-icons/fa'
import * as MD from 'react-icons/md'


class SideNav extends React.Component {

  subHeader() {
    const { currentUser } = this.props
    return currentUser ? (
      <>
        <li><RiVideoLine /></li>
        <li><AiFillLike /></li>
      </>
    ) : (
      <>
        <li className="signin-li no-hover" >
          <p>Sign in to like videos, comment, and subscribe.</p>
          <Link to="/signin" className="signin-btn">
            <FontAwesomeIcon icon={faUserCircle} className="user-icon" />
            <strong>SIGN IN</strong>
          </Link>
        </li>
      </>
    )
  }

  render() {
    const { location } = this.props
    if (location.pathname.split("/").includes("videos")) return null

    return (
      <nav id="side-nav">
        <header className="side-header">
          <ul>
            <li><TiHome />Home</li>
            <li><ImFire />Trending</li>
            <li><MD.MdSubscriptions />Subscriptions</li>
          </ul>

          <ul>
            <li><MD.MdVideoLibrary />Library</li>
            <li><MD.MdHistory />History</li>
            {this.subHeader()}
          </ul>
        </header>

        <footer>
          <ul className="link-footer">
            <a href="https://github.com/ttran193/wetube" target="_blank">
              <li onClick="location.href = 'https://github.com/ttran193/wetube';">
                <FaGithubSquare />Github
              </li>
            </a>
            <a href="https://www.linkedin.com/in/trieu-tran-52339a167/" target="_blank">
              <li onClick="location.href = 'https://www.linkedin.com/in/trieu-tran-52339a167/';">
                <FaLinkedin />LinkedIn
              </li>
            </a>
          </ul>

          <ul className="info-footer no-hover"> 
            <li>About Press Copyright <br />Contact us Creators <br />Advertise Developers</li>
            <li>Terms Privacy Policy & Safety <br />How WeTube works <br />Test new features</li>
          </ul>
          <h6>© 2020 WeTube</h6>
        </footer>
      </nav>
    )
  }
}


export default withRouter(SideNav);