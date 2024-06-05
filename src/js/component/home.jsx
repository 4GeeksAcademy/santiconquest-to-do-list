import React, { useState } from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
const Home = () => {
	const [task, setTask] = useState("");
	const [todos, setTodos] = useState([]);
	return (
		<div className="text-center p-5">
			<h1 className="text-center mt-5">Todo list!</h1>
			<ul>
				<li>
					<input 
						type="text" 
						placeholder="Ingrese tarea a realizar" 
						onChange={(event)=> {setTask(event.target.value)}}
						value={task}
						onKeyDown={(event)=>{if (event.key == "Enter"){
							 setTodos(todos.concat(task));
							setTask("");		
					}}}
					/>
				</li>
				{todos.map((item,index) => (
					<li className="d-flex justify-content-between">
						 {item} {" "}
						 <i 
						 class="fas fa-times" 
						onClick={()=> setTodos(todos.filter(
								(t,currentIndex) => index!=currentIndex
				))}>
						 </i>
					</li>
				))}
			</ul>
			<span>
				{todos.length} tareas pendientes
			</span>
		</div>
		
	);
};

export default Home;
