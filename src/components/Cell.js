/* @flow */
import React, { Component } from 'react';

type Props = {
	className?: string,
	rowData: any[],
	cellIndex: number,
	columnsDef: Object
}

class Cell extends Component {

	props: Props;
	state: {
		value: any
	};
	input: HTMLElement;
	handleChange: () => void;
	getColumnDef: () => void;


	static defaultProps: {
		className: string
	};


	constructor(props: Props) {
		super(props);

		this.state = {
			value: props.rowData[props.cellIndex],
		};

		this.handleChange = this.handleChange.bind(this);
		this.getColumnDef = this.getColumnDef.bind(this)
	}

	componentDidUpdate() {

	}

	handleChange(event: Event & { currentTarget: EventTarget }) {

		let { value } = event.currentTarget;

		this.setState({ value });
	}

	getColumnDef(cellIndex: number) {

		const columnName = Object.keys(this.props.columnsDef)[cellIndex];

		return this.props.columnsDef[columnName]
	}

	render() {

		return <input
			ref={(input) => { this.input = input; }}
			className={this.props.className}
			readOnly
			onChange={this.handleChange}
			value={this.state.value}
		/>;
	}
}

Cell.propTypes = {
	className: React.PropTypes.string,
	rowData: React.PropTypes.array.isRequired,
	cellIndex: React.PropTypes.number.isRequired,
	columnsDef: React.PropTypes.object
};

Cell.defaultProps = {
	className: 'pl_cell'
};

export default Cell;