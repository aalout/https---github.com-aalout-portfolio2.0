import manyporjects from "../../images/numberssss.png"
import video from "../../images/asqwe23.png"
import proj1 from "../../images/recs33.png"
import proj2 from "../../images/Rectangle 7.334.png"
import proj3 from "../../images/Rectangle 732.png"
import microsoft from "../../images/clientsw.png"

const Main = () => {
    return ( 
        <main className="section">
        <div className="container">
                <ul className="content-list">
                    <li className="content-list__item">
                        <h2 className="title-2">Обо мне</h2>
                        <p className=".pstyle">Я - студент Института опережающих технологий "Школа Х". У меня большое количество проектов на счету, многие из которых включали в себя разработку React приложения. Я хочу получить больше опыта разработки, поэтому жду ваших предложений!</p>
                    </li>
                </ul>
                <ul>
                    <li className="obomne"><a href="#myworks" className="buttn_obomne">Мои работы</a></li>
                </ul>
        </div>
        <img src={manyporjects} alt="smth" className="imgs"/>
        <div className="container-4">
            <ul className="content-list">
                <li className="content-list__item">
                    <h2 className="title-3">Как я работаю</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vitae risus sit amet nisi eleifend.</p>
                </li>
            </ul>
            <p className="imgs2"><img src={video} alt="smth"/></p>
        </div>
            <div className="container">
                <h2 id="myworks" className="title-1">Мои работы</h2>
                <ul className="projects">
                    <li className="project">
                        <a href="./project-page.html">
                            <img src={proj1} alt="smth" className="project__img"/>
                            <h3 className="project__title">Проект 1</h3>
                        </a>
                    </li>
                    <li className="project">
                        <a href="./project-page.html">
                            <img src={proj2} alt="smth" className="project__img"/>
                            <h3 className="project__title">Проект 2</h3>
                        </a>
                    </li>
                    <li className="project">
                        <a href="./project-page.html">
                            <img src={proj3} alt="smth" className="project__img"/>
                            <h3 className="project__title">Проект 3</h3>
                        </a>
                    </li>
                    <li className="project">
                        <a href="./project-page.html">
                        <img src={proj2} alt="smth" className="project__img"/>
                        <h3 className="project__title">Проект 4</h3>
                        </a>
                    </li>
                    <li className="project">
                        <a href="./project-page.html">
                        <img src={proj1} alt="smth" className="project__img"/>
                        <h3 className="project__title">Проект 5</h3>
                        </a>
                    </li>
                    <li className="project">
                        <a href="./project-page.html">
                        <img src={proj2} alt="smth" className="project__img"/>
                        <h3 className="project__title">Проект 6</h3>
                        </a>
                    </li>
                </ul>
                <p className="imgs2"><img src={microsoft} alt="smth"/></p>
            </div>
            <ul className="content-list">
                    <li className="content-list__item">
                        <h2 className="title-4">Хотите веб-сайт?</h2>
                        <p className=".pstyle">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vitae risus sit amet nisi eleifend.</p>
                    </li>
            </ul>
            <div className="container">
                <ul className="textforms">
                    <li className="textform">
                        <input className="text-field" type="text" name="userName" placeholder="Ваше имя" size="18"/>
                    </li>
                    <li  className="textform">
                        <input className="text-field" type="text" name="email" placeholder="Ваш e-mail" size="18"/>
                    </li>
                    <li className="textform">
                        <textarea className="text-field2" placeholder="Сообщение" name="messageText"></textarea>
                    </li>
                </ul>
                <a href="#myworks" className="buttn_obomne1">Отправить</a>
            </div>
        </main>
     );
}
 
export default Main ;