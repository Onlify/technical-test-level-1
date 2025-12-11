// Return custom future date in YYYY-MM-DD
export const returnFutureDateISO = (nmbOfDays:number) : string =>{
    const futureDate = new Date(Date.now() + nmbOfDays * 24 * 60 * 60 * 1000);
    return futureDate.toISOString().split('T')[0]!;
};

// return Current Date and time in YYYY-MM-DD HH:MM:SS
export const returnCurrentDateAndTime = (): string => {
    const now = new Date();
    const date = now.toISOString().split('T')[0];
    const time = now.toTimeString().split(' ')[0];
    return `${date} ${time}`;
};

// Calculate date difference between two dates
export const calculateDays = (from: Date, to: Date): number => {
    return Math.floor((to.getTime() - from.getTime()) / (1000 * 60 * 60 * 24));
};
