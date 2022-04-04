let mainCont = document.getElementById("mainCont");
let userCont = document.getElementById("userCont");
let array = [{
        "sid": "531",
        "name": "Shiva Kumar",
        "branch": "CSE",
        "roomno": "328",
        "cell": "9951039092"
    },
    {
        "sid": "215",
        "name": "Harshith",
        "branch": "CSE",
        "roomno": "328",
        "cell": "8790149430"
    }, {
        "sid": "118",
        "name": "Murali",
        "branch": "CIVIL",
        "roomno": "328",
        "cell": "7396123981"
    }, {
        "sid": "219",
        "name": "Lokesh Varma",
        "branch": "EEE",
        "roomno": "328",
        "cell": "7032204161"
    }, {
        "sid": "532",
        "name": "Shravan Shiva",
        "branch": "CSE",
        "roomno": "328",
        "cell": "9848557469"
    }
];
let array1 = JSON.stringify(array)
localStorage.setItem("array111", array1)

let form = document.getElementById('form');
let inputId = document.getElementById('inputId');
let disp = document.getElementById('disp');
let submitBtn = document.getElementById('submitBtn');
let createBtn = document.getElementById('createBtn');
let goBackBtn = document.getElementById('goBackBtn');
let resultMsg = document.getElementById("resultMsg");

function createResult(obj) {

    let {
        sid,
        name,
        branch,
        roomno,
        cell
    } = obj;

    let head1 = document.createElement("h6");
    head1.textContent = "ID number : " + sid;
    head1.classList.add("mb-4");
    disp.appendChild(head1);

    let head2 = document.createElement("h6");
    head2.textContent = "Name : " + name;
    head2.classList.add("mb-4");
    disp.appendChild(head2);


    let head3 = document.createElement("h6");
    head3.textContent = "Branch    : " + branch;
    head3.classList.add("mb-4");
    disp.appendChild(head3);


    let head4 = document.createElement("h6");
    head4.textContent = "RoomNo    : " + roomno;
    head4.classList.add("mb-4");
    disp.appendChild(head4);


    let head5 = document.createElement("h6");
    head5.textContent = "Cell : " + cell;
    disp.appendChild(head5);

}



form.addEventListener("submit", function(event) {
    event.preventDefault();
});
createBtn.addEventListener("click", function() {
    mainCont.classList.add("d-none");
    userCont.classList.remove("d-none");
    let addUserform = document.getElementById('addUserform');
    let userId = document.getElementById('userId');
    let userName = document.getElementById('userName');
    let userBranch = document.getElementById('userBranch');
    let userRoom = document.getElementById('userRoom');
    let userCell = document.getElementById('userCell');
    userId.value = "";
    userName.value = "";
    userBranch.value = "";
    userRoom.value = "";
    userCell.value = "";
    resultMsg.textContent = "";
    let addDetailsBtn = document.getElementById('addDetailsBtn');
    addDetailsBtn.addEventListener("click", function() {
        let newObject = {
            "sid": userId.value,
            "name": userName.value,
            "branch": userBranch.value,
            "roomno": userRoom.value,
            "cell": userCell.value
        };
        if (userId.value !== "" && userName.value !== "" && userBranch.value !== "" && userRoom.value !== "" && userCell.value !== "") {
            array.push(newObject);
            let string = JSON.stringify(array);
            console.log(string)
            localStorage.setItem("array111", string);
            resultMsg.textContent = "Details added Successfully!!";
            resultMsg.classList.add("create-result", "mt-3", "text-center");

        }
    });
    goBackBtn.addEventListener("click", function() {
        inputId.value = "";
        disp.textContent = "";
        mainCont.classList.remove("d-none");
        userCont.classList.add("d-none");




    });
    addUserform.addEventListener("submit", function(event) {
        event.preventDefault();
    });
})

function onSubmit() {

    let mainArray = localStorage.getItem("array111");
    let mainArray1 = JSON.parse(mainArray);

    console.log(mainArray1)
    let inputValue = inputId.value;
    let count = 0;
    for (let i of mainArray1) {
        if (i["sid"] === inputValue) {
            count = 1;
            disp.textContent = "";
            createResult(i);
        }
        if (count === 0) {
            disp.textContent = "User Not Found";
        }
        if (inputValue === "") {
            disp.textContent = "";
        }
    }
}
submitBtn.addEventListener("click", onSubmit);