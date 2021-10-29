var ListJob = JSON.parse(localStorage.getItem('UserList'));
if (ListJob === null)
    ListJob = [];
function CreateWork(num, Job)
{
    let newWork = document.createElement("div");
    newWork.setAttribute("class","row cell");
    newWork.id = "Job" + num.toString();
        
    let Delete = document.createElement("button");
    Delete.value = num.toString();
    Delete.type="button";
    Delete.setAttribute("onclick", "DeleteItem(this.value)");
    Delete.setAttribute("class", "button");
    Delete.innerText = "X";
        
    let nameWork = document.createElement("p");
    nameWork.innerText = Job;
    nameWork.setAttribute("class", "col contentCell");
    nameWork.setAttribute("id",num);
    nameWork.setAttribute("onclick","Mark(this.id)");
        
    newWork.appendChild(nameWork);
    newWork.appendChild(Delete);

    return newWork;
}
function Additem(){
    let Job = document.getElementById("item").value;
    if (Job !== "")
    {
        let temp = new Object();
        temp.name = Job;
        temp.mark = 0;
        console.log(temp);
        ListJob.push(temp);
        localStorage.setItem('UserList', JSON.stringify(ListJob));
        if (document.getElementById("arr").textContent == "Nothing to do")
            document.getElementById("arr").innerText = "";
        document.getElementById("item").value = "";
        document.getElementById("arr").appendChild(CreateWork(ListJob.length- 1,Job));
    }
}

function ShowList(){
    if (ListJob.length == 0)
        document.getElementById("arr").innerHTML = '<p class="nothing">Nothing to do</p>';
    else{
        document.getElementById("arr").innerHTML = "";
    for(let i = 0; i < ListJob.length; i++)
        document.getElementById("arr").appendChild(CreateWork(i,ListJob[i].name));
    }
}
function DeleteItem(ID){
    ListJob.splice(ID,1);
    localStorage.setItem('UserList', JSON.stringify(ListJob));
    document.getElementById("arr").innerHTML = "";
    ShowList();
}
function Mark(ID){
    if (ListJob[ID].mark === 0)
    {
        ListJob[ID].mark = 1;
        document.getElementById(ID).style.textDecoration = "line-through";
    }
    else 
    {
        ListJob[ID].mark = 0;
        document.getElementById(ID).style.textDecoration = "none";
    }
    localStorage.setItem('UserList', JSON.stringify(ListJob));    
}