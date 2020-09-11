import React from 'react';
import FacebookIcon from '@material-ui/icons/Facebook';
import InstagramIcon from '@material-ui/icons/Instagram';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import TwitterIcon from '@material-ui/icons/Twitter';

const Footer = () => {
    return(
        <>        
            <footer className="page-footer font-small special-color-dark pt-4">
                <div className="container">
                    <ul className="list-unstyled list-inline text-center">
                        <li className="list-inline-item">
                            <a className="btn-floating btn-fb mx-1" href="https://www.facebook.com/aryaksingh.chauhan.5/">
                                <FacebookIcon />
                            </a>
                        </li>
                        <li className="list-inline-item">
                            <a className="btn-floating btn-tw mx-1" href="https://www.instagram.com/aryaksinghchauhan/">
                                <InstagramIcon />
                            </a>
                        </li>
                        <li className="list-inline-item">
                            <a className="btn-floating btn-gplus mx-1" href="https://twitter.com/ChauhanAryak">
                                <TwitterIcon />
                            </a>
                        </li>
                        
                        <li className="list-inline-item">
                            <a className="btn-floating btn-li mx-1" href="https://www.linkedin.com/in/aryak-singh-chauhan-663a74197/">
                            <LinkedInIcon />
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