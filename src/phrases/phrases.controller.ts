import { Controller, Get } from '@nestjs/common'
import { PhrasesService } from './phrases.service'

@Controller('phrases')
export class PhrasesController {
  constructor(private readonly phrasesService: PhrasesService) {}

  @Get('get-phrase')
  getPhrase() {
    return this.phrasesService.getPhrase()
  }
}
