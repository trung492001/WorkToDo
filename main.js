let ListJob = JSON.parse(localStorage.getItem('UserList'));
if (ListJob === null)
    ListJob = [];
function CreateWork(num, Job)
{
    var newWork = document.createElement("div");
    newWork.setAttribute("class","row cell");
        
    var Delete = document.createElement("button");
    Delete.value = num.toString();
    Delete.type="button";
    Delete.setAttribute("onclick", "DeleteItem(this.value)");
    Delete.setAttribute("class", "button");
    Delete.innerText = "X";
        
    var nameWork = document.createElement("p");
    nameWork.innerText = Job;
    nameWork.setAttribute("class", "col")
        
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
    console.log(ID);
    ListJob.splice(ID,1);
    localStorage.setItem('UserList', JSON.stringify(ListJob));
    document.getElementById("arr").innerHTML = "";
    ShowList();
}
