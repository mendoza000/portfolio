import {create} from 'zustand'

interface InitialState {
  lang: String;
  changeLang: () => void;
}

export const useConfigStore = create<InitialState>((set, get) => ({
  lang: 'es',
  changeLang: () => {
    const {lang} = get()

    switch(lang) {
      case 'es':
        set((state) => ({...state, lang: 'en'}))
        break;
      case 'en': 
        set((state) => ({...state, lang: 'es'}))
        break
    }
  }
}))