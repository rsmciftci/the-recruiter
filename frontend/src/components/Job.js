import styles from './Job.module.css'
import { IoLocationSharp } from "react-icons/io5";
import { GiMoneyStack } from "react-icons/gi";
import { HiBuildingLibrary } from "react-icons/hi2";
function Job() {



    return (
        <div className={styles.div1}>


            <gap></gap>
            <div className={styles.div2}>

                <h2>Java Developer</h2>

                <div>
                    <IoLocationSharp size={25} /> <text>London</text>

                </div>
                <div>
                    <GiMoneyStack size={25} />  <text>50K £</text>
                </div>
                <div>
                    <HiBuildingLibrary size={25} /> <text>King</text>
                </div>
                <hr></hr>

                <div>
                    <p>
                        Production Engineers at Meta are software engineers who focus on the reliability, scalability, performance, privacy and security of Meta Products - such as WhatsApp, Instagram or Messenger and our business platforms such as Ads, Business Messaging and Commerce.Through a deep understanding of production services, and a passion for automation, they allow our product teams to deliver new features quickly while maintaining an awesome user experience. They are embedded in Meta's product teams and are core participants in every significant engineering effort.Our team members come with varying levels of experience and diverse backgrounds. Relevant industry experience is important (Software Engineer, Site Reliability Engineer (SRE), Systems Engineer, DevOps Engineer, Network Engineer, Database Administrator or similar role), but ultimately less so than your demonstrated abilities and attitude. We sail into uncharted waters every day at Meta in Production Engineering, and we are always learning. This position is full time.
                    </p>
                    <p>

                        Experience in *nix (Linux, BSDs, or another UNIX-like OS)
                        Currently has, or is in the process of obtaining a Bachelor's degree in Computer Science, Computer Engineering, relevant technical field, or equivalent practical experience. Degree must be completed prior to joining Meta.
                        Experience coding in an industry-standard language (e.g. Java, Python, C++, PHP)
                        Experience picking up software, frameworks and APIs
                        Must obtain work authorization in country of employment at the time of hire, and maintain ongoing work authorization during employment

                    </p>

                </div>

                <hr></hr>

                {/* TODO : if applied WITHDRAW button if not APPLY button */}
                <button>APPLY</button>
                <button>WITHDRAW</button>


            </div>
            <gap></gap>
            <gap></gap>

        </div>
    );
}

export default Job;