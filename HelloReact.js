
class Hello extends React.Component {
	render(){
		return(
			<div>
				Hello ReactJs !
			</div>
		)
	}
};

ReactDOM.render(
	<Hello /> , document.getElementById('app')
);
