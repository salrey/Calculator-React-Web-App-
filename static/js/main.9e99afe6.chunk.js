(this["webpackJsonpcalculator-project"]=this["webpackJsonpcalculator-project"]||[]).push([[0],{13:function(t,e,l){},14:function(t,e,l){},16:function(t,e,l){"use strict";l.r(e);var n=l(1),a=l.n(n),s=l(4),u=l.n(s),c=(l(13),l(14),l(2)),i=l(5),r=l(6),h=l(8),b=l(7),o=l(0),N=function(t){Object(h.a)(l,t);var e=Object(b.a)(l);function l(){var t;return Object(i.a)(this,l),(t=e.call(this)).handleCalculation=function(e){e.preventDefault();var l=t.state,n=l.userInputs,a=l.listValues,s=l.total,u=l.display,i=l.count,r=isNaN(a+e.target.textContent)?e.target.textContent:a+e.target.textContent;isNaN(Number(r))?("undefined"===n[n.length-2]&&isNaN(Number(n[n.length-2])||"\u207a/-"!==r||"%"!==r||"AC"!==r)||(isNaN(Number(n[n.length-1]))?r!==n[n.length-1]&&(1===i&&isNaN(Number(n[n.length-1]))?(n.pop(),t.setState({userInputs:[].concat(Object(c.a)(n),[r]),listValues:"",count:0})):t.setState({userInputs:[].concat(Object(c.a)(n),[r]),listValues:""})):t.setState({userInputs:[].concat(Object(c.a)(n),[r]),listValues:""}),"\uff1d"!==r&&"\uff0b"!==r&&"\uff0d"!==r&&"\uff38"!==r&&"\uff0f"!==r||(t.setState({count:i+1}),"\uff0b"!==n[n.length-2]&&"\uff1d"!==n[n.length-1]&&"\uff0b"!==r||(1!==i&&2!==i||3!==n.length?"\uff1d"===n[n.length-1]&&"\uff0b"!==r&&"\uff0b"===n[n.length-3]?t.setState({total:Number(s)+Number(n[n.length-2]),display:Number(s)+Number(n[n.length-2])}):"\uff0b"!==r?t.setState({total:Number(s)+Number(n[n.length-1]),display:Number(s)+Number(n[n.length-1])}):"\uff0b"===r&&isNaN(Number(n[n.length-1]))||i>1&&"\uff0b"===r&&!isNaN(Number(n[n.length-1]))&&t.setState({total:Number(s)+Number(n[n.length-1]),display:Number(u)+Number(n[n.length-1])}):t.setState({total:Number(s)+Number(n[n.length-1])+Number(n[n.length-3]),display:Number(s)+Number(n[n.length-1])+Number(n[n.length-3])})),"\uff0d"!==n[n.length-2]&&"\uff1d"!==n[n.length-1]&&"\uff0d"!==r||(1!==i&&2!==i||3!==n.length?"\uff1d"===n[n.length-1]&&"\uff0d"!==r&&"\uff0d"===n[n.length-3]?t.setState({total:Number(s)-Number(n[n.length-2]),display:Number(s)-Number(n[n.length-2])}):"\uff0d"!==r?t.setState({total:Number(s)-Number(n[n.length-1]),display:Number(s)-Number(n[n.length-1])}):"\uff0d"===r&&isNaN(Number(n[n.length-1]))||i>1&&"\uff0d"===r&&!isNaN(Number(n[n.length-1]))&&t.setState({total:Number(s)-Number(n[n.length-1]),display:Number(s)-Number(n[n.length-1])}):t.setState({total:s+Number(n[n.length-3])-Number(n[n.length-1]),display:s+Number(n[n.length-3])-Number(n[n.length-1])})),"\uff38"===n[n.length-2]&&Number(n[n.length-1])&&(1===i?t.setState({total:s+Number(n[n.length-3])*Number(n[n.length-1]),display:s+Number(n[n.length-3])*Number(n[n.length-1])}):t.setState({total:s*Number(n[n.length-1]),display:s*Number(n[n.length-1])})),"\uff0f"===n[n.length-2]&&(Number(n[n.length-1])&&1===i?t.setState({total:Math.round(s+Number(n[n.length-3])/Number(n[n.length-1])),display:Math.round(s+Number(n[n.length-3])/Number(n[n.length-1]))}):Number(n[n.length-1])?t.setState({total:s/Number(n[n.length-1]),display:s/Number(n[n.length-1])}):t.setState({total:0,display:"Error"})))),"AC"===r&&(isNaN(Number(n[n.length-1]))?t.setState({userInputs:[],listValues:"",total:0,display:0,count:0}):(n.pop(),t.setState({userInputs:n,listValues:"",display:0}))),"%"===r&&t.setState({total:s/100,display:u/100}),"\u207a/-"===r&&(isNaN(Number(n[n.length-1]))?(n.splice(-2,1,-1*u),t.setState({userInputs:n,display:-1*u})):(n.splice(-1,1,-1*u),t.setState({userInputs:n,display:-1*u})))):(!isNaN(Number(n[n.length-1]))&&n.pop(),t.setState({userInputs:[].concat(Object(c.a)(n),[r]),listValues:r,display:r}))},t.state={userInputs:[],listValues:"",total:0,display:0,count:0},t}return Object(r.a)(l,[{key:"render",value:function(){return Object(o.jsxs)("form",{children:[Object(o.jsx)("div",{className:"display",children:this.state.display.toLocaleString()}),Object(o.jsx)("div",{className:"history"}),Object(o.jsx)("button",{className:"topBar",onClick:this.handleCalculation,children:"AC"}),Object(o.jsx)("button",{className:"topBar",onClick:this.handleCalculation,children:"\u207a/-"}),Object(o.jsx)("button",{className:"topBar",onClick:this.handleCalculation,children:"%"}),Object(o.jsx)("button",{className:"operand",onClick:this.handleCalculation,children:"\uff0f"}),Object(o.jsx)("button",{className:"number",onClick:this.handleCalculation,children:"7"}),Object(o.jsx)("button",{className:"number",onClick:this.handleCalculation,children:"8"}),Object(o.jsx)("button",{className:"number",onClick:this.handleCalculation,children:"9"}),Object(o.jsx)("button",{className:"operand",onClick:this.handleCalculation,children:"\uff38"}),Object(o.jsx)("button",{className:"number",onClick:this.handleCalculation,children:"4"}),Object(o.jsx)("button",{className:"number",onClick:this.handleCalculation,children:"5"}),Object(o.jsx)("button",{className:"number",onClick:this.handleCalculation,children:"6"}),Object(o.jsx)("button",{className:"operand",onClick:this.handleCalculation,children:"\uff0d"}),Object(o.jsx)("button",{className:"number",onClick:this.handleCalculation,children:"1"}),Object(o.jsx)("button",{className:"number",onClick:this.handleCalculation,children:"2"}),Object(o.jsx)("button",{className:"number",onClick:this.handleCalculation,children:"3"}),Object(o.jsx)("button",{className:"operand",onClick:this.handleCalculation,children:"\uff0b"}),Object(o.jsx)("button",{className:"zeroNumber",onClick:this.handleCalculation,children:"0"}),Object(o.jsx)("button",{className:"number",children:"."}),Object(o.jsx)("button",{className:"operand",type:"submit",onClick:this.handleCalculation,children:"\uff1d"})]})}}]),l}(n.Component),m=function(){return Object(o.jsx)("div",{className:"App",children:Object(o.jsx)("div",{className:"calculator",children:Object(o.jsx)(N,{})})})},d=function(t){t&&t instanceof Function&&l.e(3).then(l.bind(null,17)).then((function(e){var l=e.getCLS,n=e.getFID,a=e.getFCP,s=e.getLCP,u=e.getTTFB;l(t),n(t),a(t),s(t),u(t)}))};u.a.render(Object(o.jsx)(a.a.StrictMode,{children:Object(o.jsx)(m,{})}),document.getElementById("root")),d()}},[[16,1,2]]]);
//# sourceMappingURL=main.9e99afe6.chunk.js.map