/* @flow */
import React, { Component } from 'react';
import Cell from './Cell'


type Props = {
	classRow?: string,
	data: Array<string>
}

class Header extends Component {

	props: Props;

	static defaultProps: {
		classRow: string
	};

	render() {
		return(
			<div className={this.props.classRow}>

				{this.props.data.map((cell: any, index: number) =>
					<textarea
						key={index}
						defaultValue={cell}
						className="pl_cell"
					/>
				)}

			</div>
		)
	}
}

Header.defaultProps = {
	classRow: 'pl_row'
};

export default Header;