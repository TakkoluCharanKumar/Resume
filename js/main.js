//let i;
//window.onload=function(){
//	var url=document.location.href;
//	var params=url.split('?');
//	let i=params[1];
//	console.log(i);
//}
//document.write("Hi");
function getJSON(file){
	return new Promise((resolve,reject)=>{
		return fetch(file).then(response=>{
			if(response.ok){
				resolve(response.json());
				}else{
					reject(new Error('error'));
					}
			})
	})
}
let i=Number(localStorage.getItem("last"));
//document.write(i);
getJSON("data.json").then(data=>{
	console.log(data);
	basic_details(data.details,i);
   // trainers_details(data.trainers);
	})
var main=document.querySelector(".parent")
function basic_details(SDC,i){
	var first=document.createElement("div");
	first.className="firstHalf card";
	main.appendChild(first);

    var img=document.createElement("img");
	img.src=SDC[i].img;
	img.setAttribute("alt","Profile")
    img.className='card-img-top w-50 rounded-circle border border-success mr-auto ml-auto';
	first.appendChild(img);

	var cbody=document.createElement("div");
	cbody.className="card-body";
	first.append(cbody);

	var h=document.createElement("h3");
	h.textContent=SDC[i].name;
	h.className="font-weight-bold text-uppercase";
	cbody.appendChild(h);

	var h=document.createElement("h5");
	h.textContent=SDC[i].role;
	h.className="text-uppercase";
	cbody.appendChild(h);

	var proskil=document.createElement("div");
	proskil.classList.add("proSkills");
	cbody.appendChild(proskil);

	var p=document.createElement("h5");
	p.textContent="Professional Skills";
	proskil.appendChild(p);
	
	var ul=document.createElement("ul");
	ul.className="list-group";
	for(var k=0;k<SDC[i].skills.length;k++){
		var li=document.createElement("li");
		li.className="list-group-item";
		li.innerHTML=SDC[i].skills[k++];
		var span=document.createElement("span");
		span.textContent=SDC[i].skills[k];
		span.className="badge badge-success badge-pill float-right";
		li.appendChild(span);
		ul.appendChild(li);
	}
	proskil.appendChild(ul);

	var perskil=document.createElement("div");
	perskil.className="perSkills";
	cbody.appendChild(perskil);

	var p=document.createElement("h5");
	p.textContent="Personal Skills";
	perskil.appendChild(p);

	var ul=document.createElement("ul");
	ul.setAttribute("style","list-style-type:disc");
	for(var k=0;k<SDC[i].pskills.length;k++){
		var li=document.createElement("li");
		li.innerText=SDC[i].pskills[k];
		ul.appendChild(li);
	}
	perskil.appendChild(ul);

	//Second Half
	var second=document.createElement("div");
	second.className="secondHalf card";
	main.appendChild(second);

	var scbody=document.createElement("div");
	scbody.className="card-body";
	second.appendChild(scbody);

	var dl=document.createElement("dl");
	scbody.appendChild(dl);

	var dt=document.createElement("dt");
	dt.textContent="Carrier Objective:";
	dl.appendChild(dt);

	var dd=document.createElement("dd");
	dd.textContent=SDC[i].carrObj;
	dl.appendChild(dd);

	var h=document.createElement("h6");
	h.textContent="Education:";
	h.className="font-weight-bold";
	scbody.appendChild(h);

	var table=document.createElement("table");
	table.className="table table-responsive table-dark"
	var row="<tr><th>SNo</th><th>School/Institute/Organization Name</th><th>Qualification</th><th>CGPA/PER</th><th>Duaration</th></tr>";
	for(var k in SDC[i].education){
		row+="<tr><td>"+SDC[i].education[k].sno+"</td><td>"+SDC[i].education[k].col+"</td><td>"+SDC[i].education[k].branch+"</td><td>"+SDC[i].education[k].per+"</td><td>"+SDC[i].education[k].due+"</td></tr>";
	}
	table.innerHTML=row;
	scbody.appendChild(table);

	if(i===0){
		var h=document.createElement("h6");
		h.textContent="Projects:";
		h.className="font-weight-bold";
		scbody.appendChild(h);

		var ol=document.createElement("ol");
		ol.setAttribute("type","I");
		for(var k in SDC[i].proj){
			var li=document.createElement("li");
			li.innerHTML=SDC[i].proj[k];
			ol.appendChild(li);
		}
		scbody.appendChild(ol);
	}
	var h=document.createElement("h6");
	h.textContent="Contact Details:";
	h.className="font-weight-bold";
	scbody.appendChild(h);

	var row=document.createElement("div");
	row.className="row";
	scbody.appendChild(row);

	var div=document.createElement("div");
	div.textContent="Phone No:";
	div.className="col-sm-2";
	row.appendChild(div);

	var div=document.createElement("div");
	div.textContent=SDC[i].phone;
	div.className="col-sm-4";
	row.appendChild(div);

	var div=document.createElement("div");
	div.textContent="GitHub:";
	div.className="col-sm-2";
	row.appendChild(div);

	var div=document.createElement("div");
	var a=document.createElement("a");
	a.setAttribute("href",SDC[i].glink);
	a.setAttribute("target","_blank");
	a.textContent=SDC[i].glink;
	div.appendChild(a);
	div.className="col-sm-4";
	row.appendChild(div);

	var div=document.createElement("div");
	div.textContent="Email:";
	div.className="col-sm-2";
	row.appendChild(div);

	var div=document.createElement("div");
	div.textContent=SDC[i].email;
	div.className="col-sm-4";
	row.appendChild(div);

	var div=document.createElement("div");
	div.textContent="LinkedIn:";
	div.className="col-sm-2";
	row.appendChild(div);

	var div=document.createElement("div");
	var a=document.createElement("a");
	a.setAttribute("href",SDC[i].linkedin);
	a.setAttribute("target","_blank");
	a.textContent=SDC[i].linkedin;
	div.appendChild(a);
	div.className="col-sm-4";
	row.appendChild(div);

	if(i===1){
		var h=document.createElement("h6");
		h.textContent="Address:";
		h.className="font-weight-bold";
		scbody.appendChild(h);

		var addr=document.createElement("address");
		var str="";
		for(var k in SDC[i].addr){
			str+=SDC[i].addr[k]+",<br>";
		}
		addr.innerHTML=str;
		scbody.appendChild(addr);
	}

} 