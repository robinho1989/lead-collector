import React, { useState } from "react";
type LeadCollectorContext = {
  theme: boolean;
  handleTheme: () => void;
};
export const LeadCollectorContext = React.createContext<
  LeadCollectorContext | undefined
>(undefined);
export const LeadCollectorProvider = ({
  children,
}: {
  children: React.ReactElement;
}) => {
  const [theme, setTheme] = useState(false);
  const handleTheme = () => {
    setTheme((theme) => !theme);
  };
  return (
    <LeadCollectorContext.Provider value={{ theme, handleTheme }}>
      {children}
    </LeadCollectorContext.Provider>
  );
};
export const useLeadCollectorContext = () => {
  const context = React.useContext(LeadCollectorContext);
  if (context === undefined) {
    throw new Error(
      "LeadCollectrContext must be used within a LeadCollectorContext.Provider"
    );
  }
  return context;
};
