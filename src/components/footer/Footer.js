import vkontakte from "../../images/vksss.png"

const Footer = () => {
    return ( 
        <footer>
            <p className="footertext">Илья Волков</p>
            <img src={vkontakte} className="vks" alt="smth"/>
            <div className="copyright">
            <p className="copyright">(с) 2023. Все права защищены.</p>
            </div>
        </footer>
     );
}
 
export default Footer;