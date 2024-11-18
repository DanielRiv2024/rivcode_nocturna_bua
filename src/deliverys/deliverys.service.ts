import { Injectable } from '@nestjs/common';

@Injectable()
export class DeliverysService {
  private deliverys = [];

  findAll() {
    return this.deliverys;
  }

  create(delivery: any) {
    this.deliverys.push(delivery);
    return delivery;
  }
}
