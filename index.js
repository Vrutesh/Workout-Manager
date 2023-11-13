//-------------------------- Add Workout----------------------------//


let exercise = document.getElementById("exercise")
let sets = document.getElementById("sets")
let reps = document.getElementById("reps")
let listContainer = document.getElementById("list-container")
let setContainer = document.getElementById("sets-container")

function addExercise() {
    if (exercise.value == "") {
        alert("You must add an exercise")
    }
    else if (sets.value == "") {
        alert("You must add exercise sets")
    }
    else if (reps.value == "") {
        alert("You must add exercise Repitions")
    }
    else {
        let li = document.createElement("li")
        li.innerHTML = `${exercise.value} - ${sets.value} Sets ${reps.value} Repition`;
        listContainer.appendChild(li);
        let span = document.createElement("span");
        span.innerHTML = "\u00d7";
        li.appendChild(span);


        //-------------------------- ToastMessage----------------------------//

        var toast = document.getElementById("toast");
        toast.style.display = "block";

        setTimeout(function () {
            toast.style.display = "none";
        }, 3000);


    }
    saveData();

}

listContainer.addEventListener("click", function (e) {
    if (e.target.tagName === "LI") {
        e.target.classList.toggle("checked");
        saveData()

    }

    else if (e.target.tagName === "SPAN") {
        e.target.parentElement.remove();
        saveData()

    }
}, false)

// -------------------------- localStorage----------------------------//

function saveData() {
    localStorage.setItem("new", listContainer.innerHTML)
}

function showTask() {
    listContainer.innerHTML = localStorage.getItem("new")
}
showTask()

//----------------------------Move to window --------------------------------//

document.getElementById('logout').addEventListener('click', () => {
    localStorage.removeItem("email");
    localStorage.removeItem("password");
    window.location.assign("login.html")
})

