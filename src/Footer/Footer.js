import React from 'react';
import './footer.css';

const Footer = () => {
    return(
        <>        
            <footer className="page-footer font-small special-color-dark pt-4">
                <div className="container">
                    <ul className="list-unstyled list-inline text-center">
                        <li className="list-inline-item">
                            <a className="btn-floating btn-fb mx-1" href="https://www.facebook.com/aryaksingh.chauhan.5/">
                                <ion-icon name="logo-facebook"></ion-icon>
                            </a>
                        </li>
                        <li className="list-inline-item">
                            <a className="btn-floating btn-tw mx-1" href="https://www.instagram.com/aryaksinghchauhan/">
                                <ion-icon name="logo-instagram"></ion-icon>
                            </a>
                        </li>
                        <li className="list-inline-item">
                            <a className="btn-floating btn-gplus mx-1" href="https://twitter.com/ChauhanAryak">
                                <ion-icon name="logo-twitter"></ion-icon>
                            </a>
                        </li>
                        
                        <li className="list-inline-item">
                            <a className="btn-floating btn-li mx-1" href="https://www.linkedin.com/in/aryak-singh-chauhan-663a74197/">
                            <ion-icon name="logo-linkedin"></ion-icon>
                            </a>
                        </li>

                        {/* <li className="list-inline-item">
                            <a className="btn-floating btn-li mx-1" href="aryaksinghchauhan@gmail.com">
                            <ion-icon name="mail-unread-outline"></ion-icon>
                            </a>
                        </li> */}
                    </ul>
                </div>
                <div className="footer-copyright text-center py-3">© developed by: Aryak singh chauhan
                    
                </div>
            </footer>
        </>
    )
}

export default Footer;