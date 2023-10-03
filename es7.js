const dataCall = async () => {
    const res = await fetch('https://openapi.programming-hero.com/api/videos/categories');
    const data = await res.json();
    const categoryFind = data.data;

    // console.log(categoryFind);
    const categorylist = document.getElementById('list-btn');
    categoryFind.forEach((categoryFind) => {
        const div = document.createElement('div');

        div.innerHTML = `
        <a id="helloe" onclick="hendelCetogri('${categoryFind.category_id}')" role="button" class="btn flex-auto m-4 active:bg-red-700 ">${categoryFind.category}</a>
        `;
        categorylist.appendChild(div);


    });
};
const hendelCetogri = async (id) => {
    const categoriesid = await fetch(`https://openapi.programming-hero.com/api/videos/category/${id}`);
    const data = await categoriesid.json();
    const tabData = data.data;
    console.log(tabData);
    // const filterData =tabData.others.views;
    // console.log(filterData);
    if(tabData.length===0){
        const contener = document.getElementById('contend2');
        contener.innerHTML='';
        const div = document.createElement('div');
        div.innerHTML = `<div class="m-auto"><img src="img/Icon.png" alt=""> <p class="text-4xl font-bold text-center mt-10">Oops!! Sorry, There is no <br> content here</p></div>`;
        contener.appendChild(div);
    }
    document.getElementById('sort-view').addEventListener('click',function(){
        const clickView = tabData.sort((a,b)=>parseFloat(b.others.views)-parseFloat(a.others.views))
        cards(clickView)
    })
    cards(tabData)

};
    const cards =(tabData)=>{
        const contener = document.getElementById('contend');
    contener.innerHTML = '';
    const singalDAta = tabData.forEach((tabData) => {
        // time funtion Call

        const result = convertSeconds(parseFloat(tabData.others.posted_date));
        const div = document.createElement('div');
        div.innerHTML = `
        <div class="card bg-base-100 shadow-xl   ">
            <div class="relative">
                <figure><img src="${tabData?.thumbnail}" class="h-64" /></figure>
                <p class="absolute bottom-0 right-0 bg-gray-400 rounded-xl pl-2 pr-2 text-base font-medium mr-2 mb-1">${result > '' ? result : ''}</P>
            </div>
                <div class="card-body ">
                <div class="flex gap-2">
                    <div class="">
                    <img src="${tabData.authors[0].profile_picture}" alt="" class="w-10 rounded-full    ">
                    </div>
                    <div class=" w-64">
                        <h2 class="card-title ">${tabData?.title}</h2>
                        
                        <div class="flex items-center gap-2">
                        <h3 class="">Name:${tabData?.authors[0]?.profile_name} </h3>
                        <P class="">${tabData?.authors[0]?.verified === true ? `<img src="img/tick-mark.png" alt="" class="w-[15px]">` : ''}</p>
                         </div>
                        <p>views:${tabData.others?.views}</p>
                    </div>
                  </div>
                </div>
        </div>
        `;
        contener.appendChild(div);



    });
    }



const shortby = () => {

}




dataCall();
hendelCetogri(1000);