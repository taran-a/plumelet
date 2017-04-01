/* @flow */
import React, { Component } from 'react';
import Row from './Row'
import Header from './Header'


type Props = {
	id?: string,
	classTable?: string,
	classRow?: string,
	classCell?: string,
	data: Array<any>,
	columns: Object,
	columnsDef: Object
}

class Table extends Component {

	props: Props;

	static defaultProps: {
		id: string,
		classTable: string,
		data: any[]
	};

	constructor(props: Props) {
		super(props);

	}

	get columns(): Array<any> {

		if (this.props.columns) {

			return Object.keys(this.props.columns).map((key: string) => this.props.columns[key])
		}

		return []
	}

	get data(): Array<any> {

		return this.props.data
	}

	render() {
		return(
			<div id={this.props.id} className={this.props.classTable}>

				{this.props.columns &&
					<Header
						classRow={this.props.classRow}
						data={this.columns}
					/>
				}

				{this.data.map((row: any[], index: number) =>
					<Row
						key={index}
						data={row}
						columnsDef={this.props.columnsDef}
						classRow={this.props.classRow}
						classCell={this.props.classCell}
					/>
				)}

			</div>
		)
	}
}

Table.defaultProps = {
	id: "plumelet",
	classTable: 'pl_table',
	data: [],
	columnsDef: {}
};

export default Table;