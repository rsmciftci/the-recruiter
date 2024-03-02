import { FaFilePdf } from "react-icons/fa6";

function CV(props) {

  
    function openCV(url) {
        window.open(url, '_blank');
    }

    return (

        <div style={{backgroundColor : "transparent"}} onClick={() => console.log(props.url)}>
          <FaFilePdf  size={50} onClick={() => openCV(props.url)} />
        </div>
    );
}

export default CV;