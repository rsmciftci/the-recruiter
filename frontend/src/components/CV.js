import { FaFilePdf } from "react-icons/fa6";
import styles from './CV.module.css'

function CV(props) {

  
    function openCV(url) {
        window.open(url, '_blank');
    }

    return (

        <div className={styles.centerDiv} style={{backgroundColor : "transparent"}} onClick={() => console.log(props.url)}>
          <FaFilePdf  size={50} onClick={() => openCV(props.url)} />
        </div>
    );
}

export default CV;