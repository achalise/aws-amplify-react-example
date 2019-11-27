import React from 'react';

export const Footer:React.FC<FooterProps> = (props: FooterProps) => {
    return (
        <footer className="pb_footer bg-light" role="contentinfo">
        <div className="container">
          <div className="row text-center">
            <div className="col">
              <ul className="list-inline">
                <li className="list-inline-item"><a href="#" className="p-2"><i className="fa fa-facebook"></i></a></li>
                <li className="list-inline-item"><a href="#" className="p-2"><i className="fa fa-twitter"></i></a></li>
                <li className="list-inline-item"><a href="#" className="p-2"><i className="fa fa-linkedin"></i></a></li>
              </ul>
            </div>
          </div>
          <div className="row">
            <div className="col text-center">
              {/* <p className="pb_font-14">&copy; 2019. All Rights Reserved. <br>  <a href="https://uicookies.com/bootstrap-html-templates/">Bootstrap Templates</a> by uiCookies</p> */}
              <p className="pb_font-14">Demo Images: <a href="https://unsplash.com/" target="_blank" rel="nofollow">Unsplash</a></p>
            </div>
          </div>
        </div>
       </footer>
    );
}

export interface FooterProps {

}