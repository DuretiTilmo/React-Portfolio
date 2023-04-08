import React from 'react';

const styles = {
    footerStyle: {
      fontSize: '35px',
      paddingLeft: '60px',
      float: 'left',
      color: 'grey',
    },
};
export default function Footer(){
    return (
   < footer  className="w-100 mt-auto p-4"> 
        <div className="footer">

        <a href="https://stackoverflow.com/users/21594315/dureti-kadir">  <i class='fa fa-linkedn'></i>
            <i style={styles.footerStyle} className="fa fa-stack-overflow"></i>
            </a>

            <a href="https://github.com/DuretiTilmo">
            <i style={styles.footerStyle} className='fa fa-github'></i>

            </a>
            <a href="https://www.linkedin.com/in/dureti-kadir-4bb17724b/">  <i class='fa fa-linkedn'></i>
            <i style={styles.footerStyle} className="fa fa-linkedin"></i>
            </a>
          
        </div>
    </footer>
    )
}

