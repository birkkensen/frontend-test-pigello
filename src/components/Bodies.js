import { v4 as uuidv4 } from 'uuid';
const Bodies = ({ bodies }) => {
	return bodies.map((bodie) => {
		return (
			<div key={uuidv4()} className={`bodies`}>
				<p className='bodie'>{bodie.englishName}</p>
				<p className='bodie'>
					{bodie.aroundPlanet?.planet ? bodie.aroundPlanet?.planet : 'No Planet Data'}
				</p>
				<p className='bodie'>{bodie.bodyType}</p>
			</div>
		);
	});
};

export default Bodies;
