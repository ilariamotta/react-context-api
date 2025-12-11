import { createContext } from "react";
import { useState } from "react";

const BudgetEconomicContext = createContext();


export default function BudgetProvider({children}) {
    const [budgetMode, setBudgetMode] = useState(false)
    return <BudgetEconomicContext.Provider value={{budgetMode, setBudgetMode}}>
{children}
    </BudgetEconomicContext.Provider>
}

export { BudgetEconomicContext }