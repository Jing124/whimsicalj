import axios from 'axios';

export const sendMail = ({
	subject,
	firstName,
	lastName,
	email,
	message,
}: {
	subject: string;
	firstName: string;
	lastName: string;
	email: string;
	message: string;
}) => {
	return axios.post('https://api.emailjs.com/api/v1.0/email/send', {
		service_id: 'qq',
		template_id: 'template_o59kmuo',
		user_id: 'ljr25bQFwLO6UVqHk',
		template_params: {
			subject,
			first_name: firstName,
			last_name: lastName,
			email,
			message,
		},
	});
};
