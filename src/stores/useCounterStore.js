import { create } from 'zustand'

const COUNT_STORAGE_KEY = 'counter';

const getCountfromLS =() => {
    try {
        const countfromLS= localStorage.getItem(COUNT_STORAGE_KEY)
        return Number(countfromLS);
    } catch (error) {
        console.log("error fetching count from local storage", error)
    }
}


const useCounterStore = create((set) => ({

  updateBears: (newBears) => set({ bears: newBears }),

  count: getCountfromLS() || 10,
  increment: () => set((state) => {
    localStorage.setItem(COUNT_STORAGE_KEY,state.count+1);
    return {count: state.count +1}
  }
   
),

decrement: () => set((state) => {
    localStorage.setItem(COUNT_STORAGE_KEY,state.count-1);
    return {count: state.count -1}
  }
    // ({count: state.count +1})
),

  reset: () => set( ()=> {
    localStorage.setItem(COUNT_STORAGE_KEY,0);
    return {count: 0}
  }),

}))


export default useCounterStore;
