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
    
    handleCalculation = (event) => {
        event.preventDefault();
        const { userInputs, listValues, total, display, count } = this.state;
        const newValue = isNaN(listValues+event.target.textContent) ? event.target.textContent : listValues+event.target.textContent;

        if (!isNaN(Number(newValue))) {
            !isNaN(Number(userInputs[userInputs.length-1])) && userInputs.pop()
            this.setState({
                userInputs: [...userInputs, newValue],
                listValues: newValue,
                display: newValue
            })
        } else {
            if (userInputs[userInputs.length-2] !== "undefined" || !isNaN(Number(userInputs[userInputs.length-2]) || newValue !== "⁺/-" || newValue !== "%" || newValue !== "AC")) {
                if (!isNaN(Number(userInputs[userInputs.length-1]))) {
                    this.setState({
                        userInputs: [...userInputs, newValue],
                        listValues: ""
                    })
                } else if (newValue !== userInputs[userInputs.length-1]) {
                    if (count === 1 && isNaN(Number(userInputs[userInputs.length-1]))) {
                        userInputs.pop()
                        this.setState({
                            userInputs: [...userInputs, newValue],
                            listValues: "",
                            count: 0
                        })
                    } else {
                        this.setState({
                            userInputs: [...userInputs, newValue],
                            listValues: ""
                        })
                    }
                } 
                if (newValue === "＝" || newValue === "＋" || newValue === "－" || newValue === "Ｘ" || newValue === "／") {
                    this.setState({
                        count: count + 1
                    })
                    
                    if (userInputs[userInputs.length-2] === "＋" || userInputs[userInputs.length-1] === "＝" || newValue === "＋") {
                        if ((count === 1 || count === 2) && userInputs.length === 3) {
                            this.setState({
                                total: Number(total) + Number(userInputs[userInputs.length-1]) + Number(userInputs[userInputs.length-3]),
                                display: Number(total) + Number(userInputs[userInputs.length-1]) + Number(userInputs[userInputs.length-3])
                            })
                        } else if (userInputs[userInputs.length-1] === "＝" && newValue !== "＋" && userInputs[userInputs.length-3] === "＋") {
                            this.setState({
                                total: Number(total) + Number(userInputs[userInputs.length-2]),
                                display: Number(total) + Number(userInputs[userInputs.length-2])
                            })
                        } else if (newValue !== "＋") {
                            this.setState({
                                total: (Number(total) + Number(userInputs[userInputs.length-1])),
                                display: (Number(total) + Number(userInputs[userInputs.length-1]))
                            })
                        } else if (newValue === "＋" && isNaN(Number(userInputs[userInputs.length-1]))) {

                        } else if (count > 1 && newValue === "＋" && !isNaN(Number(userInputs[userInputs.length-1]))) {
                            this.setState({
                                total: (Number(total) + Number(userInputs[userInputs.length-1])),
                                display: (Number(display) + Number(userInputs[userInputs.length-1]))
                            })
                        }
                    }
                    if (userInputs[userInputs.length-2] === "－"|| userInputs[userInputs.length-1] === "＝" || newValue === "－") {
                        if ((count === 1 || count === 2) && userInputs.length === 3) {
                            this.setState({
                                total: total + Number(userInputs[userInputs.length-3]) - Number(userInputs[userInputs.length-1]),
                                display: total + Number(userInputs[userInputs.length-3]) - Number(userInputs[userInputs.length-1])
                            })
                        } else if (userInputs[userInputs.length-1] === "＝" && newValue !== "－" && userInputs[userInputs.length-3] === "－") {
                            this.setState({
                                total: (Number(total) - Number(userInputs[userInputs.length-2])),
                                display: (Number(total) - Number(userInputs[userInputs.length-2]))
                            })
                        } else if (newValue !== "－") {
                            this.setState({
                                total: (Number(total) - Number(userInputs[userInputs.length-1])),
                                display: (Number(total) - Number(userInputs[userInputs.length-1]))
                            })
                        } else if (newValue === "－" && isNaN(Number(userInputs[userInputs.length-1]))) {
                
                        } else if (count > 1 && newValue === "－" && !isNaN(Number(userInputs[userInputs.length-1]))) {
                            this.setState({
                                total: Number(total) - Number(userInputs[userInputs.length-1]),
                                display: Number(total) - Number(userInputs[userInputs.length-1])
                            })
                        }
                    }
                    if (userInputs[userInputs.length-2] === "Ｘ") {
                        if (!!Number(userInputs[userInputs.length-1])) {
                            if (count === 1) {
                                this.setState({
                                    total: total + Number(userInputs[userInputs.length-3]) * Number(userInputs[userInputs.length-1]),
                                    display: total + Number(userInputs[userInputs.length-3]) * Number(userInputs[userInputs.length-1])
                                })
                            } else {
                                this.setState({
                                    total: total * Number(userInputs[userInputs.length-1]),
                                    display: total * Number(userInputs[userInputs.length-1])
                                })
                            }
                        }
                    }
                    if (userInputs[userInputs.length-2] === "／") {
                        if (!!Number(userInputs[userInputs.length-1]) && count === 1) {
                            this.setState({
                                total: Math.round(total + Number(userInputs[userInputs.length-3]) / Number(userInputs[userInputs.length-1])),
                                display: Math.round(total + Number(userInputs[userInputs.length-3]) / Number(userInputs[userInputs.length-1]))
                            })
                        } else {
                            if (!Number(userInputs[userInputs.length-1])) {
                                this.setState({
                                    total: 0,
                                    display: "Error"
                                })  
                            } else {
                                this.setState({
                                    total: total / Number(userInputs[userInputs.length-1]),
                                    display: total / Number(userInputs[userInputs.length-1])
                                })
                            }
                        }
                    }
                }
            }
            if (newValue === "AC") {
                if (isNaN(Number(userInputs[userInputs.length-1]))) {
                    this.setState({
                        userInputs: [],
                        listValues: "",
                        total: 0,
                        display: 0,
                        count: 0
                    })
                } else {
                    userInputs.pop()
                    this.setState({
                        userInputs: userInputs,
                        listValues: "",
                        display: 0,
                    })
                }
            }
            if (newValue === "%") {
                this.setState({
                    total: total / 100,
                    display: display / 100
                })
            }
            if (newValue === "⁺/-") {
                if (isNaN(Number(userInputs[userInputs.length-1]))){
                    userInputs.splice(-2, 1, display * -1)
                    this.setState({
                        userInputs: userInputs,
                        display: display * -1,
                    })
                } else {
                    userInputs.splice(-1, 1, display * -1)
                    this.setState({
                        userInputs: userInputs,
                        display: display * -1,
                    })
                }
            }
            
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