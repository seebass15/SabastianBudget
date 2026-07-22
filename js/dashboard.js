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


function renderDashboard(data){

    renderFinancialHealth(
        data.dashboard.financialHealth
    );

    renderBudget(
        data.dashboard.budget
    );

    renderPurchaseFunds(
        data.dashboard.purchaseFunds
    );

    renderWeeklyBudget(
        data.dashboard.weeklyBudget
    );

    renderInsights(
        data.dashboard.insights
    );

}

function renderFinancialHealth(health){

const card =
document.getElementById(
"financialHealth"
);

card.innerHTML = `

<h2>

Financial Health

</h2>

<div class="health-score">

${health.score}

</div>

<div class="health-status">

${health.status}

<span class="trend up">

+${health.change}

</span>

</div>

`;

}

/*function renderBudget(){
  const card = document.getElementById('budget');
  card.innHTML = 
    <h2> hih</h2>
  ;}

function renderpurchaseFunds(){
  purchaseFunds.forEach()
}*/
