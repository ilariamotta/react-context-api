import { createContext, useContext } from "react";
import { useState } from "react";

const BudgetEconomicContext = createContext();


export default function BudgetProvider({children}) {
    const [budgetMode, setBudgetMode] = useState(false)


    function attivaBudget() {
        setBudgetMode(true)
    }

    function disattivaBudget() {
        setBudgetMode(false)
    }



    const contextValue = {
        budgetMode, attivaBudget, disattivaBudget
    }


    return <BudgetEconomicContext.Provider value={contextValue}>
{children}
    </BudgetEconomicContext.Provider>
}

export function useBudget() {
    return useContext (BudgetEconomicContext)
}

export { BudgetEconomicContext }