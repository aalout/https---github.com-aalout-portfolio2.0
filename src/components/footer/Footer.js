import vkontakte from "../../images/vksss.png"

const Footer = () => {
    return ( 
        <footer>
            <nav>
                <a href="./index.html">Илья Волков</a>
                <a href="./index.html">Политика конфиденциальности</a>
                <a href="./index.html">Copywrite ©</a>
            </nav>
            <img src={vkontakte} className="vks" alt="smth"/>
        </footer>
     );
}
 
export default Footer;