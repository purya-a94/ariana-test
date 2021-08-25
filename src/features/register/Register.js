import React, { useState } from 'react'
import { Controller, useForm } from 'react-hook-form'
import { SKILLS_LIST } from '../../app/constants'

import DatePicker from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker.css'
import Select from 'react-select'
import makeAnimated from 'react-select/animated'

import styles from './Register.module.css'
import Card from 'react-bootstrap/Card'

// React-select animated components requirement
const animatedComponents = makeAnimated()

function Register() {
	const [skills, setSkills] = useState([])

	const {
		control,
		register,
		handleSubmit,
		reset: resetForm,
		formState: { errors },
	} = useForm()

	// This explicit function declaration is only for better readability
	// and can be moved to Select component props
	const getSkillsOptions = () => {
		return SKILLS_LIST.filter((item) => !skills.includes(item))
	}

	const registerHandler = (formValues) => {
		console.log(formValues)
	}

	return (
		<div className="container pt-3">
			<div className="row justify-content-center">
				<div className="col-12 col-sm-10 col-md-8">
					<Card className="bg-light border-primary">
						<Card.Header className="text-center">
							Registration Form
						</Card.Header>
						<Card.Body>
							<Card.Title>Register your new user:</Card.Title>

							<form onSubmit={handleSubmit(registerHandler)}>
								{/* 
									•••••••
									First name
									•••••••
								*/}

								<div className="row form-group mt-3">
									<label
										htmlFor="firstName"
										className="col-12 col-sm-3 col-form-label"
									>
										First name:
									</label>

									<div className="col-12 col-sm-9">
										<input
											type="text"
											{...register('firstName', {
												required: {
													value: true,
													message:
														'First name is required.',
												},
												minLength: {
													value: 2,
													message:
														'Enter at least 2 characters.',
												},
											})}
											className="form-control"
										/>

										{errors.firstName && (
											<span className="text-danger mt-2">
												{errors.firstName.message}
											</span>
										)}
									</div>
								</div>

								{/* 
									•••••••
									Last name
									•••••••
								*/}
								<div className="row form-group mt-3">
									<label
										htmlFor="lastName"
										className="col-12 col-sm-3 col-form-label"
									>
										Last name
									</label>

									<div className="col-12 col-sm-9">
										<input
											type="lastName"
											{...register('lastName', {
												required: {
													value: true,
													message:
														'Last name is required.',
												},
												minLength: {
													value: 2,
													message:
														'Enter at least 2 characters.',
												},
											})}
											className="col-12 col-sm-8 form-control"
										/>

										{errors.lastName && (
											<span className="text-danger mt-2">
												{errors.lastName.message}
											</span>
										)}
									</div>
								</div>

								{/* 
									•••••••
									Birthdate
									•••••••
								*/}
								<div className="row form-group mt-3">
									<label
										htmlFor="birthdate"
										className="col-12 col-sm-3 col-form-label"
									>
										Birthdate:
									</label>

									<div className="col-12 col-sm-6 col-md-4">
										<Controller
											name="birthdate"
											control={control}
											rules={{
												required: {
													value: true,
													message:
														'Please choose a date.',
												},
											}}
											defaultValue={new Date()}
											render={({ field }) => (
												<DatePicker
													selected={field.value}
													onChange={(e) =>
														field.onChange(e)
													}
													dateFormat="yyyy/MM/dd"
													placeholderText="Select date"
													showMonthDropdown
													showYearDropdown
													dropdownMode="select"
													className="form-control"
												/>
											)}
										/>

										{errors.birthdate && (
											<span className="text-danger mt-2">
												{errors.birthdate.message}
											</span>
										)}
									</div>
								</div>

								{/* 
									•••••••
									Skills
									•••••••
								*/}
								<div className="row form-group mt-3">
									<label
										htmlFor="skills"
										className="col-12 col-sm-3 col-form-label"
									>
										Skills:
									</label>

									<div className="col-12 col-sm">
										<Controller
											name="skills"
											control={control}
											rules={{
												required: {
													value: true,
													message:
														'Please select at least 1 skill.',
												},
											}}
											render={({ field }) => (
												<Select
													{...field}
													isMulti
													components={
														animatedComponents
													}
													options={SKILLS_LIST}
													placeholder="Select your skills..."
												/>
											)}
										/>

										{errors.skills && (
											<span className="text-danger mt-2">
												{errors.skills.message}
											</span>
										)}
									</div>
								</div>

								{/* 
									•••••••
									Register button
									•••••••
								*/}
								<div className="row form-group justify-content-center mt-4">
									<div className="col-4">
										<button
											type="submit"
											className="btn btn-primary w-100"
										>
											Register
										</button>
									</div>
								</div>
							</form>
						</Card.Body>
					</Card>
				</div>
			</div>
		</div>
	)
}

export default Register
