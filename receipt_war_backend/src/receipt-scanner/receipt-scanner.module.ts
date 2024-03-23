import { Module } from '@nestjs/common';
import { ReceiptScannerService } from './receipt-scanner.service';
import { ReceiptScannerController } from './receipt-scanner.controller';

@Module({
  controllers: [ReceiptScannerController],
  providers: [ReceiptScannerService],
})
export class ReceiptScannerModule {}
