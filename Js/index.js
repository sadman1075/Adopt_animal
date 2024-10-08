const Loaddata = async () => {
    const loader = document.getElementById("loading")
    loader.style.display = "block"

    setTimeout(() => {
        fetchData()
    }, 2000)

    async function fetchData() {

        const res = await fetch("https://openapi.programming-hero.com/api/peddy/pets")
        const data = await res.json()
        const pets = data.pets;
        const divcontainer = document.getElementById("divpets")
        divcontainer.innerHTML = ""
        pets.forEach(pet => {
            const div = document.createElement("div")
            div.innerHTML = `
        <div class="lg:flex gap-4 ">
                <div class=" mt-6 w-full ">
                    <div class="card bg-base-100 w-full   border-2">
                        <figure class="px-3 pt-3 h-56">
                            <img src="${pet.image || " Not available"}"
                                alt="Shoes" class="rounded-xl"  />
                        </figure>
                        <div class="card-body  >
                      <h2 class="card-title">${pet.pet_name || " Not available"}</h2>
                            <p><i class="fa-solid fa-border-all"></i> Breed:${pet.breed || " Not available"}</p>
                            <p><i class="fa-regular fa-calendar-days"></i> Birth:${pet.date_of_birth || " Not available"} </p>
                            <p><i class="fa-solid fa-venus-double"></i> Gender:${pet.gender || " Not available"} </p>
                            <p><i class="fa-solid fa-dollar-sign"></i> Price:${pet.price || " Not available"}</p>
                            <div class="divider"></div>
                            <div class="card-actions flex justify-around">
                                <button class="btn text-btn-1 font-bold bg-white border-2  " id="add" onclick="addtocart('${pet.image || "Not available"}')"><i
                                        class="fa-solid fa-heart text-xl text-red-500"></i></button>
                                <button class="btn text-btn-1 font-bold bg-white border-2 hover:bg-btn-1 hover:text-white " onclick="Adoptbuttonhandale()">Adopt</button>
                                <button class="btn text-btn-1 font-bold bg-white border-2 hover:bg-btn-1 hover:text-white " id="s" onclick="Detailbuttonhandle('${pet.image}','${pet.pet_name}','${pet.breed}','${pet.date_of_birth}','${pet.gender}','${pet.price}','${pet.petId}')">Details</button>
                            </div>
                        </div>
                    </div>

                </div>

            </div>
        </div>
        
        `


            divcontainer.append(div)

            loader.style.display = "none"


        });
    }

}
Loaddata()



const Detailbuttonhandle = async (image, name, breed, birth, gender, price, id) => {


    const res = await fetch(`https://openapi.programming-hero.com/api/peddy/pet/${id}`)
    const data = await res.json()
    const information = data.petData.pet_details;
    // console.log(details)
    const indexinside = document.getElementById('inside_modal')
    indexinside.innerHTML = ""
    const inside = document.createElement("inside_modal")
    inside.innerHTML = `
    <div>
    <img class="mx-auto " width="100%" src=${image || " Not available"}>
    <h1 class="text-2xl font-bold mt-4 mb-4">${name || " Not available"}</h1>
    <p><i class="fa-solid fa-border-all"></i> Breed:${breed || " Not available"}</p>
    <p><i class="fa-regular fa-calendar-days"></i> Birth:${birth || " Not available"} </p>
    <p><i class="fa-solid fa-venus-double"></i> Gender:${gender || " Not available"} </p>
    <p><i class="fa-solid fa-dollar-sign"></i> Price:${price || " Not available"}</p>
    
    <h1 class="mt-4 mb-4 text-2xl font-bold">
    Detail Information:
    </h1>
    <p>${information || " Not available"}</p>
       
    </div>
    `

    indexinside.append(inside)

    document.getElementById("my_modal_1").showModal()
}

// adoped animal

const Adoptbuttonhandale = () => {
    document.getElementById("my_modal_2").showModal()
    const timemessare = document.getElementById("showtime")
    timemessare.innerHTML = ""
    let count = 4;
    const time = setInterval(() => {
        timemessare.innerText = ""
        count = count - 1;
        if (count <= 1) {
            clearInterval(time)
        }

        const createnewdiv = document.createElement("div")
        createnewdiv.innerHTML = `
        <span  class="text-center font-bold">${count}</span>
        `

        timemessare.appendChild(createnewdiv)


    }, 1000)

    setTimeout(() => {
        document.getElementById("my_modal_2").close()
    }, 3000)





}





const addtocart = (image) => {

    const divcollect = document.createElement("div")
    divcollect.innerHTML = `
                <div>
                    <img class="rounded-xl" src="${image}">
                </div>
`
    divtotal.append(divcollect)

}


const Loadcategory = async () => {
    const button_group = document.getElementById("button_group")

    const res = await fetch("https://openapi.programming-hero.com/api/peddy/categories")
    const data = await res.json()
    const categories = data.categories;

    categories.forEach(category => {
        const categorybtn = document.createElement("div")
        categorybtn.innerHTML = `
        
        <button class="btn rounded-full border-2 border-btn-1 text-xl font-bold w-full  lg:w-48  h-20  mt-10" onclick="details('${category.category}')"><img class="" src="${category.category_icon}" alt="" srcset="">${category.category}</button>

        `
        button_group.append(categorybtn);
    })


}

Loadcategory()



