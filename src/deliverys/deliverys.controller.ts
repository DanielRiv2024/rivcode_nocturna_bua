import { Controller, Get } from '@nestjs/common';

@Controller('deliverys')
export class DeliverysController {
  @Get()
  findAll() {
    return [
      {
        id: 1,
        name: 'Entrega Rápida',
        description: 'Entrega rápida en menos de 24 horas.',
      },
      {
        id: 2,
        name: 'Entrega Estándar',
        description: 'Entrega en un plazo de 3 a 5 días hábiles.',
      },
    ];
  }
}
