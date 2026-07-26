document.addEventListener(
"DOMContentLoaded",
async ()=>{
    const data = await loadData();
    renderDashboard(data);
}
);

/*function animateProgressBars(data){
const fills = document.querySelectorAll(".progress-fill");
    fills.forEach((fill,index)=>{
        fill.style.width = data.dashboard.purchaseFunds[index].progress+"%";
    });

}*/


function renderDashboard(data){

    renderFinancialHealth(
        data.dashboard.financialHealth
    );

    renderStatus(
        data.dashboard.status
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

function renderStatus(savings){
const card = document.getElementById("status");
card.innerHTML = `
<h2>
            50 / 30 / 20
            </h2>
            
            <div class="budget-row">
                <span>
                Needs
                </span>
                
                <span>
                ${savings.needs.percent} ✓
                </span>
                
            </div>
            
            <div class="budget-row">
                
                <span>
                Wants
                </span>
                
                <span>
                ${savings.wants.percent}✓
                </span>
                
            
            </div>

            <div class="budget-row">
            
            <span>
            Savings
            </span>
            
            <span>
            ${savings.savings.percent}✓
            </span>
            
            </div>
            `;
}

function renderPurchaseFunds(funds){
const card = document.getElementById('purchaseFunds');
let myHTML = `<h2>Purchase Funds</h2>`;
    funds.forEach(fund =>{
        myHTML += `            
            <div class="fund">
                ${fund.name}
            
                <div class="progress">
                <div class="progress-fill"></div>
                
                </div>
                
            </div>
        `;});
        card.innerHTML = myHTML;
}

function renderWeeklyBudget(weekly){
const card = document.getElementById('weeklyBudget');
let myHTML = `<h2>Weekly Budget</h2>`;
weekly.forEach(week =>{            
            myHTML +=`
            <div class="budget-row">
                <span>
                ${week.category}
                </span>
                
                <span>
                $ ${week.reamining} left
                </span>
            
            </div>
            `;
})
}

function renderNetWorth(worth){
  const card = document.getElementById('netWorth');
  card.innerHTML = 
    `<h2> hih</h2>`
  ;}

function renderCatBreakdown(breakdown){
const card = document.getElementById('catBreakdown');
let myHTML = `<h2>Expenses by Category</h2>`;
    breakdown.forEach(cat =>{
        myHTML += `<div>${breakdown.cat.category}</div>`;
})
}

function renderInsights(insights){
const card = document.getElementById('insights');
let myHTML = `<h2>insight</h2>`;
    insights.forEach.(insight =>{
        myHTML += `<h1>hi</h1>`;
})
}

