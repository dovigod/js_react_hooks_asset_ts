import React from 'react';

interface tProps {
	states: {
		foo: number;
		bar?: string;
	}[];
}
//const List = ({ states }: tProps)
const List: React.FC<tProps> = (foo, bar) => {
	return <span> I'm a List</span>;
};

export default List;
