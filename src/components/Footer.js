const Footer = () => {
	return (
		<footer className='footer'>
			<div className='footer-links'>
				<p>Packages used:</p>
				<a href='https://www.npmjs.com/package/react-icons' target='_blank' rel='noreferrer'>
					React Icons
				</a>
				<a
					href='https://www.npmjs.com/package/react-infinite-scroll-component'
					target='_blank'
					rel='noreferrer'
				>
					React infinite scroll component
				</a>
				<a href='https://www.npmjs.com/package/uuid' target='_blank' rel='noreferrer'>
					Uuidv4
				</a>
				<a href='https://www.npmjs.com/package/react-router-dom' target='_blank' rel='noreferrer'>
					React router dom
				</a>
			</div>
			<div className='footer-links'>
				<p>Api used:</p>
				<a href='https://api.le-systeme-solaire.net/en/' target='_blank' rel='noreferrer'>
					The Solar System OpenData
				</a>
			</div>
		</footer>
	);
};

export default Footer;
