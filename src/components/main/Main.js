import manyporjects from "../../images/Group.png"
import video from "../../images/asqwe23.png"
import proj2 from "../../images/Rectangle 7.334.png"
import proj3 from "../../images/Rectangle 732.png"
import microsoft from "../../images/Rectangle 9.png"
import prod1 from "../../images/IMAGE4432.png"
import prod2 from "../../images/IMAGE4431.png"
import prod3 from "../../images/IMAGE4430.png"
import filledline from "../../images/Group 1656657.png"
import muzhik from "../../images/Rectangle 3fffff.png"

const Main = () => {
    return ( 
        <main className="section">
        <div className="container">
                <ul className="content-list">
                    <li className="content-list__item">
                        <h2 className="title-2">Обо мне</h2>
                        <p>Я - студент Института опережающих технологий "Школа Х". У меня большое количество проектов на счету, многие из которых включали в себя разработку React приложения. Я хочу получить больше опыта разработки, поэтому жду ваших предложений!</p>
                    </li>
                </ul>
                <ul>
                    <li className="obomne"><a href="#myworks" className="buttn_obomne">Мои работы</a></li>
                </ul>
        </div>
        <div className="container-5">
            <ul className="projects1">
                <li className="project1">
                    <img src={manyporjects} alt="smth"/>
                    <h6>40+</h6>
                    <p>проектов</p>
                </li>
                <li className="project1">
                    <img src={manyporjects} alt="smth"/>
                    <h6>40+</h6>
                    <p>проектов</p>
                </li>
                <li className="project1">
                    <img src={manyporjects} alt="smth"/>
                    <h6>40+</h6>
                    <p>проектов</p>
                </li>
                <li className="project1">
                    <img src={manyporjects} alt="smth"/>
                    <h6>40+</h6>
                    <p>проектов</p>
                </li>
            </ul>
        </div>
        <div className="container">
            <ul className="naviki">
                <li>
                    <ul>
                        <li className="navikiH"><h3>Мои навыки</h3></li>
                        <li>Adobe Photoshop</li>
                        <li><img src={filledline} alt="smth"/></li>
                        <li>Adobe Photoshop</li>
                        <li><img src={filledline} alt="smth"/></li>
                        <li>Adobe Photoshop</li>
                        <li><img src={filledline} alt="smth"/></li>
                    </ul>
                </li>
                <li>
                    <img className="muzhik" src={muzhik} alt="smth"/>
                </li>
            </ul>
        </div>
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
                            <img src={proj3} alt="smth" className="projecti"/>
                        </a>
                    </li>
                    <li className="project">
                        <a href="./project-page.html">
                            <img src={proj2} alt="smth" className="projecti"/>
                        </a>
                    </li>
                    <li className="project">
                        <a href="./project-page.html">
                            <img src={proj3} alt="smth" className="projecti"/>
                        </a>
                    </li>
                    <li className="project">
                        <a href="./project-page.html">
                        <img src={proj2} alt="smth" className="projecti"/>
                        </a>
                    </li>
                    <li className="project">
                        <a href="./project-page.html">
                        <img src={proj3} alt="smth" className="projecti"/>
                        </a>
                    </li>
                    <li className="project">
                        <a href="./project-page.html">
                        <img src={proj2} alt="smth" className="projecti"/>
                        </a>
                    </li>
                </ul>
                <ul className="microsoft">
                    <li>
                        <p className="imgs3"><img src={microsoft} alt="smth"/></p>
                    </li>
                    <li>
                        <p className="imgs4"><img src={microsoft} alt="smth"/></p>
                    </li>
                    <li>
                        <p className="imgs5"><img src={microsoft} alt="smth"/></p>
                    </li>
                    <li>
                        <p className="imgs2"><img src={microsoft} alt="smth"/></p>
                    </li>
                </ul>
            </div>
            <div className="container">
                <h2 className="title-4">Хотите купить готовый дизайн?</h2>
                <ul className="projects2">
                    <li className="project2">
                        <a href="product-page.html">
                            <img src={prod1} alt="smth" className="project2__img"/>
                            <p className="project2_text">Lorem ipsum1</p>
                            <p className="project2_op">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce sit.</p>
                        </a>
                    </li>
                    <li className="project2">
                        <a href="product-page.html">
                            <img src={prod2} alt="smth" className="project2__img"/>
                            <p className="project2_text">Lorem ipsum dolor sit Fusce sit.</p>
                            <p className="project2_op">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce sit.</p>
                        </a>
                    </li>
                    <li className="project2">
                        <a href="product-page.html">
                            <img src={prod3} alt="smth" className="project2__img"/>
                            <p className="project2_text">Lorem ipsum Fusce sit.</p>
                            <p className="project2_op">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce sit.</p>
                        </a>
                    </li>
                </ul>
                <a href="smth" className="buttn_obomne1">Показать ещё</a>
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