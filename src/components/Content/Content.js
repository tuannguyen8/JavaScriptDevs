import './content.css';

const Content = () => {
	return (
		<div className='my-container'>
			<div className='my-div'>
				<div className='my-div-img'>
					<img className='myimg'
						src="https://scontent-sea1-1.xx.fbcdn.net/v/t1.6435-9/45500519_1940802039339168_1655955191075176448_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=XWFZQRz89n8AX-8ttYr&_nc_ht=scontent-sea1-1.xx&oh=00_AT_tU-dUGS1ZR7P_utH7iFBmCB_u1WI_CqT4tInaE-NTOA&oe=62CFAA2D"
						alt="Tuan Nguyen"
					/>
				</div>
				<div className='my-div-ul'>
					<ul>
						<li><span>Name: </span> Tuan Nguyen</li>
						<li><span>Gender: Male</span></li>
						<li><span>Email: nguyenvutuan1@gmail.com</span></li>
					</ul>
				</div>
			</div>
		</div>
	);
};

export default Content;
