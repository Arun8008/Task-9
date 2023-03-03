        let add1 = document.getElementById("add");
		let sub1 = document.getElementById("sub");
		let input = document.getElementById("inp");
		let right = document.getElementById("right");
		
		add1.addEventListener("click",addin);
		sub1.addEventListener("click",subin);
		
		function addin(){
			input.value=Number(input.value)+1;
			readPost();
		}
		function subin(){
			if(input.value>0){
				input.value=Number(input.value)-1;
			}
			remove();
		}

	let data={};
		function readPost(){
			data['restaurantname']="SS Hyderabad Briyani";
			data['amount']="₹350 FOR TWO";
			console.log(data);
			createPost();
		} 
		function createPost(){
			right.innerHTML =`<div>
				<p>${data.restaurantname}</p>
				<p>${data.amount}</p>
				</div>`;
			right.style.boxShadow = "0 0 10px #ccc";
			right.style.padding = "20px";
			
			
		}
		function remove(){
			right.remove();
		}