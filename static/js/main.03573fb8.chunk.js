(this.webpackJsonptodolist=this.webpackJsonptodolist||[]).push([[0],{34:function(t,e,n){t.exports=n(63)},62:function(t,e,n){},63:function(t,e,n){"use strict";n.r(e);var o=n(0),a=n.n(o),r=n(30),c=n.n(r),l=n(19),i=n(6),s=n(7),d=n(9),p=n(8),u=n(10),m=n(14),h=n(11);var f={background:"teal",color:"#fff",textAlign:"center",padding:"10px"},b={color:"#fff",textDecoration:"none"},y=function(){return a.a.createElement("header",{style:f},a.a.createElement("h1",null,"My Todolist"),a.a.createElement(m.b,{to:"/ReactApp",style:b},"Home")," | ",a.a.createElement(m.b,{to:"/ReactApp/about",style:b},"About"))},E=function(t){function e(){var t,n;Object(i.a)(this,e);for(var o=arguments.length,a=new Array(o),r=0;r<o;r++)a[r]=arguments[r];return(n=Object(d.a)(this,(t=Object(p.a)(e)).call.apply(t,[this].concat(a)))).setStyle=function(){return{background:"#f4f4f4",padding:"10px",borderBottom:"2px #ccc dotted",textDecoration:n.props.todo.completed?"line-through":"none"}},n}return Object(u.a)(e,t),Object(s.a)(e,[{key:"render",value:function(){var t=this.props.todo,e=t.id,n=t.title;return a.a.createElement("div",{style:this.setStyle()},a.a.createElement("p",null,a.a.createElement("input",{type:"checkbox",onChange:this.props.markComplete.bind(this,e)})," "," ",n,a.a.createElement("button",{style:j,onClick:this.props.delTodo.bind(this,e)},"\xd7")))}}]),e}(o.Component),j={background:"crimson",color:"#fff",border:"none",padding:"5px 10px",borderRadius:"50%",cursor:"pointer",float:"right"},v=E,g=function(t){function e(){return Object(i.a)(this,e),Object(d.a)(this,Object(p.a)(e).apply(this,arguments))}return Object(u.a)(e,t),Object(s.a)(e,[{key:"render",value:function(){var t=this;return this.props.todos.map((function(e){return a.a.createElement(v,{key:e.id,todo:e,markComplete:t.props.markComplete,delTodo:t.props.delTodo})}))}}]),e}(o.Component),O=n(33),k=function(t){function e(){var t,n;Object(i.a)(this,e);for(var o=arguments.length,a=new Array(o),r=0;r<o;r++)a[r]=arguments[r];return(n=Object(d.a)(this,(t=Object(p.a)(e)).call.apply(t,[this].concat(a)))).state={title:""},n.onSubmit=function(t){t.preventDefault(),n.props.AddTodo(n.state.title),n.setState({title:""})},n.onChange=function(t){n.setState(Object(O.a)({},t.target.name,t.target.value))},n}return Object(u.a)(e,t),Object(s.a)(e,[{key:"render",value:function(){return a.a.createElement("form",{onSubmit:this.onSubmit,style:{display:"flex"}},a.a.createElement("input",{type:"text",name:"title",placeholder:"Add new todo task...",onChange:this.onChange,style:{flex:"10",padding:"5px"},value:this.state.title}),a.a.createElement("input",{type:"submit",value:"Submit",className:"btn"}))}}]),e}(o.Component);var C=function(){return a.a.createElement(a.a.Fragment,null,a.a.createElement("div",{className:"container"},a.a.createElement("h1",null,"About"),a.a.createElement("p",null,"This is the PinoyFreeCoder Todo App")))},x=n(15),A=n.n(x),T=(n(62),function(t){function e(){var t,n;Object(i.a)(this,e);for(var o=arguments.length,a=new Array(o),r=0;r<o;r++)a[r]=arguments[r];return(n=Object(d.a)(this,(t=Object(p.a)(e)).call.apply(t,[this].concat(a)))).state={todos:[]},n.markComplete=function(t){n.setState({todos:n.state.todos.map((function(e){return e.id===t&&(e.completed=!e.completed),e}))})},n.delTodo=function(t){A.a.delete("https://jsonplaceholder.typicode.com/todos/".concat(t)).then((function(e){return n.setState({todos:Object(l.a)(n.state.todos.filter((function(e){return e.id!==t})))})}))},n.addTodo=function(t){A.a.post("https://jsonplaceholder.typicode.com/todos",{title:t,completed:!1}).then((function(t){return n.setState({todos:[].concat(Object(l.a)(n.state.todos),[t.data])})}))},n}return Object(u.a)(e,t),Object(s.a)(e,[{key:"componentDidMount",value:function(){var t=this;A.a.get("https://jsonplaceholder.typicode.com/todos?_limit=10").then((function(e){return t.setState({todos:e.data})}))}},{key:"render",value:function(){var t=this;return console.log(this.state.todos),a.a.createElement(m.a,null,a.a.createElement("div",{className:"App"},a.a.createElement(y,null),a.a.createElement(h.a,{exact:!0,path:"/ReactApp",render:function(e){return a.a.createElement(a.a.Fragment,null,a.a.createElement("div",{className:"container"},a.a.createElement(k,{AddTodo:t.addTodo}),a.a.createElement(g,{todos:t.state.todos,markComplete:t.markComplete,delTodo:t.delTodo})))}}),a.a.createElement(h.a,{path:"/ReactApp/about",component:C})))}}]),e}(o.Component));c.a.render(a.a.createElement(T,null),document.getElementById("root"))}},[[34,1,2]]]);
//# sourceMappingURL=main.03573fb8.chunk.js.map