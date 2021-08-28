import React, { useState, useEffect, useCallback } from 'react'
import { useSelector } from 'react-redux'

import { Bar } from 'react-chartjs-2'
import { COLORS } from '../../app/constants'

function Overview() {
	const usersList = useSelector((state) => state.users.list)

	/*
		•••••••
		Chart config
		•••••••
	*/
	const initialChartConfig = {
		data: {
			datasets: [
				{
					label: '# of users',
					data: [],
					backgroundColor: COLORS,
					barPercentage: 0.7,
				},
			],
		},
		options: {
			scales: {
				x: {
					ticks: {},
				},
				y: {
					ticks: {
						beginAtZero: true,
					},
				},
			},
			plugins: {
				legend: {
					display: false,
				},
			},
		},
	}
	const [chartConfig, setChartConfig] = useState(initialChartConfig)

	const assembleChartDatasets = useCallback(() => {
		// Creating an object of each skill and its count
		const skillsCount = usersList.reduce((accu, user) => {
			for (let i = 0; i < user.skills.length; i++) {
				const skill = user.skills[i]

				if (accu.hasOwnProperty(skill.title)) {
					accu = {
						...accu,
						[skill.title]: accu[skill.title] + 1,
					}
				} else {
					accu = {
						...accu,
						[skill.title]: 1,
					}
				}
			}

			return { ...accu }
		}, {})

		// Actual dataset object structure needed for bar chart
		let skillsDataset = []
		for (const [key, value] of Object.entries(skillsCount)) {
			skillsDataset.push({
				x: key,
				y: value,
			})
		}

		return skillsDataset
	}, [usersList])

	useEffect(() => {
		if (usersList.length) {
			const chartDataset = assembleChartDatasets()

			setChartConfig((prevState) => {
				return {
					...prevState,
					data: {
						datasets: [
							{
								...prevState.data.datasets[0],
								data: chartDataset,
							},
						],
					},
				}
			})
		}
	}, [usersList, assembleChartDatasets])

	return (
		<div className="container pt-3">
			<div className="row justify-content-center">
				<div className="col-12 col-md-8">
					<Bar
						data={chartConfig.data}
						options={chartConfig.options}
					/>
				</div>
			</div>
		</div>
	)
}

export default Overview
