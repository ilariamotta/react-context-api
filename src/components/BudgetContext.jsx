import { createContext } from "react";

const BudgetEconomicContext = createContext();


export default function BudgetProvider({children}) {
    const [budgetMode, setBudgetMode] = useState(false)
    return <BudgetEconomicContext.Provider value={{budgetMode, setBudgetMode}}>
{children}
    </BudgetEconomicContext.Provider>
}

