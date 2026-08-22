//format all numbers
//recieve apps script
const dat = await loadData();

/*data.settings.categories
data.transactions.items
data.settings.percentages*/

function formatCurrency(value) {
    return "$" + value.toLocaleString("en-US", {
        minimumFractionDigits: 2,
        maximumFractionDigits: 2
    });
}

function formatPercent(value) {
    return value.toFixed(1) + "%";
}



//finacial health
//health.score
//health.status
//health.change



//50/30/20

//go through each category via settings which determines if they are a need want etc
//go through the current est. v act. cats and expenses
//calculate the amount
//calculate the percent
function calculateNeedsWants(transactions, targets) {

    let needs = 0;
    let wants = 0;
    let income = 0;

    transactions.forEach(transaction => {

        if (transaction.classification === "Need") {//change this to settings inputs
            needs += transaction.amount;
        }

        if (transaction.classification === "Want") {
            wants += transaction.amount;
        }

        if (transaction.classification === "Income") {
            income += transaction.amount;
        }
    });

    const expenses = needs + wants;
    const savings = income - expenses;

    return {
        needs: {
            percent: (needs / income) * 100,
            status: determineStatus(
                (needs / income) * 100,
                targets.needs
            )
        },

        wants: {
            percent: (wants / income) * 100,
            status: determineStatus(
                (wants / income) * 100,
                targets.wants
            )
        },

        savings: {
            percent: (savings / income) * 100,
            status: determineStatus(
                (savings / income) * 100,
                targets.savings
            )
        }
    };
}

//needs.percent
//wants.percent
//savings.percent



//purchase funds

//get all funds and goals from settings
//calculate progress
//get the monthly contributions via this month???
//calculate prgress vs timeline

//funds.progress
//funds.monthlyContribution
//funds.status



//weekly budget


//wb.budget
//wb.remaining
//wb.caryyFoward
//wb.nextWeekBudget



//netWorth
//nw.current
//nw.history[]



//category breakdown
//cb.amount



//insights
//i.priority
//i.type
//i.title
//i.message
