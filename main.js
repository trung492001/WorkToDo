let ListJob = JSON.parse(localStorage.getItem('UserList'));
if (ListJob === null)
    ListJob = [];
function CreateWork(num, Job)
{
    var newWork = document.createElement("div");
    newWork.setAttribute("class","row cell");
    newWork.id = "Job" + num.toString();
        
    var Delete = document.createElement("button");
    Delete.value = num.toString();
    Delete.type="button";
    Delete.setAttribute("onclick", "DeleteItem(this.value)");
    Delete.setAttribute("class", "button");
    Delete.innerText = "X";
        
    var nameWork = document.createElement("p");
    nameWork.innerText = Job;
    nameWork.setAttribute("class", "col contentCell");
    nameWork.setAttribute("id",num);
    nameWork.setAttribute("onclick","Mark(this.id)");
        
    newWork.appendChild(nameWork);
    newWork.appendChild(Delete);

    return newWork;
}
function Additem(){
    const Job = document.getElementById("item").value;
    if (Job !== "")
    {
        const temp = new Object();
        temp.name = Job;
        temp.mark = 0;
        console.log(temp);
        ListJob.push(temp);
        localStorage.setItem('UserList', JSON.stringify(ListJob));
        document.getElementById("arr").appendChild(CreateWork(ListJob.length- 1,Job));
    }
}

function ShowList(){
    for(let i = 0; i < ListJob.length; i++)
        document.getElementById("arr").appendChild(CreateWork(i,ListJob[i].name));
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
        document.getElementById("Job"+ID).style.backgroundColor = "tomato";
    }
    else 
    {
        ListJob[ID].mark = 0;
        document.getElementById("Job"+ID).style.backgroundColor = "white";
    }
    localStorage.setItem('UserList', JSON.stringify(ListJob));    
}