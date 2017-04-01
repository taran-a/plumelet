import Table from './src/components/Table'
import React from 'react'
import { render } from 'react-dom'
import data from './src/data.json'
import './src/styles/index.scss'


const root = document.getElementById('Plumelet');

const columnsDef = {
	name: {
		onChange: (value) => {  },
		validate: (value) => !isNaN(value),
		readOnly: false
	},
	type: {
		onChange: (value) => {  },
		validate: (value) => !isNaN(value),
		readOnly: true
	},
	number: {
		onChange: (value) => {  },
		validate: (value) => !isNaN(value),
		readOnly: false
	},
	framework: {
		onChange: (value) => {  },
		validate: (value) => !isNaN(value),
		readOnly: true
	},
};

const columns = {
	name: "Name",
	type: "Type",
	number: "Number",
	framework: "Framework"
};

render(
<Table
	data={data}
	columns={columns}
	columnsDef={columnsDef}
/>, root);