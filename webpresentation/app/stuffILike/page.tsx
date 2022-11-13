import Image from 'next/image';
import zecheImage from '../../assets/zeche.png';

export default function StuffILike() {
    return (
        <div className="content-box">
            <h1>Stuff I like</h1>
            <div className="content">
                <div className="column">
                    <Image className='zecheImage' src={zecheImage} alt='Picture of Ruhrpott'/>
                </div>
                <div className="column">
                    <ul>
                        <li>Photography</li>
                        <li>Cutting</li>
                        <li>3D Stuff</li>
                    </ul>
                </div>
            </div>
        </div>
    )
}