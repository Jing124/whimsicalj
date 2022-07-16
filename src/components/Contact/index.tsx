import './index.scss';

import Content from '../Content';
import FilledButton from '../widgets/Button/FilledButton';
import LabelInput from '../widgets/Input/LabelInput';
import LabelTextareaInput from '../widgets/Input/LabelTextareaInput';

const Contact = () => {
	return (
		<Content id='Contact'>
			<div className='grid md:grid-cols-2 justify-center gap-10'>
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
				<div className='flex flex-col'>
					<div className='grid sm:grid-cols-2 gap-8 flex-grow'>
						<div>
							<LabelInput
								className='w-full'
								labelElement={'First Name *'}
							/>
						</div>
						<div>
							<LabelInput
								className='w-full'
								labelElement={'Last Name *'}
							/>
						</div>
						<div>
							<LabelInput
								className='w-full'
								labelElement={'Email *'}
							/>
						</div>
						<div>
							<LabelInput
								className='w-full'
								labelElement={'Subject *'}
							/>
						</div>
						<div className='sm:col-span-2'>
							<LabelTextareaInput
								className='w-full'
								labelElement={'Message *'}
							/>
						</div>
					</div>
					<div className='mt-5'>
						<FilledButton className='w-full' color='secondary'>
							Submit
						</FilledButton>
					</div>
				</div>
			</div>
		</Content>
	);
};

export default Contact;
