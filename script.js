
function saveData()
{
let actor_name,director_name,reviews;
actor_name=document.getElementById("actor_name").value;
director_name=document.getElementById("director_name").value;

reviews=document.getElementById("reviews").value;

let user_records=new Array();
user_records=JSON.parse(localStorage.getItem("users"))?JSON.parse(localStorage.getItem("users")):[]
  user_records.push
  ({
                "actor_name":actor_name,
                "director_name":director_name,
                "reviews":reviews
})
localStorage.setItem("users",JSON.stringify(user_records));
showData();
}

function showData()
{
  document.getElementById("showUsers").innerHTML;
  let user_records=new Array();
user_records=JSON.parse(localStorage.getItem("users"))?JSON.parse(localStorage.getItem("users")):[]
  if(user_records)
  {
    for(let i=0;i<user_records.length;i++)
    {
      let addDiv=document.createElement('div');
  addDiv.className="row";
  addDiv.innerHTML='  <div class="col-sm-4" style="padding: 10px; color:white;">'+user_records[i].actor_name+'</div><div class="col-sm-4" style="padding: 10px;color:white;">'+user_records[i].director_name+'</div><div class="col-sm-4" style="padding: 10px;color:white;">'+user_records[i].reviews+'</div>';
  document.getElementById("showUsers").appendChild(addDiv);

    }
  }
}