import './index.scss';

import { FormEvent, useCallback, useState } from 'react';

import Content from '../Content';
import FilledButton from '../widgets/Button/FilledButton';
import LabelInput from '../widgets/Input/LabelInput';
import LabelTextareaInput from '../widgets/Input/LabelTextareaInput';
import { sendMail } from '../../services/EmailJs';
import { useSnackbar } from 'notistack';

const Contact = () => {
	const [firstName, setFirstName] = useState('');
	const [lastName, setLastName] = useState('');
	const [email, setEmail] = useState('');
	const [subject, setSubject] = useState('');
	const [message, setMessage] = useState('');
	const [emailSent, setEmailSent] = useState(false);
	const [emailAttempts, setEmailAttempts] = useState(0);
	const [sending, setSending] = useState(false);

	const { enqueueSnackbar } = useSnackbar();

	const handleFirstNameChange = useCallback(
		(evt: FormEvent<HTMLInputElement>) => {
			setFirstName(evt.currentTarget.value);
		},
		[setFirstName]
	);

	const handleLastNameChange = useCallback(
		(evt: FormEvent<HTMLInputElement>) => {
			setLastName(evt.currentTarget.value);
		},
		[setLastName]
	);

	const handleEmailChange = useCallback(
		(evt: FormEvent<HTMLInputElement>) => {
			setEmail(evt.currentTarget.value);
		},
		[setEmail]
	);

	const handleSubjectChange = useCallback(
		(evt: FormEvent<HTMLInputElement>) => {
			setSubject(evt.currentTarget.value);
		},
		[setSubject]
	);

	const handleMessageChange = useCallback(
		(evt: FormEvent<HTMLTextAreaElement>) => {
			setMessage(evt.currentTarget.value);
		},
		[setMessage]
	);

	const handleOnSubmit = useCallback(
		(evt: React.FormEvent<HTMLFormElement>) => {
			evt.preventDefault();

			if (sending) {
				return;
			}

			if (!subject || !firstName || !lastName || !email || !message) {
				enqueueSnackbar('Please fill in all the required fields', {
					variant: 'error',
				});
				return;
			}

			if (message.length < 10) {
				enqueueSnackbar('Please leave some more messages :)', {
					variant: 'error',
				});
				return;
			}

			if (emailSent) {
				return;
			}

			setSending(true);
			enqueueSnackbar('Sending email', {
				variant: 'info',
			});
			sendMail({
				subject,
				firstName,
				lastName,
				email,
				message,
			})
				.then((res) => {
					setEmailSent(true);
					setSending(false);
					setEmailAttempts(emailAttempts + 1);
					enqueueSnackbar('Email is sent successfully!', {
						variant: 'success',
					});
				})
				.catch((err) => {
					console.log(err);
					setSending(false);
					setEmailAttempts(emailAttempts + 1);
					enqueueSnackbar(
						'Failed to send email, please try again later',
						{
							variant: 'error',
						}
					);
				});
		},
		[
			enqueueSnackbar,
			setEmailAttempts,
			setSending,
			setEmailSent,
			firstName,
			lastName,
			subject,
			email,
			message,
			emailSent,
			emailAttempts,
			sending,
		]
	);

	return (
		<Content id='Contact'>
			<div className='grid md:grid-cols-2 justify-center gap-10'>
				<div>
					<div className='flex flex-col'>
						<div>
							<img
								src={`${process.env.PUBLIC_URL}/profiles/profile.webp`}
								className='rounded-full'
								alt='profile'
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
				<form className='flex flex-col' onSubmit={handleOnSubmit}>
					<div className='grid sm:grid-cols-2 gap-8 flex-grow'>
						<div>
							<LabelInput
								value={firstName}
								required
								className='w-full'
								labelElement={'First Name *'}
								onChange={handleFirstNameChange}
							/>
						</div>
						<div>
							<LabelInput
								value={lastName}
								required
								className='w-full'
								labelElement={'Last Name *'}
								onChange={handleLastNameChange}
							/>
						</div>
						<div>
							<LabelInput
								value={email}
								type='email'
								required
								className='w-full'
								labelElement={'Email *'}
								onChange={handleEmailChange}
							/>
						</div>
						<div>
							<LabelInput
								value={subject}
								required
								className='w-full'
								labelElement={'Subject *'}
								onChange={handleSubjectChange}
							/>
						</div>
						<div className='sm:col-span-2'>
							<LabelTextareaInput
								value={message}
								required
								className='w-full'
								labelElement={'Message *'}
								onChange={handleMessageChange}
								minLength={10}
							/>
						</div>
					</div>
					<div className='mt-5'>
						<FilledButton
							type='submit'
							className='w-full'
							color='secondary'
							disabled={emailSent || sending || emailAttempts > 5}
						>
							Submit
						</FilledButton>
					</div>
				</form>
			</div>
		</Content>
	);
};

export default Contact;
