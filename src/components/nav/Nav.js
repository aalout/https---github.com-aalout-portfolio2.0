const Nav = () => {
    return ( 
        <nav className="nav">
        <div className="container">
           <div className="nav-row">
               <a href="./index.html" className="logo">Илья Волков</a>
               <ul className="nav-list">
                   <li><a href="#myworks" className="buttn">Мои работы</a></li>
                   <li><a href="https://vk.com/aalout" rel="noreferrer" className="buttn" target = "_blank">Написать мне</a></li>
               </ul>
           </div>
        </div>
       </nav> 
    );
}
 
export default Nav;