import { Injectable } from '@nestjs/common';
import { CreateReceiptScannerDto } from './dto/create-receipt-scanner.dto';
import { UpdateReceiptScannerDto } from './dto/update-receipt-scanner.dto';

@Injectable()
export class ReceiptScannerService {
  create(createReceiptScannerDto: CreateReceiptScannerDto) {
    return 'This action adds a new receiptScanner';
  }

  findAll() {
    return `This action returns all receiptScanner`;
  }

  findOne(id: number) {
    return `This action returns a #${id} receiptScanner`;
  }

  update(id: number, updateReceiptScannerDto: UpdateReceiptScannerDto) {
    return `This action updates a #${id} receiptScanner`;
  }

  remove(id: number) {
    return `This action removes a #${id} receiptScanner`;
  }
}
