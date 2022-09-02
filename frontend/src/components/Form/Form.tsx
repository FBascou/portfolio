import React, { useState } from 'react';
import './Form.scss';

interface inputProp {
	name: string;
	email: string;
	phone: string;
	message: string;
}

const Form: React.FC = ({}): JSX.Element => {
	const [inputValues, setInputValues] = useState<inputProp>({
		name: '',
		email: '',
		phone: '',
		message: '',
	});

	const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		alert('Message Sent');
		console.log(inputValues);
	};

	const onChangeHandle = (
		e:
			| React.ChangeEvent<HTMLInputElement>
			| React.ChangeEvent<HTMLTextAreaElement>
	) => {
		let input = e.target.value;
		let name = e.target.name;
		setInputValues({ ...inputValues, [name]: input });
		console.log(inputValues);
	};

	return (
		<form
			className='form-container'
			onSubmit={(e) => {
				handleSubmit(e);
			}}
		>
			<h2>Contact</h2>
			<div className='labelinput'>
				<label htmlFor='name'>Name</label>
				<input
					className='input-form'
					name='name'
					id='name'
					type='text'
					onChange={onChangeHandle}
					required
				/>
			</div>
			<div className='labelinput'>
				<label htmlFor='name'>Email</label>
				<input
					className='input-form'
					name='email'
					id='email'
					type='email'
					onChange={onChangeHandle}
					required
				/>
			</div>

			<div className='labelinput'>
				<label htmlFor='name'>Phone</label>
				<input
					className='input-form'
					name='phone'
					id='phone'
					type='text'
					onChange={onChangeHandle}
				/>
			</div>

			<div className='labelinput'>
				<label htmlFor='name'>Message</label>
				<textarea
					className='input-form'
					name='message'
					id='message'
					onChange={onChangeHandle}
					required
				/>
			</div>

			<input type='submit' value='Submit' />
		</form>
	);
};

export default Form;
