const request = fetch('https://api.msigma.in/btech/v2/branches/');
//console.log(request);


const courseBox = document.createElement("div");

request
    .then(res => res.json())
    .then((data) => {
        //console.log(data.branches)

        const courseBoxContainer = document.getElementById('courses-container');

        for (i = 0; i < 10; i++) {

            //Creating Elements
            let courseBox = document.createElement("div");
            let courseShort = document.createElement("h4");
            let courseFull = document.createElement("span");
            let courseBoxBtn = document.createElement("button");
            let courseBoxFee = document.createElement("p");

            //Adding class names
            courseBox.classList.add('courses');
            courseShort.classList.add('course-short');
            courseFull.classList.add('course-full');
            courseBoxBtn.classList.add('button');
            courseBoxFee.classList.add('fee');

            //Adding data
            courseShort.textContent = data.branches[i].short;
            courseFull.textContent = data.branches[i].name;
            courseBoxBtn.textContent = "Apply Now";
            courseBoxFee.textContent = "Fee starting at ₹799 per subject";


            //Main Container
            courseBoxContainer.appendChild(courseBox);

            //Course container
            courseBox.appendChild(courseShort);
            courseBox.appendChild(courseFull);
            courseBox.appendChild(courseBoxBtn);
            courseBox.appendChild(courseBoxFee);

        }


    })

