import './index.scss';

import Container from '../widgets/Container';
import FilledButton from '../widgets/Button/FilledButton';
import LabelInput from '../widgets/Input/LabelInput';
import LabelTextareaInput from '../widgets/Input/LabelTextareaInput';
import SendIcon from '@mui/icons-material/Send';

const Contact = () => {
	return (
		<Container id='Contact'>
			<div className='my-10 grid md:grid-cols-2 justify-center gap-10'>
				<div>
					<div className='flex flex-col'>
						<div>
							<img
								src={`${process.env.PUBLIC_URL}/profiles/profile.webp`}
								className='rounded-full'
							/>
						</div>
						<h1 className='font-extrabold text-4xl mt-8'>
							Contact
						</h1>
						<p className='mt-2'>
							Looking forward to hearing from you
						</p>
						<div className='mt-6'>
							<h5 className='font-extrabold text-lg'>Phone</h5>
							<p>718-255-8468</p>
						</div>
						<div className='mt-6'>
							<h5 className='font-extrabold text-lg'>Email</h5>
							<p>wjing.design97@gmail.com</p>
						</div>
					</div>
				</div>
				<div>
					<div className='grid grid-cols-2 gap-8'>
						<LabelInput
							className='w-full'
							labelElement={'First Name'}
						/>
						<LabelInput
							className='w-full'
							labelElement={'Last Name'}
						/>
						<LabelInput
							className='w-full'
							labelElement={'Email *'}
						/>
						<LabelInput
							className='w-full'
							labelElement={'Subject'}
						/>
						<div className='col-span-2'>
							<LabelTextareaInput labelElement={'Message'} />
						</div>
					</div>
					<div className='mt-5'>
						<FilledButton className='w-full' color='secondary'>
							Submit
						</FilledButton>
					</div>
				</div>
			</div>
		</Container>
	);
};

export default Contact;
