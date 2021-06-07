let sub=document.querySelectorAll(".submit-btn");
		let salarySlip=[];
		let name=document.getElementById('name');
		let sno=document.getElementById('salaryNo');
		let salary=document.getElementById('salary');
		sub[0].addEventListener("click",submits1);
		let n;
		let content=document.querySelectorAll(".input");
		function submits1()
		{
			n=Number(document.getElementById('noOfEmployee').value);
			if(Number(n)>0)
			{
				content[0].style="display:none;";
				content[1].style="display:flex";
				sub[1].setAttribute("onClick","submits2()");
			}
			else
			{
				alert("Error");
			}
			
		}
		function submits2()
		{
			if(n>=1)
			{
				if(name.value!="" && isNaN(Number(name.value)) && !isNaN(Number(sno.value)) && Number(salary.value)>0)
				{
					n--;
					let obj=new Object();
					obj["Name"]=name.value;
					obj["sno"]=sno.value;
					obj["salary"]=salary.value;
					salarySlip.push(obj);
					name.value="";
					sno.value="";
					salary.value="";
					if(n==0)
					{
						content[1].style="display:none;";
						display();
					}
				}
				else
				{
					alert("Error !!");
				}
			}
		};
		function display()
		{
			let output=document.getElementsByClassName("output")[0];
			output.style="display:grid;";
			output.innerHTML="";
			document.querySelectorAll(".header h1")[1].innerText="Salary";
			salarySlip.forEach(function(value)
			{
				let hal=value["salary"]*5/100;
				let tax=value["salary"]*4/100;
				let netSalary=value["salary"]+hal-tax
				output.innerHTML=output.innerHTML+'<div><table class="display" border="1px" cellspacing="0"><tr><th colspan="5">'+value["Name"]+'</th></tr><tr><td>Salary Number</td><td>Salary</td><td>House Allowance</td><td>Tax</td><td>Net Salary</td></tr><tr><td>'+value["sno"]+'</td><td>'+value["salary"]+'</td><td>'+hal+'</td><td>'+tax+'</td><td>'+netSalary+'</td></tr></table></div>';
			});
		}