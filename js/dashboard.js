document.addEventListener(
"DOMContentLoaded",

async ()=>{

const data = await loadData();

animateProgressBars(data);

});

function animateProgressBars(data){

const fills =
document.querySelectorAll(
".progress-fill"
);

fills.forEach((fill,index)=>{

fill.style.width =
data.dashboard.purchaseFunds[index].progress+"%";

});

}
