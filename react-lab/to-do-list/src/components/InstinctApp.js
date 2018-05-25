import React from 'react';

import Action from './Action';
import AddOption from './AddOption';
import Header from './Header';
import Options from './Options';
import OptionModal from './OptionModal';

export default class InstinctApp extends React.Component {
    state = {
        options: [],
        selectedOption: undefined
    };

    handleDeleteOptions = () => {
        this.setState(() => ({ options: [] }));
    };
    handleClearSelectedOption = () => {
        this.setState(() => ({ selectedOption: undefined }));
    };
    handleDeleteOption = (optionToRemove) => {
        this.setState((prevState) => ({
            options: prevState.options.filter((option) => optionToRemove !== option )
        }));
    }
    handlePick = () => {
        const randomNum = Math.floor(Math.random() * this.state.options.length);
        const option = this.state.options[randomNum];
        
        this.setState(() => ({selectedOption:option}));
    }
    handleAddOption = (option) => {
        if(!option) {
            return 'Enter valid value to add item';
        } else if(this.state.options.indexOf(option) > -1) {
            return 'This option already exists'
        }

        this.setState((prevState) => ({ options: prevState.options.concat(option) }));
    }

    // ======== LIFECYCLE ======== //

    // Load when Component get mounted (created and inserted) to the DOM
    componentDidMount() {
        try {
            const json = localStorage.getItem('options');
            const options = JSON.parse(json);

            if (options) {
                this.setState(() => ({ options }));
            }
        }catch(e) {
            // Do nothing at all
        }
    }
    // Load after Component update/change
    componentDidUpdate(prevProps, prevState) {
        if(prevState.options.length !== this.state.options.length) {
            const json = JSON.stringify(this.state.options);
            localStorage.setItem('options', json);
        }
    }
    // Load when Component get unmounted to the DOM    
    componentWillUnmount() {
        console.log('componentWillUnmount');
    }
    
    render() {
        const subtitle = 'Never put your life in the hand of computer';

        return (
            <div>
                <Header subtitle = {subtitle} />
                <div className="container">
                    <Action
                        handlePick={this.handlePick}
                        hasOptions={this.state.options.length > 0}
                    />
                    <Options
                        options={this.state.options}
                        handleDeleteOptions={this.handleDeleteOptions}
                        handleDeleteOption={this.handleDeleteOption}
                    />
                    <AddOption
                        handleAddOption={this.handleAddOption}
                    />
                    <OptionModal
                        selectedOption = {this.state.selectedOption}
                        handleClearSelectedOption = {this.handleClearSelectedOption}
                    />
                </div>
                
            </div>
        );
    }
}
