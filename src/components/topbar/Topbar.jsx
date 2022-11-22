import "./topbar.css"

export default function topbar() {
  return (
    <div className='top'>
        <div className="topLeft">
        <i class="topIcon fa-brands fa-github"></i>
        <i class="topIcon fa-brands fa-linkedin"></i>
        <i class="topIcon fa-brands fa-instagram"></i>
        <i class="topIcon fa-brands fa-twitter"></i>
        </div>
        <div className="topCenter">
            <ul className="topList">
                <li className="topListItem">HOME</li>
                <li className="topListItem">ABOUT</li>
                <li className="topListItem">CONCACT</li>
                <li className="topListItem">WRITE</li>
                <li className="topListItem">LOG OUT</li>
            </ul>
        </div>
        <div className="topRight">
            <img 
            className="topImg"
            src="https://picsum.photos/200/300?grayscale" alt="" />
            <i className="topSearchIcon fa-solid fa-magnifying-glass"></i>

        </div>
    </div>
  )
}
