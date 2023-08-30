import ptBR from './ptBR'
import enUS from './enUS'

export const messages = {
  'en-US': enUS,
  'pt-BR': ptBR
}

export const locale = (() => {
  if (navigator.languages != undefined) {
    return navigator.languages[0]
  } 
  return navigator.language
})()