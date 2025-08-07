import { Injectable } from '@nestjs/common'

@Injectable()
export class PhrasesService {
  private readonly frasesMotivadoras = [
    '¡Sigue adelante, lo estás haciendo bien!',
    'Cada día es una nueva oportunidad para mejorar.',
    'No te rindas, los comienzos siempre son difíciles.',
    'El esfuerzo de hoy será tu recompensa mañana.',
    'Cree en ti mismo, eres más capaz de lo que crees.',
    'Los pequeños pasos también cuentan.',
    'Nunca es tarde para comenzar de nuevo.',
    'Tú puedes con esto y con mucho más.',
    'El éxito es la suma de pequeños esfuerzos repetidos cada día.',
    'Hazlo con pasión o no lo hagas.'
  ]

  getPhrase(): string {
    const randomIndex = Math.floor(
      Math.random() * this.frasesMotivadoras.length
    )
    return this.frasesMotivadoras[randomIndex]
  }
}
