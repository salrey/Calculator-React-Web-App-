import { Component } from "react";

class Form extends Component {
    constructor() {
        super()
        this.state = {
            userInputs: [],
            listValues: "",
            total: 0,
            display: 0,
            count: 0
        }
    }
    
    

    
    render() {
     
        return (
            <form>
                <div className="display">{this.state.display.toLocaleString()}</div>
                <div className="history"></div>
                <button className="topBar" onClick={this.handleCalculation}>AC</button>
                <button className="topBar" onClick={this.handleCalculation}>⁺/-</button>
                <button className="topBar" onClick={this.handleCalculation}>%</button>
                <button className="operand" onClick={this.handleCalculation}>／</button>
                <button className="number" onClick={this.handleCalculation}>7</button>
                <button className="number" onClick={this.handleCalculation}>8</button>
                <button className="number" onClick={this.handleCalculation}>9</button>
                <button className="operand" onClick={this.handleCalculation}>Ｘ</button>
                <button className="number" onClick={this.handleCalculation}>4</button>
                <button className="number" onClick={this.handleCalculation}>5</button>
                <button className="number" onClick={this.handleCalculation}>6</button>
                <button className="operand" onClick={this.handleCalculation}>－</button>
                <button className="number" onClick={this.handleCalculation}>1</button>
                <button className="number" onClick={this.handleCalculation}>2</button>
                <button className="number" onClick={this.handleCalculation}>3</button>
                <button className="operand" onClick={this.handleCalculation}>＋</button>
                <button className="zeroNumber" onClick={this.handleCalculation}>0</button>
                <button className="number">.</button>
                <button className="operand"type="submit" onClick={this.handleCalculation}>＝</button>
            </form>
        )
    }
}

export default Form;