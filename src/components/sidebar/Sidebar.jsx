import "./sidebar.css"

export default function Sidebar() {
  return (
    <div className="sidebar">
        <div className="sidebarItem">
            <span className="sidebarTitle"> ABOUT ME</span>
            <img className="sidebarImg" src="https://images.pexels.com/photos/13524648/pexels-photo-13524648.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
            <p className="sidebarPTag">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nostrum dolore expedita provident. Dolores delectus sequi veniam nisi cumque, culpa minus, a neque enim, aliquam labore molestias! Molestiae cupiditate adipisci similique!
                Iste quasi, error repellendus laboriosam saepe esse doloribus blanditiis labore velit laborum nisi nulla est voluptas a, ea hic atque obcaecati vero vitae quaerat! Molestiae debitis consectetur adipisci! Omnis, enim.
            </p>
        </div>
        <div className="sidebarItem">
            <span className="sidebarTitle">CATEGORIES</span>
            <ul className="sidebarList">
                <li className="sidebarListItem">Life</li>
                <li className="sidebarListItem">Data Analysis</li>
                <li className="sidebarListItem">Cinema</li>
                <li className="sidebarListItem">GYM</li>
                <li className="sidebarListItem">Music</li>
                <li className="sidebarListItem">Tech</li>
            </ul>
        </div>
        <div className="sidebarItem">FOLLOW US</div>
        <div className="sidebarSocial">
        <i class="sidebarIcon fa-brands fa-github"></i>
        <i class="sidebarIcon fa-brands fa-linkedin"></i>
        <i class="sidebarIcon fa-brands fa-instagram"></i>
        <i class="sidebarIcon fa-brands fa-twitter"></i>
        </div>
    </div>
  )
}
