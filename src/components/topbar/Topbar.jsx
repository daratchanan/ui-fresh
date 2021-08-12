import "./topbar.css";

export default function Topbar() {
   return (
      <>
         <div className="topbarContainer">
            <div className="topbarWrapper">
               <div className="topbarLeft">
                  <div className="topbarLink">
                     <span className="linkText">Chat with us</span>
                     <span className="linkTexts">+420 336 775 664</span>
                     <span className="linkTexts">info@freshnesecom.com</span>
                  </div>
               </div>
               <div className="topbarRight">
                  <div className="topbarAbout">
                     <span className="rightText">Blog</span>
                     <span className="rightText">About us</span>
                     <span className="rightText">Careers</span>
                  </div>
               </div>
            </div>
            <hr className="topbarHr" />
         </div >
      </>
         )
}