const details = async (specific) => {
    const loader = document.getElementById("loading")
    const divcontainer = document.getElementById("divpets")
    divcontainer.innerHTML = "";
    loader.style.display = "block"

    setTimeout(() => {
        specificdatafetch();
    }, 2000)

    const specificdatafetch = async () => {
        const res = await fetch(`https://openapi.programming-hero.com/api/peddy/category/${specific}`)
        const data = await res.json()
        const infos = data.data
        console.log(infos)
        const divcontainer = document.getElementById("divpets")
        divcontainer.innerHTML = "";

        if (infos.length != 0) {

            infos.forEach(info => {
                console.log(info)
                const div1 = document.createElement("div")
                div1.innerHTML = `
     <div class="lg:flex gap-4 ">
                <div class=" mt-6 w-full ">
                    <div class="card bg-base-100 w-full   border-2">
                        <figure class="px-3 pt-3 h-56">
                            <img src="${info.image || " Not available"}"
                                alt="Shoes" class="rounded-xl"  />
                        </figure>
                        <div class="card-body  >
                      <h2 class="card-title">${info.pet_name || " Not available"}</h2>
                            <p><i class="fa-solid fa-border-all"></i> Breed:${info.breed || " Not available"}</p>
                            <p><i class="fa-regular fa-calendar-days"></i> Birth:${info.date_of_birth || " Not available"} </p>
                            <p><i class="fa-solid fa-venus-double"></i> Gender:${info.gender || " Not available"} </p>
                            <p><i class="fa-solid fa-dollar-sign"></i> Price:${info.price || " Not available"}</p>
                            <div class="divider"></div>
                            <div class="card-actions flex justify-around">
                                <button class="btn text-btn-1 font-bold bg-white border-2 " id="add" onclick="addtocart('${info.image || " Not available"}')"><i
                                        class="fa-solid fa-heart text-xl text-red-500"></i></button>
                                <button class="btn text-btn-1 font-bold bg-white border-2 ">Adopt</button>
                                <button class="btn text-btn-1 font-bold bg-white border-2" onclick="Detailbuttonhandle('${info.image}','${info.pet_name}','${info.breed}','${info.date_of_birth}','${info.gender}','${info.price}','${info.petId}')">Details</button>
                            </div>
                        </div>
                    </div>

                </div>

            </div>
        </div>
    
    
    `

                divcontainer.append(div1)

            })

        }

        else {
            const errormessage = document.getElementById("error")
            errormessage.innerHTML = "";

            const error = document.createElement("div")
            error.innerHTML = `
           <div class="p-20 w-3/4">
            <img class="mx-auto" src="./images/error.webp" alt="" srcset="">
            <h1 class="text-3xl font-bold text-center mt-4">No Information Available</h1>
            <p class="text-center mt-4">It is a long established fact that a reader will be distracted by the
                readable content of a page when looking at
                its layout. The point of using Lorem Ipsum is that it has a.</p>
        </div>
    `
            errormessage.append(error)
        }

        loader.style.display = "none"
    }
}

let sortpets = []

document.getElementById("sort").addEventListener("click", async () => {
    const divcontainer = document.getElementById("divpets")
    divcontainer.innerHTML = ""
    const loader = document.getElementById("loading")
    loader.style.display = "block"

    setTimeout(() => {
        sortdatafetched()
    }, 2000)

    const sortdatafetched = async () => {


        const res = await fetch('https://openapi.programming-hero.com/api/peddy/pets')
        const data = await res.json()
        sortpets = data.pets;
        // console.log(sortpets)
        const divcontainer = document.getElementById("divpets")
        divcontainer.innerHTML = ""
        sortpets.sort((a, b) => (Number(b.price)) - (Number(a.price)))
        sortpets.forEach(sortpet => {

            const div3 = document.createElement("div")
            div3.innerHTML = `
        <div class="lg:flex gap-4 ">
                <div class=" mt-6 w-full ">
                    <div class="card bg-base-100 w-full   border-2">
                        <figure class="px-3 pt-3 h-56">
                            <img src="${sortpet.image || " Not available"}"
                                alt="Shoes" class="rounded-xl"  />
                        </figure>
                        <div class="card-body  >
                      <h2 class="card-title">${sortpet.pet_name || " Not available"}</h2>
                            <p><i class="fa-solid fa-border-all"></i> Breed:${sortpet.breed || " Not available"}</p>
                            <p><i class="fa-regular fa-calendar-days"></i> Birth:${sortpet.date_of_birth || " Not available"} </p>
                            <p><i class="fa-solid fa-venus-double"></i> Gender:${sortpet.gender || " Not available"} </p>
                            <p><i class="fa-solid fa-dollar-sign"></i> Price:${sortpet.price || " Not available"}</p>
                            <div class="divider"></div>
                            <div class="card-actions flex justify-around">
                                <button class="btn text-btn-1 font-bold bg-white border-2  " id="add" onclick="addtocart('${sortpet.image || "Not available"}')"><i
                                        class="fa-solid fa-heart text-xl text-red-500"></i></button>
                                <button class="btn text-btn-1 font-bold bg-white border-2 hover:bg-btn-1 hover:text-white " onclick="Adoptbuttonhandale()">Adopt</button>
                                <button class="btn text-btn-1 font-bold bg-white border-2 hover:bg-btn-1 hover:text-white " id="s" onclick="Detailbuttonhandle('${sortpet.image}','${sortpet.pet_name}','${sortpet.breed}','${sortpet.date_of_birth}','${sortpet.gender}','${sortpet.price}','${sortpet.petId}')">Details</button>
                            </div>
                        </div>
                    </div>

                </div>

            </div>
        </div>
        
        `
            divcontainer.append(div3)
        })
        loader.style.display = "none"
    }

})





















