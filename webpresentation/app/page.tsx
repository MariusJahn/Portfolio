import Image from 'next/image';
import profilePicture from '../assets/me.png';

export default function Home() {
    return (
        <div className="content-box">
            <h1>I have no idea what im doing... or do I?</h1>
            <Image className='profile-picture' alt='Picture of me' src={profilePicture}></Image>
            <div className='separator'/>
            <div className='socialBar'>
                <a href="https://www.linkedin.com/in/marius-jahn-743992225/" className="fa fa-linkedin "/>
                <a href="https://www.xing.com/profile/Marius_Jahn5/cv" className="fa fa-xing"></a>
                <a href="https://github.com/MariusJahn" className="fa fa-github"></a>
            </div>
            <div className="content">
            <div className="column">
            </div>
            <div className="column">
            </div>
            </div>
        </div>
    )
}