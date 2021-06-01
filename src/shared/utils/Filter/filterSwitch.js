import React from "react";
import Switch from "react-switch";
import './filter.css';



class filterSwitch extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            checked: false
        };
        this.handleChange = this.handleChange.bind(this);
        
    }
    handleChange(checked) {
        this.setState({ checked });
    }
    
    render() {
        
        return (
            <div className="dasboardExplore-filter">
                <Switch onChange={this.handleChange} checked={this.state.checked} height={20} width={40} checkedIcon={false} uncheckedIcon={false} />
                <h2> Maquer les cours que j'ai terminer : {this.state.checked ? "on" : "off"} </h2>
            </div>
        )
    }
}

export default filterSwitch;
