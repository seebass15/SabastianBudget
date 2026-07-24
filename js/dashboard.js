document.addEventListener(
"DOMContentLoaded",
async ()=>{
    const data = await loadData();
    animateProgressBars(data);
}
);

function animateProgressBars(data){
const fills = document.querySelectorAll(".progress-fill");
    fills.forEach((fill,index)=>{
        fill.style.width = data.dashboard.purchaseFunds[index].progress+"%";
    });

}


function renderDashboard(data){

    renderFinancialHealth(
        data.dashboard.financialHealth
    );

    renderNeedsWants(
        data.dashboard.needsWants
    );

    renderPurchaseFunds(
        data.dashboard.purchaseFunds
    );

    renderWeeklyBudget(
        data.dashboard.weeklyBudget
    );

    renderNetWorth(data.dashboard.netWorth);

    renderCatBreakdown(data.dashboard.catBreakdown);

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

/*function renderNeedsWants(savings){
const card = document.getElementById('needsWants');
card.innerHTML = ...;
}

function renderpurchaseFunds(funds){
cosnt card = document.getElementById('purchaseFunds');
purchaseFunds.forEach()
card.innerHTML = ...
}

function renderWeeklyBudget(){
cosnt card = document.getElementById('weeklyBudget');
card.innerHTML = ...
}

function renderNetWorth(){
  const card = document.getElementById('netWorth');
  card.innerHTML = 
    <h2> hih</h2>
  ;}
function renderCatBreakdown(){
cosnt card = document.getElementById('catBreakdown');
card.innerHTML = ...
}
function renderInsights(){
cosnt card = document.getElementById('insights');
card.innerHTML = ...
}
*/
