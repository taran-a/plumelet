/* @flow */
import React, { Component } from 'react';
import Cell from './Cell'


type Props = {
	classRow?: string,
	classCell?: string,
	data: any[],
	columnsDef: Object
}

class Row extends Component {

	props: Props;

	static defaultProps: {
		classRow: string
	};

	constructor(props: Props) {
		super(props)
	}

	render() {
		return(
			<div className={this.props.classRow}>

				{this.props.data.map((cell: any, index: number) =>
					<Cell
						key={index}
						cellIndex={index}
						rowData={this.props.data}
						classCell={this.props.classCell}
						columnsDef={this.props.columnsDef}
					/>
				)}

			</div>
		)
	}
}

Row.defaultProps = {
	classRow: 'pl_row'
};

export default Row;