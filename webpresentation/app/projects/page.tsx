import Image from 'next/image';
import intranetImage from '../../assets/intranet.png';

export default function Projects() {
    return (
        <div className="content-box">
            <h1>My Projects</h1>
            <div className="content">
                <div className="column">
                    <h2>Diary Entries</h2>
                    <ul>
                        <li>Java EE 8</li>
                        <li>JSF</li>
                        <li>JPA / Hibernate</li>
                        <li>JBoss / Wildfly</li>
                        <li>MariaDB</li>
                    </ul>
                </div>
                <div className="column">
                    <Image className='intranet-image' alt='Picture of the Intranet Rolemanagement Tab' src={intranetImage}></Image>
                </div>
                <div className="column">
                    <Image className='intranet-image' alt='Picture of the Intranet Rolemanagement Tab' src={intranetImage}></Image>
                </div>
                <div className="column">
                    <h2>Intranet</h2>
                    <ul>
                        <li>Angular</li>
                        <li>NodeJS</li>
                        <li>ExpressJS</li>
                        <li>MariaDB</li>
                    </ul>
                </div>
            </div>
        </div>
    )
}